import fs from 'fs'
import logSymbols from 'log-symbols'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { Prompt, Answer } from './@types/prompt';

export const checkFolder = async (name: string) => {
  return new Promise((resolve) => {
    if (fs.existsSync(name)) {
      console.log(logSymbols.error, chalk.red('文件夹名已被占用，请更换名字重新创建'))
    } else {
      resolve()
    }
  });
}

export const prompt = () => {
  const prompts: Prompt[] = [
    {
      type: 'list',
      name: 'frame',
      message: 'please choose this project template',
      choices: ['vue', 'react']
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the project description: '
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please enter the author name: '
    }
  ]
  return new Promise<Answer>(resolve => {
    inquirer
      .prompt(prompts)
      .then(answer => {
        resolve(answer)
      })
  })
}