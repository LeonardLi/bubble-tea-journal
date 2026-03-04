import { db } from '@/lib/db';
import { getTranslations } from 'next-intl/server';
import { LuckyButton } from '@/components/LuckyButton';
import { TeaCard } from '@/components/TeaCard';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');
  const teas = await db.tea.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const madeCount = teas.filter(tea => tea.isMade).length;

  return (
    <div className="px-4 py-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-journal-text tracking-tight">{t('title')}</h1>
          <p className="text-journal-sub mt-1 text-sm">{t('subtitle')}</p>
        </div>
        <div className="flex items-center gap-3 bg-journal-surface px-4 py-2.5 rounded-2xl shadow-sm border border-journal-border">
          <span className="text-2xl font-bold text-journal-pink-dark">{madeCount}</span>
          <span className="text-journal-sub text-sm">/ 100</span>
          <span className="text-xs text-journal-sub uppercase tracking-wide border-l border-journal-border pl-3">
            {t('progress')}
          </span>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="masonry-2 lg:masonry-3">
        {teas.map((tea) => (
          <TeaCard
            key={tea.id}
            tea={tea}
            locale={locale}
            madeLabel={t('made')}
            todoLabel={t('todo')}
          />
        ))}
      </div>

      {/* Floating lucky button */}
      <LuckyButton />
    </div>
  );
}
