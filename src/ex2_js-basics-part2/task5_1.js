var arr=[1,8,5,6,67,3,44,45,57,78];
var i=0;
var result=0;
var maximum= function(arr){
    while (i<arr.length){
        if (arr[i] > result) {
            result = arr[i]
            }
    ++i;        
    }
    console.log(result);
}
maximum(arr);