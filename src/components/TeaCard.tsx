import { Link } from '@/i18n/navigation'
import type { Tea } from '@prisma/client'

interface TeaCardProps {
  tea: Tea
  locale: string
  madeLabel: string
  todoLabel: string
}

export function TeaCard({ tea, locale, madeLabel, todoLabel }: TeaCardProps) {
  const isZh = locale === 'zh'
  const name = (isZh ? tea.nameZh : tea.name) || tea.name
  const brand = (isZh ? tea.brandZh : tea.brand) || tea.brand || ''
  const description = (isZh ? tea.descriptionZh : tea.description) || tea.description

  return (
    <Link href={`/tea/${tea.id}`} className="block masonry-item group">
      <div className="bg-journal-surface rounded-2xl shadow-sm border border-journal-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        {/* Image */}
        {tea.referenceImage && (
          <div className="w-full bg-journal-bg overflow-hidden rounded-t-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tea.referenceImage}
              alt={name ?? ''}
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4 relative">
          {/* Status stamp — top right */}
          <div className="absolute top-3 right-3">
            {tea.isMade ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-journal-green bg-journal-green-light border-2 border-dashed border-journal-green px-2 py-0.5 rounded-full">
                ✓ {madeLabel}
              </span>
            ) : (
              <span className="inline-flex items-center text-xs text-journal-sub bg-journal-bg border-2 border-dashed border-journal-border px-2 py-0.5 rounded-full">
                {todoLabel}
              </span>
            )}
          </div>

          {/* Brand tag */}
          {brand && (
            <span className="inline-block text-xs font-semibold text-journal-gold border border-journal-gold px-2 py-0.5 rounded-full mb-2">
              {brand}
            </span>
          )}

          {/* Tea name */}
          <h2 className="text-base font-bold text-journal-text group-hover:text-journal-pink-dark transition-colors leading-snug pr-16">
            {name}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-journal-sub text-xs mt-1 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
