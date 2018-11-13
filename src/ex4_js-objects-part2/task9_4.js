var f =function (str1,str2,a){
    var result="";
    var arr1=str1.split(" ");
    if (a>arr1.length+1){
        result = str1+" "+str2;      
    }else{
            result = arr1.slice(0,a).join(" ")+" "+str2+" "+arr1.slice(a).join(" ");
    }
    console.log(result);  
}
f("Hello My Little Friend","-gnom",7);