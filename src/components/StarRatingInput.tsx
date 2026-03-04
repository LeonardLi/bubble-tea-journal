'use client'

import { useState } from 'react'

interface StarRatingInputProps {
  name?: string
  defaultValue?: number
}

export function StarRatingInput({ name = 'rating', defaultValue = 5 }: StarRatingInputProps) {
  const [rating, setRating] = useState(defaultValue)
  const [hover, setHover] = useState(0)

  const displayed = hover || rating

  return (
    <div className="flex items-center gap-1">
      <input type="hidden" name={name} value={rating} />
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="text-2xl transition-transform hover:scale-125 focus:outline-none"
          aria-label={`Rate ${star} stars`}
        >
          <span className={star <= displayed ? 'text-journal-gold' : 'text-journal-border'}>
            ★
          </span>
        </button>
      ))}
      <span className="text-journal-sub text-sm ml-1">{displayed} / 5</span>
    </div>
  )
}
