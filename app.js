//propia de node

//no nativo pero expancion hecha por otro (ej: laravel de php)
//const fs = require('express');
//archivos del software
//const fs = require('./fs');
//la misma wea que php
const argv = require('./config/yargs').argv;
const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar.js');
var colors = require('colors');

let commando = argv._[0];

switch (commando) {
    case 'Listar':
        console.log(`listar`);

        ListarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log(err));

        break;

    case 'crear':
        console.log(`crear`);

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${ archivo.blue}`))
            .catch(err => console.log('error de async ', err));

        break;
    default:
        console.log(`comando no reconocido`);

        break;
}