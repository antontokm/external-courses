obj = {
    a:1, 
    b:{ 
        c:0 
       }, 
       e:{ 
           f:{ 
               g:1 
           } 
       } 
   };
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
console.log('obj',obj);
console.log(test);
console.log(test.a===obj.a)  
