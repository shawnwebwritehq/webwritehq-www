export default function BackgroundAnimatedGridHexCycle() {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- HEX Pattern -->
        <pattern id="pulseHex" width="40" height="35" patternUnits="userSpaceOnUse">
          <path
            d="M20 0 L40 10 L40 25 L20 35 L0 25 L0 10 Z"
            fill="none"
            stroke="#ffffff"
            stroke-width="0.3"
          >
            <animate attributeName="stroke" values="#ffffff;#60a5fa;#22c55e;#9333ea;#ef4444;#06b6d4;#e879f9;#facc15;#ffffff" dur="12s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="0.3;1;0.3" dur="12s" repeatCount="indefinite"/>
          </path>
        </pattern>

        <!-- GRID Pattern -->
        <pattern id="pulseGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#ffffff"
            stroke-width="0.3"
          >
            <animate attributeName="stroke" values="#ffffff;#facc15;#22c55e;#3b82f6;#ef4444;#ffffff" dur="12s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="0.3;1;0.3" dur="12s" repeatCount="indefinite"/>
          </path>
        </pattern>
      </defs>

      <!-- HEX Grid Layer -->
      <rect width="100%" height="100%" fill="url(#pulseHex)">
        <animate attributeName="opacity" values="1;1;0;0;1" dur="24s" repeatCount="indefinite" />
      </rect>

      <!-- SQUARE Grid Layer -->
      <rect width="100%" height="100%" fill="url(#pulseGrid)">
        <animate attributeName="opacity" values="0;0;1;1;0" dur="24s" repeatCount="indefinite" />
      </rect>
    </svg>
  `;

  return (
    <div
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
