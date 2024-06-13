var numero1;
var numero2;
numero1=parseInt(prompt("ingresa el numero 1:",""));
numero2=parseInt(prompt("ingresa el numero 2:",""));
if (numero1 > numero2)
 {
    document.write("El número mayor es:" + "<br>" + numero1 + "<br>" + "(Numero 1)");
  
 }
   else 
     {
       document.write("El número mayor es:" + "<br>" + numero2 + "<br>" + "(Numero 2)");
     }