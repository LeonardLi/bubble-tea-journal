import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { toggleMade, addReview } from '@/app/actions'
import Image from 'next/image'
import { PrintButton } from '@/components/PrintButton'

export default async function TeaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const teaId = Number(id)
  
  const tea = await db.tea.findUnique({
    where: { id: teaId },
    include: { reviews: { orderBy: { createdAt: 'desc' } } }
  })

  if (!tea) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation - Hidden on Print */}
      <div className="mb-6 no-print">
        <Link href="/" className="text-pink-600 hover:underline">← Back to List</Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 print:shadow-none print:border-none print:p-0">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-6 mb-6">
           <div>
             <span className="text-sm font-bold text-pink-600 uppercase tracking-wide">{tea.brand || 'Original Recipe'}</span>
             <h1 className="text-4xl font-bold text-gray-900 mt-1">{tea.name}</h1>
           </div>
           <div className="no-print">
             <form action={async () => {
               'use server'
               await toggleMade(tea.id, !tea.isMade)
             }}>
               <button className={`px-4 py-2 rounded-full font-bold text-sm ${tea.isMade ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                 {tea.isMade ? '✓ Made' : 'Mark as Made'}
               </button>
             </form>
           </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           <div>
             <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-pink-100 inline-block">Ingredients</h2>
             <div className="prose bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0">
               <pre className="whitespace-pre-wrap font-sans text-gray-700 text-sm md:text-base">{tea.ingredients}</pre>
             </div>
           </div>
           <div>
             <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-pink-100 inline-block">Instructions</h2>
             <div className="prose bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 text-sm md:text-base">{tea.steps}</pre>
             </div>
           </div>
        </div>

        {/* Reviews Section - Visible in Print if desired */}
        {tea.reviews.length > 0 && (
          <div className="mt-8 pt-8 border-t print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6">Reviews</h2>
            <div className="space-y-6">
              {tea.reviews.map((review) => (
                <div key={review.id} className="bg-pink-50 rounded-lg p-6 flex gap-4 print:bg-transparent print:border print:p-4 print:break-inside-avoid">
                  {review.photoUrl && (
                    <div className="w-32 h-32 relative flex-shrink-0 print:w-24 print:h-24">
                      <Image src={review.photoUrl} alt="Review" fill className="object-cover rounded-md" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs ml-2">{review.createdAt.toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-700 italic">"{review.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions - No Print */}
        <div className="mt-8 pt-8 border-t no-print">
           <h3 className="text-lg font-bold mb-4">Add a Review</h3>
           <form action={addReview} className="space-y-4 bg-gray-50 p-6 rounded-lg border">
             <input type="hidden" name="teaId" value={tea.id} />
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
               <select name="rating" className="w-full border rounded-md p-2">
                 <option value="5">⭐⭐⭐⭐⭐ (Perfect)</option>
                 <option value="4">⭐⭐⭐⭐ (Good)</option>
                 <option value="3">⭐⭐⭐ (Average)</option>
                 <option value="2">⭐⭐ (Bad)</option>
                 <option value="1">⭐ (Terrible)</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
               <textarea name="comment" required className="w-full border rounded-md p-2" rows={3} placeholder="What did she think?"></textarea>
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
               <input type="file" name="photo" accept="image/*" className="w-full" />
             </div>
             <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 w-full md:w-auto">Submit Review</button>
           </form>

           <div className="mt-8 flex justify-end">
             <PrintButton />
           </div>
        </div>
      </div>
    </div>
  )
}
