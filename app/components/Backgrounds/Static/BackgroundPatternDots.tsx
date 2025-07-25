export default function BackgroundPatternDots() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='dots' x='0' y='0' width='12' height='12' patternUnits='userSpaceOnUse'>
          <circle cx='1.5' cy='1.5' r='1' fill='white' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#dots)' />
    </svg>
  );
}
