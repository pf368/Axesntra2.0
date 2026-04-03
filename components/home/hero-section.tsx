import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroChat } from './hero-chat';

export function HeroSection() {
  return (
    <section className="bg-slate-950 py-20 text-white" style={{ background: '#0B1120' }}>
      <div className="container mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            Currently in private pilot · 40+ teams enrolled
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Your AI safety analyst.<br />Ask anything about any carrier.</h1>
          <p className="text-slate-300 text-lg mb-7 max-w-2xl">
            Axesntra reads every FMCSA record, scores every violation, and answers your questions in plain English — so your team can make faster, better-documented decisions.
          </p>

          <div className="grid grid-cols-3 divide-x divide-white/10 bg-slate-800/60 rounded-xl mb-7 max-w-xl">
            {[
              { value: '98%', label: 'Pilot retention rate' },
              { value: '12k+', label: 'Carrier briefs generated' },
              { value: 'Daily', label: 'Updated via FMCSA SMS' },
            ].map((stat) => (
              <div key={stat.value} className="px-4 py-4 text-center">
                <p className="text-white font-bold text-xl">{stat.value}</p>
                <p className="text-slate-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/early-access" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Get access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#live-demo" className="inline-flex items-center gap-2 border border-slate-400/60 hover:border-slate-300 text-slate-200 font-semibold px-6 py-3 rounded-xl transition-colors">
              See a live demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <HeroChat />
      </div>
    </section>
  );
}
