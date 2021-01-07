const fs = require('fs');
let listadoPorHacer = [];

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`database/data.json`, data, (err) => {
        if (err) throw new Error('No se puedo guardar', err);
    });

}

const obtenetareas = () => {
    try {
        return listadoPorHacer = require('../database/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const actualizar = (descripcion, completado) => {
    obtenetareas();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    obtenetareas();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index);
        guardar();
        return true;

    } else {
        return false;
    }
}

const crear = (descripcion) => {
    obtenetareas();
    let tarea = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(tarea);
    guardar();
    return tarea;
}

module.exports = {
    crear,
    obtenetareas,
    actualizar,
    borrar
}