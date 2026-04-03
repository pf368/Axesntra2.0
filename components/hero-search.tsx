'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    if (/^\d+$/.test(trimmed)) {
      router.push(`/carrier/${trimmed}`);
    } else {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <section id="search" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Try it free</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Run a quick carrier lookup</h2>
        <p className="text-slate-600 mb-5">Enter a USDOT number or carrier name to preview Axesntra&apos;s risk brief workflow.</p>
        <form onSubmit={handleSearch} className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter USDOT or carrier name"
              className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-3 text-sm"
              aria-label="Carrier lookup"
            />
          </div>
          <Button type="submit" size="lg" className="bg-slate-900 hover:bg-slate-800 rounded-xl">Analyze</Button>
        </form>
      </div>
    </section>
  );
}
