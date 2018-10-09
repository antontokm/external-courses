var obj ={
    a:1,
    b:"3",
    c:"hi",
    d:34,
}
var f = function(r){
    for(var key in obj){
        console.log("Key ", key)
        console.log(" ", obj[key]);
    }
}
f(obj);