export default function BackgroundPatternCloudNodes() {
  return (
    <svg className='absolute inset-0 w-full h-full opacity-5 pointer-events-none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='10%' cy='20%' r='2' fill='white' />
      <circle cx='30%' cy='25%' r='2' fill='white' />
      <circle cx='60%' cy='40%' r='2' fill='white' />
      <circle cx='80%' cy='15%' r='2' fill='white' />
      <line x1='10%' y1='20%' x2='30%' y2='25%' stroke='white' strokeWidth='0.2' />
      <line x1='30%' y1='25%' x2='60%' y2='40%' stroke='white' strokeWidth='0.2' />
      <line x1='60%' y1='40%' x2='80%' y2='15%' stroke='white' strokeWidth='0.2' />
    </svg>
  );
}
