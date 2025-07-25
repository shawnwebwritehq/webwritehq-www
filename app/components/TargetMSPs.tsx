export default function TargetMSPs() {
  return (
    <section className="bg-white py-24 border-t border-slate-200" id="msps">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Built for Modern MSPs
          </h2>
          <p className="text-slate-700 mb-4">
            Manage dozens of DevOps environments from a single pane of glass. Help your techs work smarter, not harder —
            and upsell DevOps services with confidence.
          </p>
          <ul className="text-slate-600 space-y-2 list-disc list-inside">
            <li>Client-level dashboards & cost insights</li>
            <li>Auto-healing pipelines & alerting</li>
            <li>Template-driven onboarding & automation</li>
          </ul>
        </div>
        <div className="bg-slate-200 h-64 rounded-xl flex items-center justify-center text-slate-500 italic">
          {/* Placeholder for a future dashboard screenshot or animation */}
          MSP Console Preview (Coming Soon)
        </div>
      </div>
    </section>
  );
}
