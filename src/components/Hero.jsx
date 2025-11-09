import Spline from '@splinetool/react-spline';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] w-full">
        {/* 3D Scene */}
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Soft gradient for readability (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="backdrop-blur-[2px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                Modern Data & AI Portfolio
              </h1>
              <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-2xl">
                Transforming Data into Meaningful Impact
              </p>
              <p className="mt-5 max-w-3xl text-gray-600">
                I’m <span className="font-semibold text-gray-900">Ahmad Maulana Rismadin</span> — Data Analyst & Machine Learning Enthusiast. I turn raw data into real stories with purpose and precision.
              </p>

              {/* Quick facts + CTA */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="https://linkedin.com/in/ahmad-maulana-rismadin/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/50"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
                <a
                  href="mailto:amrismadin@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                >
                  <Mail className="h-4 w-4" /> amrismadin@gmail.com
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" /> Mura Badak, Kutai Kartanegara, East Kalimantan
                </span>
              </div>

              {/* Keywords */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Data Analytics', 'Machine Learning', 'Python', 'SQL', 'Storytelling', 'Insight Design', 'Automation'].map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
