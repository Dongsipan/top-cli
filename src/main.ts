import { program } from 'commander'
import addAction from './command';
import { loadCommand } from './utils';

loadCommand('yarn', '安装依赖', 'vuetest')
addAction()

program.version(require('../package.json').version, '-v --version')
  .parse(process.argv)

/**
 * top-cli命令后不带参数的时候，输出帮助信息
 */
if (!process.argv.slice(2).length) {
  program.outputHelp();
}