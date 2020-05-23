const options = {
  description: {
    alias: 'd',
    demand: true

  }
}

const argv = require('yargs')
    .command('create', 'Crea una nueva tarea', options)
    .command('update', 'Modifica una tarea existente', options)
    .help()
    .argv

module.exports = {
  argv
}