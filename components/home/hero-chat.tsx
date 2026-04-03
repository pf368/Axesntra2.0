'use client';

import { useEffect, useMemo, useState } from 'react';

export function HeroChat() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resetting, setResetting] = useState(false);

  const reducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setResetting(false);
      setStep(1);
      timers.push(setTimeout(() => setStep(2), 800));
      timers.push(setTimeout(() => setLoading(true), 2000));
      timers.push(
        setTimeout(() => {
          setLoading(false);
          setStep(3);
        }, 2800)
      );
      timers.push(
        setTimeout(() => {
          setResetting(true);
        }, reducedMotion ? 7000 : 4500)
      );
      timers.push(
        setTimeout(() => {
          setStep(0);
          setLoading(false);
          run();
        }, reducedMotion ? 7600 : 5100)
      );
    };

    run();
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  return (
    <div className={`rounded-[14px] border border-white/10 bg-slate-800 p-4 transition-opacity ${resetting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <p className="ml-2 text-xs text-slate-400">Axesntra — AI Safety Advisor</p>
      </div>

      <div className="space-y-3 text-sm">
        {step >= 1 && (
          <div className="ml-auto max-w-[85%] rounded-xl bg-indigo-600 px-3 py-2 text-white animate-in fade-in slide-in-from-bottom-2 duration-300">
            Should I approve ACME Transport for our book?
          </div>
        )}

        {step >= 2 && !loading && step < 3 && (
          <div className="max-w-[90%] rounded-xl bg-zinc-700 px-3 py-2 text-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
            Pulling FMCSA record for USDOT 491180...
          </div>
        )}

        {loading && (
          <div className="max-w-[60%] rounded-xl bg-zinc-700 px-3 py-2 text-slate-100">
            <span className="inline-flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:120ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:240ms]" />
            </span>
          </div>
        )}

        {step >= 3 && (
          <div className="max-w-[95%] rounded-xl bg-zinc-700 px-3 py-2 text-slate-100 whitespace-pre-line animate-in fade-in slide-in-from-bottom-2 duration-300">
            <strong>ACME Transport — Elevated Risk · Worsening trend</strong>{'\n\n'}
            Vehicle maintenance is at the 89th percentile — above FMCSA&apos;s 80th-percentile intervention threshold. Three new OOS events in Q1 2026. Crash indicator trending up at 71st percentile.{'\n\n'}
            <strong>My recommendation:</strong> Conditional approval. Require their maintenance action plan within 30 days and add to your watchlist for monthly monitoring.
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
        {['Draft a conditional approval memo', 'Compare to similar-sized carriers', 'What if they fix maintenance?'].map((chip) => (
          <span key={chip} className="rounded-full border border-white/15 bg-zinc-800 px-2.5 py-1">
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2">
        <input className="w-full bg-transparent text-sm text-slate-300 outline-none" placeholder="Ask about any carrier..." readOnly aria-label="Mock chat input" />
        <button className="rounded-md bg-indigo-600 px-2 py-1 text-xs text-white" aria-label="Send message mock button">Send</button>
      </div>
    </div>
  );
}
