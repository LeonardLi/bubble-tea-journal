import { Link } from '@/i18n/navigation';
import { db } from '@/lib/db';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  const teas = await db.tea.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const madeCount = teas.filter(t => t.isMade).length;

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
          <div className="mr-4">
             <span className="block text-2xl font-bold text-pink-600 text-center">{madeCount} / 100</span>
             <span className="text-xs text-gray-500 uppercase tracking-wide">{t('progress')}</span>
          </div>
          <div className="h-10 w-px bg-gray-200 mx-2"></div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
            {t('addNew')}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teas.map((tea) => (
          <Link href={`/tea/${tea.id}`} key={tea.id} className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-pink-50 text-pink-600">
                    {tea.brand || 'Original'}
                  </span>
                  {tea.isMade ? (
                    <span className="text-green-600 text-xs font-bold flex items-center">
                      {t('made')}
                    </span>
                  ) : (
                     <span className="text-gray-400 text-xs">{t('todo')}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {tea.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {tea.description}
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                 <span>{t('viewRecipe')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
