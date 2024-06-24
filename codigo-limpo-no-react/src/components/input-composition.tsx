import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'>

const Root = (props: RootProps) => {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

const Control = (props: ControlProps) => {
  return <input {...props} />
}

type LabelProps = ComponentProps<'label'> & {
  text: string
}

const Label = ({ text, ...props }: LabelProps) => {
  return <label {...props}>{text}</label>
}

type IconProps = {
  children: ReactNode
}

const Icon = ({ children }: IconProps) => {
  return { children }
}

type ErrorMessageProps = ComponentProps<'span'> & {
  text: string
}

const ErrorMessage = ({ text, ...props }: ErrorMessageProps) => {
  return <span {...props}>{text}</span>
}

export { Root, Control, Label, Icon, ErrorMessage }
