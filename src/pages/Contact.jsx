import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-slate-600">We’d love to learn about your needs. Book a demo or message us on WhatsApp.</p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">Thank you! We’ll reach out shortly.</div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-700">Name</label>
                  <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-700">Phone</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Message</label>
                <textarea rows="5" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">Request Demo</button>
                <a href="https://wa.me/919999999999" target="_blank" className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50">WhatsApp Us</a>
              </div>
            </form>
          )}

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold">Email</h2>
              <p className="text-slate-600">hello@ihmconnect.com</p>
              <h2 className="mt-4 font-semibold">Phone</h2>
              <p className="text-slate-600">+91 99999 99999</p>
              <h2 className="mt-4 font-semibold">Office</h2>
              <p className="text-slate-600">Bengaluru, India</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold">Follow Us</h2>
              <div className="mt-2 flex flex-wrap gap-3 text-slate-700">
                <a href="#" className="underline">LinkedIn</a>
                <a href="#" className="underline">Twitter</a>
                <a href="#" className="underline">YouTube</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
