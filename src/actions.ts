import { Actions } from "./@types/action"
import logSymbols from 'log-symbols'
import chalk from 'chalk'
import { checkFolder, prompt, downloadTemplate } from "./utils"
export const create = async (projectName: string) => {
  console.log(projectName)
  if (projectName === undefined) {
    console.log(logSymbols.error, chalk.red('创建项目的时候，请输入项目名'))
  } else {
    checkFolder(projectName).then(() => {
      prompt().then(answer => {
        if (answer.frame === 'react') {
          console.log(logSymbols.warning, chalk.yellow('react模板还在路上，莫急莫急~'));
          process.exit(1);
        }
        downloadTemplate(answer.frame, projectName)
      })
    })
  }
}

const Actions: Actions = {
  create: {
    description: '创建一个新的项目', // 描述
    usages: [// 使用方法
      'top-cli create ProjectName',
      'topc create ProjectName'
    ],
    alias: 'c' // 命令简称
  },
  init: {
    description: '初始化项目',
    usages: [
      'top-cli init',
      'topc init'
    ],
    alias: 'i'
  },
  dev: {
    description: '本地启动项目',
    usages: [
      'top-cli dev',
      'topc dev'
    ],
    options: [
      {
        flags: '-p --port <port>',
        description: '端口',
        defaultValue: '3000'
      }
    ],
    alias: 'd'
  },
  build: {
    description: '服务端项目打包',
    usages: [
      'top-cli build',
      'topc build'
    ],
    options: [
      {
        flags: '-u --username <port>',
        description: 'github用户名',
        defaultValue: ''
      },
      {
        flags: '-t --token <port>',
        description: 'github创建的token',
        defaultValue: ''
      }
    ],
    alias: 'b'
  }
}

export default Actions
