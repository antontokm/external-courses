var array=[1, 8, 2 , 6 ,0];
var i=0;
var a=0;
var b=0;
var k=0;
var f=function(array){
    while(i<array.length){
    if(array[i]===0){
        ++k;
    } else if(array[i]%2===0){
        ++a   ; 
    } else if(array[i]%2===1){
        ++b;    
    }
    ++i    
    }
    console.log([a,b,k])
}
f(array)