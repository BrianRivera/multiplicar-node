const fs = require('fs');
var colors = require('colors');

let crearArchivo = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error(`no es unn numero`);
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}a${limite}.txt`, data, (err) => {
        if (err) throw new Error(`asd ${err}`);
    });
    return `ta weno la tabla del ${base}`;

}

//se pueden definir parametros por defecto
let ListarTabla = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error(`deve ingresar numeros en ambas variables`);
    }


    let respuesta2 = ' ============================ \n ==========TABLA DE ${base}================== \n ============================'.green;
    let respuesta = respuesta2 + '\n';
    for (let i = 1; i <= limite; i++) {
        respuesta += `${base} * ${i} = ${base*i} \n`
    }
    return respuesta;

}

module.exports = {
    crearArchivo,
    ListarTabla
}