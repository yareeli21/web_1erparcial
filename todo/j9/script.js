function vectores(){
    let vectorA=document.getElementById('vectorA').value;
    let vectorB=document.getElementById('vectorB').value;
    //volver esos textos en arreglos de números y eliminando espacios innecesarios
    let vA = vectorA.split(',').map(Number);
    let vB = vectorB.split(',').map(Number);
    if(vA.length !== vB.length){
        //para mostrar un resultado en el div destinado para el resultado
        document.getElementById('resultado').innerHTML="Los vectores deben tener la misma longitud";
        return;
    }
    //inicializamos el tercer vector
    let vC=[];

    let i=0;

    /*for (let i = 0; i < vA.length; i++) {
        vC[i] = vA[i] + vB[i];
    }*/
    do{
        vC[i]=vA[i]+vB[i];
        i++;
    }
    while(i<vA.length);

    document.getElementById('resultado').innerHTML=`Vector resultante: [${vC}]`;
}