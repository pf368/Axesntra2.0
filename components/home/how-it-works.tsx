import Link from 'next/link';
import { Search, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    title: 'Ask about any carrier',
    icon: Search,
    description:
      'Enter a USDOT number or carrier name. The AI pulls the full FMCSA record: inspections, violations, crashes, OOS events, authority status, and 12-month trend data.',
  },
  {
    title: 'Get plain-English analysis',
    icon: FileText,
    description:
      'Instead of raw percentiles, you get a risk narrative: what\'s wrong, why it matters, and how it compares to similar carriers. Scored across 5 BASIC categories.',
  },
  {
    title: 'Drill into any violation',
    icon: ShieldAlert,
    description:
      'Click any violation code in the report and ask the AI: "Why is this an OOS? How do I prevent it? What internal control would catch this?" The AI explains each one in your workflow\'s context.',
  },
  {
    title: 'Act on recommendations',
    icon: CheckCircle2,
    description:
      'Every brief ends with a prioritized remediation plan, AI-generated compliance programs, and documentation you can share with leadership — without building a deck from scratch.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 text-white" style={{ background: '#0B1120' }}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400">THE AI AGENT</p>
          <h2 className="text-3xl font-bold mt-2">Not a dashboard. An advisor.</h2>
          <p className="text-slate-300 mt-2">You ask questions. It analyzes the data, explains the risk, and tells you what to do.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="h-7 w-7 rounded-full bg-indigo-600 text-xs font-semibold flex items-center justify-center mb-3">{i + 1}</div>
              <step.icon className="h-5 w-5 text-sky-300 mb-3" />
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/sample-report" className="text-sky-400 hover:text-sky-300 font-medium">
            See a full carrier brief with all analysis →
          </Link>
        </div>
      </div>
    </section>
  );
}
