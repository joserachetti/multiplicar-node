const argv = require('./config/yargs').argv;
const color = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(`${lista}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido,ejecute (node app --help)'.red);
}






// // console.log(process.argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv2);