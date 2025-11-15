import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { SocialProof, SuitesGrid, UniqueGrid } from '../components/Sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <SuitesGrid />
      <UniqueGrid />
      <SocialProof />
      <footer className="border-t border-slate-200 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} IHM Connect</p>
          <div className="text-sm text-slate-600">Made with care for speed, trust, and clarity.</div>
        </div>
      </footer>
    </div>
  );
}
