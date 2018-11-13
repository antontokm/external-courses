var proto = {
    a:123,
    b:"hi",
    c: true,
}
var f = function (obj,a) {
    obj = Object.create(proto)
    obj.test1="123";
    for(var a in obj){
        if(!obj.hasOwnProperty(a)){
            console.log(true);
        }else{
            console.log(false)
        }
    }
    //console.log(a in proto);
}
f({f:123,
},"b");