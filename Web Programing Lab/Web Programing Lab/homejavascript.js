function stringoperations() {
 var val=document.getElementById("strmethod").value;
 var str1,str2;
 if(val=="strupper")
 {
 str1=document.getElementById("string1").value;
 str2=str1.toUpperCase();
 document.getElementById("para1").innerHTML="Convert all letters of str1 to upper case";
 document.getElementById("btn1").value=str2;
 }
 if(val=="strlower")
 {
 str1=document.getElementById("string1").value;
 str2=str1.toLowerCase();
 document.getElementById("para1").innerHTML="convert all letters of str1 to lower case";
 document.getElementById("btn1").value=str2;
 }
 if(val=="strconcat")
 {
 str1=document.getElementById("string1").value;
 str2=document.getElementById("string2").value;
 str2=str1.concat(str2);
 document.getElementById("para1").innerHTML="second string is added at the end of first 
string";
 document.getElementById("btn1").value=str2;
 }
 if(val=="spliting")
 {
 str1=document.getElementById("string1").value;
str2=document.getElementById("string2").value;
 var arr1=str1.split(str2);
 document.getElementById("para1").innerHTML="convert string to array by spiting it by specific 
string.here split str1 by second string";
 document.getElementById("btn1").value=arr1;
 }
 if(val=="triming")
 {
 str1=document.getElementById("string1").value;
 str2=str1.trim();
 document.getElementById("para1").innerHTML="remove white space in str1 from both end";
 document.getElementById("btn1").value=str2;
 }
}
function mathoperations() {
 var val=document.getElementById("matmethod").value;
 var num1=parseFloat(document.getElementById("n1").value);
 var num2=parseFloat(document.getElementById("n2").value);
 var num3=parseFloat(document.getElementById("n3").value);
 var num4;
 if(val=="mround"){
 num4=Math.round(num1);
 document.getElementById("para2").innerHTML="num1 rounded to";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mabs"){
 num4=Math.abs(num1);
 document.getElementById("para2").innerHTML="absolute value of num1 is";
 document.getElementById("btn2").value=num4;
 }
if(val=="mfloor"){
 num4=Math.floor(num1);
 document.getElementById("para2").innerHTML="nearest smaller integer of num1 is";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mceil"){
 num4=Math.ceil(num1);
 document.getElementById("para2").innerHTML="nearest larger integer of num1 is";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mpow"){
 num4=Math.pow(num1,num2);
 document.getElementById("para2").innerHTML="num1 raise to num2 is";
 document.getElementById("btn2").value=num4;
 }
 if(val=="msqrt"){
 num4=Math.sqrt(num1);
 document.getElementById("para2").innerHTML="sqrt of num1 is";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mtrunc"){
 num4=Math.trunc(num1);
 document.getElementById("para2").innerHTML="integer part of num1 is";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mmin"){
 num4=Math.min(num1,num2,num3);
 document.getElementById("para2").innerHTML="minimum value from num1 num2 num3 is ";
 document.getElementById("btn2").value=num4;
 }
 if(val=="mmax"){
num4=Math.max(num1,num2,num3);
 document.getElementById("para2").innerHTML="maximum values from num1 num2 num3 is ";
 document.getElementById("btn2").value=num4;
 }
}
