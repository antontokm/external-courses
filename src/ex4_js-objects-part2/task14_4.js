var f = function (min,max){
    var random = min+Math.random()*(max+1-min);
    random = Math.floor(random);
    console.log(random)
}
f(1,4);