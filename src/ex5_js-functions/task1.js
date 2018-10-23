var makeCalculator= function(){
    var result=0;
    return{
        // add:function(a){
        //     var self = this;
        //     if(arguments.length==0){
        //          return self.getResult;
        //     }else{
        //         result=result+a;
        //         return function(b){
        //             if(arguments.length==0){
        //                 return self.getResult;
        //             }else{
        //                 result+=b;
        //                 return self.add;
        //             }    
        //         }
        //     }       
        // },
        add:function(a){
            if(arguments.length != 0){
                result = result + a;
            }function myCallBack (b){
                if(arguments.length != 0){
                    result = result + b;
                }
                return myCallBack
            }
            return myCallBack
        },
        subtract:function(a){
            if(arguments.length != 0){
                result = result - a;
            }function myCallBack (b){
                if(arguments.length != 0){
                    result = result - b;
                }
                return myCallBack
            }
            return myCallBack   
        },
        divide:function(a){
            if(arguments.length != 0){
                result = result / a;
            }function myCallBack (b){
                if(arguments.length != 0){
                    result = result / b;
                }
                return myCallBack
            }
            return myCallBack
        },
        multiply:function(a){
            if(arguments.length != 0){
                result = result * a;
            }function myCallBack (b){
                if(arguments.length != 0){
                    result = result * b;
                }
                return myCallBack
            }
            return myCallBack    
        },
        getResult:function(){
            return result;
        },
        reset:function(){
            return result=0;
        }
    }
}
var Calculator = makeCalculator();
Calculator.add(2)(4)(10)(2);
console.log(Calculator.getResult());
Calculator.multiply(2);
console.log(Calculator.getResult());
Calculator.subtract(2)(4)(10)(2);
console.log(Calculator.getResult());
Calculator.divide(9)(2);
console.log(Calculator.getResult());
Calculator.subtract(1)(2)()()(4)()()(1);
console.log(Calculator.getResult());
console.log(Calculator.reset());
