var str1= "hello goodbye Hello My Little Friend";
var str2= "goodbye";
var f = function(a,b){
    var arr1 = a.split(" ");
    if(arr1.indexOf(b)>-1){
        console.log(true)
    }
}
f(str1,"Hello")