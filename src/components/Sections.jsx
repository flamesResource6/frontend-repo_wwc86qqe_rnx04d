import { CheckCircle2 } from 'lucide-react';

export function SuitesGrid() {
  const suites = [
    { title: 'Campus Connect', desc: 'School ERP + WhatsApp Bot', to: '/suites/campus-connect', color: 'from-blue-500 to-cyan-400' },
    { title: 'MY CRM Suite', desc: 'Leads, follow-ups, pipelines', to: '/suites/my-crm-suite', color: 'from-emerald-500 to-teal-400' },
    { title: 'MY HR Suite', desc: 'HR, Payroll, Geo-Attendance', to: '/suites/my-hr-suite', color: 'from-violet-500 to-fuchsia-500' },
    { title: 'ORBIT', desc: 'WhatsApp Business API', to: '/suites/orbit', color: 'from-orange-500 to-amber-400' },
    { title: 'LAALE.AI', desc: 'AI Education & Operations Engine', to: '/suites/laale-ai', color: 'from-yellow-500 to-lime-400' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Explore Our Key Suites</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suites.map((s) => (
            <a key={s.title} href={s.to} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.color}`} />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">Learn more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UniqueGrid() {
  const points = [
    'AI-powered suggestions',
    'Smart WhatsApp workflows',
    'Unified dashboard',
    'Plug-and-play modules',
    'Human-centric design',
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">What Makes IHM Connect Unique</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <CheckCircle2 className="text-blue-600" size={20} />
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const cats = ['Schools', 'Businesses', 'Startups', 'Retail', 'Fitness centers', 'Real estate'];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Trusted Across Industries</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {cats.map((c) => (
            <div key={c} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm text-slate-700">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
