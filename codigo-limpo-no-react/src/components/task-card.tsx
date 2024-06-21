import { LuCheckCircle2 } from 'react-icons/lu'
import { Todo } from '../types/todo'
import { twMerge } from 'tailwind-merge'
import { calculatePercentage } from '../utils/calculate-percentage'

type TaskCardProps = {
  todo: Todo
}

export const TaskCard = ({ todo }: TaskCardProps) => {
  return (
    <div className="relative">
      <div className="relative z-10 flex items-center rounded-2xl border border-zinc-900 bg-white p-4 pr-5">
        {/* Left side */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{todo.title}</h3>
          <span className="mb-2 block text-xs text-zinc-400">
            {todo.description}
          </span>
          <div className="flex items-center gap-1">
            <LuCheckCircle2 className="size-4" />
            <span className="text-xs font-medium">{todo.totalTasks} Tasks</span>
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
                  {calculatePercentage(todo.completedTasks, todo.totalTasks)}%
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
                strokeDashoffset={
                  230 -
                  (230 *
                    calculatePercentage(todo.completedTasks, todo.totalTasks)) /
                  100
                }
                className={twMerge(
                  'fill-none stroke-[0.4rem]',
                  todo.status === 'on going' && 'stroke-blue-400',
                  todo.status === 'in progress' && 'stroke-amber-400',
                  todo.status === 'completed' && 'stroke-teal-400',
                  todo.status === 'canceled' && 'stroke-rose-400',
                )}
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Bottom Border */}
      <div className="absolute left-1/2 top-1 z-0 h-full w-[96.5%] -translate-x-1/2 rounded-2xl bg-zinc-900" />
    </div>
  )
}
