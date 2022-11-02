let lab1 = [5,5,5,5,10,10];
function get_sum(lab1) {
let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
sum1 += lab1[i];
}
return sum1;
}

let lab2 = [5,5,5,5,5,5,10];
let lab3 = [5,10,10,15];
let lab4 = [10];
let lab5 = [10,5,5,5,5,5,10,10,10,10,4];
let lab6 = [5,4,10,5,5,10];
let lab8 = [5,10,10,0,5]
let quiz1 = [30];


function main(lab1, lab2, lab3, lab4, lab5, lab6, lab8, quiz1){
let sum1= get_sum(lab1)
let sum2= get_sum(lab2)
let sum3= get_sum(lab3)
let sum4= get_sum(lab4)
let sum5= get_sum(lab5)
let sum6= get_sum(lab6)
let sum8= get_sum(lab8)
let sum9= get_sum(quiz1)
result= [((sum1+sum2+sum3+sum4+sum5+sum6+sum8)/7)*0.6+ sum9*0.4]
	return result
}

let obj = main(lab1, lab2, lab3, lab4, lab5, lab6, lab8, quiz1)

console.log (obj)
