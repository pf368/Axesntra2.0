'use client';

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'Overview' | 'History' | 'Trend' | 'Actions';

const CHIPS = [
  {
    q: 'What caused the OOS events?',
    a: 'The 3 Q1 2026 OOS events were all vehicle-related: brake adjustment failure (396.3(a)(1)), lighting defect (396.3(a)(2)), and tire tread depth (393.75(a)). All three point to the same root cause — insufficient pre-trip inspection discipline.',
  },
  {
    q: 'Compare to similar-sized carriers',
    a: "Among interstate carriers with 35–50 power units, ACME's maintenance score (89th) is in the top 15% most risky. The median carrier in this size band is at the 52nd percentile. Their crash indicator (71st) is also above the 63rd-percentile median.",
  },
  {
    q: 'Draft a conditional approval memo',
    a: "Here's a conditional approval memo template based on this carrier's profile: [ACME Transport LLC — Conditional Approval · Commercial Auto · Effective [Date]] This carrier is approved conditionally, subject to: (1) submission of maintenance action plan within 30 days, (2) quarterly risk review, (3) automatic re-evaluation if any additional OOS event occurs within 90 days.",
  },
  {
    q: 'What improves their score most?',
    a: 'The single highest-impact improvement is vehicle maintenance. Reducing their OOS rate from 34.1% to below the 21% national benchmark would drop their maintenance BASIC from the 89th to approximately the 55th percentile — moving overall risk from Elevated to Moderate within 6–9 months.',
  },
];

