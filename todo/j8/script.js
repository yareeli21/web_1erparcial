function secuencia(){
    let numeros=document.getElementById('numeros').value;

    //js obtiene los cúmeros de html como una cadena, entonces se busca volverlos un arreglo
    //dice que los desplace ya que están separados por una copa y son de tipo number
    let arreglo=numeros.split(',').map(Number);
    
    //Se hace la suposición de que el mayor está en la pos 0
    let mayor=arreglo[0];
   
    //bucle con while para recorrer el arreglo y ver cuál es el mayor
    let i=1;//Se inicia con la posición 1 porque tenemos por default que la del 0 es por lo mientras el mayor
    while(i< arreglo.length){
     if(arreglo[i] > mayor){
        mayor = arreglo[i];
     }
     i++;
    }
    //se iguala a mayor porque es el valor que se mostrará
    document.getElementById('resultado').innerHTML=mayor;
}