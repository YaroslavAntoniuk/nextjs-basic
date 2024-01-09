export interface TodoEntity {
  id: string
  title: string
  content: string | null
  done: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Params {
  params: {
    id: string
  }
}
