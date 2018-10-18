var f =function (str1,str2,a){
    var arr1=str1.split(" ");
    if (a>arr1.length+1){
        var result = str1+" "+str2;      
    }else{
        for(i=0 ; arr1.length>i; ++i){
            result = arr1.slice(i)+" "+str2+" "+arr1.slice(0,arr1.length)
        }
    }
    console.log(result);  
}
f("Hello My Little Friend","-gnom",4);