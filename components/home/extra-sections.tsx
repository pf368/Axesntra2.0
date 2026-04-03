import Link from 'next/link';

export function ProactiveMonitoring() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-xs font-bold tracking-[0.2em] text-sky-600">CONTINUOUS MONITORING</p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Your AI watches your book 24/7</h2>
        <p className="text-slate-600 mt-2 mb-6">Axesntra monitors every carrier in your portfolio and alerts you the moment something changes — before it becomes a claim.</p>
        <div className="space-y-4">
          {[
            ['⚠','bg-red-100 text-red-700','ACME Transport — Risk score jumped to 72','Vehicle maintenance percentile increased from 78th to 89th after 2 new OOS events this month. Crash indicator also worsening. Recommend immediate review before renewal.','USDOT 491180 · Detected 2 hours ago · Commercial Auto book',['Review brief','Dismiss']],
            ['📋','bg-amber-100 text-amber-700','Midwest Logistics — New inspection with violations','Roadside inspection in Indiana recorded 3 vehicle violations: brake adjustment, tire tread, lighting. No OOS issued, but the pattern matches pre-OOS deterioration in their history.','USDOT 847291 · Detected yesterday · Freight Brokerage book',['Review brief','Dismiss']],
            ['✓','bg-emerald-100 text-emerald-700','Northeast Express — Risk score improved to 28','All BASIC categories now below intervention thresholds. 90-day clean inspection record. Trend is stable-to-improving. No action needed at this time.','USDOT 715394 · Updated 3 days ago · Fleet Operations',['View brief']],
          ].map(([icon, iconStyle, title, body, meta, buttons]) => (
            <div key={String(title)} className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconStyle}`}>{String(icon)}</div>
              <div className="flex-1"><p className="font-semibold text-slate-900">{String(title)}</p><p className="text-sm text-slate-600">{String(body)}</p><p className="text-xs text-slate-500 mt-1">{String(meta)}</p></div>
              <div className="flex gap-2">{(buttons as string[]).map((b, i) => <button key={b} className={`text-sm px-3 py-2 rounded-lg border ${i === 0 && b !== 'View brief' ? 'bg-sky-600 text-white border-sky-600' : 'border-slate-300 text-slate-700'}`}>{b}</button>)}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-600 mt-5">Your full watchlist lives inside the platform. <Link href="/early-access" className="text-sky-600">Join the pilot →</Link></p>
      </div>
    </section>
  );
}

export function PersonaCards() {
  const cards = [
    ['underwriters', '📋', 'For Underwriters', 'Screen new submissions in minutes, not hours. Get AI-written risk summaries ready for your committee — with every BASIC scored, trended, and explained in plain English.', ['Multi-factor risk scoring across 5 BASIC categories', 'AI-generated underwriting memos', '12-month trend to catch deteriorating carriers early'], '/early-access?role=underwriter', 'See the underwriting workflow →', 'bg-blue-50'],
    ['freight-brokers', '🚛', 'For Freight Brokers', "Vet carriers before they touch your customer's freight. Build a consistent, repeatable screening process with audit-ready documentation on every decision.", ['Pre-onboarding carrier vetting in seconds', 'Re-screening alerts when a carrier deteriorates', 'Exportable brief for your carrier file'], '/early-access?role=broker', 'See the broker workflow →', 'bg-emerald-50'],
    ['safety-compliance', '🛡', 'For Safety & Compliance', "Monitor your fleet's FMCSA profile continuously. Know when a trend is turning negative before it becomes a roadside intervention, an OOS event, or an enforcement action.", ['Daily monitoring of your active carrier roster', 'Proactive alerts when any BASIC crosses threshold', 'AI-generated compliance programs tied to your specific violations'], '/early-access?role=safety', 'See the safety workflow →', 'bg-amber-50'],
  ];

  return (
    <section id="personas" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-600">BUILT FOR YOUR WORKFLOW</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">One platform, tailored to your role</h2>
          <p className="text-slate-600 mt-2">Every team manages carrier risk differently. Axesntra adapts to how you actually work.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(([id, icon, title, body, bullets, href, cta, bg]) => (
            <Link key={String(id)} id={String(id)} href={String(href)} className="cursor-pointer rounded-[14px] border border-slate-200 p-7 transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg">
              <div className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center`}>{String(icon)}</div>
              <h3 className="text-xl font-semibold text-slate-900 mt-4">{String(title)}</h3>
              <p className="text-sm text-slate-600 mt-3">{String(body)}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">{(bullets as string[]).map((b) => <li key={b}>✓ {b}</li>)}</ul>
              <p className="mt-4 text-sm text-sky-600">{String(cta)}</p>
            </Link>
          ))}
        </div>
        <div id="fleet-operators" className="h-1" />
      </div>
    </section>
  );
}

export function CaseStudy() {
  return (
    <section className="py-20 text-white" style={{ background: '#0B1120' }}>
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-xs font-bold tracking-[0.2em] text-indigo-300">CASE STUDY</p>
        <h2 className="text-3xl font-bold mt-2 mb-6">How a regional insurer transformed carrier review</h2>
        <div className="rounded-2xl border border-white/10 p-10" style={{ background: '#27272A' }}>
          <blockquote className="text-2xl font-medium leading-relaxed">“We replaced a 45-minute manual spreadsheet process with a 3-minute Axesntra brief. Our underwriting team reviews carriers in half the time and with significantly more confidence.”</blockquote>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div><p className="text-3xl font-bold text-sky-300">60%</p><p className="text-slate-300 text-sm">Faster carrier review</p></div>
            <div><p className="text-3xl font-bold text-indigo-300">3</p><p className="text-slate-300 text-sm">At-risk carriers caught in first month</p></div>
            <div><p className="text-3xl font-bold text-emerald-300">98%</p><p className="text-slate-300 text-sm">Pilot team retention after 6 months</p></div>
          </div>
          <div className="mt-8 flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center">VP</div><div><p className="font-semibold">VP of Underwriting</p><p className="text-xs text-slate-400">Commercial Auto Insurance · Southeast US · 200–500 employees · Pilot user, 6 months</p></div></div>
        </div>
        <p className="text-center mt-6"><Link href="/early-access" className="text-white underline">Join 40+ teams already in the pilot →</Link></p>
      </div>
    </section>
  );
}

export function MidFunnelOffers() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Not ready for a pilot? Explore first.</h2>
        <p className="text-slate-600 mb-8">Explore carrier risk intelligence at your own pace.</p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <Link href="/resources" className="rounded-xl border border-slate-200 bg-white p-5">Guides & explainers</Link>
          <Link href="/questions/what-is-a-csa-score" className="rounded-xl border border-slate-200 bg-white p-5">Quick answers</Link>
          <Link href="/playbooks/carrier-vetting-checklist-for-brokers" className="rounded-xl border border-slate-200 bg-white p-5">Operational playbooks</Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">See your own carriers analyzed live</h2>
        <p className="text-slate-600 mb-8">Bring your USDOT numbers to a 15-minute call. We&apos;ll generate real briefs during the session — no pitch deck, no slides, no commitment.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/early-access" className="bg-slate-900 text-white rounded-lg px-5 py-3 font-medium">Book a 15-min walkthrough →</Link>
          <Link href="/#search" className="border border-slate-300 text-slate-700 rounded-lg px-5 py-3 font-medium">Try free — 3 lookups/month</Link>
        </div>
        <p className="text-xs text-slate-500 mt-4">No credit card required. We review all access requests personally.</p>
      </div>
    </section>
  );
}
