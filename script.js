const target=new Date("2026-08-21T00:00:00");
function checkName(){
const v=document.getElementById("name").value.trim().toLowerCase();
if(v==="رانيا"||v==="rania"){
document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";
}else document.getElementById("wrong").textContent="اكتبي رانيا فقط 🤍";
}
setInterval(()=>{
const d=target-new Date();
const c=document.getElementById("count");
if(!c)return;
if(d<=0){c.textContent="🎉 Happy Birthday";return;}
const days=Math.floor(d/86400000);
const h=Math.floor(d%86400000/3600000);
const m=Math.floor(d%3600000/60000);
const s=Math.floor(d%60000/1000);
c.textContent=`${days} يوم ${h} ساعة ${m} دقيقة ${s} ثانية`;
},1000);
function showMsg(){
const text=`رانيا...
كل عام وانتي بخير ❤️
أتمنى أشوفج دائماً سعيدة.
- مصطفى`;
const out=document.getElementById("msg");out.textContent="";
let i=0;const t=setInterval(()=>{out.textContent+=text[i++]||"";if(i>text.length)clearInterval(t);},40);
for(let j=0;j<40;j++){let h=document.createElement("div");h.className="heart";h.textContent="❤️";h.style.left=Math.random()*100+"vw";h.style.fontSize=(20+Math.random()*20)+"px";document.body.appendChild(h);setTimeout(()=>h.remove(),6000);}
}