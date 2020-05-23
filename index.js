
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


let command = argv._[0]

switch (command) {
  
  case 'create':
    console.log(argv.description)
    break;

  case 'read':
    console.log('Listar los algo por hacer')
    break;

  case 'update':
    console.log(argv.description)
    break;

  default:
    console.log('Comando no es reconocido')
    break;
}

