export default function BackgroundAnimatedGrid() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='animatedGrid' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M 40 0 L 0 0 0 40' fill='none' stroke='white' strokeWidth='0.3'>
            <animateTransform attributeName='transform' type='translate' from='0 0' to='20 20' dur='15s' repeatCount='indefinite' />
          </path>
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#animatedGrid)' />
    </svg>
  );
}
