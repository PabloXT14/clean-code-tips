import { ReactNode } from 'react'

type InputCustomizedProps = {
  label?: string
  leftIcon?: ReactNode
  icon?: ReactNode
  errorMessage?: string
}

export const InputCustomized = ({
  label,
  leftIcon = null,
  icon = null,
  errorMessage,
}: InputCustomizedProps) => {
  return (
    <div className="flex flex-col">
      {label ? <label>{label}</label> : null}
      {leftIcon}
      <input type="text" />
      {icon}
      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  )
}
