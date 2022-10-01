function suma(){

var A;
var B;
var SUMA;

A= parseInt(prompt("por favor ingrese el primer valor"));
B= parseInt(prompt("por favor ingresar el segundo valor"));

SUMA= A + B;
alert("el resultado de la suma es: "+ SUMA);

}
function opbasicas(){

var A;
var B;
var SUMA;
var RESTA;
var MUL;
var DIV;

A= parseInt(prompt("por favor ingrese el primer valor"));
B= parseInt(prompt("por favor ingresar el segundo valor"));

SUMA= A + B;
RESTA= A - B;
MUL= A * B;
DIV= A / B;
alert("el resultado de la suma es: "+ SUMA);
alert("el resultado de la resta es: "+ RESTA);
alert("el resultado de la multiplicacion es: "+ MUL);
alert("el resultado de la division es: "+ DIV);
}
function nMayor(){

    var A;
    var B;

    A= parseInt(prompt("por favor ingrese el primer valor"));
    B= parseInt(prompt("por favor ingresar el segundo valor"));

    if(A == B){
        alert("los valores ingresados son iguales");
    }else if (A>B){
        alert("el numero mayor es: "+ A);
    }else{
        alert("el numero mayor es: " + B);
    }
}   
function nmenor(){

        var A;
        var B;
        var C;

        A= parseInt(prompt("por favor ingrese el primer valor "));
        B= parseInt(prompt("por favor ingrese el segundo valor "));
        C= parseInt(prompt("por favor ingrese el tercer valor "));

        if (A < B && A < C){
            alert ("el numero menor es " + A); 
        }else if(B < A && B < C){
           alert ("el numero menor es " + B);
        }else{
            alert("el numero menor es "+ C);
         }
}
function npar(){

        var A;

        A= parseInt(prompt("por favor ingrese el primer numero"));
        if (A % 2 == 0){
            alert ("el numero par es " + A );
        }else{
            alert ("el numero es impar " + A);
        }
}
function area(){

        var B;
        var A;
        var area;

        B= parseInt(prompt("ingrese la base del triangulo"));
        A= parseInt(prompt("ingrese la altura del triangulo"));

        area= B*A/2; 

        alert ("el area del triangulo es " + area);



}
function metros(){

        var metros;
        var centimetros;

        metros= parseInt(prompt("ingrese el valor en metros"));

        centimetros= metros * 100

        alert ("el valor en centimetros es: " + centimetros + "cm");
}
 function nac(){
    var edad;
    var resultado;

    edad= parseInt(prompt("por favor ingrese su edad"));
    resultado= (edad-2022)*-1;
    alert("su año de nacimiento es "+ resultado);
 }
 function banc(){
    var n;
    var c;
    var a;
    var a_a;
    var suma;

    c= parseFloat(prompt("por favor ingrese su capital"));
    n= parseFloat(prompt("por favor ingrese cuantos años desea contar"));
    a=((c*2)/100)*(12*n);
    a_a= a/n;
    suma= c+a; 
    alert("su capital ingresada fue de : "+c+" su ganancia sera de: " +a+ " para un total de: "+suma);
 }
 function promedio(){
    var a; 
    var b;
    var c;
    var d;
    var e;
    var prom;

    a= parseFloat(prompt("por favor ingrese la primera nota"));
    b= parseFloat(prompt("por favor ingrese la segunda nota"));
    c= parseFloat(prompt("por favor ingrese la tercera nota"));
    d= parseFloat(prompt("por favor ingrese la cuarta nota"));
    e= parseFloat(prompt("por favor ingrese la quinta nota"));

    if(a<=5 & b<=5 & c<=5 & d<=5 & e<=5 & a>=1 & b>=1 & c>=1 & d>=1 & e>=1){
        prom= parseFloat((a+b+c+d+e)/5);
        if(prom<=2.9){
            alert("el estudiante reprobo con: "+prom);
        }else{
            alert("el estudiante aprobo con:" + prom);
        }
    }else{
        alert("uno de los valores ingresados no entra en los parametros de 1 a 5")
    }
 }
 function fruteria(){
    var a=4500;
    var b;
    var valor;
    var valor_d;
    var p;

    p= parseFloat(prompt("por favor ingrese cuanto peso su compra "));
    if(p>0 & p<=2){
        valor= a*p;
        alert("por el momento no tiene ningun descuento, por favor continue comprando");
        alert("su valor a pagar es:" + valor);
    }else if(p>=3 & p<=5){
        valor= a*p;
        d= valor*0.1;
        valor_d=valor-d;
        alert("el total a pagar es de "+valor+" su descuento es de: "+d+" para un total de: "+valor_d);
    }else if(p>=6 & p<=10){
        valor= a*p;
        d= valor*0.15;
        valor_d=valor-d;
        alert("el total a pagar es de "+valor+" su descuento es de: "+d+" para un total de: "+valor_d)
    }else if(p>10){
        valor= a*p;
        d= valor*0.2;
        valor_d=valor-d;
        alert("el total a pagar es de "+valor+" su descuento es de: "+d+" para un total de: "+valor_d)
    }else{
        alert("el valor ingresado no es valido");
    }
 }