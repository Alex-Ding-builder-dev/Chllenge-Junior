import iconArrow from '../public/images/icon-arrow.svg'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from 'react'
import { differenceInDays, differenceInMonths, differenceInYears , subYears, subMonths} from 'date-fns'

const schema = z.object({
  day: z.string().min(1, 'This field is required').max(2, 'Must be a valid day').regex(/^\d+$/, 'Must be a valid day').transform(val => parseInt(val)).pipe(z.number().min(1).max(31)),
  month: z.string().min(1, 'This field is required').max(2, 'Must be a valid month').regex(/^\d+$/, 'Must be a valid month').transform(val => parseInt(val)).pipe(z.number().min(1).max(12)),
  year: z.string().min(1, 'This field is required').max(4, 'Must be in the past').regex(/^\d+$/, 'Must be a valid year').transform(val => parseInt(val)).pipe(z.number().min(1900).max(new Date().getFullYear())),
})

type Age = {
  years: number | string
  months: number | string
  days: number | string
  isCalculated: boolean
}

export default function App() {
  const {register,handleSubmit,formState:{errors}} = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema) as any
  })
  const [age, setAge] = useState<Age>({
    years: '--',
    months: '--',
    days: '--',
    isCalculated: false,
  })
  
  let formErrors = errors.day && errors.month && errors.year ? true : false
  const onSubmit = (data: z.infer<typeof schema>) => {
    let now = new Date();
    let birthDate = new Date(data.year, data.month - 1, data.day);
    let years = differenceInYears(now, birthDate);
    let afterYears = subYears(now, years);
    let months = differenceInMonths(afterYears, birthDate);
    let afterMonths = subMonths(afterYears, months);
    let days = differenceInDays(afterMonths, birthDate);
    setAge({
      years: years,
      months: months,
      days: days,
      isCalculated: true,
    })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length > 2) {
      event.target.value = value.slice(0, 2)
    }
  }
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length > 4) {
      event.target.value = value.slice(0, 4)
    }
  }
  return (
    <main className='bg-white rounded-3xl rounded-br-[clamp(100px,_25.4453vw_+_4.5802px,_200px)]
    py-[clamp(48px,_2.0356vw_+_40.3664px,_56px)] px-[clamp(24px,_8.1425vw_-_6.5344px,_56px)]
    w-[clamp(343px,_87.2774vw_+_15.7099px,_686px)]
    md:w-[clamp(686px,_22.9167vw_+_510px,_840px)]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-[clamp(16px,_4.0712vw_+_0.7328px,_32px)] justify-between mb-8
        md:mb-[clamp(0px,_-4.7619vw_+_68.5714px,_32px)]
        lg:justify-start'>
          <div className='flex flex-col gap-2 w-[clamp(87.67px,_20.9491vw_+_9.1108px,_170px)]'>
            <label htmlFor="day" className={`text-gray-500 t6-5b ${errors.day ? 'text-red-400' : ''}`}>Day</label>
            <input type="text" id="day" className={`border border-gray-200 rounded-[8px] py-2 px-[clamp(16px,_2.0356vw_+_8.3664px,_24px)]
            text-black t4-3 hover:cursor-pointer caret-purple-500 ${errors.day ? 'border-red-500' : ''}`}
            placeholder='DD'
            {...register('day')} onChange={handleChange}
            />
            {!formErrors && errors.day && <p className="text-red-400 t6-5i">{errors.day.message}</p>}
            {formErrors && <p className="text-red-400 t6-5i">Must be a valid date</p>}
          </div>
          <div className='flex flex-col gap-2 w-[clamp(87.67px,_20.9491vw_+_9.1108px,_170px)]'>
            <label htmlFor="month" className={`text-gray-500 t6-5b ${errors.month ? 'text-red-400' : ''}`}>Month</label>
            <input type="text" id="month" className={`border border-gray-200 rounded-[8px] py-2 px-[clamp(16px,_2.0356vw_+_8.3664px,_24px)]
            text-black t4-3 hover:cursor-pointer caret-purple-500 ${errors.month ? 'border-red-500' : ''}`}
            placeholder='MM'
            {...register('month')}
            onChange={handleChange}
            />
            {!formErrors && errors.month && <p className="text-red-400 t6-5i">{errors.month.message}</p>}
          </div>
          <div className='flex flex-col gap-2 w-[clamp(87.67px,_20.9491vw_+_9.1108px,_170px)]'>
            <label htmlFor="year" className={`text-gray-500 t6-5b ${errors.year ? 'text-red-400' : ''}`}>Year</label>
            <input type="text" id="year" className={`border border-gray-200 rounded-[8px] py-2 px-[clamp(16px,_2.0356vw_+_8.3664px,_24px)]
            text-black t4-3 hover:cursor-pointer caret-purple-500 ${errors.year ? 'border-red-400' : ''}`}
            placeholder='YYYY'
            {...register('year')}
            onChange={handleChange2}
            />
            {!formErrors && errors.year && <p className="text-red-400 t6-5i">{errors.year.message}</p>}
          </div>
        </div>
        <button type="submit" className='relative grid place-items-center w-full
        lg:place-items-end'>
          <hr className='w-[clamp(295px,_70.9924vw_+_28.7786px,_574px)] absolute top-1/2 -translate-y-1/2
          text-grey-200
          md:w-[clamp(574px,_22.9167vw_+_398px,_728px)]' />
          <div className='bg-purple-500 rounded-full grid place-items-center hover:cursor-pointer hover:bg-black transition
          w-[clamp(64px,_8.1425vw_+_33.4656px,_96px)] h-[clamp(64px,_8.1425vw_+_33.4656px,_96px)] z-1'>
            <img src={iconArrow} alt="Arrow" className='w-[clamp(24px,_5.0891vw_+_4.916px,_44px)] h-[clamp(24px,_5.0891vw_+_4.916px,_44px)]' />
          </div>
        </button>
      </form>
      <div className='flex flex-col mt-8 t2-1
      md:mt-[clamp(0px,_-4.7619vw_+_68.5714px,_32px)]'>
        <div className='flex gap-2'><span className='text-purple-500'>{age.isCalculated ? age.years : '--'}</span><span>years</span></div>
        <div className='flex gap-2'><span className='text-purple-500'>{age.isCalculated ? age.months : '--'}</span><span>months</span></div>
        <div className='flex gap-2'><span className='text-purple-500'>{age.isCalculated ? age.days : '--'}</span><span>days</span></div>
      </div>
    </main>
  )
}