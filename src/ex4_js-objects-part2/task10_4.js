var f = function (str){
    var arr=str.split("");
    var result="";
    console.log("arr",arr);
    for(var i=0; arr.length>i;++i){
        var x = arr[arr.length-i-1];
        result =result+x;
    }
    console.log(result)
}
f("Hello")