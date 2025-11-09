export default function EducationCerts() {
  const education = {
    institution: 'Kalimantan Institute of Technology',
    degree: 'Bachelor of Informatics Engineering',
    period: 'Sep 2020 – Jun 2024',
    gpa: '3.57 / 4.00',
    thesis: 'Market Basket Analysis for Jaya Plastik Store using Apriori and FP-Growth Algorithms',
    focus: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'IoT and Computer Networks'],
  };

  const certifications = [
    {
      title: 'Associate Data Scientist (BNSP)',
      year: '2024',
      summary: 'Certified in data analysis, programming, and applied statistical modeling.',
    },
    {
      title: 'Bangkit Academy by Google, Tokopedia, Gojek & Traveloka',
      year: '2024',
      summary: 'Graduated from Indonesia’s flagship Data Analytics and Machine Learning program focusing on business insights and applied AI.',
    },
    {
      title: 'Health Policy Data Analytics',
      year: '2023',
      summary: 'Trained to analyze healthcare data for evidence-based decision-making.',
    },
    {
      title: 'Independent Study — Bisa.ai',
      year: '2022',
      summary: 'Hands-on learning in Data Analytics, Machine Learning, Full Stack Development, and IoT.',
    },
  ];

  return (
    <section className="relative w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Education & Certifications</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900">{education.institution}</h3>
            <p className="mt-1 text-sm text-gray-700">{education.degree}</p>
            <p className="mt-1 text-xs text-gray-500">{education.period}</p>
            <p className="mt-3 text-sm text-gray-700"><span className="font-semibold">GPA:</span> {education.gpa}</p>
            <p className="mt-3 text-sm text-gray-700"><span className="font-semibold">Thesis:</span> {education.thesis}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.focus.map((f) => (
                <span key={f} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">{f}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid gap-4">
            {certifications.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-gray-900">{c.title}</h4>
                  <span className="text-xs text-gray-500">{c.year}</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
