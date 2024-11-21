function saludar(){
    let salida=document.getElementById("salida_boton");

    salida.innerText="Hola desde la funcion saludar";
}

let otro_boton=document.getElementById("otro_boton");

otro_boton.addEventListener("click", function(){
    let salida=document.getElementById("salida_otro");
    salida.innerText="Otro saludo 😎";
});

otro_boton.addEventListener("mouseenter", function(){
    this.innerText="Entro el mouse";
});

otro_boton.addEventListener("mouseleave", function(){
    this.innerText="salio el mouse";
});

otro_boton.addEventListener("mousemove", function(){
    this.innerText="🐁";
});

let nombreTxt=document.getElementById("nombre");
let salida_teclado=document.getElementById("salida_teclado");

nombreTxt.addEventListener("keydown", function(event){
    salida_teclado.innerHTML=`se presiono <kbd>${event.key}</kbd>`;
});

let miform=document.getElementById("miform");
miform.addEventListener("submit", function (event){
    event.preventDefault();

    //alert("se intento procesar el formulario");
    let aTxt=document.getElementById("a");
    let bTxt=document.getElementById("b");
    //console.log(a,b);
    let salida=document.getElementById("salida_suma");

    let a=parseInt(aTxt.value);
    let b=parseInt(bTxt.value);
    let resultado=a + b;
    salida.innerText=resultado;
});