export default function Skills() {
  const technical = [
    'Python (Pandas, Numpy, Matplotlib, Seaborn)',
    'SQL',
    'Data Cleaning & Transformation (ELT)',
    'Exploratory Data Analysis (EDA)',
    'Power BI & Tableau',
    'Microsoft Excel & Google Sheets',
    'API Development',
    'Data Storytelling',
  ];
  const soft = [
    'Communication & Collaboration',
    'Analytical Thinking',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Business Insight',
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Skills</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600">Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {technical.map((s) => (
                <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600">Soft</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {soft.map((s) => (
                <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
