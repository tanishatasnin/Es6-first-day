function add (num1,num2){
               const total = num1+ num2;
               return total;
}
const sum = add(12,3);
console.log(sum);
// for one value // defult function
function add (num1,num2){
               // condition 
               if(
                num2 == undefined)
                {
                num2 = 0;                         
                }
               //  condition  close 

                              
               
               const total = num1+ num2;
               return total;
}
const sum2 =add(15)
console.log(sum2);
// diffrent way for default function 
function add (num1,num2){
               // condition 
               num2 =num2 || 0;
               // condition close 
               const total = num1+ num2;
               return total;
}
const sum3 =add(17);
console.log(sum3);
// another default function 
function add (num1,num2=0){
               const total = num1+ num2;
               return total;
}
const sum4 =add(19);
console.log(sum4);
// for diffrent deafult value 
function add (num1,num2=30){
               const total = num1+ num2;
               return total;
}
const sum5 =add(10,50);
console.log(sum5);

// practice 
const first ="we love our country.";
const secound ="Bangladesh";
 function text(){
                const sum =first +  ''  + secound;
                return sum;
 }
 const text2=text(first,secound);
 console.log(text2);