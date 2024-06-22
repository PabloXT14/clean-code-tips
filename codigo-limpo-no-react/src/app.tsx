import { useState } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Status } from './components/status'
import { Todo } from './types/todo'
import { TaskCard } from './components/task-card'

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Website for Rune.io',
      description: 'Digital Product Design',
      totalTasks: 12,
      completedTasks: 5,
      status: 'canceled',
    },
    {
      id: 2,
      title: 'Dashboard for ProSavvy',
      description: 'Digital Product Design',
      totalTasks: 12,
      completedTasks: 9,
      status: 'completed',
    },
    {
      id: 3,
      title: 'Mobile Apps for Track.id',
      description: 'Digital Product Design',
      totalTasks: 12,
      completedTasks: 6,
      status: 'in progress',
    },
    {
      id: 4,
      title: 'Website for CourierGo.com',
      description: 'Digital Product Design',
      totalTasks: 12,
      completedTasks: 5,
      status: 'on going',
    },
  ])

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden border">
      <div className="mx-auto flex h-full max-w-[450px] flex-col">
        <Header
          onCreateNewTodo={() => {
            console.log('create new todo')
          }}
        />

        <main className="flex flex-1 flex-col overflow-hidden">
          <Status
            taskStatus={{
              onGoingTasks: 24,
              inProcessTasks: 12,
              completedTasks: 42,
              canceledTasks: 8,
            }}
          />

          <h2 className="mb-3 text-xl font-semibold">Recent Tasks</h2>

          {/* Tasks List */}
          <ul className="flex-1 space-y-4 overflow-y-auto">
            {todos.map((todo) => (
              <li key={todo.id}>
                <TaskCard todo={todo} />
              </li>
            ))}
          </ul>
        </main>

        <Footer />
      </div>
    </div>
  )
}
