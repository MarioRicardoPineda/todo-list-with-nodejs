const color = require('colors')
const argv = require('./config/yargs').argv 
const todo = require('./TODO/todo-list')


let command = argv._[0]

switch (command) {
  
  case 'create':
    todo.createTodo( argv.description )
    break;

  case 'read':

    let list = todo.getList()

    for (const l of list) {
      console.log('==========tarea=========='.green)
      console.log( l.description.yellow )
      console.log( l.complete )
      console.log('========================='.green)
    }

    break;

  case 'update':
    let update = todo.update( argv.description, argv.complete )
    console.log(update) 
    break;

  case 'delete':
    let deleteTodo = todo.deleteTodo( argv.description )
    console.log(deleteTodo) 
    break;

  default:
    console.log('Comando no es reconocido')
    break;
}

