export function BeforeAfter() {
  return (
    <section className="bg-zinc-100 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-600">SEE THE DIFFERENCE</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">From raw government data to actionable intelligence</h2>
          <p className="text-slate-600 mt-2">The same carrier. The same public FMCSA data. A completely different experience.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] items-start">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2">Before — Raw FMCSA data</div>
            <div className="p-4 text-sm">
              <div className="mb-3 rounded bg-[#1E3A5F] px-3 py-2 text-white font-serif">FMCSA SAFER System — Company Snapshot</div>
              <table className="w-full text-xs font-mono border border-slate-200">
                <tbody>
                  {[
                    ['USDOT number', '491180'],
                    ['Legal Name', 'ACME Transport LLC'],
                    ['Operating Status', 'AUTHORIZED FOR HIRE'],
                    ['Entity Type', 'CARRIER'],
                  ].map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? 'bg-slate-50' : 'bg-white'}><td className="p-2 border">{row[0]}</td><td className="p-2 border">{row[1]}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 mb-2 text-xs font-semibold">SMS BASIC RESULTS</p>
              <table className="w-full text-xs font-mono border border-slate-200">
                <thead><tr className="bg-slate-100"><th className="p-1.5 border">BASIC</th><th className="p-1.5 border">Measure</th><th className="p-1.5 border">%ile</th><th className="p-1.5 border">Threshold</th></tr></thead>
                <tbody>
                  {[
                    ['Unsafe Driving', '0.85', '62', '65'],
                    ['HOS Compliance', '0.45', '38', '65'],
                    ['Vehicle Maint.', '1.92', '89', '80'],
                    ['Crash Indicator', '1.15', '71', '65'],
                    ['Driver Fitness', '0.22', '15', '80'],
                  ].map((r, i) => <tr key={r[0]} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>{r.map((c) => <td key={c} className="p-1.5 border">{c}</td>)}</tr>)}
                </tbody>
              </table>
              <p className="text-xs italic text-slate-500 mt-3">Average time to manually interpret and document: 35–45 minutes per carrier.</p>
            </div>
          </div>

          <div className="text-2xl text-slate-400 self-center justify-self-center">→</div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <div className="bg-emerald-600 text-white text-sm font-semibold px-4 py-2">After — Axesntra risk brief</div>
            <div className="p-4 text-sm">
              <div className="flex items-start justify-between mb-3">
                <div><p className="font-semibold text-slate-900">ACME Transport LLC</p><p className="text-xs text-slate-500">USDOT 491180 · MC 123456</p></div>
                <div className="h-14 w-14 rounded-full border-4 border-red-500 text-red-600 font-bold flex items-center justify-center">72</div>
              </div>
              <div className="flex gap-2 mb-3 text-xs"><span className="px-2 py-1 rounded-full bg-red-100 text-red-700">Elevated Risk</span><span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700">Worsening Trend</span></div>
              <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600 mb-3">AI summary: ACME&apos;s maintenance and crash trends are worsening. Elevated OOS frequency indicates operational-control gaps. Conditional approval is reasonable with remediation safeguards.</div>
              <div className="space-y-2 mb-3 text-xs">
                {[
                  ['Vehicle Maintenance', 89, 'bg-red-500'],
                  ['Crash Indicator', 71, 'bg-amber-500'],
                  ['Unsafe Driving', 62, 'bg-amber-500'],
                  ['HOS Compliance', 38, 'bg-emerald-500'],
                ].map(([label, score, color]) => (
                  <div key={String(label)}>
                    <div className="flex justify-between"><span>{label}</span><span>{String(score)}th</span></div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`${color} h-full`} style={{ width: `${score}%` }} /></div>
                  </div>
                ))}
              </div>
              <ol className="space-y-1 text-xs text-slate-700 list-decimal list-inside">
                <li><span className="font-medium">Require maintenance action plan</span> within 30 days.</li>
                <li><span className="font-medium">Schedule quarterly reviews</span> for trend checks.</li>
                <li><span className="font-medium">Add watchlist alerting</span> for any new OOS events.</li>
              </ol>
              <p className="text-xs text-emerald-700 mt-3">Generated in under 3 seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
