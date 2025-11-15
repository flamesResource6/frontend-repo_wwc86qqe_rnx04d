import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
            AI-Powered & WhatsApp-Integrated Business Success Platform
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Transform Your School or Business with AI-Powered Automation
          </h1>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Manage operations, communication, HR, CRM, finance, and more — all inside WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">
              Get a Demo
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50">
              Explore Products
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-slate-200/70 bg-white/70">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
