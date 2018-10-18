var arr=[1, 0, 1,1,1];
var result=0;
var j=1;
var x=0;
var comparison= function (arr){
    for (var i=0; i<arr.length ; ++i){
        if (arr[i]===arr[j])
            ++x;
    }
    if (x===i) {
        console.log(true)
    } else {
        console.log(false);
    }   
}
comparison(arr)
