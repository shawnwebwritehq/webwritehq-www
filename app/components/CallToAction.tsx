"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to Streamline DevOps?</h2>
        <p className="mt-4 text-lg">
          Join our early access program or schedule a consultation — we’ll show
          you what scalable DevOps can really look like.
        </p>
        <Link
          href="mailto:info@webwritehq.com"
          className="mt-8 inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
