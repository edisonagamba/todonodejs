const argv = require('./config/config_yargs').argv;
const color = require('colors');
const porhacer = require('./to-do/tareas');
console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        break;

    case 'listar':
        let tareas = porhacer.obtenetareas();
        console.log('===== Tareas por hacer ======='.blue);
        for (let tarea of tareas) {
            if (tarea.completado == true) {
                console.log(`* ${tarea.descripcion} : ${tarea.completado}`.green);
            } else {
                console.log(`* ${tarea.descripcion} : ${tarea.completado}`.red);
            }
            console.log('___________'.yellow);
        }
        console.log('===== ========= ======='.blue);
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        break;
    default:
        console.log('No existe ese comando');

}