import Time from "./Time";
import { useState, useEffect } from "react";

export default function ComingTime({type = 'home'}: {type?: 'home' | 'signup'}) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2026-07-21T00:00:00").getTime();
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTime({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return (
    <div className={`grid place-items-center relative z-1 ${type === 'signup' ? 'mb-0 lg:place-items-start' : 'mb-12 '}`}>
      <h2 className={`mb-5 text-preset-6 ${type === 'signup' ? 'text-neutral-800' : 'text-neutral-0'}`}>Coming <span className="text-blue-500">4 Jul 2026</span></h2>
        <div className="flex gap-4">
          <Time time={time.days.toString().padStart(2, '0')} label="days" type={type} />
          <Time time={time.hours.toString().padStart(2, '0')} label="hours" type={type} />
          <Time time={time.minutes.toString().padStart(2, '0')} label="min" type={type} />
          <Time time={time.seconds.toString().padStart(2, '0')} label="sec" type={type} />
        </div>
    </div>
  );
}