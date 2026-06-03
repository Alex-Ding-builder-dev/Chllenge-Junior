export default function MapMain() {
  return (
    <main className="map-main-box bg-grey-900 text-white">
      <div className="center flex flex-col gap-12
      md:flex-row md:justify-between">
        <h1 className="text-h1 uppercase text-white
        md:w-[clamp(13.9375rem,_calc(18.8988vw_+_4.8661rem),_21.875rem)]">Our location</h1>
        <div className="text-p space-y-5 md:w-[clamp(24.6875rem,_calc(21.5774vw_+_14.3304rem),_33.75rem)]">
            <h2 className="text-h2 uppercase text-gold-500
            md:mb-[clamp(1.25rem,_calc(0.5952vw_+_0.9643rem),_1.5rem)]">99 King Street</h2>
            <p className="md:mb-[clamp(1.25rem,_calc(1.7857vw_+_0.3929rem),_2rem)]">
                <span className="block">Newport</span>
                <span className="block">RI 02840</span>
                <span className="block">United States of America</span>
            </p>
            <p>
                <span>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</span>
            </p>
        </div>
      </div>
    </main>
  );
}