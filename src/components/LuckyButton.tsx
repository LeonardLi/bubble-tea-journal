'use client'

import { getRandomTea } from "@/app/actions"
import { useRouter } from "@/i18n/navigation"
import { useTransition } from "react"

export function LuckyButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      const path = await getRandomTea()
      if (path) {
        router.push(path)
      }
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      title="试试手气 / I'm Feeling Lucky"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-journal-gold text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center text-2xl disabled:opacity-50 no-print"
    >
      {isPending ? '⏳' : '🎲'}
    </button>
  )
}
