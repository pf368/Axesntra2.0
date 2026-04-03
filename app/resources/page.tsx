import type { Metadata } from 'next';
import { ResourcesPageClient } from '@/components/resources/resources-page-client';

export const metadata: Metadata = {
  title: 'Resources - Axesntra',
  description:
    'Axesntra guides, quick-answer pages, and operational playbooks for insurance, brokerage, and transportation teams evaluating motor carriers.',
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
