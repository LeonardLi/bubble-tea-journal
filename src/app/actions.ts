'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { redirect } from 'next/navigation'

export async function toggleMade(id: number, isMade: boolean) {
  await db.tea.update({
    where: { id },
    data: { isMade }
  })
  revalidatePath('/')
  revalidatePath(`/tea/${id}`)
}

export async function getRandomTea(locale: string) {
  const unmadeTeas = await db.tea.findMany({
    where: { isMade: false },
    select: { id: true }
  })

  if (unmadeTeas.length === 0) {
    return null
  }

  const randomIndex = Math.floor(Math.random() * unmadeTeas.length)
  const randomTeaId = unmadeTeas[randomIndex].id
  
  // We cannot use redirect() inside a try/catch block if we want the error to be caught by Next.js boundary
  // But here we are just returning the path to the client component to handle navigation
  return `/${locale}/tea/${randomTeaId}`
}

export async function addReview(formData: FormData) {
  const teaId = Number(formData.get('teaId'))
  const rating = Number(formData.get('rating'))
  const comment = formData.get('comment') as string
  const photo = formData.get('photo') as File

  let photoUrl = null
  if (photo && photo.size > 0) {
    const buffer = Buffer.from(await photo.arrayBuffer())
    const filename = `${Date.now()}-${photo.name.replace(/[^a-zA-Z0-9.]/g, '')}`
    const uploadDir = join(process.cwd(), 'public/uploads')
    await mkdir(uploadDir, { recursive: true })
    const path = join(uploadDir, filename)
    await writeFile(path, buffer)
    photoUrl = `/uploads/${filename}`
  }

  await db.review.create({
    data: {
      teaId,
      rating,
      comment,
      photoUrl
    }
  })
  
  // Also mark as made if reviewed
  await db.tea.update({
    where: { id: teaId },
    data: { isMade: true }
  })

  revalidatePath(`/tea/${teaId}`)
  revalidatePath('/')
}