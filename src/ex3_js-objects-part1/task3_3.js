var obj ={
    a:1,
    b:"hi",
    c:"346",
    d:true,
    t:43,
}
var f = function (obj,key){
    console.log(key in obj);
}
f({    a:1,
    b:"hi",
    c:"346",
    d:true,
    t:43,},'c')