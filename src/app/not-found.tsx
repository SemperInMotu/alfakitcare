import type { Metadata } from 'next';
import { NotFoundView } from '@/components/NotFoundView';

export const metadata: Metadata = {
  title: '404 — ALFAKIT Care',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
