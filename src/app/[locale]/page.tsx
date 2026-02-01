import { Link } from '@/i18n/navigation';
import { db } from '@/lib/db';
import { getTranslations } from 'next-intl/server';
import { LuckyButton } from '@/components/LuckyButton';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');
  const teas = await db.tea.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const madeCount = teas.filter(t => t.isMade).length;
  const isZh = locale === 'zh';

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-morandi-fg tracking-tight">{t('title')}</h1>
          <p className="text-morandi-sub mt-1">{t('subtitle')}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center bg-morandi-cream px-4 py-2 rounded-lg shadow-sm border border-morandi-border">
          <div className="mr-4">
             <span className="block text-2xl font-bold text-morandi-pink-dark text-center">{madeCount} / 100</span>
             <span className="text-xs text-morandi-sub uppercase tracking-wide">{t('progress')}</span>
          </div>
          <div className="h-10 w-px bg-morandi-border mx-2"></div>
          <div className="flex gap-2">
            <LuckyButton text={t('lucky')} locale={locale} />
            <button className="bg-morandi-pink text-white px-4 py-2 rounded-md hover:bg-morandi-pink-dark transition-colors shadow-sm">
              {t('addNew')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teas.map((tea) => (
          <Link href={`/tea/${tea.id}`} key={tea.id} className="block group">
            <div className="bg-morandi-cream rounded-xl shadow-sm border border-morandi-border overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col hover:border-morandi-pink-light">
              {tea.referenceImage && (
                <div className="h-48 w-full relative bg-morandi-bg">
                  <img src={tea.referenceImage} alt={tea.name} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-morandi-pink-light text-morandi-pink-dark">
                    {(isZh ? tea.brandZh : tea.brand) || tea.brand || 'Original'}
                  </span>
                  {tea.isMade ? (
                    <span className="text-morandi-green text-xs font-bold flex items-center bg-morandi-green-light px-2 py-1 rounded-full">
                      {t('made')}
                    </span>
                  ) : (
                     <span className="text-morandi-sub text-xs px-2 py-1">{t('todo')}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-morandi-fg mb-2 group-hover:text-morandi-pink-dark transition-colors">
                  {(isZh ? tea.nameZh : tea.name) || tea.name}
                </h2>
                <p className="text-morandi-sub text-sm line-clamp-3 leading-relaxed">
                  {(isZh ? tea.descriptionZh : tea.description) || tea.description}
                </p>
              </div>
              <div className="bg-morandi-bg/50 px-6 py-3 border-t border-morandi-border text-sm text-morandi-sub flex justify-between group-hover:text-morandi-pink-dark transition-colors">
                 <span>{t('viewRecipe')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
