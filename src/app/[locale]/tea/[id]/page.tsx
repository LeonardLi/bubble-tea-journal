import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { toggleMade, addReview } from '@/app/actions'
import { PrintButton } from '@/components/PrintButton'
import { ReviewCard } from '@/components/ReviewCard'
import { ReviewForm } from '@/components/ReviewForm'
import { getTranslations } from 'next-intl/server'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function TeaPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id, locale } = await params
  const teaId = Number(id)
  const t = await getTranslations('TeaPage')
  const isZh = locale === 'zh'

  const tea = await db.tea.findUnique({
    where: { id: teaId },
    include: { reviews: { orderBy: { createdAt: 'desc' } } }
  })

  if (!tea) notFound()

  const name = ((isZh ? tea.nameZh : tea.name) || tea.name) as string
  const brand = (isZh ? tea.brandZh : tea.brand) || tea.brand || t('originalRecipe')
  const ingredients = (isZh ? tea.ingredientsZh : tea.ingredients) || tea.ingredients || ''
  const steps = (isZh ? tea.stepsZh : tea.steps) || tea.steps || ''

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Back link */}
      <div className="mb-4 no-print">
        <Link href="/" className="text-journal-sub hover:text-journal-pink-dark transition-colors text-sm">
          {t('backToList')}
        </Link>
      </div>

      {/* Cover image */}
      {tea.referenceImage && (
        <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 border border-journal-border">
          <Image
            src={tea.referenceImage}
            alt={name}
            fill
            className="object-cover"
          />
          {/* Overlay badges */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="text-xs font-semibold text-journal-gold bg-white/90 border border-journal-gold px-3 py-1 rounded-full">
              {brand}
            </span>
            {tea.isMade && (
              <span className="text-xs font-bold text-journal-green bg-white/90 border-2 border-dashed border-journal-green px-3 py-1 rounded-full">
                ✓ {t('made')}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Tea name + mark as made */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h1 className="text-3xl font-bold text-journal-text tracking-tight leading-tight">
          {name}
        </h1>
        <form
          action={async () => {
            'use server'
            await toggleMade(tea.id, !tea.isMade)
          }}
          className="no-print flex-shrink-0"
        >
          <button
            className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-all duration-200 border-2 border-dashed ${
              tea.isMade
                ? 'border-journal-green bg-journal-green-light text-journal-green'
                : 'border-journal-border bg-journal-bg text-journal-sub hover:border-journal-pink hover:text-journal-pink'
            }`}
          >
            {tea.isMade ? `✓ ${t('made')}` : t('markAsMade')}
          </button>
        </form>
      </div>

      {/* If no reference image, show brand inline */}
      {!tea.referenceImage && (
        <span className="inline-block text-xs font-semibold text-journal-gold border border-journal-gold px-3 py-1 rounded-full mb-4">
          {brand}
        </span>
      )}

      {/* Gold divider */}
      <div className="border-b border-journal-gold my-5" />

      {/* Recipe: ingredients + steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-bold text-journal-text mb-3">📋 {t('ingredients')}</h2>
          <div className="bg-journal-gold-light rounded-xl p-5 border border-journal-border prose prose-sm prose-p:text-journal-text prose-li:text-journal-text prose-strong:text-journal-text prose-ul:list-disc prose-ul:pl-4 prose-li:marker:text-journal-gold print:bg-transparent print:p-0">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{ingredients}</ReactMarkdown>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-journal-text mb-3">📖 {t('instructions')}</h2>
          <div className="bg-journal-gold-light rounded-xl p-5 border border-journal-border prose prose-sm prose-p:text-journal-text prose-li:text-journal-text prose-strong:text-journal-pink-dark prose-ol:list-decimal prose-ol:pl-4 prose-li:marker:text-journal-gold leading-relaxed print:bg-transparent print:p-0">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{steps}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="border-b border-journal-gold mb-6" />

      {/* Reviews */}
      {tea.reviews.length > 0 && (
        <div className="mb-8 print:break-inside-avoid">
          <h2 className="text-xl font-bold text-journal-text mb-4">📸 {t('reviews')}</h2>
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {tea.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}

      {/* Add review + print */}
      <div className="no-print space-y-6">
        <ReviewForm
          teaId={tea.id}
          action={addReview}
          addReviewLabel={t('addReview')}
          commentLabel={t('comment')}
          commentPlaceholder={t('placeholders.comment')}
          photoLabel={t('photo')}
          submitLabel={t('submitReview')}
        />

        <div className="flex justify-end pt-2">
          <PrintButton label={t('printRecipe')} />
        </div>
      </div>
    </div>
  )
}
