'use client'

import { getRandomTea } from "@/app/actions"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function LuckyButton({ text, locale }: { text: string, locale: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      const path = await getRandomTea(locale)
      if (path) {
        router.push(path)
      } else {
        alert("All teas made! Congratulations!")
      }
    })
  }

  return (
    <button 
      onClick={handleClick}
      disabled={isPending}
      className="bg-morandi-blue text-white px-4 py-2 rounded-md hover:bg-morandi-blue-light hover:text-morandi-fg transition-colors shadow-sm disabled:opacity-50"
    >
      {isPending ? '...' : text}
    </button>
  )
}
