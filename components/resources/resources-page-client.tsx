'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Role = 'All' | 'Underwriters' | 'Freight Brokers' | 'Safety & Compliance' | 'Fleet Operators';
type Category = 'Guides' | 'Questions' | 'Playbooks' | 'Product';

const ROLE_FILTERS: Role[] = ['All', 'Underwriters', 'Freight Brokers', 'Safety & Compliance', 'Fleet Operators'];
const CATEGORY_FILTERS: Category[] = ['Guides', 'Questions', 'Playbooks', 'Product'];

const ITEMS = [
  { href: '/resources/how-to-evaluate-whether-a-carrier-is-safe', title: 'How to Evaluate Whether a Carrier Is Safe', excerpt: 'A structured approach to reviewing inspection rates, crash activity, OOS history, and trend direction together.', role: 'All' as Role, category: 'Guides' as Category },
  { href: '/resources/crash-history-vs-inspection-history', title: 'Crash History vs Inspection History', excerpt: 'Understand what each signal tells you — and why combining them gives a more reliable picture.', role: 'Underwriters' as Role, category: 'Guides' as Category },
  { href: '/resources/what-does-out-of-service-mean-in-trucking', title: 'What Does Out-of-Service Mean in Trucking?', excerpt: 'Learn what triggers an OOS event, why it matters, and how to weight it in a carrier review.', role: 'Safety & Compliance' as Role, category: 'Guides' as Category },
  { href: '/resources/how-to-read-a-carrier-risk-report', title: 'How to Read a Carrier Risk Report', excerpt: 'A section-by-section breakdown of what risk reports contain and how to interpret each signal.', role: 'Underwriters' as Role, category: 'Guides' as Category },
  { href: '/resources/why-one-time-carrier-screening-is-not-enough', title: 'Why One-Time Carrier Screening Is Not Enough', excerpt: 'Carrier risk profiles change over time. Here is why ongoing monitoring is part of a complete program.', role: 'Fleet Operators' as Role, category: 'Guides' as Category },
  { href: '/questions/what-is-a-csa-score', title: 'What Is a CSA Score?', excerpt: 'The FMCSA metric that reflects a carrier\'s safety performance across seven behavior categories.', role: 'All' as Role, category: 'Questions' as Category },
  { href: '/questions/what-is-a-bad-csa-score', title: 'What Is a Bad CSA Score?', excerpt: 'How to interpret elevated scores and what thresholds tend to draw regulatory attention.', role: 'Underwriters' as Role, category: 'Questions' as Category },
  { href: '/questions/how-do-you-check-if-a-carrier-is-safe', title: 'How Do You Check If a Carrier Is Safe?', excerpt: 'The data sources and review steps that give you a defensible answer to that question.', role: 'Freight Brokers' as Role, category: 'Questions' as Category },
  { href: '/playbooks/carrier-vetting-checklist-for-brokers', title: 'Carrier Vetting Checklist for Brokers', excerpt: 'A step-by-step carrier review process designed for freight broker workflows.', role: 'Freight Brokers' as Role, category: 'Playbooks' as Category },
  { href: '/playbooks/what-to-do-after-an-out-of-service-event', title: 'What to Do After an Out-of-Service Event', excerpt: 'A response guide for teams managing relationships with carriers that have recent OOS activity.', role: 'Safety & Compliance' as Role, category: 'Playbooks' as Category },
  { href: '/playbooks/how-to-build-a-carrier-watchlist-process', title: 'How to Build a Carrier Watchlist Process', excerpt: 'How to structure a carrier monitoring workflow that flags risk changes before they become incidents.', role: 'Fleet Operators' as Role, category: 'Playbooks' as Category },
  { href: '/commercial/carrier-risk-monitoring-software', title: 'Carrier Risk Monitoring Software', excerpt: 'Continuous monitoring that surfaces changes in carrier risk profiles automatically.', role: 'Fleet Operators' as Role, category: 'Product' as Category },
];

export function ResourcesPageClient() {
  const [role, setRole] = useState<Role>('All');
  const [category, setCategory] = useState<Category>('Guides');

  const filtered = useMemo(
    () => ITEMS.filter((item) => item.category === category && (role === 'All' || item.role === role || item.role === 'All')),
    [role, category]
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-5">Knowledge Center</p>
          <h1 className="text-5xl font-bold text-white mb-6">Resources for Carrier Risk Teams</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Guides, quick-answers, and operational playbooks built around real carrier screening workflows.</p>

          <div className="mb-4">
            <p className="text-xs text-slate-300 mb-2">By role:</p>
            <div className="flex flex-wrap gap-2">
              {ROLE_FILTERS.map((r) => <button key={r} onClick={() => setRole(r)} className={`px-3 py-1.5 rounded-full text-sm border ${role === r ? 'bg-white text-slate-900 border-white' : 'bg-white/10 text-white border-white/20'}`}>{r}</button>)}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((c) => <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 rounded-full text-sm border ${category === c ? 'bg-sky-500 text-white border-sky-400' : 'bg-white/10 text-white border-white/20'}`}>{c}</button>)}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all">
              <p className="text-[10px] uppercase tracking-widest text-sky-600 font-bold mb-2">{item.category} · {item.role}</p>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
