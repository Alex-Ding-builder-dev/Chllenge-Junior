import type { JSX } from "react";

type Props = {
    register: any;
    errors: any;
    name: string;
    text: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    rest?: any;
    rhfRef?: any;
};

export default function FormField({ register ,errors,name, text, handleChange, handleKeyDown, rest, rhfRef}:Props): JSX.Element {
  return (
    <>
        {(name === 'cardholderName' || name === 'cardNumber') && (
        <div className="flex flex-col">
        <label htmlFor={name}
        className="text5 mb-2"
        >{text}</label>
        <div className={`p-px bg-gray-200 rounded-[9px] has-focus:bg-linear-[to_bottom,#6348FE,#610595] ${errors[name] ? 'bg-red-500' : ''}`}>
            <input type="text" name={name} id={name} {...register(name)} placeholder={name === 'cardholderName' ? "e.g. Jane Appleseed" : "e.g. 1234 5678 9123 0000"}
            maxLength={name === 'cardNumber' ? 19 : 30} {...(name === 'cardNumber' ? {onChange: handleChange} : {})} {...(name === 'cardNumber' ? {onKeyDown: handleKeyDown} : {})}
            {...(name === 'cardNumber' ? rest : {})}
            {...(name === 'cardNumber' ? {ref: rhfRef} : {})}
            className=" rounded-[8px] py-[11px] px-[16px] text3 text-purple-950/50 outline-none bg-white w-full" />
        </div>
        {errors[name] && <p className="text-red-400 text6 mt-2">{errors[name].message}</p>}
        </div>
        )}
        {name === 'expiryDate' && (
        <div className="flex flex-col">
        <label htmlFor={name}
        className="text5 mb-2"
        >{text}</label>
        <div className="flex gap-2">
            <div className={`p-px bg-gray-200 rounded-[9px] has-focus:bg-linear-[to_bottom,#6348FE,#610595] ${errors['expiryMonth'] ? 'bg-red-500' : ''}`}>
                <input type="text" name='expiryMonth' id='expiryMonth' {...register('expiryMonth')} placeholder="MM" maxLength='2'
                className=" text-purple-950 rounded-[8px] py-[11px] px-[16px] text3 text-purple-950/50 w-[80px] outline-none bg-white" />
            </div>
            <div className={`p-px bg-gray-200 rounded-[9px] has-focus:bg-linear-[to_bottom,#6348FE,#610595] ${errors['expiryYear'] ? 'bg-red-500' : ''}`}>
                <input type="text" name='expiryYear' id='expiryYear' {...register('expiryYear')} placeholder="YY" maxLength='2'
                className=" text-purple-950 rounded-[8px] py-[11px] px-[16px] text3 text-purple-950/50 w-[80px] outline-none bg-white" />
            </div>
        </div>
        <div className="flex">
            {errors['expiryMonth'] && <p className="text-red-400 text6 mt-2 w-[88px]">{errors['expiryMonth'].message}</p>}
            {errors['expiryYear'] && <p className="text-red-400 text6 mt-2 w-[88px]">{errors['expiryYear'].message}</p>}
        </div>
        </div>
        )}
        {name === 'cvc' && (
        <div className="flex flex-col">
        <label htmlFor={name}
        className="text5 mb-2"
        >{text}</label>
        <div className={`p-px bg-gray-200 rounded-[9px] has-focus:bg-linear-[to_bottom,#6348FE,#610595] ${errors[name] ? 'bg-red-500' : ''}`}>
            <input type="text" name={name} id={name} {...register(name)} placeholder="e.g. 123" maxLength='3'
            className=" text-purple-950 rounded-[8px] py-[11px] px-[16px] text3 text-purple-950/50 w-[191px] outline-none bg-white" />
        </div>
        {errors[name] && <p className="text-red-400 text6 mt-2 w-[191px]">{errors[name].message}</p>}
        </div>
        )}
    </>
  );
}
