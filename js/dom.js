let titulo= document.getElementById("titulo");
titulo.style.color="red";
console.log(titulo.textContent);

let parrafos=document.getElementsByTagName("p");
Array.from(parrafos).forEach((element, index)=>{
    element.innerText="Nuevo parrafo" + (index +1);
});
console.table(parrafos);

let parrafos2=document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor="greenyellow";
parrafos2[1].innerHTML="<strong>Nuevo parrafo</strong>";
console.log(parrafos2[1].textContent);

let parrafo=document.querySelector(".parrafo");
console.log(parrafo.textContent);
parrafo.className="nuevo-parrafo";

let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText ="Nuevo parrafo con emoji";
document.body.appendChild(parrafo_nuevo);
console.log(parrafo_nuevo)

let h1=document.querySelector("h1");
h1.innerText="Titulo dinamico";
let hr=document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.append(hr);

let parrafo=document.querySelector("p");
let padre_parrafo=parrafo.parentElement;
console.log(padre_parrafo);

let lista=document.createElement("ol");
for(let i=1; i<=5;  i++){
    let item=document.createElement("li");
    item.innerText=`elemento ${i}`;
    lista.appendChild(item);
}

// padre_parrafo.appendChild(lista);


// let parrafo =document.querySelector("p");
// document.body.removeChild(parrafo);

// let ultimo_parrafo=document.querySelector("p:last-child");
// ultimo_parrafo.remove();

// let nodo=document.body;
// while(nodo.firstChild){
//     nodo.removeChild(nodo.firstChild);
// }

// document.body.innerHTML="";