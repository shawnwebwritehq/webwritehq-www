export default function BackgroundPatternCircuit() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='circuit' width='40' height='40' patternUnits='userSpaceOnUse'>
          <rect width='40' height='40' fill='none' stroke='white' strokeWidth='0.2' />
          <circle cx='20' cy='20' r='2' fill='white' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#circuit)' />
    </svg>
  );
}
