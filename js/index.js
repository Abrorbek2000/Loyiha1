"use strict";
const btn = document.querySelector('#btn');
let timeId;
let i =0;
btn.addEventListener('click', ()=>{
   timeId = setTimeout(logger,1000);
   timeId = setInterval(logger,500);
})
function logger (){
    console.log('set time out');
    clearInterval(timeId); 
    i++;
}
clearInterval(timeId); 
// First method
// setTimeout(() =>{   //Ikkita qiymat qabul qiladi (),Time;
//     console.log('set time out');
// },1000);
// Second method
// setTimeout(logger,1000);
// function logger(){
// console.log('set time out');
// };
// const timeId = setTimeout(logger,1000);
// clearInterval(timeId); //bu setTimeoutni qanchadir vaqtdan keyin o'chirib tashlaydi