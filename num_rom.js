number=25;
console.log(number)

function pasaje(num){
    let miles=parseInt(num/1000,10); 
    num=num%1000;
    let centenas=parseInt(num/100,10);
    num=num%100;
    let decenas=parseInt(num/10,10);
    num=num%10;
    let unidades=num;

    console.log(miles);
    console.log(centenas);
    console.log(decenas);
    console.log(unidades);

    romano=[];

    let auxm;
    if(miles==0){auxm=''}
    switch(miles){
        case 1: romano.push('M');
        auxm="M"
        break;
        case 2: romano.push('MM');
        auxm="MM"
        break;
        case 3: romano.push('MMM');
        auxm="MMM"
        break;
    }
    let auxc;
    if(centenas==0){auxc=''}
    switch(centenas){
        case 1: romano.push('C');
        auxc="C"
        break;
        case 2: romano.push('CC');
        auxc="CC"
        break;
        case 3: romano.push('CCC');
        auxc="CCC"
        break;
        case 4: romano.push('CD');
        auxc="CD"
        break;
        case 5: romano.push('D');
        auxc="D"
        break;
        case 6: romano.push('DC');
        auxc="DC"
        break;
        case 7: romano.push('DCC');
        auxc="DCC"
        break;
        case 8: romano.push('DCCC');
        auxc="DCCC"
        break;
        case 9: romano.push('CM');
        auxc="MC"
        break;
    }
    let auxd;
    if(decenas==0){auxd=''}
    switch(decenas){
        case 1: romano.push('X');
        auxd="X"
        break;
        case 2: romano.push('XX');
        auxd="XX"
        break;
        case 3: romano.push('XXX');
        auxd="XXX"
        break;
        case 4: romano.push('XL');
        auxd="XL"
        break;
        case 5: romano.push('L');
        auxd="L"
        break;
        case 6: romano.push('LX');
        auxd="LX"
        break;
        case 7: romano.push('LXX');
        auxd="LXX"; 
        break;
        case 8: romano.push('LXXX');
        auxd="LXXX"     
        break;
        case 9: romano.push('CX');
        auxd="CX"
        break;
    }
    let auxu;
    switch(unidades){
        case 1: romano.push('I');
        auxu="I"
        break;
        case 2: romano.push('II');
        auxu="II"
        break;
        case 3: romano.push('III');
        auxu="III"
        break;
        case 4: romano.push('IV');
        auxu="IV"
        break;
        case 5: romano.push('V');
        auxu="V"
        break;
        case 6: romano.push('VI');
        auxu="VI"
        break;
        case 7: romano.push('VII');
        auxu="VII"
        break;
        case 8: romano.push('VIII');
        auxu="VIII"
        break;
        case 9: romano.push('IX');
        auxu="IX"
        break;
    }
    console.log(romano);
    console.log(auxm+auxc+auxd+auxu);
}
pasaje(number)