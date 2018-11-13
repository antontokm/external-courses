var proto = {
    a:123,
    b:"hi",
    c: true,
}
var obj1 = Object.create(proto)
f = function (obj){
    obj = Object.create(null);
    obj = {};
    console.log(obj);
}
f({    a:123,
    b:"hi",
    c: true,});
console.log(obj1.isPrototypeOf("a"))


