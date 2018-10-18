var arr=[1,8,5,6,67,345346346,3,44,45,34534634];
var i=0;
var result=0;
var maximum= function(arr){
    for(var i=0; i<arr.length; ++i){
        if (arr[i] > result) {
        result = arr[i]
        }
        }
    console.log(result);    
}
maximum(arr);