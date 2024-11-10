console.log("Hola, mundo desde un archivo externo!");

let a=5;
let b=3;
let resultado =((a + b - 2)* 3) / 2;
console.log(resultado);
resultado += 1;
console.log(a > b);
console.log(a === b);
console.log(resultado % 3 == 0 ? "👍" : "👎");
let cadena = "Hola, " + "mundo";
console.log(cadena);

// let edad =18;
//  if (edad >=18){
//     console.info("Eres mayor de edad");
//  }else{
//     console.warn("Eres menor de edad");
//  }

let anio=prompt("En que year naciste?");
let anio_actual=new Date().getFullYear();
let edad=anio_actual-anio;

if(edad>=18){
    console.info("Eres mayor de edad");
}else if (edad >= 12 && edad <18){
    if(edad==12){
        console.log("Eres un preadolecente");
    }else{
        console.log("Eres un adolescente");
    }
}else{
    console.warn("Eres un nino");
}


let dia = parseInt(prompt("Ingresa un numero del 1 al 7"));

switch(dia){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.error("Dia no valido");
}

function suma(){
    return a+b;
}

 resultado = suma(5,3);
console.log(resultado);



let resta = function(a,b){
    return a-b;
}

console.log(resta(5,3));


let multiplicacion =(a,b)=>a*b;

console.log(multiplicacion(5,3));


let objeto={
    nombre:"sergio",
    saludar:function(){
        setTimeout(()=>{
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};

objeto.saludar();

let frutas=["🍎","🍐","🍇","🍓"];

frutas.push("🥭")
frutas.unshift("🍌");
frutas.pop();
console.log(frutas);

let frutas2=frutas.slice(1, 3);
console.log(frutas2.join("-"));
console.log(frutas.length);
console.log(frutas.indexOf("🍇"));

let frutas3=frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);