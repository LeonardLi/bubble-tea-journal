'use client'
import { Printer } from 'lucide-react'

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition"
    >
      <Printer size={16} />
      {label}
    </button>
  )
}