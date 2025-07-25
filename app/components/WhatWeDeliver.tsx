import { TerminalSquare, Cloud, ShieldCheck } from "lucide-react";

export default function WhatWeDeliver() {
  const services = [
    {
      icon: <Cloud size={36} />,
      title: "Cloud Migrations",
      desc: "Move to the cloud without the chaos. We streamline your Azure transition with zero guesswork.",
    },
    {
      icon: <TerminalSquare size={36} />,
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, scripting, and infrastructure-as-code — handled end-to-end by experts.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Security & Identity",
      desc: "Entra ID, role-based access, and zero trust policies tailored for legal and enterprise teams.",
    },
  ];

  return (
    <section id="what" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">What We Deliver</h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3 text-left">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
