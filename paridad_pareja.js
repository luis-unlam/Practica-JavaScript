//let vect=[2,5,3,8];
let vect=[1,3,4,5,6];
console.log(vect);
let pares=[''];
let parejas=[''];

let indice=vect.length;

let indicePar=0;
let suma=0;

let aux1=1;
let aux2=0;

console.log(indice);

for(i=0;i<indice;i++){
    par=vect[i]%2;
    if(par==0){
        indicePar++;
        pares[indicePar-1]=vect[i];
    }
}
console.log(indicePar);
console.log(pares);

for(i=0;i<indice;i++){
    for(i1=0;i1<indice;i1++){
        if(i==i1){
            aux2++;
        }
        if(i!=i1){
            suma=vect[i]+vect[i1]
            for(i2=0;i2<indicePar;i2++){
                if(suma==pares[i2]){
                    console.log(suma);
                    console.log(vect[i]);
                    console.log(vect[i1]);
                }
            }    
        }
    }
}



/*for(i=0;i<indice;i++){
    for(i1=0;i1<indice;i1++){
        if(i!=i1){
        suma=vect[i]+vect[i1]
        if(suma==8){
            aux=aux+1;
        }
        }
    }
}*/





/*
for(i=0;i<indice;i++){
    aux1=vect[i];
    for(i1=0;i1<indice;i1++){
        if(i==i1){

        }
        else{
        aux2=aux1+vect[i1];
            for(i3=0;i3=indicePar-1;i++){
              if(aux2=pares[i3]){
                  console.log(pares[i3])
              }  
            }
        }
    }
}
*/
