export default function BackgroundPatternHex() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
  id="hex"
  width="30"
  height="26"
  patternUnits="userSpaceOnUse"
>
          <path
            d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}
// This component renders a subtle hexagonal background pattern using SVG.
// It creates a hexagonal grid that enhances the visual design of the page without being intrusive.