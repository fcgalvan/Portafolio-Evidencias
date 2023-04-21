
function suma(){
    var n1, n2, sum;
    n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
    sum=(n1)+(n2);
    document.getElementById("resul").innerHTML=sum;

}
function resta(){
    var n1, n2, res;
    n1= document.getElementById("num1").value;
    n2= document.getElementById("num2").value;
    res= n1-n2;
    document.getElementById("resul").innerHTML=res;
}

function multi(){
    var n1, n2, mul;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    mul= n1*n2;
    document.getElementById("resul").innerHTML=mul;
}
function divi(){
    var n1, n2, divis;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    divis= n1/n2;
    document.getElementById("resul").innerHTML=divis;
}

