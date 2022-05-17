function mayoriaEdad(miApellido,miNombre,miEdad){
    console.log("Apellido y nombre:"+miApellido+","+miNombre);
    if(miEdad>=18){
        console.log("es mayor de edad" + "(" + miEdad + ")");}
        else{
            console.log("no es mayor de edad" + "(" + miEdad + ")");}
}

var ape=prompt("ingrese su apellido");
var nom=prompt("ingrese su nombre");
var edad=prompt("ingrese su edad");
mayoriaEdad(ape,nom,edad);