function par(){
    let number = document.getElementById('numero').value;
    
    //convertir la entrada de número a entero
    number=parseInt(number);
    //variable para almacenar el resultado de si es o no es par que se pondrá en el párrafo de html
    let resultado=document.getElementById('resultado').innerHTML;
    if (number%2 === 0){
        //document.textContent("Es par");
       // console.log(number + "es par :)");
       resultado.textContent=number +" " + "es par :)";
    }
    else{
        //esto dice que pone la variable resultado en un contenedor de texto
        resultado.textContent=number + " " + "no es par):";
        //console.log(number + "no es par ):");
       // document.textContent("no es par")
    }
}