export function InteractiveReportPreview() {
  const [tab, setTab] = useState<TabKey>('Overview');
  const [chat, setChat] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const ask = (question: string, response?: string) => {
    setSelected(question);
    setChat([{ role: 'user', text: question }]);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setChat((prev) => [...prev, { role: 'ai', text: response || 'Great question. For the full AI analysis on this and any other carrier, get early access.' }]);
    }, 600);
  };

  return (
    <section id="live-demo" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-600">LIVE DEMO</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Explore a real carrier risk brief</h2>
          <p className="text-slate-600 mt-2">This is what your team sees. Data on the left, AI advisor on the right. The analysis is real — from actual public FMCSA data.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-zinc-100">
          <div className="bg-white border-b border-slate-200 p-3 flex flex-wrap gap-3 items-center">
            <input readOnly value="ACME Transport LLC" className="rounded-lg border border-slate-200 px-3 py-2 text-sm flex-1 min-w-52" aria-label="Carrier search mock" />
            <div className="flex gap-2 text-sm">
              {(['Overview', 'History', 'Trend', 'Actions'] as TabKey[]).map((t) => (
                <button key={t} onClick={() => setTab(t)} aria-label={`Show ${t} tab`} className={`px-3 py-1.5 rounded-md border ${tab === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-600'}`}>{t}</button>
              ))}
            </div>
            <div className="hidden md:flex gap-2 text-sm ml-auto"><button className="px-3 py-1.5 rounded-md border border-slate-300">Export PDF</button><button className="px-3 py-1.5 rounded-md border border-slate-300">Add to watchlist</button></div>
          </div>

          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-5 bg-zinc-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-900">ACME Transport LLC</h3>
                  <p className="text-sm text-slate-500">USDOT 491180 · MC 123456 · Interstate · Authorized</p>
                </div>
                <div className="flex gap-2"><span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">Elevated Risk</span><span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">↗ Worsening</span></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                {['Risk Score: 72', 'Flagged BASICs: 2', '12-mo Trend: ↗', 'Fix Actions: 3'].map((s) => <div key={s} className="bg-white rounded-lg border border-slate-200 p-3 font-medium">{s}</div>)}
              </div>

              <div className="space-y-2 mb-4">
                {[
                  ['Vehicle Maint.', 89, 'bg-red-500'],
                  ['Crash Indicator', 71, 'bg-amber-500'],
                  ['Unsafe Driving', 62, 'bg-amber-500'],
                  ['HOS Compliance', 38, 'bg-emerald-500'],
                  ['Driver Fitness', 15, 'bg-emerald-500'],
                ].map(([name, val, color]) => (
                  <div key={String(name)} className="text-sm">
                    <div className="flex justify-between"><span>{String(name)}</span><span>{String(val)}th</span></div>
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden"><div className={`${color} h-full`} style={{ width: `${val}%` }} /></div>
                  </div>
                ))}
              </div>

              {tab === 'History' && <ul className="text-sm space-y-2"><li>Mar 15, 2026 · Ohio · 3 violations · No OOS</li><li>Jan 22, 2026 · Indiana · 2 violations · 1 OOS</li><li>Dec 10, 2025 · Illinois · 1 violation · No OOS</li><li>Oct 4, 2025 · Kentucky · 4 violations · 1 OOS</li><li>Aug 18, 2025 · Ohio · 2 violations · No OOS</li></ul>}
              {tab === 'Actions' && <div className="space-y-2">{['Require maintenance action plan in 30 days', 'Set quarterly review cadence', 'Trigger auto re-eval for new OOS in 90 days'].map((a, i) => <div key={a} className="bg-white border border-slate-200 rounded-lg p-3"><span className="mr-2 font-semibold">{i + 1}.</span>{a}</div>)}</div>}
              {(tab === 'Overview' || tab === 'Trend') && (
                <div>
                  {tab === 'Trend' && <p className="text-sm text-slate-600 mb-2">Risk score has increased 43 points over 12 months — driven by maintenance and crash category deterioration.</p>}
                  <div className={`grid grid-cols-12 gap-1 items-end ${tab === 'Trend' ? 'h-44' : 'h-28'}`}>
                    {[35, 38, 42, 40, 48, 55, 52, 60, 65, 68, 72, 78].map((h, i) => <div key={h + i} className="rounded-t bg-gradient-to-t from-emerald-500 to-red-500" style={{ height: `${h}%` }} />)}
                  </div>
                  <div className="grid grid-cols-12 text-[10px] text-slate-500 mt-1">{["May '25",'Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar',"Apr '26"].map((m) => <span key={m} className="text-center">{m}</span>)}</div>
                </div>
              )}
            </div>

            <div className="hidden lg:flex lg:col-span-2 flex-col bg-zinc-900 border-l border-zinc-800 p-4">
              <div className="mb-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs flex items-center justify-center">Ax</div>
                <p className="text-sm font-semibold text-white mt-2">Ask about this carrier</p>
                <p className="text-xs text-zinc-400">AI advisor · ACME Transport LLC</p>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 text-sm">
                <div className="rounded-xl bg-zinc-800 p-3 text-zinc-100"> <strong>ACME Transport is elevated risk</strong> — vehicle maintenance at 89th percentile (above the 80th-percentile intervention threshold), with 3 OOS events in Q1 2026.<br /><br />The 12-month trend is consistently worsening. Crash indicator at 71st is also approaching threshold.<br /><br /><strong>Recommendation:</strong> Conditional approval with quarterly reviews and a mandatory maintenance action plan within 30 days.</div>
                {!selected && CHIPS.map((chip) => <button key={chip.q} onClick={() => ask(chip.q, chip.a)} className="w-full text-left rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-200" aria-label={chip.q}>{chip.q}</button>)}
                {chat.map((m, i) => <div key={i} className={`rounded-xl p-3 ${m.role === 'user' ? 'bg-indigo-600 text-white ml-8' : 'bg-zinc-800 text-zinc-100'}`}>{m.text}</div>)}
                {thinking && <div className="text-zinc-300 text-sm">Thinking...</div>}
                {selected && !thinking && <button onClick={() => { setSelected(null); setChat([]); }} className="text-xs text-sky-400">Ask another question →</button>}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); if (!input.trim()) return; ask(input); setInput(''); }} className="mt-3 flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a follow-up question..." className="flex-1 rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-sm text-zinc-100" />
                <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm" aria-label="Send follow-up question">Send</button>
              </form>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-600 mt-4">This is a real carrier brief, generated from public FMCSA data. <Link href="/sample-report" className="text-sky-600">View the full report →</Link></p>
      </div>
    </section>
  );
}
