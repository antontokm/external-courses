var f = function (a){
    var arr = a.split(" ");
    console.log(arr)
    arr[0] = arr[0].charAt(0).toUpperCase()+arr[0].slice(1);
    var arrResult = arr[0];
    for (i=1 ; arr.length>i; ++i){
        //var resultArr = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        arrResult += " "+arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    console.log(arrResult)

    
}
f("hello my little friend")