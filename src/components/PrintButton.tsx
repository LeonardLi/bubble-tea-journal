'use client'
import { Printer } from 'lucide-react'

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="border border-journal-gold text-journal-gold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-journal-gold-light transition-colors text-sm font-medium"
    >
      <Printer size={15} />
      {label}
    </button>
  )
}
