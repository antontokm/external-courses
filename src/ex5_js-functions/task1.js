// var Calculator={
//     add:function(a,b){
//             x=a+b;
//             console.log(x);
//     },
//     subtract:function(a,b){
//             x=a-b;
//             console.log(x);
//     },
//     divide:function(a,b){
//             x=a/b;
//             console.log(x);
//     },    
//     multiply:function(a,b){
//             x=a*b;
//             console.log(x);
//     },
//     getResult:function(){
//         console.log(x)
//     },
//     reset: function(){
//         x=0;
//         console.log("reset");
//     }        
// }

// console.log(Calculator.add(1,5));
// console.log(Calculator.getResult());
// console.log(Calculator.reset());
var x =0;
var Calculator={
    getResult:function(){
        console.log(x);
    },
    add:function(a){
        x=x+a;
        console.log(x);
    },
    subtract:function(a){
        x=x-a;
        cosnole.log(x);
    },
    divide:function(a){
        x=x/a;
        console.log(x);
    },
    multiply:function(a){
        x=x*a;
        console.log(x);
    }
}
console.log(Calculator.add(5));
console.log(Calculator.divide(2.5))
// console.log(Calculator.getResult());
// console.log(Calculator.reset());