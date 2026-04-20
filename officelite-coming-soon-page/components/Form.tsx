import {z} from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email('Please enter a valid email address'),
    name: z.string().min(1, 'This field is required'),
    pack: z.enum(['free', 'basic', 'ultimate']),
    phoneNumber: z.string().min(8, 'This field is required'),
    company: z.string().min(1, 'This field is required'),
});
type formValues = z.infer<typeof schema>;

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<formValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<formValues> = (data) => {
        console.log(data);
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)} className='py-10 px-5 rounded-[12px] bg-neutral-0 w-[327px] rounded-[12px] form-t-1 shadow-card z-10
        md:p-10 md:w-[445px]
        lg:h-[489px]'>
            <div className='grid gap-6 mb-10'>
                <div className={`has-focus:outline-2 has-focus:outline-offset-3 has-focus:outline-blue-500 ${errors.name ? 'has-focus:outline-red-500' : ''}`}>
                    <input type="text" aria-label="Name" placeholder="Name" {...register('name')} className='px-4 w-full mb-4 outline-none' />
                    <div className='h-px bg-neutral-500/50'></div>
                </div>
                <div className={`has-focus:outline-2 has-focus:outline-offset-3 has-focus:outline-blue-500 ${errors.email ? 'has-focus:outline-red-500' : ''}`}>
                    <input type="email" aria-label="Email" placeholder="Email Address" {...register('email')} className='px-4 w-full mb-4 outline-none' />
                    <div className='h-px bg-neutral-500/50'></div>
                </div>
                <div className={`text-preset-5 text-neutral-800 has-focus:outline-2 has-focus:outline-offset-3 has-focus:outline-blue-500 ${errors.pack ? 'has-focus:outline-red-500' : ''}`}>
                    <div className='px-4 flex gap-[10px] mb-4'>
                        <label htmlFor="basicPack">Basic Pack</label>
                        <select id="basicPack" defaultValue="free" {...register('pack')} className=' text-neutral-800/40 flex-1 appearance-none
                        bg-[url(../public/assets/sign-up/icon-arrow-down.svg)] bg-no-repeat bg-right outline-none'>
                            <option value="free">Free</option>
                            <option value="basic">Basic</option>
                            <option value="ultimate">Ultimate</option>
                        </select>
                    </div>
                    <div className='h-px bg-neutral-500/50'></div>
                </div>
                <div className={`has-focus:outline-2 has-focus:outline-offset-3 has-focus:outline-blue-500 ${errors.phoneNumber ? 'has-focus:outline-red-500' : ''}`}>
                    <input type="number" aria-label="phone number" placeholder="Phone Number" {...register('phoneNumber')} className='px-4 w-full mb-4 outline-none' />
                    <div className='h-px bg-neutral-500/50'></div>
                </div>
                <div className={`has-focus:outline-2 has-focus:outline-offset-3 has-focus:outline-blue-500 ${errors.company ? 'has-focus:outline-red-500' : ''}`}>
                    <input type="text" aria-label="company" placeholder="Company" {...register('company')} className='px-4 w-full mb-4 outline-none' />
                    <div className='h-px bg-neutral-500/50'></div>
                </div>
            </div>
            <div>
                <button type="submit" className='py-3 rounded-full bg-blue-500 text-white w-full text-preset-5 cursor-pointer
                hover:bg-blue-300 transition focus:outline-2 focus:outline-offset-3 focus:outline-blue-500'>Get on the list</button>
            </div>
        </form>
    )
}