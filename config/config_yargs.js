const opciones = {

    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como terminada o pendiente la tarea'
    }

}

const argv = require('yargs')
    .command('listar', 'Lista las tareas por hacer')
    .command('crear', 'Crea una tarea por hacer', opciones)
    .command('actualizar', 'Actualiza las tareas por hacer', opciones)
    .command('borrar', 'Borra la tarea por hacer', opciones)
    .help()
    .argv;

module.exports = {
    argv
}