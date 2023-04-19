
function suma(){
    var num1, num2, resul;
    num1=parseInt(prompt("Primer número", ""));
    num2=parseInt(prompt("Segundo número", ""));
    resul=num1+num2;
    alert("La suma es: "+resul);

}
function resta(){
    var num1, num2, resul;
    num1= parseInt(prompt("Primer número", ""));
    num2= parseInt(prompt("Segundo número", ""));
    resul= num1-num2;
    alert("El resultado de la resta es: "+resul);
}

function multi(){
    
    num1 = parseInt(prompt("Primer número", ""));
    num2 = parseInt(prompt("Segundo número", ""));
    resul= num1*num2;
    alert("El resultado de la multiplicación es: "+resul );
}

function divi(){
    num1 = parseInt(prompt("Primer número", ""));
    num2 = parseInt(prompt("Segundo número", ""));
    resul= num1/num2;
    alert("El resultado de la división es: "+resul);
}

function poneg(){
    var num=prompt("Número:", "");
    if(parseInt(num)>0)
        alert("El número es positivo");
    else
        if(parseInt(num)<0) 
        alert("El número es negativo");   
}
