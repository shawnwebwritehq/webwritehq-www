export default function BackgroundAnimatedHex() {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="pulseHex" width="40" height="35" patternUnits="userSpaceOnUse">
          <path
            d="M20 0 L40 10 L40 25 L20 35 L0 25 L0 10 Z"
            fill="none"
            stroke="#ffffff"
            stroke-width="0.3"
          >
            <animate
              attributeName="stroke"
              values="
                #ffffff;
                #60a5fa;  /* blue */
                #22c55e;  /* neon green */
                #9333ea;  /* purple */
                #ef4444;  /* neon red */
                #06b6d4;  /* cyan */
                #e879f9;  /* magenta */
                #facc15;  /* soft yellow */
                #ffffff"
              dur="12s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="0.3;1;0.3"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pulseHex)" />
    </svg>
  `;

  return (
    <div
      className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
