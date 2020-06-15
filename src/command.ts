import { program } from 'commander'
import Actions from "./actions"
import { ActionName } from './@types/action'


function addAction() {
  Object.keys(Actions).forEach((key) => {
    const actionName = key as ActionName
    const action = Actions[actionName]
    // 添加选项
    if (action.options) {
      action.options.map(option => {
        program.option(option.flags, option.description, option.defaultValue)
      })
    }
    // 添加命令
    program.command(actionName).description(action.description).alias(action.alias).action(() => {
      switch (actionName) {
        case 'create':
          console.log('create')
          break
        case 'init':
          console.log('init')
          break
        case 'dev':
          console.log('dev')
          break
        case 'build':
          console.log('build')
          break
        default:
          break
      }
    })
  })
}

export default addAction