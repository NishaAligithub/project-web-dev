const btn=document.getElementById("btn");
const myLabel=document.getElementById("myLabel");
const min=1;
const max=6;

let randomNumber;
btn.onclick=function(){
    randomNumber=Math.floor(Math.random()*max)+min;
    myLabel.textContent=randomNumber;
    myLabel2.textContent=`Yayyyyy!you have got ${randomNumber} `;
}
