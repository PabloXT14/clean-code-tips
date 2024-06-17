import { useState } from 'react'
import {
  LuBadgePlus,
  LuClock4,
  LuFileCheck,
  LuFileX,
  LuRefreshCcw,
  LuCheckCircle2,
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
    <div className="h-screen w-full overflow-hidden pt-16">
      <div className="mx-auto h-full max-w-[450px]">
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
                <span className="text-xs text-zinc-50">24 Tasks</span>
              </div>
            </div>

            {/* In process */}
            <div className="flex items-center gap-3 rounded-2xl bg-amber-400 p-4">
              <div className="rounded-full bg-amber-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuClock4 className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">In process</h3>
                <span className="text-xs text-zinc-50">12 Tasks</span>
              </div>
            </div>

            {/* Completed */}
            <div className="flex items-center gap-3 rounded-2xl bg-teal-400 p-4">
              <div className="rounded-full bg-teal-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuFileCheck className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">Completed</h3>
                <span className="text-xs text-zinc-50">42 Tasks</span>
              </div>
            </div>

            {/* Canceled */}
            <div className="flex items-center gap-3 rounded-2xl bg-rose-400 p-4">
              <div className="rounded-full bg-rose-400/60 p-3 text-zinc-100 backdrop-brightness-75">
                <LuFileX className="size-6" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">Canceled</h3>
                <span className="text-xs text-zinc-50">8 Tasks</span>
              </div>
            </div>
          </section>

          <h2 className="mb-3 text-xl font-semibold">Recent Tasks</h2>

          <ul className="space-y-4 overflow-y-auto">
            <li>
              {/* Task Card */}
              <div className="relative flex items-center rounded-2xl border border-zinc-900 bg-white p-4 pr-5">
                {/* Left side */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Website for Rune.io</h3>
                  <span className="mb-2 block text-xs text-zinc-400">
                    Digital Product Design
                  </span>
                  <div className="flex items-center gap-1">
                    <LuCheckCircle2 className="size-4" />
                    <span className="text-xs font-medium">12 Tasks</span>
                  </div>
                </div>

                {/* Right side */}
                <div>
                  {/* Progress Bar Container */}
                  <div className="relative size-16">
                    {/* mesmo valor em rem no stroke do circle */}
                    {/* Outer */}
                    <div className="size-16 rounded-full border-[0.4rem] border-zinc-200">
                      {/* Inner */}
                      <div className="flex h-full w-full items-center justify-center">
                        {/* Number */}
                        <div className="text-sm font-semibold text-zinc-900">
                          40%
                        </div>
                      </div>
                    </div>

                    {/* SVG Progress Bar */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="100%"
                      height="100%"
                      className="absolute left-0 top-0 -rotate-90"
                    >
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="#FEC347" />
                          <stop offset="100%" stopColor="#F26E56" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="50%"
                        cy="50%"
                        r="43.85%"
                        strokeLinecap="round"
                        strokeDasharray={200}
                        strokeDashoffset={200 - (200 * 40) / 100}
                        className="fill-none stroke-rose-400 stroke-[0.4rem]"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute left-1/2 top-1.5 z-[-1] h-full w-[98.5%] -translate-x-1/2 rounded-3xl bg-zinc-900" />
              </div>
            </li>
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
