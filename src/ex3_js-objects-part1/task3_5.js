var obj ={
    a:1,
    b:"hi",
    c:"346",
    d:true,
    t:43,
}
var f = function(a){
    var objCopy={};
    for (var key in obj){
        objCopy[key] = obj[key];
    }
    // console.log("objCopy",objCopy);
    // console.log("a",a)
    return objCopy;
}
var test = f(obj);
obj.k="test";
console.log('obj',obj);
console.log(test);
console.log(test.a===obj.a)
