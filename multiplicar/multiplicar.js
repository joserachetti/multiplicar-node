//requireds
const fs = require('fs');
const color = require('colors');
// const fs = require('express');
// const fs = require('./fs');



let listarTabla = (base, limite = 10) => {

    console.log('---------------------'.green);
    console.log(`Tabla del ${base}`.red);
    console.log('---------------------'.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} para el limite no es un número`.red);
            return;
        }


        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${base}*${i} = ${base*i}\n`;

        }

        let err = '';

        if (err) reject(err);

        else resolve(`${data}`);

    })

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} para el limite no es un número`.red);
            return;
        }


        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${base}*${i} = ${base*i}\n`;

        };


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);

            else resolve(`tabla-${base}-al-${limite}.txt`);

        });
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}