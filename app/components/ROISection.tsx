export default function ROISection() {
  return (
    <section className="bg-slate-900 text-white py-24" id="roi">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">DevOps ROI, Realized</h2>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
          Our pilot MSPs reported up to 40% Azure DevOps cost reduction and a 200% ROI within 3 months. 
          Faster builds, smarter automation, and happier clients — all in one platform.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left text-sm">
          <div>
            <h3 className="text-xl font-semibold text-white">Cost Optimization</h3>
            <p className="mt-2 text-slate-400">Auto-scale agents, cut pipeline waste, and reclaim billable hours.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Onboarding Acceleration</h3>
            <p className="mt-2 text-slate-400">One-click project creation reduces setup time by 80%.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Productivity Gains</h3>
            <p className="mt-2 text-slate-400">Lead and cycle time trends highlight inefficiencies instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
