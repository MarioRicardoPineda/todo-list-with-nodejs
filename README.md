
# App TO-DO List

App de consola hecha con Nodejs, usando un modulo llamdo yargs.

Para poder usar correctamente la app deberá descargar las dependdencias con el siguiente comando: 

```javascript
npm install
```

## La aplicacion es capaz de: 

* Crear una tarea
* Listar las tareas
* actualizar las tareas
* Eliminar las tareas

#### Para crear una tarea usa este comando:

```javascript
node index create --description "ej: Mi Primera Tarea"
```

#### Para listar las tareas usa este comando:

```javascript
node index read
```

#### Para actualizar las tareas usa este comando:

```javascript
  node index update --description "ej: Mi Primera Tarea"
```

**NOTA :** 

Considera que la descripción debe ser sintácticamente igual a la anteriormente creada, para que pueda funcionar sin problemas.

Para Actualizar una tarea, posiblemente, desees darla por completado, para eso solo agrega este comando:

```javascript
node index update --description "ej: Mi Primera Tarea" --complete true
```

#### Para eliminar una tarea usa este comando:

```javascript
node index delete --description "ej: Mi Primera Tarea"
```

**NOTA :**

Igual que en el comando 'Update' la descripción debe ser igaul a la que deseas eliminar