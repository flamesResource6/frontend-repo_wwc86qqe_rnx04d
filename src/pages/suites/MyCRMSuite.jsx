import Navbar from '../../components/Navbar';

export default function MyCRMSuite() {
  const features = ['Lead Capture','Auto Follow-ups','WhatsApp Journeys','Deal Pipelines','Reports'];
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Smart CRM to Automate Your Sales</h1>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map(m => (
              <div key={m} className="px-4 py-3 rounded-xl border border-slate-200 bg-white">{m}</div>
            ))}
          </div>
          <a href="/contact" className="inline-flex mt-8 items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">Explore CRM</a>
        </section>
      </main>
    </div>
  );
}
