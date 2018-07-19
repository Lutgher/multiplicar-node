// const { argv }=require('./config/yargs');
const argv=require('./config/yargs').argv;
const colors=require('colors');
// const { crearArchivo }=require('./multiplicar/multiplicar');
// const multplicar=require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla }=require('./multiplicar/multiplicar');

let comando=argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo=> console.log(`El archivo ${ archivo.green } ha sido creado`))
        .catch(e=>console.log(e));
    break;
    case 'borrar':
        console.log('Borrar');
    break;
    default:
        console.log('Comando no reconocido')
}



//let base='1';
// console.log(multiplicar.crearArchivo(base));

// let argv=process.argv;
// let argv2=process.argv;

// console.log(argv.base);
// console.log('limite',argv.limite);
// console.log(argv2);

// let parametro=argv[2];
// let base=parametro.split('=')[1];
// console.log(parametro);
// console.log(process.argv);
