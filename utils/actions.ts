'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData: FormData) => {
  await db.todo.create({
    data: {
      content: formData.get('content') as string,
      title: formData.get('title') as string,
    },
  })

  revalidatePath('/todos')
}

export const toggleCompleteTodo = async (id: string, done: boolean) => {
  await db.todo.update({
    where: { id },
    data: { done: !done },
  })

  revalidatePath('/todos')
}
