

const description = {
  alias: 'd',
  demand: true, 
  desc: 'Descripcion de la tarea'
}

const complete = {
  alias: 'c',
  default: false,
  desc: 'Define si la tarea esta o no completada'
}

const argv = require('yargs')
    .command('create', 'Crea una nueva tarea', {
        description
    })
    .command('update', 'Modifica una tarea existente', {
        description,
        complete
    })
    .command('delete', 'Elimina una tarea', {
      description
    })
    .help()
    .argv

module.exports = {
  argv
}