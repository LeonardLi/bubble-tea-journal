import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import "@/app/globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
      <body className={`${notoSerifSC.variable} antialiased bg-journal-bg text-journal-text min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <header className="bg-journal-surface border-b border-journal-gold no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold text-journal-pink-dark tracking-tight"
              >
                {t('brand')}
              </Link>
              <div className="flex gap-2 text-sm text-journal-sub items-center">
                <Link
                  href="/"
                  locale="zh"
                  className={`hover:text-journal-pink transition-colors ${locale === 'zh' ? 'font-bold text-journal-pink-dark border-b-2 border-journal-gold' : ''}`}
                >
                  中文
                </Link>
                <span>/</span>
                <Link
                  href="/"
                  locale="en"
                  className={`hover:text-journal-pink transition-colors ${locale === 'en' ? 'font-bold text-journal-pink-dark border-b-2 border-journal-gold' : ''}`}
                >
                  EN
                </Link>
              </div>
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
