var obj ={
    a:1,
    b:"hi",
    c:"346",
    d:true,
}
var f = function (a){
    for (var key in obj){
        console.log("key",key,"=",obj[key])
    }
}
f(obj);