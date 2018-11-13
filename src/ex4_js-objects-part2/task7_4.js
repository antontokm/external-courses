var f = function (string,number){
    if(string.length>number){
        var str = string.slice(0,-number);
        var str1 = str + "..." 
    }
    console.log(str1);
}
f("hello my little friend",11)