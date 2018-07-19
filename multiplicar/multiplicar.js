const fs=require('fs');
const colors=require('colors');
//module.exports.crearArchivo
let crearArchivo=( base, limite = 10 )=>{
    return new Promise((resolve, reject)=>{
        if( !Number(base) ){
            reject('No es un número')
            return;
        }
        let data='';
        for(let x=1; x<=limite; x++){
            data +=(`${ base } * ${ x } = ${ base * x }\n`);
        }
        fs.writeFile(`tablas/tabla-${base}-al${ limite }.txt`,data,(err)=>{
            if(err) reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

let listarTabla=(base, limite = 10)=>{
    console.log('==========================='.red);
    console.log(`===== Tabla de ${base} ======`.red);
    console.log('==========================='.red);
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('No es un número');
            return;
        }
        for(let i=1;i<=limite; i++){
            console.log(`${ i } * ${ base } = ${ i*base }`);
        }
    });
}

module.exports={
    crearArchivo,
    listarTabla
}