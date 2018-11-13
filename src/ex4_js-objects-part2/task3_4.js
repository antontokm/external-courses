var str =" dsfeewfsfer   rfhh ";
var f = function (a){
    if( a[0]===" "){
        a=a.slice(1);
    }
    if (a[a.length-1]===" "){
        a=a.slice(0,-1);
    }
    console.log(a);
    console.log(a[a.length-1]===" ")
} 
f(str)