import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/suites/campus-connect', label: 'Campus Connect' },
  { to: '/suites/my-hr-suite', label: 'MY HR Suite' },
  { to: '/suites/my-crm-suite', label: 'MY CRM Suite' },
  { to: '/suites/orbit', label: 'ORBIT' },
  { to: '/suites/laale-ai', label: 'LAALE.AI' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-slate-900">IHM Connect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-slate-900 transition-colors ${isActive ? 'text-slate-900 font-medium' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm px-3 py-2 rounded-lg border ${
                    isActive ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-200 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
