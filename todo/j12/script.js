function textos(){
    let textos=document.getElementById('entrada').value;

    //convertir esa cadena en arreglo de textos
    let array=textos.split(',').map(text => text.trim());
    //un arreglo de textos se inicializa con un espacio
    let resultado=' ';
    //ahora se va a procesar cada texto del arreglo de textos

    array.forEach(text => {
        //variables para cada categoría de cada cadena
        //primera para la longitud
        let longitud=text.length;
        //para las mayus
        let mayusculas=text.toUpperCase();
        //para las minnus
        let minusculas=text.toLowerCase();
        
        //construir el resultado en html, se van acumulando
        resultado += "Texto: " + text + "\n";
        resultado += "Longitud: " + longitud + "\n";
        resultado += "Mayúsculas: " + mayusculas + "\n";
        resultado += "Minúsculas: " + minusculas + "\n";
         resultado += `<hr>`;
        resultado += "\n"; //para separar

    });

    document.getElementById('resultado').innerHTML=resultado;

}