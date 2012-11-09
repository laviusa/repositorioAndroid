/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function calcular(){
 var peso = document.getElementById('peso');
 var estatura = document.getElementById('estatura');
 operacion = peso.value / (estatura.value * estatura.value);
 
 if(operacion<18.5)
 {
   alert("Tu masa corporal es: " + operacion +"estas muy flaco"); 
 }else if(18.5< operacion && operacion< 24.9){
    alert("Tu masa corporal es: " + operacion+"estas bien");  
 }else if(25< operacion && operacion< 29.9){
 alert("Tu masa corporal es: " + operacion+"estas un poquito gortit@");
}else if(operacion > 30){
 alert("Tu masa corporal es: " + operacion+"estas  gordote");
}
}