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
var f = function (obj){
    var objCopy={};
    for (var key in obj){
        objCopy[key]=obj[key];
        if (objCopy.key ===obj.key){
            f(obj.key)
        }
    }
    return objCopy;
}
var copy = f(obj);
console.log(obj.b === copy.b);
console.log(obj.e === copy.e );
console.log(obj.e.f === copy.e.f );
