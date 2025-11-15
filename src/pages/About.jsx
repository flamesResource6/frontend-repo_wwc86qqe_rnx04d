import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-slate-600 text-lg">IHM Connect is a business-success platform built to simplify operations, automate workflows, and enhance productivity using AI + WhatsApp.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-slate-600">To empower schools and businesses with seamless technology that feels human, simple, and effective.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-2 text-slate-600">To be India’s most trusted AI-powered operating system for organizations of all sizes.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-white">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-2 text-slate-600">Founded by Adithya Bejgum, started with solving problems for schools, then expanded to businesses, retail, fitness, and real estate. Built on the belief: Technology should feel human.</p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-white">
            <h2 className="text-2xl font-semibold">Core Values</h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-slate-700">
              {['Simplicity','Speed','Innovation','Trust','Customer Obsession'].map(v => (
                <li key={v} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">{v}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
