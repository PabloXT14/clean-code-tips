import { useState } from 'react'
import {
  LuBadgePlus,
  LuClock4,
  LuFileCheck,
  LuFileX,
  LuRefreshCcw,
} from 'react-icons/lu'

export function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      status: 'active',
    },
    {
      id: 2,
      text: 'Learn TypeScript',
      status: 'active',
    },
    {
      id: 3,
      text: 'Learn Tailwind',
      status: 'active',
    },

    {
      id: 4,
      text: 'Learn React Native',
      status: 'active',
    },
  ])

  // const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen w-full pt-16">
      <div className="mx-auto max-w-[450px]">
        <header className="mb-8 flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/18.jpg"
              alt=""
              className="size-14 rounded-full object-cover"
            />

            <div className="self-end">
              <h1 className="text-2xl font-semibold">Hi, Bruce 👋</h1>
              <p className="text-sm/4 text-zinc-500">
                Your daily adventure starts now
              </p>
            </div>
          </div>

          <button
            onClick={() => {}}
            title="Add new task"
            className="flex items-center justify-center rounded-xl bg-zinc-200/60 p-3"
          >
            <LuBadgePlus className="size-7" />
          </button>
        </header>

        <main>
          <section className="mb-8 grid grid-cols-2 gap-4">
            {/* On going */}
            <div className="flex items-center gap-3 rounded-2xl bg-blue-400 p-4">
              <div className="rounded-full bg-blue-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuRefreshCcw className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">On going</h3>
                <span className="text-xs text-zinc-700">24 Tasks</span>
              </div>
            </div>

            {/* In process */}
            <div className="flex items-center gap-3 rounded-2xl bg-amber-400 p-4">
              <div className="rounded-full bg-amber-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuClock4 className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">In process</h3>
                <span className="text-xs text-zinc-700">12 Tasks</span>
              </div>
            </div>

            {/* Completed */}
            <div className="flex items-center gap-3 rounded-2xl bg-teal-400 p-4">
              <div className="rounded-full bg-teal-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuFileCheck className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">Completed</h3>
                <span className="text-xs text-zinc-700">42 Tasks</span>
              </div>
            </div>

            {/* Canceled */}
            <div className="flex items-center gap-3 rounded-2xl bg-rose-400 p-4">
              <div className="rounded-full bg-rose-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuFileX className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">Canceled</h3>
                <span className="text-xs text-zinc-700">8 Tasks</span>
              </div>
            </div>
          </section>

          <h2>Advantages</h2>

          <section>
            <div>
              <h3>Blazing fast</h3>
              <p>This to-do list app is insanely fast.</p>
            </div>

            <div>
              <h3>Easy to use</h3>
              <p>You can add and remove todos in seconds.</p>
            </div>
          </section>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </main>

        <footer></footer>
      </div>
    </div>
  )
}
