/* charndrayaan 3 landing day*/
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const mintues=document.querySelector("#mintues");
const seconds=document.querySelector("#seconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`aug 23  ${currentYear} 18:04:00`);

function UpdateTime(){
     const currentDate=new Date();
     const diff=newYear-currentDate;
     const d=Math.floor(diff/1000/60/60/24);
     const h=Math.floor(diff/1000/60/60)%24;
     const m=Math.floor(diff/1000/60)%60;  
     const s=Math.floor(diff/1000)%60;
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
mintues.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(UpdateTime,1000);