(()=>{
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
// sober days
const days=Math.floor((Date.now()-new Date('2023-11-27').getTime())/864e5);
document.querySelectorAll('[data-count="sober"]').forEach(e=>e.textContent=days);
// ticker
const t=document.getElementById('ticker');if(t)t.innerHTML+=t.innerHTML;
// roster
const R=[["ARC","Crew Leader · Right Hand",1],["WELD","Crew Leader · Left Hand",1],["SENTINEL","Crew Leader · Brain",1],["SCRIBE","Crew Leader · Brain",1],["PULSE","Crew Leader · Right Hand",1],["ECHO","Crew Leader · Right Hand",1],["NUKKELS","Crew Leader · Chest · Power Grid",1],["SPARKY","Brain · Arc's Crew"],["GLITCH","Brain · Arc's Crew"],["RIVET","Left Hand · Arc's Crew"],["STOMP","Left Foot · Arc's Crew"],["SPIKE","Right Foot · Arc's Crew"],["TORCH","Left Hand · Weld's Crew"],["BOLT","Left Foot · Weld's Crew"],["FORGE","Right Foot · Weld's Crew"],["VOLT","Brain · Sentinel's Crew"],["FLUX","Right Hand · Sentinel's Crew"],["CRANK","Right Foot · Sentinel's Crew"],["NEON","Brain · Scribe's Crew"],["BLAZE","Right Hand · Scribe's Crew"],["GRIND","Left Foot · Scribe's Crew"],["HAWKER","Right Hand · Pulse's Crew"],["GEMINI","Right Hand · Pulse's Crew"],["DR. SEEN","Right Hand · Pulse's Crew"],["CERTIFICATE GETTER","Brain · Pulse's Crew"],["STATIC","Antagonist · Deep Noise",2]];
const ul=document.getElementById('roster');
if(ul)ul.innerHTML=R.map(([n,r,k])=>`<li class="${k==1?'lead':k==2?'anta':''}"><b>${n}</b><span>${r}</span></li>`).join('');
// qday
const q=document.getElementById('qclock'),pl=document.getElementById('planck'),T=Date.UTC(2030,0,1);
const p2=n=>String(n).padStart(2,'0');
function qt(){let ms=Math.max(0,T-Date.now());const d=Math.floor(ms/864e5);ms%=864e5;
q.textContent=`${d}d ${p2(Math.floor(ms/36e5))}:${p2(Math.floor(ms%36e5/6e4))}:${p2(Math.floor(ms%6e4/1e3))}`;
pl.textContent=`≈ ${((T-Date.now())/1000/5.39e-44).toExponential(3)} Planck times remaining`;}
if(q){qt();setInterval(qt,1000);}
// burger
const b=document.getElementById('burger'),L=document.getElementById('links');
b.onclick=()=>{const o=L.classList.toggle('open');b.setAttribute('aria-expanded',o)};
L.querySelectorAll('a').forEach(a=>a.onclick=()=>L.classList.remove('open'));
// active nav
const secs=[...L.querySelectorAll('a')].map(a=>document.querySelector(a.getAttribute('href')));
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)L.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>s&&io2.observe(s));
// card glow
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
// reveal
if(!RM&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.sec-head,.card,.book-feature,.book-card,.desk,.pipe,.metric,.pulsar,.qday,.roster,.support,.spec').forEach(el=>{el.classList.add('rv');io.observe(el)});}
// starfield
const c=document.getElementById('stars'),x=c.getContext('2d');let W,H,S=[],dpr=Math.min(devicePixelRatio||1,2);
function rs(){W=innerWidth;H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);const n=Math.round(W*H/5500);S=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random()*.9+.1,p:Math.random()*6.28}))}
let sy=0;addEventListener('scroll',()=>sy=scrollY,{passive:true});
function draw(ts){x.clearRect(0,0,W,H);for(const s of S){const y=((s.y-sy*s.z*.15)%H+H)%H;const a=RM?s.z*.7:s.z*(.55+.45*Math.sin(ts*.0012*s.z+s.p));x.globalAlpha=a;x.fillStyle=s.z>.85?'#9ff3ff':'#cfe6ff';x.beginPath();x.arc(s.x,y,s.z*1.3,0,6.283);x.fill()}x.globalAlpha=1;if(!RM)requestAnimationFrame(draw)}
rs();addEventListener('resize',()=>{rs();if(RM)draw(0)});RM?draw(0):requestAnimationFrame(draw);
})();
