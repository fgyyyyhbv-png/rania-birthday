const target=new Date('2026-08-21T00:00:00');
const msg=`رانيا... 🤍

كل عام وانتي بخير.
شكراً لأنج موجودة بحياتي.
أتمنى أشوف ضحكتج بكل أيامج.
أحبج هواية.
- مصطفى ❤️`;

setInterval(()=>{
 const d=target-new Date();
 if(d<=0){countdown.textContent='🎉 Happy Birthday!';return;}
 const days=Math.floor(d/86400000);
 const hrs=Math.floor(d%86400000/3600000);
 const mins=Math.floor(d%3600000/60000);
 const secs=Math.floor(d%60000/1000);
 countdown.textContent=`${days} يوم ${hrs} ساعة ${mins} دقيقة ${secs} ثانية`;
},1000);

function showMessage(){
 let i=0;
 msgEl=document.getElementById('msg');
 msgEl.textContent='';
 const t=setInterval(()=>{
   msgEl.textContent+=msg[i++];
   if(i>=msg.length)clearInterval(t);
 },35);
 for(let j=0;j<40;j++){
   const h=document.createElement('div');
   h.className='heart';
   h.textContent='❤️';
   h.style.left=Math.random()*100+'vw';
   h.style.fontSize=(18+Math.random()*20)+'px';
   document.body.appendChild(h);
   setTimeout(()=>h.remove(),6000);
 }
}
