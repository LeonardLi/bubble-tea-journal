'use client'

import { useState, useTransition } from 'react'
import type { addReview } from '@/app/actions'
import { useRouter } from '@/i18n/navigation'
import { StarRatingInput } from './StarRatingInput'

interface ReviewFormProps {
  teaId: number
  action: typeof addReview
  addReviewLabel: string
  commentLabel: string
  commentPlaceholder: string
  photoLabel: string
  submitLabel: string
}

export function ReviewForm({
  teaId,
  action,
  addReviewLabel,
  commentLabel,
  commentPlaceholder,
  photoLabel,
  submitLabel,
}: ReviewFormProps) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      await action(formData)
      setOpen(false)
      router.refresh()
    })
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-journal-pink-dark font-semibold hover:text-journal-pink transition-colors"
      >
        <span className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
        {addReviewLabel}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <form onSubmit={handleSubmit} className="bg-journal-bg p-5 rounded-xl border border-journal-border space-y-4">
          <input type="hidden" name="teaId" value={teaId} />

          {/* Star rating */}
          <div>
            <StarRatingInput name="rating" defaultValue={5} />
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-journal-text mb-1">{commentLabel}</label>
            <textarea
              name="comment"
              required
              rows={3}
              placeholder={commentPlaceholder}
              className="w-full border border-journal-border bg-journal-surface rounded-xl p-3 text-journal-text text-sm focus:ring-2 focus:ring-journal-pink-light focus:border-journal-pink outline-none transition-all resize-none"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-journal-text mb-1">{photoLabel}</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full text-journal-sub text-sm file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-journal-pink-light file:text-journal-pink-dark hover:file:bg-journal-pink/20"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-journal-pink text-white px-6 py-2 rounded-full hover:bg-journal-pink-dark transition-colors font-medium shadow-sm disabled:opacity-50"
          >
            {isPending ? '...' : submitLabel}
          </button>
        </form>
      </div>
    </div>
  )
}
