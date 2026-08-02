const startBtn=document.getElementById("startBtn");
const content=document.getElementById("content");
const typingText=document.getElementById("typingText");
const countdown=document.getElementById("countdown");
const gift=document.getElementById("gift");
const popup=document.getElementById("giftPopup");

const message=`عزيزتي رانيا... ❤️

اليوم مو يوم عادي بالنسبة إلي،
لأن اليوم هو يوم ميلاد شخص مميز جدًا.

حبيت أسويلج شي بسيط،
يبقى ذكرى حلوة كل ما ترجعين تشوفينه. 🤍

كل عام وانتي بألف خير،
وأتمنى السعادة تبقى وياج بكل خطوة بحياتج.

وهسة... باقي شي واحد. 🎁`;

startBtn.onclick=()=>{
 startBtn.style.display="none";
 content.classList.remove("hidden");
 let i=0;
 const t=setInterval(()=>{
   typingText.textContent+=message.charAt(i++);
   if(i>=message.length) clearInterval(t);
 },35);
 startCountdown();
 hearts();
};

function startCountdown(){
 const target=new Date("2026-08-21T00:00:00").getTime();
 const x=setInterval(()=>{
  const diff=target-Date.now();
  if(diff<=0){clearInterval(x);countdown.textContent="🎉 كل عام وانتي بألف خير ❤️";return;}
  const d=Math.floor(diff/86400000);
  const h=Math.floor((diff%86400000)/3600000);
  const m=Math.floor((diff%3600000)/60000);
  const s=Math.floor((diff%60000)/1000);
  countdown.textContent=`🎂 ${d} يوم | ${h} ساعة | ${m} دقيقة | ${s} ثانية`;
 },1000);
}

gift.onclick=()=>{
 popup.classList.remove("hidden");
 popup.innerHTML=`<div class="popup-content">
 <h2>🎉 إلى أجمل رانيا ❤️</h2>
 <p>
 كل عام وانتي بألف خير.<br><br>
 أتمنى من كل قلبي تكون هاي السنة بداية لكل شي حلو بحياتج،
 وتبقين دائمًا سعيدة وضحكتج ما تفارقج. 🤍<br><br>
 يمكن هاي مو أغلى هدية،
 لكن معمولة من القلب حتى تبقى ذكرى حلوة.<br><br>
 <strong>— مصطفى ❤️</strong>
 </p>
 <button id="closeGift">🤍 إغلاق</button>
 </div>`;
 document.getElementById("closeGift").onclick=()=>popup.classList.add("hidden");
 confetti();
};

function hearts(){
 setInterval(()=>{
  const h=document.createElement("div");
  h.textContent="❤️";
  h.style.cssText=`position:fixed;left:${Math.random()*100}vw;bottom:-30px;font-size:${16+Math.random()*14}px;transition:6s linear;pointer-events:none;z-index:2`;
  document.body.appendChild(h);
  requestAnimationFrame(()=>{h.style.transform="translateY(-120vh)";h.style.opacity="0";});
  setTimeout(()=>h.remove(),6000);
 },500);
}

function confetti(){
 for(let i=0;i<70;i++){
   const c=document.createElement("div");
   c.textContent=["🎊","✨","🎉"][Math.floor(Math.random()*3)];
   c.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-20px;font-size:${12+Math.random()*12}px;transition:3s linear;z-index:9999`;
   document.body.appendChild(c);
   requestAnimationFrame(()=>{c.style.transform=`translateY(${innerHeight+40}px) rotate(720deg)`;});
   setTimeout(()=>c.remove(),3200);
 }
}