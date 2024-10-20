function multi(){
    let numero=document.getElementById("entrada").value;
    numero=parseInt(numero);
//definimos el arreglo
    let tabla=[];
    let i;
    //ciclo para hacer la multiplicación d¿con cada número
    for(i=1; i<=10; i++){
        //en js así se agregan elementos a un arreglo
      tabla.push(numero*i);
    }
    //la variable resultado para mostrar el resultado jajajaj por medio de una lista desordenada
    let resultado="<h3>Tabla de multiplicar del "+ numero + ":</h3><ul>";
    for(let i=0; i<10; i++){
        //ahora no hará la operación, ahora la mostrará nuevamente con ayuda de un ciclo, se va acumulando
        resultado += "<li>" + numero + "x" + (i+1) + "=" + tabla[i] + "</li>";
    }
    resultado += "</ul>";
    //se pondrá todo en el div de html que definimos, todo lo de la variable resultado
    document.getElementById("resultado").innerHTML = resultado;
}