'use client';

import Link from 'next/link';
import { useState } from 'react';

const CHIP_RESPONSES = [
  ['Summarize the top 3 risks', '1. Vehicle Maintenance (89th percentile): OOS rate of 34.1% is 13 points above the national benchmark. Brake, lighting, and tire violations are recurring. 2. Hazmat Documentation (Elevated): Shipping paper errors and placard issues in recent inspections — 3 related violations in 6 months. 3. Historical Enforcement: One closed enforcement case from 2024 suggesting a recurring pattern. The crash indicator (Moderate, 71st) is a secondary concern but trending up.'],
  ['Is this carrier insurable?', 'Based on the public data: this carrier presents elevated but not disqualifying risk. The maintenance score (89th) exceeds standard intervention thresholds, which many insurers treat as a trigger for conditional rather than flat approval. Driver fitness (15th percentile) is clean — suggesting the problem is operational controls, not driver quality. A conditional approval with a 90-day re-evaluation would be defensible. A flat denial would also be defensible given the trend.'],
  ['What would change the score most?', 'The highest-leverage action is reducing the vehicle OOS rate. Going from 34.1% to below the 21% national benchmark (achievable in 6–9 months with systematic maintenance controls) would drop the maintenance BASIC from 89th to roughly 55th percentile. That alone would likely move their overall risk from Elevated to Moderate. Clearing the hazmat documentation issues (low-effort fixes) would further improve the score.'],
  ['Draft an underwriting memo', 'Draft Underwriting Memo — ACME Transport LLC\n\nDate: [Date] | Analyst: [Name] | USDOT: 491180\n\nRisk Assessment: Elevated. Vehicle maintenance deficiencies are the primary driver (89th percentile, above 80th intervention threshold). 12-month trend is worsening.\n\nRecommendation: Conditional approval subject to: (1) Carrier-provided maintenance action plan within 30 days; (2) Quarterly SMS monitoring review; (3) Automatic re-evaluation upon any new OOS event.\n\nData source: FMCSA SMS, updated [date]. This assessment reflects publicly available data only.'],
] as const;

export function ReportAIPanel({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [response, setResponse] = useState('');
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');

  const ask = (q: string, canned?: string) => {
    setActive(q);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      if (canned) return setResponse(canned);
      const lower = q.toLowerCase();
      if (lower.includes('violation') || lower.includes('oos') || lower.includes('maintenance')) {
        setResponse('For ACME specifically, vehicle maintenance is the key driver: 89th percentile with 3 Q1 2026 OOS events tied to brakes, tires, and lighting. Tightening pre-trip controls is the highest-priority action.');
      } else {
        setResponse('Great question — for fully contextualized AI answers across your entire carrier portfolio, get early access → /early-access. This demo advisor covers ACME Transport\'s profile specifically.');
      }
    }, 600);
  };

  const body = (
    <div className="h-full flex flex-col bg-zinc-900 text-zinc-100 border-l border-zinc-800">
      <div className="p-4 border-b border-zinc-800 flex items-start justify-between">
        <div>
          <p className="font-semibold">✦ AI Advisor</p>
          <p className="text-xs text-zinc-400">Ask anything about ACME Transport LLC</p>
        </div>
        {!inline && <button onClick={() => setOpen(false)} aria-label="Collapse AI advisor panel">×</button>}
      </div>
      <div className="p-4 space-y-3 flex-1 overflow-y-auto">
        <div className="rounded-lg bg-zinc-800 p-3 text-sm">📋 ACME Transport LLC · USDOT 491180<br />Risk: Elevated · Trend: Worsening · Score: 72</div>
        <div className="rounded-lg bg-zinc-800 p-3 text-sm">I&apos;ve analyzed the full FMCSA record for ACME Transport. Their vehicle maintenance is the primary concern — 89th percentile with a worsening 12-month trend.<br /><br />What would you like to dig into?</div>

        {!active && CHIP_RESPONSES.map(([q, a]) => <button key={q} onClick={() => ask(q, a)} className="w-full text-left rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs" aria-label={q}>{q}</button>)}

        {active && <div className="rounded-lg bg-indigo-600 px-3 py-2 text-sm ml-8">{active}</div>}
        {thinking && <div className="text-sm text-zinc-300">Thinking...</div>}
        {response && !thinking && <div className="rounded-lg bg-zinc-800 p-3 text-sm whitespace-pre-line">{response}</div>}
        {response && !thinking && (
          <div className="flex items-center gap-3 text-xs">
            <button onClick={() => navigator.clipboard?.writeText(response)} className="px-2 py-1 rounded border border-zinc-600">Copy</button>
            <button onClick={() => { setActive(null); setResponse(''); }} className="text-sky-400">Ask another</button>
          </div>
        )}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (!input.trim()) return; ask(input); setInput(''); }} className="p-3 border-t border-zinc-800 flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about this carrier..." className="flex-1 rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-sm" />
        <button className="bg-indigo-600 px-3 py-2 rounded-lg text-sm">Send</button>
      </form>
    </div>
  );

  if (inline) return <section className="mt-8 lg:hidden border border-zinc-800 rounded-xl overflow-hidden">{body}</section>;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI advisor"
        className={`hidden lg:flex fixed top-40 right-0 h-32 w-10 items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-500 text-white z-50 rounded-l-lg transition-transform ${open ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        <span className="-rotate-90 text-xs font-semibold">AI Advisor</span>
      </button>
      <aside className={`hidden lg:block fixed top-16 right-0 bottom-0 w-[360px] z-50 transition-transform ${open ? 'translate-x-0' : 'translate-x-[360px]'}`}>
        {body}
      </aside>
    </>
  );
}

export function SampleReportPanelCta() {
  return <Link href="/early-access" className="text-sky-400">get early access →</Link>;
}
