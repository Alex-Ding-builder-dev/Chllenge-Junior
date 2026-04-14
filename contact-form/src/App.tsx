import type { JSX } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "./FormField";
import iconSuccess from './assets/images/icon-success-check.svg'

export default function App(): JSX.Element {
  const schema = z.object({
    firstName: z.string().min(1,'This field is required'),
    lastName: z.string().min(1,'This field is required'),
    email: z.string().email('Please enter a valid email address'),
    queryType: z.enum(['general', 'support'],'Please select a query type'),
    message: z.string().min(15,'This field is required'),
    checkbox: z.boolean().refine((value) => value === true, {
      message: 'To submit this form, please consent to being contacted',
    }),
  })
  type FormValues = z.infer<typeof schema>
  const { register, handleSubmit, formState: { errors,isSubmitSuccessful } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <main className="bg-white p-6 rounded-2xl w-full max-w-[736px]
    md:p-10">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1
        className="th text-gray-900 mb-8"
        >Contact Us</h1>
        <div className="md:flex md:gap-4 md:justify-between">
          <FormField register={register} errors={errors} name="firstName" type="normal" text="First Name" />
          <FormField register={register} errors={errors} name="lastName" type="normal" text="Last Name" />
        </div>
        <FormField register={register} errors={errors} name="email" type="normal" text="Email" />
        <FormField register={register} errors={errors} name="queryType" type="radio" text="Query Type" />
        <FormField register={register} errors={errors} name="message" type="textarea" text="Message" />
        <FormField register={register} errors={errors} name="checkbox" type="checkbox" text="I consent to being contacted by the team" />
        <button type="submit"
        className="py-4 rounded-[8px] bg-green-600 w-full text-white tbmb transition
        hover:bg-linear-to-r hover:from-[rgba(0,0,0,0.5)] hover:to-[rgba(0,0,0,0.5)] hover:bg-blend-multiply"
        >Submit</button>
      </form>
      {isSubmitSuccessful && 
      <div className="bg-gray-900 rounded-[12px] p-6 absolute top-6 left-1/2 -translate-x-1/2 w-[327px] text-white
      md:w-[450px]">
        <div className="flex mb-2 gap-2">
          <img src={iconSuccess} alt="Success icon" />
          <h2 className="tbmb">Message Sent!</h2>
        </div>
        <p className="tbsm">Thanks for completing the form. We’ll be in touch soon!</p>
      </div>}
    </main>
  )
}
