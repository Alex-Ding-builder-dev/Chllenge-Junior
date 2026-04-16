import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver} from '@hookform/resolvers/zod'
import FormField from './FormField';
import complete from './assets/images/icon-complete.svg'
import { useEffect } from 'react';

const schema = z.object({
    cardholderName: z.string().min(1, "Can't be blank"),
    cardNumber: z.string().transform(val => val.replace(/\s/g, '')).pipe(z.string().min(1,"Can't be blank").length(16, 'Card number must be 16 digits').regex(/^\d{16}$/, 'Wrong format, numbers only')),
    expiryMonth: z.string().min(1, "Can't be blank").length(2, 'Expiry month must be 2 digits').regex(/^\d{2}$/, 'Wrong format, numbers only'),
    expiryYear: z.string().min(1, "Can't be blank").length(2, 'Expiry year must be 2 digits').regex(/^\d{2}$/, 'Wrong format, numbers only'),
    cvc: z.string().min(1, "Can't be blank").length(3, 'CVC must be 3 digits').regex(/^\d+$/, 'Wrong format, numbers only'),
})

export type FormValues = z.infer<typeof schema>;

type FormProps = {
  onFormChange(data: Partial<FormValues>):void
}

export default function Form({onFormChange}:FormProps) {
  const { register, handleSubmit, watch , formState: { errors , isSubmitSuccessful } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvc: ''
    }
  });

  const { onChange: rhfOnChange, ref: rhfRef, ...rest } = register("cardNumber");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length > 16) {
        value = value.slice(0,16)
    }
    const formatted = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formatted;
    rhfOnChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const cursorPosition:any = input.selectionStart;
    if (e.key === 'Backspace' && cursorPosition === input.selectionEnd) {
      if (input.value[cursorPosition - 1] === ' ') {
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      }
    }
  };

 
  useEffect(()=>{
    const subscription = watch((value=>onFormChange(value)))
    return () => subscription.unsubscribe()
  }),[watch,onFormChange]

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className={`pt-[clamp(91px,_13.7405vw_+_39.4733px,_145px)] px-[clamp(24px,_42.7481vw_-_136.3053px,_192px)] pb-[clamp(44px,_6.6158vw_+_19.1908px,_70px)]
        max-w-[768px] lg:py-[278px] lg:pl-[349px] lg:pr-[225px] lg:max-w-[960px] ${isSubmitSuccessful ? 'hidden' : ''}`}>
        <div className='flex flex-col gap-6 mb-[clamp(24px,_4.0712vw_+_8.7328px,_40px)]'>
            <FormField register={register} errors={errors} name="cardholderName" text="CARDHOLDER NAME" />
            <FormField register={register} errors={errors} name="cardNumber" text="CARD NUMBER" handleChange={handleChange} handleKeyDown={handleKeyDown} rest={rest} rhfRef={rhfRef} />
            <div className="flex gap-6">
                <FormField register={register} errors={errors} name="expiryDate" text="EXP. DATE (MM/YY)" />
                <FormField register={register} errors={errors} name="cvc" text="CVC" />
            </div>
        </div>
        <button type="submit"
        className='rounded-[8px] bg-purple-950 text-white w-full text3 py-[15px] cursor-pointer hover:opacity-70 transition-opacity'
        >Confirm</button>
        </form>
        {isSubmitSuccessful &&
            <section className='px-[clamp(24px,_43.257vw_-_138.2137px,_194px)] pt-[clamp(91px,_21.374vw_+_10.8473px,_175px)] pb-[clamp(85px,_3.0534vw_+_73.5496px,_97px)] w-full
            grid justify-items-center max-w-[768px]
            lg:py-[306px] lg:pr-[227px] lg:pl-[349px] lg:max-w-[960px]'>
                <img src={complete} alt="already complete" className='mb-[32px]' /> 
                <h1 className='text1 text-purple-950 mb-[16px]'>THANK YOU!</h1>
                <p className='text3 text-gray-400 mb-[48px]'>We’ve added your card details</p>
                <button onClick={() => window.location.reload()}
                type='button' className='text3 text-white bg-purple-950 rounded-[8px] w-full py-[15px] cursor-pointer hover:opacity-70 transition-opacity h-[53px]'>Continue</button>
            </section>
        }
    </>
  );
}