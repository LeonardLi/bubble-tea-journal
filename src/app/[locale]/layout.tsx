import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Navigation'});

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-morandi-bg text-morandi-fg min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <header className="bg-morandi-cream shadow-sm no-print border-b border-morandi-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
               <Link href="/" className="text-xl font-bold text-morandi-pink-dark tracking-tight">{t('brand')}</Link>
               <nav className="flex gap-4">
                 <Link href="/" className="hover:text-morandi-pink transition-colors">{t('home')}</Link>
                 <div className="flex gap-2 text-sm text-morandi-sub items-center border-l border-morandi-border pl-4">
                    <Link href="/" locale="zh" className={`hover:text-morandi-pink transition-colors ${locale === 'zh' ? 'font-bold text-morandi-pink-dark' : ''}`}>中文</Link>
                    <span>/</span>
                    <Link href="/" locale="en" className={`hover:text-morandi-pink transition-colors ${locale === 'en' ? 'font-bold text-morandi-pink-dark' : ''}`}>EN</Link>
                 </div>
               </nav>
            </div>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
