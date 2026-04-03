import { HeroSearch } from '@/components/hero-search';
import { PersonaStrip } from '@/components/home/persona-strip';
import { HeroSection } from '@/components/home/hero-section';
import { BeforeAfter } from '@/components/home/before-after';
import { HowItWorks } from '@/components/home/how-it-works';
import { InteractiveReportPreview } from '@/components/home/interactive-report-preview';
import { ProactiveMonitoring, PersonaCards, CaseStudy, MidFunnelOffers, FinalCta } from '@/components/home/extra-sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PersonaStrip />
      <HeroSection />
      <HeroSearch />
      <BeforeAfter />
      <HowItWorks />
      <InteractiveReportPreview />
      <ProactiveMonitoring />
      <PersonaCards />
      <CaseStudy />
      <MidFunnelOffers />
      <FinalCta />
    </div>
  );
}
