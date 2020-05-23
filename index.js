
const argv = require('./config/yargs').argv 


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

