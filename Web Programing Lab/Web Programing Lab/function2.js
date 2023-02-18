function cal(k){
var a,b,c;
a=parseInt(document.getElementById('text1').value)
b=parseInt(document.getElementById('text2').value)
if(k==1){
	c=a+b;
	document.getElementById('result').innerHTML="Sum is "+c
	}
	else if(k==2){
		c=a-b;
		document.getElementById('result').innerHTML="Difference is "+c
		}
		else if(k==3){
			c=a*b;
			document.getElementById('result').innerHTML="Product is "+c
			}
			else {
			c=a/b;
			document.getElementById('result').innerHTML="Division is"+c
			}
}
