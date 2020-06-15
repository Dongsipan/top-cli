import { Actions } from "./@types/action"

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
