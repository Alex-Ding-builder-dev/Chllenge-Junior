import Logo from "../components/Logo";
import ComingTime from "../components/ComingTime";
import Form from "../components/Form";
import side from '../public/assets/sign-up/bg-pattern-side.svg'

export default function SignUp() {
  return (
    <div className="lg:flex lg:w-full lg:h-full min-h-[1024px]">
      <header className="px-4 bg-neutral-50
      md:px-10
      lg:pl-[105.5px] lg:pr-[125px] ">
        <div className="flex flex-col items-center pb-20
        lg:items-start lg:justify-center lg:h-full lg:p-0 lg:relative">
        <Logo type="signup" />
          <div className="text-center md:w-[540px]
          lg:text-left lg:my-[17.5px]">
            <h1 className="text-preset-1 text-[40px] text-neutral-800 mb-6
            lg:text-[56px]">Work smarter. Save time.</h1>
            <p className="text-preset-3 text-neutral-500 mb-10">Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
            <ComingTime type="signup" />
          </div>
        </div>
      </header>
      <main className="flex justify-center bg-neutral-50
      lg:items-center">
        <Form />
      </main>
      <footer className="bg-neutral-900 pt-[316px] -mt-[234px] relative
      md:pt-[473px] md:-mt-[354px] overflow-hidden
      lg:pl-[420px] lg:-ml-[314.5px] lg:w-full ">
        <img src={side} alt="" aria-hidden='true' className="w-[1454px] absolute -bottom-[573px] left-1/2 -translate-x-1/2 z-1 max-w-none
        md:-bottom-[546px] lg:w-[2036px] lg:-right-[853px] lg:-bottom-[231px]" />

      </footer>
    </div>
  );
}