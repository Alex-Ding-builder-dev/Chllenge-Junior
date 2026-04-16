import cardBack from './assets/images/bg-card-back.png'
import cardFront from './assets/images/bg-card-front.png'
import cardLogo from './assets/images/card-logo.svg'
import Form, { type FormValues} from './Form';
import { useState,useCallback } from 'react';


export default function App() {
  const [formData, setFormData] = useState<Partial<FormValues>>({
    cvc: '',
    cardNumber: '',
    cardholderName: '',
    expiryMonth: '',
    expiryYear: ''
  });
  const handleFormChange = useCallback((newData: Partial<FormValues>): void => {
    setFormData((prev)=>({...prev,...newData}))
  },[])
  return (
    <>
      <header className='bg-[url(./assets/images/bg-main-mobile.png)] relative bg-no-repeat bg-cover h-[clamp(240px,25.45vw+144.58px,340px)]
      lg:h-full lg:bg-[url(./assets/images/bg-main-desktop.png)]'>
        <div className=''>
          <div className='w-[clamp(285px,0.4122*100vw+130.42px,447px)] absolute left-1/2 translate-x-[calc(-50%+clamp(28px,0.0509*100vw+8.92px,48px))] top-[32px]
          lg:right-[222px] lg:translate-0 lg:top-[466px]'>
          <img src={cardBack} alt="" aria-hidden="true" className='' />
          <p
          className='absolute z-10 right-[clamp(43.51px,0.0394*100vw+28.73px,59px)] top-[clamp(71px,_10.4326vw_+_31.8779px,_112px)] text7-4 text-white'>
            <span className='sr-only'>CVC:</span>
            {formData.cvc || '000'}
            </p>
          </div>
          <div className='w-[clamp(285px,0.4122*100vw+130.42px,447px)] absolute left-1/2 translate-x-[calc(-50%-clamp(28px,0.0509*100vw+8.92px,48px))] -bottom-[clamp(42.21px,_11.3969vw_-_0.5285px,_87px)]
          lg:translate-0 lg:left-[164px] lg:top-[189px] lg:bottom-auto'>
            <img src={cardFront} alt="" aria-hidden="true" className='' />
            <img src={cardLogo} alt="" aria-hidden="true" className='card-logo-x top-[clamp(18.1px,2.5191vw+8.6534px,28px)] w-[clamp(54.77px,7.4606vw+26.7929px,84.09px)]' />
            <p className='card-logo-x textCardNumber bottom-[clamp(45.1px,6.3359vw+21.3405px,70px)] tabular-nums'>
              <span className='sr-only'>Card Number:</span>
              {formData.cardNumber || '0000 0000 0000 0000'}
            </p>
            <p className='card-logo-x text7-4 bottom-[clamp(18.1px,2.5191vw+8.6534px,28px)]'>
              {formData.cardholderName || 'JANY APPLESEED'}
              <span className='sr-only'>Cardholder Name:</span>
            </p>
            <p className='absolute z-10 text7-4 bottom-[clamp(18.1px,2.5191vw+8.6534px,28px)] right-[clamp(19.95px,3.0483vw+8.5187px,31.93px)] tabular-nums'>
              {formData.expiryMonth || '00'}/{formData.expiryYear || '00'}
              <span className='sr-only'>Expiration Date:</span>
            </p>
          </div>
        </div>
      </header>
      <main className='flex justify-center'>
        <Form onFormChange={handleFormChange}/>
      </main>
    </>
  );
}