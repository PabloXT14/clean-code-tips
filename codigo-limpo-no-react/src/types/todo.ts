export type Todo = {
  id: number
  title: string
  description: string
  totalTasks: number
  completedTasks: number
  status: 'canceled' | 'completed' | 'in progress' | 'on going'
}
