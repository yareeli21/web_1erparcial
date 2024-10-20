function media(){
    let numeros=document.getElementById('entrada').value;

    //convertir en arreglo para poder trabajar en ello
    let secuencia=numeros.split(',').map(Number);
    let suma=0;
    let media;
    let i;
    for(i=0; i<secuencia.length; i++){
     suma += secuencia[i];
    }
    media= suma/secuencia.length;

    document.getElementById('resultado').innerHTML="la media es:" + media;
}