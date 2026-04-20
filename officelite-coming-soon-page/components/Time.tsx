type TimeProps = {
  time: string;
  label: 'days' | 'hours' | 'min' | 'sec';
  type: 'home' | 'signup';
}

export default function Time({ time, label, type }: TimeProps) {
  return (
    <div className={`flex flex-col items-center ${type === 'signup' ? 'bg-blue-100' : 'bg-neutral-800'} rounded-[12px] py-4 px-3 w-[73.75px]
    md:w-[100px] md:py-4 md:px-3`}>
      <p className={`text-preset-1 ${type === 'signup' ? 'text-blue-500' : 'text-neutral-0'}`}>{time}</p>
      <p className={`text-preset-5 ${type === 'signup' ? 'text-neutral-800/50' : 'text-neutral-0/50'}`}>{label}</p>
    </div>
  );
}