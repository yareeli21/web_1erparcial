
function pares(){
    let i;
    let output=document.getElementById("pares");
    output.textContent="";
for(i=1; i<=100; i+=2){
    console.log(i);
    output.textContent +=i + " "; //se añade cada número a la cajita
}
}
window.onload=pares;