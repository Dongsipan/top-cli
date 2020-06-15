export type Frame = 'vue' | 'react'

export type Choices = Frame[]

export type Question = 'frame' | 'description' | 'author'

export interface Answer {
  frame: Frame
  description: string
  author: string
}

export interface Prompt {
  type: string
  name: Question
  message: string
  choices?: Choices
}