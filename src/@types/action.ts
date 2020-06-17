export type Option = {
  flags: string
  description: string
  defaultValue: string | boolean
}
export type ActionName = 'create' | 'dev' | 'build'

export type Actions = {
  [K in ActionName]: Action
}

export interface Action {
  description: string
  usages: string[]
  alias: string
  options?: Option[]
}