export default function Experience() {
  const experiences = [
    {
      role: 'Teaching Assistant — Digital Image Processing',
      org: 'Kalimantan Institute of Technology',
      period: 'Feb 2025 – Jul 2024',
      points: [
        'Designed interactive modules on transformation, histogram analysis, and segmentation.',
        'Guided students through real-world case studies bridging theory and applied innovation.',
      ],
    },
    {
      role: 'Teaching Assistant — Data Mining',
      org: 'Kalimantan Institute of Technology',
      period: 'Jul 2024 – Dec 2024',
      points: [
        'Taught classification, regression, clustering, and association rules.',
        'Supervised predictive modeling with Python to turn data into insights.',
      ],
    },
    {
      role: 'IT Intern — Information Technology Department',
      org: 'PT Indominco Mandiri',
      period: 'Jul 2023 – Sep 2023',
      points: [
        "Built 'Remember Me' — a web-based reminder system with automated email alerts.",
        "Developed 'P2H' — a vehicle inspection platform improving operational monitoring.",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{exp.org}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
