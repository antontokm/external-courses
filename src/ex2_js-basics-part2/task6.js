var x=0;
var f=function(a){
    if (a>1000){
        console.log("Неверные данные")
    } else{    
        for (var i=2;i<=a;++i){
            if (a%i===0){
            ++x;
            }   
        console.log(x);    
        }
        if (x===1){
            console.log("простое число")
        } else {
        console.log("составное число")
        }
    }
}
f(587)