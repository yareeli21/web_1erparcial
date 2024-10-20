function proSum(){
    let n1=document.getElementById('numero1').value;
    //se puede de esta forma para asegurarnos de que sean números enteros
    let n2= parseInt(document.getElementById('numero2').value)
    //o de esta forma que sean números
    n1=parseInt(n1);
    let resultado=0
    //para evitar problemas de que el segundo número sea negativo, se le aplica el valor absoluto
    const posi2=Math.abs(n2);

    let i;
    //bucle para la suma repetiva de n1, por n2 veces
    for(i=0; i<posi2; i++){
        //se van acumulando las sumas tantas n2 veces
        resultado += n1;
    }
    //si ambos números tienen signos diferentes, el resultado será negativo
    if((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)){
        resultado = -resultado;
    }
    //ahora para mostrar el resultado en el div de html
    document.getElementById('resultado').innerHTML=resultado;

}