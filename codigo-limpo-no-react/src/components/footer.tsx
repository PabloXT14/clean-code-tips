import {
  LuCalendar,
  LuFileCheck,
  LuHome,
  LuPlus,
  LuUser2,
} from 'react-icons/lu'

export const Footer = () => {
  return (
    <footer className="flex w-[calc(100%+4rem)] items-center justify-center gap-14 self-center border-t-2 border-zinc-900 py-5">
      <button>
        <LuHome className="size-6 text-rose-400" />
      </button>
      <button className="opacity-50">
        <LuCalendar className="size-6 text-rose-400" />
      </button>
      <button className="flex size-12 items-center justify-center rounded-full bg-rose-400">
        <LuPlus className="size-6 text-zinc-100" />
      </button>
      <button className="opacity-50">
        <LuFileCheck className="size-6 text-rose-400" />
      </button>
      <button className="opacity-50">
        <LuUser2 className="size-6 text-rose-400" />
      </button>
    </footer>
  )
}
