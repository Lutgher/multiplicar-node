const opts={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv=require('yargs')
    .command('listar','Imprime en consola la tabla de multplicar', opts)
    .command('crear','Genera un archivo con el valor de la tabla', opts)
    .help()
    .argv;

module.exports={
    argv
}    