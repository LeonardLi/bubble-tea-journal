import Image from 'next/image'
import type { Review } from '@prisma/client'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-journal-border flex-shrink-0 w-64 snap-start">
      {/* Polaroid photo area */}
      {review.photoUrl ? (
        <div className="relative w-full h-44">
          <Image
            src={review.photoUrl}
            alt="Review photo"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-20 bg-journal-gold-light flex items-center justify-center text-3xl">
          🧋
        </div>
      )}

      {/* Polaroid caption area */}
      <div className="p-3 bg-white">
        {/* Stars */}
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < review.rating ? 'text-journal-gold' : 'text-journal-border'}>
              ★
            </span>
          ))}
          <span className="text-journal-sub text-xs ml-2 self-center">
            {review.createdAt.toLocaleDateString()}
          </span>
        </div>
        {/* Comment */}
        {review.comment && (
          <p className="text-journal-text text-sm italic leading-relaxed line-clamp-3">
            &ldquo;{review.comment}&rdquo;
          </p>
        )}
      </div>
    </div>
  )
}
