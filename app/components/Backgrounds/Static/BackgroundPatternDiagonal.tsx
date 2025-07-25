export default function BackgroundPatternDiagonal() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='diagonal' width='20' height='20' patternUnits='userSpaceOnUse'>
          <path d='M-5,5 l10,-10 M0,20 l20,-20 M15,25 l10,-10' stroke='white' strokeWidth='0.3' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#diagonal)' />
    </svg>
  );
}
