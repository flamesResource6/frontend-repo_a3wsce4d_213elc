import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationCerts from './components/EducationCerts';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="font-semibold">Ahmad Maulana Rismadin</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#education" className="hover:text-gray-900">Education</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><EducationCerts /></div>

        {/* CTA */}
        <section className="relative w-full bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s collaborate to bring your data to life — one insight at a time.</h2>
            <p className="mt-3 text-gray-300">Prefer to connect via LinkedIn? I’d love to hear about your challenge and explore how we can build something meaningful together.</p>
            <div className="mt-6">
              <a
                href="https://linkedin.com/in/ahmad-maulana-rismadin/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold shadow hover:bg-gray-100"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 md:px-8 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Ahmad Maulana Rismadin. Built with a modern, human-centered lens.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
