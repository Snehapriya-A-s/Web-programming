function sum(){
var a,b,c;
a=parseInt(document.getElementById('text1').value)
b=parseInt(document.getElementById('text2').value)
c=a+b;
document.getElementById('result').innerHTML="sum "+c
}

function difference(){
var a,b,c;
a=parseInt(document.getElementById('text1').value)
b=parseInt(document.getElementById('text2').value)
c=a-b;
document.getElementById('result').innerHTML="difference "+c
}

function product(){
var a,b,c;
a=parseInt(document.getElementById('text1').value)
b=parseInt(document.getElementById('text2').value)
c=a*b;
document.getElementById('result').innerHTML="product "+c
}

function division(){
var a,b,c;
a=parseInt(document.getElementById('text1').value)
b=parseInt(document.getElementById('text2').value)
c=a/b;
document.getElementById('result').innerHTML="division "+c
}

