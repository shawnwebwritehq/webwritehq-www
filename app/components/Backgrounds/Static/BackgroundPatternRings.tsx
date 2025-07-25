export default function BackgroundPatternRings() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='rings' width='100' height='100' patternUnits='userSpaceOnUse'>
          <circle cx='50' cy='50' r='20' fill='none' stroke='white' strokeWidth='0.2' />
          <circle cx='50' cy='50' r='40' fill='none' stroke='white' strokeWidth='0.2' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#rings)' />
    </svg>
  );
}
