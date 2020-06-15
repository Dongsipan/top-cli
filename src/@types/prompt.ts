export type Choice = 'vue' | 'react'

export type Choices = Choice[]

export type Question = 'frame' | 'description' | 'author'

export interface Answer {
  frame: Choice
  description: string
  author: string
}

export interface Prompt {
  type: string
  name: Question
  message: string
  choices?: Choices
}