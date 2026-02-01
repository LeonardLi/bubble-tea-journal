import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { toggleMade, addReview } from '@/app/actions'
import Image from 'next/image'
import { PrintButton } from '@/components/PrintButton'
import { getTranslations } from 'next-intl/server'

export default async function TeaPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id, locale } = await params
  const teaId = Number(id)
  const t = await getTranslations('TeaPage')
  const isZh = locale === 'zh';
  
  const tea = await db.tea.findUnique({
    where: { id: teaId },
    include: { reviews: { orderBy: { createdAt: 'desc' } } }
  })

  if (!tea) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation - Hidden on Print */}
      <div className="mb-6 no-print">
        <Link href="/" className="text-morandi-pink-dark hover:text-morandi-pink transition-colors font-medium">{t('backToList')}</Link>
      </div>

      <div className="bg-morandi-cream rounded-xl shadow-lg overflow-hidden border border-morandi-border p-8 print:shadow-none print:border-none print:p-0">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-morandi-border pb-6 mb-6">
           <div>
             <span className="text-sm font-bold text-morandi-pink-dark uppercase tracking-wide bg-morandi-pink-light px-2 py-1 rounded-md">
               {(isZh ? tea.brandZh : tea.brand) || tea.brand || t('originalRecipe')}
             </span>
             <h1 className="text-4xl font-bold text-morandi-fg mt-3 tracking-tight">
               {(isZh ? tea.nameZh : tea.name) || tea.name}
             </h1>
           </div>
           <div className="no-print">
             <form action={async () => {
               'use server'
               await toggleMade(tea.id, !tea.isMade)
             }}>
               <button className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${tea.isMade ? 'bg-morandi-green-light text-morandi-green' : 'bg-morandi-bg text-morandi-sub hover:bg-morandi-border'}`}>
                 {tea.isMade ? t('made') : t('markAsMade')}
               </button>
             </form>
           </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           <div>
             <h2 className="text-xl font-bold mb-4 text-morandi-fg border-b-2 border-morandi-pink-light inline-block pb-1">{t('ingredients')}</h2>
             <div className="prose bg-morandi-bg p-5 rounded-xl border border-morandi-border print:bg-transparent print:p-0 print:border-none">
               <pre className="whitespace-pre-wrap font-sans text-morandi-fg text-sm md:text-base leading-relaxed">
                 {(isZh ? tea.ingredientsZh : tea.ingredients) || tea.ingredients}
               </pre>
             </div>
           </div>
           <div>
             <h2 className="text-xl font-bold mb-4 text-morandi-fg border-b-2 border-morandi-pink-light inline-block pb-1">{t('instructions')}</h2>
             <div className="prose bg-morandi-bg p-5 rounded-xl border border-morandi-border print:bg-transparent print:p-0 print:border-none">
                <pre className="whitespace-pre-wrap font-sans text-morandi-fg text-sm md:text-base leading-relaxed">
                  {(isZh ? tea.stepsZh : tea.steps) || tea.steps}
                </pre>
             </div>
           </div>
        </div>

        {/* Reviews Section - Visible in Print if desired */}
        {tea.reviews.length > 0 && (
          <div className="mt-8 pt-8 border-t border-morandi-border print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6 text-morandi-fg">{t('reviews')}</h2>
            <div className="space-y-6">
              {tea.reviews.map((review) => (
                <div key={review.id} className="bg-morandi-bg/50 rounded-lg p-6 flex gap-4 border border-morandi-border print:bg-transparent print:border print:p-4 print:break-inside-avoid">
                  {review.photoUrl && (
                    <div className="w-32 h-32 relative flex-shrink-0 print:w-24 print:h-24">
                      <Image src={review.photoUrl} alt="Review" fill className="object-cover rounded-md" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400/80">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                      <span className="text-morandi-sub text-xs ml-2">{review.createdAt.toLocaleDateString()}</span>
                    </div>
                    <p className="text-morandi-fg italic">"{review.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions - No Print */}
        <div className="mt-8 pt-8 border-t border-morandi-border no-print">
           <h3 className="text-lg font-bold mb-4 text-morandi-fg">{t('addReview')}</h3>
           <form action={addReview} className="space-y-4 bg-morandi-bg p-6 rounded-xl border border-morandi-border">
             <input type="hidden" name="teaId" value={tea.id} />
             <div>
               <label className="block text-sm font-medium text-morandi-fg mb-1">{t('rating')}</label>
               <select name="rating" className="w-full border border-morandi-border bg-white rounded-md p-2 text-morandi-fg focus:ring-2 focus:ring-morandi-pink-light focus:border-morandi-pink outline-none transition-all">
                 <option value="5">{t('ratings.5')}</option>
                 <option value="4">{t('ratings.4')}</option>
                 <option value="3">{t('ratings.3')}</option>
                 <option value="2">{t('ratings.2')}</option>
                 <option value="1">{t('ratings.1')}</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium text-morandi-fg mb-1">{t('comment')}</label>
               <textarea name="comment" required className="w-full border border-morandi-border bg-white rounded-md p-2 text-morandi-fg focus:ring-2 focus:ring-morandi-pink-light focus:border-morandi-pink outline-none transition-all" rows={3} placeholder={t('placeholders.comment')}></textarea>
             </div>
             <div>
               <label className="block text-sm font-medium text-morandi-fg mb-1">{t('photo')}</label>
               <input type="file" name="photo" accept="image/*" className="w-full text-morandi-sub file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-morandi-pink-light file:text-morandi-pink-dark hover:file:bg-morandi-pink/20" />
             </div>
             <button type="submit" className="bg-morandi-pink text-white px-6 py-2 rounded-md hover:bg-morandi-pink-dark transition-colors w-full md:w-auto shadow-sm font-medium">{t('submitReview')}</button>
           </form>

           <div className="mt-8 flex justify-end">
             <PrintButton label={t('printRecipe')} />
           </div>
        </div>
      </div>
    </div>
  )
}