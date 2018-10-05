var a=[1, 8, 2 , 6];
var i=0;
var f=function (a){
    while(i<a.length){
        console.log(i,"element",a[i])
        ++i
    }
    console.log("length",a.length)
}
f(a);