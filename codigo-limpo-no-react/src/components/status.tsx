import { LuClock4, LuFileCheck, LuFileX, LuRefreshCcw } from 'react-icons/lu'

export const Status = () => {
  return (
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
  )
}
