
function multiplica(){
    let i,j;
    //variable tabla
    let tabla="<table border='1'>";
    for(i=1; i<=10; i++){
        //inicia un a nueva fila
        tabla+="<tr>";
        for(j=1; j<=10; j++){
            //agrega celdas a la fila con la concatenación
            tabla+="<td>"+(i*j)+"</td>";
            
           // document.write(i*j);
            //document.write('\t');
    }
    //cierra la fila
    tabla+="</tr>";
    }
    //cierra la tabla
    tabla+="</table>"
    //el getElementById es un método de JS para poder acceder a un elemento específico del DOM
    //utiliza el atributo id , busca y devuelve el primer elemento que tiene el valor de id 
    document.getElementById("final").innerHTML=tabla;
    //se está asignando a la tabla que creamos
}
