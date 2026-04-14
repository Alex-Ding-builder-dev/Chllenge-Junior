import type { JSX } from "react";

type FormFieldType = {
    type: 'normal' | 'radio' | 'textarea' | 'checkbox'
    register: any
    name: string
    text: string
    errors: any
}

export default function FormField({ type, register, name , text, errors }: FormFieldType): JSX.Element {
  return (
    <>
      {type === 'normal' && 
        <div className="flex flex-col gap-2 mb-6 w-full">
          <label 
          className="tbsm text-gray-900"
          htmlFor={name}>{text}<span className="text-green-600"> *</span></label>
          <input type={name === 'email' ? 'email' : "text"} 
          {...register(name,{
            required: true
          })}
          id={name}
          className={`border rounded-[8px] border-gray-500 py-3 px-6 hover:border-green-600 outline-none focus:border-green-600 ${errors[name] && 'border-red-500'}`}
           />
           {errors[name]&&<p className="text-red-500 tbsm">{errors[name].message}</p>}
        </div>
      }
      {type === 'radio' && 
        <fieldset className="flex flex-col gap-4 mb-6">
            <legend className="mb-4 tbsm text-gray-900">{text}<span className="text-green-600"> *</span></legend>
            <div className="md:flex md:flex-row md:gap-4 md:justify-between flex flex-col gap-4">
                <label htmlFor="general" className="py-3 px-6 border border-gray-500 rounded-[8px] flex items-center gap-3 w-full hover:border-green-600 cursor-pointer outline-none has-checked:border-green-600 has-checked:bg-green-200 transition">
                    <input type="radio" name={name} value="general" id="general"
                    {...register(name, { required: true })}
                    className="appearance-none w-[19.5px] h-[19.5px] border-[1.25px] rounded-full border-gray-500
                    checked:border-none checked:bg-[url(./assets/images/icon-radio-selected.svg)]" />
                    <p
                    className="tbmr text-gray-900"
                    >General Enquiry</p>
                </label>
                <label htmlFor="support" className="py-3 px-6 border border-gray-500 rounded-[8px] flex items-center gap-3 w-full hover:border-green-600 cursor-pointer outline-none has-checked:border-green-600 has-checked:bg-green-200 transition">
                    <input type="radio" name={name} value="support" id="support"
                    {...register(name, { required: true })}
                    className="appearance-none w-[19.5px] h-[19.5px] border-[1.25px] rounded-full border-gray-500
                    checked:border-none checked:bg-[url(./assets/images/icon-radio-selected.svg)]" />
                    <p
                    className="tbmr text-gray-900"
                    >Support Request</p>
                </label>
            </div>
            {errors[name]&&<p className="text-red-500 tbsm">{errors[name].message}</p>}
        </fieldset>
      }
      {type === 'textarea' &&
        <div className="flex flex-col gap-2">
            <label 
            className="tbsm text-gray-900"
            htmlFor={name}>{text}<span className="text-green-600"> *</span></label>
            <textarea 
            {...register(name,{
              required: true
            })}
            id={name}
            className={`border rounded-[8px] border-gray-500 py-3 px-6 min-h-[240px] md:min-h-[123px] hover:border-green-600 outline-none focus:border-green-600 ${errors[name] ? 'border-red-500' : ''}`}
            />
            {errors[name]&&<p className="text-red-500 tbsm">{errors[name].message}</p>}
        </div>
      }
      {type === 'checkbox' &&
        <div className=" mb-6 my-10">
            <div className="flex items-center gap-3">
                <input
                className="cursor-pointer appearance-none w-[18px] h-[18px] rounded-[4px] border-[1.5px] border-gray-500
                checked:border-none checked:bg-[url(./assets/images/icon-checkbox-check.svg)]"
                 id={name}
                 type="checkbox" {...register(name, { required: true })} />
                <label
                className="tbsm text-gray-900 cursor-pointer" 
                htmlFor={name}>{text}<span className="text-green-600"> *</span></label>
            </div>
            {errors[name]&&<p className="text-red-500 tbsm">{errors[name].message}</p>}
        </div>
      }
    </>
  );
}