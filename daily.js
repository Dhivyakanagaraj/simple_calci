
function add(){
    var a,b,sum;
    a=parseInt(document.getElementById("first").value);
    b=parseInt(document.getElementById("second").value);
    sum=a+b;
    document.getElementById("val").value=sum;
}
function sub(){
    var a,b,sum;
    a=parseInt(document.getElementById("first").value);
    b=parseInt(document.getElementById("second").value);
    sum=a-b;
    document.getElementById("val").value=sum;
}
function mul(){
    var a,b,sum;
    a=parseInt(document.getElementById("first").value);
    b=parseInt(document.getElementById("second").value);
    sum=a*b;
    document.getElementById("val").value=sum;
}
function div(){
    var a,b,sum;
    a=parseInt(document.getElementById("first").value);
    b=parseInt(document.getElementById("second").value);
    sum=a/b;
    document.getElementById("val").value=sum;
}