
var f =function(str){
        var arr = str.split("");
        var obj={};
        var x=0;
        //if ('key' in myObj)
        for(var i in arr){
                if (arr[i] in obj){
                        obj[arr[i]]=obj[arr[i]]+1;
                }else{
                        obj[arr[i]]=1;
                }
                //console.log("Значение",arr[i],"Повторений",x);
        }
        console.log(obj)
}
f("artfrfaytttttddz")