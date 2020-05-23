
const fs = require('fs')

let todoList = []

const saveDB = () => {

  const data = JSON.stringify(todoList)

  fs.writeFile('db/data.json', data, err => {
    if(err) throw new Error('No se puedo gaurdar', err)
  })

}

const loadTodo = _ => {

  try {
    todoList = require('../db/data.json')
  } catch (err) {
    todoList = []
  }

}


const createTodo = description => {

  loadTodo()
  
  const todo = {
    description,
    complete: false
  } 

  todoList.push(todo)

  saveDB()

  return todo
}

const getList = _ => {

  loadTodo()

  return todoList
}

const update = (description, complete = true) => {

  loadTodo()

  let index = todoList.findIndex( tarea => tarea.description === description )

  if (index !== -1) {
    todoList[index].complete = complete
    saveDB()
    return true
  }else{
    return false
  }

}

const deleteTodo = description => {

  loadTodo()

  let index = todoList.findIndex( tarea => tarea.description === description )

  console.log(index)
  if (index !== -1) {
    todoList.splice(index, 1)
    saveDB()
    return true
  }else{
    return false
  }

}

module.exports = {
  createTodo,
  saveDB,
  getList,
  update,
  deleteTodo
}