import fs from 'fs'
import logSymbols from 'log-symbols'
import chalk from 'chalk'
import inquirer from 'inquirer'
import ora from 'ora'
import downloadGit from 'download-git-repo'
import { Prompt, Answer, Frame } from './@types/prompt'
import config from './config'

export const checkFolder = async (name: string) => {
  return new Promise((resolve) => {
    if (fs.existsSync(name)) {
      console.log(logSymbols.error, chalk.red('文件夹名已被占用，请更换名字重新创建'))
    } else {
      resolve()
    }
  })
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

export const downloadTemplate = (frame: Frame, projectName: string) => {
  let loading = ora('模板下载中...')
  loading.start('模板下载中...')
  let source
  if (frame === 'vue') {
    source = config.vueSource
  } else {
    source = config.reactSource
  }
  console.log(source)

  downloadProject(projectName, source).then(() => {
    loading.succeed('模板下载完成')
    const path = process.cwd() + `\\${projectName}`
    fs.opendir(path, (err, dir) => {
      console.log(err)
      console.log(dir)
    })
  }).catch((err) => {
    console.log(logSymbols.error, chalk.red(err))
    console.log(logSymbols.error, chalk.red('模板下载失败'))
    process.exit(1)
  })
}

export const downloadProject = (projectName: string, source: string) => {
  return new Promise((resolve, reject) => {
    downloadGit(source, projectName, { clone: true }, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
}