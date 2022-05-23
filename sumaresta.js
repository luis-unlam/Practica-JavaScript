const selection=document.querySelector("#selection");

const ej_1_container=document.querySelector(".suma_resta");
const ej_2_container=document.querySelector(".paridad_pareja");
const ej_3_container=document.querySelector(".palindromo");
const ej_4_container=document.querySelector(".romanos");



selection.addEventListener("change",function(){
    switch(selection.value){
        case "sumayresta":
            ej_1_container.style="display: block";
            ej_2_container.style="display: none";
            ej_3_container.style="display: none";
            ej_4_container.style="display: none";
        break;
        case "paridad":
            ej_1_container.style="display: none";
            ej_2_container.style="display: block";
            ej_3_container.style="display: none";
            ej_4_container.style="display: none";
        break;
        case "palindromo":
            ej_1_container.style="display: none";
            ej_2_container.style="display: none";
            ej_3_container.style="display: block";
            ej_4_container.style="display: none";
        break;
        case "romanos":
            ej_1_container.style="display: none";
            ej_2_container.style="display: none";
            ej_3_container.style="display: none";
            ej_4_container.style="display: block";
        break;
    }
})




const sButton=document.querySelector("#sumaButton");
let number1_s=document.querySelector("#valor1_s");
let number2_s=document.querySelector("#valor2_s");
const resultadoS=document.getElementById("resultadoSuma");

const rButton=document.querySelector("#restaButton");
let number1_r=document.querySelector("#valor1_r");
let number2_r=document.querySelector("#valor2_r");
const resultadoR=document.getElementById("resultadoResta");

sButton.addEventListener("click" , function(){
    let valorInput1_s=number1_s.value;
    let valorInput2_s=number2_s.value;
    imprimirResultadoSuma(valorInput1_s, valorInput2_s);
})

rButton.addEventListener("click" , function(){
    let valorInput1_r=number1_r.value;
    let valorInput2_r=number2_r.value;
    imprimirResultadoResta(valorInput1_r, valorInput2_r);
})




function imprimirResultadoSuma(array,number){
    let arrrayS=array.split(',').map(Number);
    //let resultado2=sumar(arrrayS,number);
    resultadoS.innerHTML="<p>" + sumar(arrrayS,number) +  "</p>"
}

function imprimirResultadoResta(array,number){
    let arrrayR=array.split(',').map(Number);
    //let resultado2=restar(arrrayR,number);
    resultadoR.innerHTML="<p>" + restar(arrrayR,number) +  "</p>"
}


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
    return resultado;
    console.log(resultado);
}