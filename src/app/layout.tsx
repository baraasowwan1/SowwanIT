import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sowwan for Information Technology | Professional Website Builder',
  description:
    'Build and launch your professional website in minutes. Sowwan IT provides powerful website creation, custom domain support, and subscription management for your business.',
  keywords: 'website builder, SaaS, IT services, custom domain, web hosting, Sowwan',
  openGraph: {
    title: 'Sowwan for Information Technology',
    description: 'Professional Website Builder & Hosting SaaS Platform',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#1a1a2e',
                color: '#e2e8f0',
                border: '1px solid rgba(139,92,246,0.3)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
