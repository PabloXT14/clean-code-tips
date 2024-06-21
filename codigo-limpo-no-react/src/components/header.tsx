import { LuBadgePlus } from 'react-icons/lu'

export const Header = () => {
  return (
    <header className="my-8 flex w-full items-center justify-between">
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
        onClick={() => {
          console.log('add new task')
        }}
        title="Add new task"
        className="flex items-center justify-center rounded-xl bg-zinc-200/60 p-3"
      >
        <LuBadgePlus className="size-7" />
      </button>
    </header>
  )
}
