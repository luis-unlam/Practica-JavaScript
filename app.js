/*function mayoriaEdad(miApellido,miNombre,miEdad){
    console.log("Apellido y nombre:"+miApellido+","+miNombre);
    if(miEdad>=18){
        console.log("es mayor de edad" + "(" + miEdad + ")");}
        else{
            console.log("no es mayor de edad" + "(" + miEdad + ")");}
}

var ape=prompt("ingrese su apellido");
var nom=prompt("ingrese su nombre");
var edad=prompt("ingrese su edad");
mayoriaEdad(ape,nom,edad);*/

/*
var a=5;
var b=10;
if(a==5){
    let a=4;
    var b=15;

    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
*/
/*
 function saludar(nombre){
     alert('hola '+nombre);
 }
  function procesarEntradaUsuario(callback){
      var nombre=prompt('por favor ingresa tu nombre');
      callback(nombre);
  }
  procesarEntradaUsuario(saludar);
*/
/*function sumar(){

    var num1=parseInt(document.getElementById('valor1').value);

    var num2=parseInt(document.getElementById('valor2').value);

    var suma=num1+num2;

    console.log(suma);

    document.form.resultado.value=suma;

}*/
//////////////////////////////////////////SUMA Y RESTA////////////////////////////////////////////

//number1=[1,0,0];
//number2=25;
/*
const selection=document.querySelector("#selection");
const ej_1_container=document.querySelector(".suma_resta");
selection.addEventListener("change",function(){
    if(selection.value == "sumayresta"){
        ej_1_container.style="display: block"
    }
    else{
        ej_1_container.style="display: none"
    } 
})

const sButton=document.querySelector("#sumaButton");
let number1_s=document.querySelector("#valor1_s");
let number2_s=document.querySelector("#valor2_s");




sButton.addEventListener("click" , function(){
    console.log(number1_s.value);
    let valorx=[];
    valorx=parseInt(number1_s.split(","));
    console.log(valorx);
    //sumar(number1_s,number2_s);
})*/




function sumar(array,number){
    let valor1=parseInt(array.join(""));
    let valor2=parseInt(number);
    let suma=valor1+valor2;
    let sumaF2=suma.toString();
    let indi=sumaF2.length;
    var resultado=[];
    for(i=0;i<indi;i++){
        resultado.push(parseInt(sumaF2[i]));
    }
    return resultado;
}
function restar(array,number){
    let valor1=parseInt(array.join(""));
    let valor2=parseInt(number);
    let resta=valor1-valor2;
    let restaF2=resta.toString();
    let indi=restaF2.length;
    var resultado=[];
    if(resta<0){
        resultado=[0]
    }
    else{
        for(i=0;i<indi;i++){
            resultado.push(parseInt(restaF2[i]));
        }
    }
    console.log(resultado);
}
//sumar(number1,number2);
//restar(number1,number2);
