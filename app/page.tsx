import Navbar from "./components/Navbar";
import BackgroundAnimatedGridHexCycle from "./components/Backgrounds/Animated/BackgroundAnimatedGridHexCycle";
import WhatWeDeliver from "./components/WhatWeDeliver";
import PlatformVision from "./components/PlatformVision";
import TargetMSPs from "./components/TargetMSPs";
import ROISection from "./components/ROISection";
import CallToAction from "./components/CallToAction";


export default function Home() {
  return (
    <>
      {/* Nav Bar sits above everything */}
      <Navbar />

      {/* Hero section */}
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center overflow-hidden">
  {/* Animated grid + hex background */}
  <BackgroundAnimatedGridHexCycle />

  {/* Background portrait image */}
  <div className="absolute inset-0 flex justify-end items-center pr-12 pointer-events-none select-none">
  <div className="relative w-[400px] h-[500px] md:block hidden">
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900 to-slate-900 rounded-full blur-xl z-10"></div>
    <img
      src="/images/devops-avatar.png"
      alt="DevOps Abstract Portrait"
      className="w-full h-full object-cover mix-blend-screen saturate-150 contrast-125 opacity-60 blur-sm"
    />
  </div>
</div>


  {/* Hero content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
    <div className="max-w-3xl text-center md:text-left">
      <h1 className="text-5xl font-bold leading-tight md:text-7xl">
        Unified. Scalable. DevOps.
      </h1>
      <p className="mt-6 text-lg text-slate-300 max-w-xl">
        Simplify DevOps adoption by unifying your tools, processes, and cloud into one expertly managed solution.
      </p>
      <button className="mt-10 bg-white text-slate-900 font-medium px-8 py-3 rounded-full hover:bg-slate-200 transition">
        Let’s Talk
      </button>
    </div>
  </div>
</main>

      <WhatWeDeliver />
      <PlatformVision />
      <TargetMSPs />
      <ROISection />
      <CallToAction />
    </>
  );
}
