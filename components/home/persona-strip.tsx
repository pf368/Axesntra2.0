'use client';

import { useState } from 'react';

const PERSONAS = [
  { id: 'underwriters', label: 'Underwriters' },
  { id: 'freight-brokers', label: 'Freight Brokers' },
  { id: 'safety-compliance', label: 'Safety & Compliance' },
  { id: 'fleet-operators', label: 'Fleet Operators' },
];

export function PersonaStrip() {
  const [active, setActive] = useState('underwriters');

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hidden md:block border-b border-zinc-200 bg-zinc-100">
      <div className="container mx-auto max-w-7xl px-4 py-2 text-center text-sm text-slate-600">
        <span className="mr-3">Built for:</span>
        {PERSONAS.map((persona) => (
          <button
            key={persona.id}
            onClick={() => handleClick(persona.id)}
            aria-label={`Jump to ${persona.label} persona section`}
            className={`mx-1 rounded-full px-3 py-1 transition-colors ${
              active === persona.id ? 'bg-zinc-300 text-slate-900' : 'bg-zinc-200 hover:bg-zinc-300'
            }`}
          >
            {persona.label}
          </button>
        ))}
      </div>
    </div>
  );
}
