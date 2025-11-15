import Navbar from '../components/Navbar';

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">All-in-One AI Business Success Platform</h1>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h2 className="text-xl font-semibold">Education Solutions</h2>
              <p className="mt-2 text-slate-600">Campus Connect — All-in-one school ERP + WhatsApp automation + AI Dashboard 360.</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {['Fees','Attendance','Timetable','HR','Reports','WhatsApp Bot','LMS','AI Insights'].map(x => (
                  <li key={x} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h2 className="text-xl font-semibold">Business Solutions</h2>
              <ul className="mt-2 space-y-2 text-slate-700">
                {[
                  'MY CRM Suite – Leads, follow-ups, pipelines, automation',
                  'MY HR Suite – Payroll, attendance, leave, onboarding',
                  'ORBIT – WhatsApp API, campaigns, templates, chatflows',
                  'LAALE.AI – AI for education & business workflows',
                  'Finance Module – Tally integration, auto-reconciliation',
                  'Real Estate CRM & ERP',
                  'Manufacturing ERP',
                ].map(x => (
                  <li key={x} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white lg:col-span-2">
              <h2 className="text-xl font-semibold">Quick-Start Tools</h2>
              <ul className="mt-2 grid sm:grid-cols-3 gap-2 text-slate-700">
                {['WhatsApp Widget','Instant Automations','Industry-specific templates'].map(x => (
                  <li key={x} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
