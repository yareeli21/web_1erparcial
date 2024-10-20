function ordenar(){
    let numeros=document.getElementById('entrada').value;

    //convertir
    let array=numeros.split(',').map(Number);
    //función para ordenar
    let final=array.sort((a,b) => a-b);

    document.getElementById('resultado').innerHTML="Arreglo ordenado: " + final.join(', ');

}
