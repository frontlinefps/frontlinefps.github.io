
const cv=document.getElementById('c'),g=cv.getContext('2d'),$=id=>document.getElementById(id);
let W=0,H=0,D=1;const MK=document.createElement("canvas"),rs=()=>{D=Math.min(window.devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=Math.round(W*D);cv.height=Math.round(H*D);MK.width=Math.ceil(W/6);MK.height=Math.ceil(H/6)};addEventListener('resize',rs);addEventListener('orientationchange',()=>setTimeout(rs,300));rs();
let RNG=Math.random;const R=()=>RNG(),rr=(a,b)=>a+R()*(b-a),cl=(v,a,b)=>Math.max(a,Math.min(b,v)),P2=Math.PI*2;
const WP=[{n:'Pistol',d:24,r:.28,m:12,s:.035,p:1,rl:1,rg:1000},{n:'SMG',d:13,r:.07,m:32,s:.08,p:1,rl:1.6,rg:900},
{n:'Rifle',d:22,r:.1,m:30,s:.045,p:1,rl:2,rg:1300},{n:'Shotgun',d:11,r:.75,m:6,s:.16,p:7,rl:2.2,rg:480},
{n:'Sniper',d:90,r:1.2,m:5,s:.004,p:1,rl:2.4,rg:2000},
{n:'Revolver',d:55,r:.6,m:6,s:.02,p:1,rl:2,rg:1100},{n:'Deagle',d:38,r:.35,m:8,s:.03,p:1,rl:1.7,rg:1100},{n:'LMG',d:17,r:.08,m:60,s:.07,p:1,rl:3.4,rg:1000},{n:'DMR',d:48,r:.45,m:12,s:.012,p:1,rl:2.2,rg:1700},{n:'AK-47',d:26,r:.11,m:30,s:.06,p:1,rl:2.1,rg:1250},{n:'Auto-Shotgun',d:9,r:.3,m:10,s:.18,p:6,rl:2.8,rg:450}];
const PIS=[0,5,6],BIG=[1,2,3,4,7,8,9,10],GX=[0,4,12,10,20,1,3,16,18,13,8],GL=[60,80,110,100,130,64,70,125,125,115,105];
const GG=[0,3,1,2,4],PR=[9,2,8,10,3,7,1,4,6,5,0],NM=['Alex','Reza','Sara','Kian','Nima','Mina','Omid','Dara','Bita','Arash','Ravi','Leo','Zed','Nora','Max','Kai','Ivy','Sam','Tara','Ben'];
let M=null,dif=.6,last=0,mx=0,my=0,md=0;const keys={};
const SK=['#2b2f36','#6b7a3a','#a8864a','#b6422f','#2f6fb3','#c9a227','#7c4dbd','#cfd5de'],AT=[['mag','خشاب بزرگ'],['scope','اسکوپ'],['supp','صداخفه‌کن'],['grip','دستگیره']];
let CUS={w:2,p:0,skin:0,mag:0,scope:0,supp:0,grip:0};try{Object.assign(CUS,JSON.parse(localStorage.getItem('tds')||'{}'))}catch(e){}
const TS={on:0,l:null,r:null,spr:null};
const cs=e=>e===M.p?CUS:e.cus,pc=e=>{const c=cs(e);return !!c&&e.w==c.w},mm=(e,i)=>{const c=cs(e);return (WP[i].m*(c&&c.mag?1.5:1))|0};
const zoom=()=>TS.on?cl(Math.min(W,H)/520,.95,1.3):cl(Math.min(W,H)/560,1,1.5);
const BT=()=>[...(M&&M.br&&typeof USE3D!='undefined'&&USE3D?[{k:'vw',x:W-114,y:H*.4-102,t:'\u{1F441}'}]:[]),...(M&&typeof USE3D!='undefined'&&USE3D?[{k:'fr',x:W-120,y:H-110,t:'\u25CE'}]:[]),{k:'rl',x:W-46,y:H*.4,t:'R'},{k:'sw',x:W-46,y:H*.4-68,t:'\u21c4'},{k:'sp',x:W-46,y:H*.4+68,t:'\u00bb'},{k:'g0',x:W-114,y:H*.4-34,t:'G'},{k:'g1',x:W-114,y:H*.4+34,t:'H'},{k:'jp',x:W-46,y:H*.4+136,t:'\u2191'},{k:'cr',x:W-114,y:H*.4+102,t:'\u2193'}];
function th(e){e.preventDefault();TS.on=1;const rc=cv.getBoundingClientRect();
for(const t of e.changedTouches){const x=t.clientX-rc.left,y=t.clientY-rc.top,id=t.identifier;
if(e.type=='touchstart'){let hit=0;if(M)for(const b of BT())if(Math.hypot(b.x-x,b.y-y)<38){hit=1;if(b.k=='rl')act('r');else if(b.k[0]=='g')throwG(M.p,+b.k[1]);else if(b.k=='sw'){const p=M.p;let i=p.w;for(let k=0;k<WP.length;k++){i=(i+1)%WP.length;if(p.have[i]){act('s',i);break}}}else if(b.k=='fr')TS.fire=id;else if(b.k=='jp')JN++;else if(b.k=='cr')TCR^=1;else if(b.k=='vw'){if(R3)R3.view^=1}else if(b.k=='mn'){M.fin=null;menu();return}else TS.spr=id}
if(!hit){const q={id,x0:x,y0:y,x,y};if(x<W/2){if(!TS.l)TS.l=q}else if(!TS.r)TS.r=q}}
else if(e.type=='touchmove'){for(const k of['l','r'])if(TS[k]&&TS[k].id==id){if(k=='r'){TS.r.dx=(TS.r.dx||0)+x-TS.r.x;TS.r.dy=(TS.r.dy||0)+y-TS.r.y}TS[k].x=x;TS[k].y=y}}
else{for(const k of['l','r'])if(TS[k]&&TS[k].id==id)TS[k]=null;if(TS.spr==id)TS.spr=null;if(TS.fire==id)TS.fire=null}}}
for(const n of['touchstart','touchmove','touchend','touchcancel'])cv.addEventListener(n,th,{passive:false});
function save(){try{localStorage.setItem('tds',JSON.stringify(CUS))}catch(e){}}
const PD=Math.min(window.devicePixelRatio||1,3);{const q=document.getElementById('pv');q.width=280*PD;q.height=100*PD}
function pv(){const x=$('pv').getContext('2d');x.setTransform(PD,0,0,PD,0,0);x.clearRect(0,0,280,100);const i=CUS.w,L=GL[i],sk=SK[CUS.skin],cx=140-L/2,y=48;
x.fillStyle='#1d2026';if(!PIS.includes(i))x.fillRect(cx-22,y-2,24,12);
x.fillStyle=sk;x.fillRect(cx,y-8,L*.55,16);x.fillStyle='rgba(255,255,255,.2)';x.fillRect(cx,y-8,L*.55,3);
x.fillStyle='#2b2f36';x.fillRect(cx+L*.55,y-4,L*.45,8);
x.fillStyle='#1d2026';x.beginPath();x.moveTo(cx+8,y+8);x.lineTo(cx+22,y+8);x.lineTo(cx+16,y+30);x.lineTo(cx+4,y+30);x.fill();
if(i!=3&&i!=10)x.fillRect(cx+L*.3,y+8,10,(i==1?26:20)+(CUS.mag?10:0));else{x.fillStyle=sk;x.fillRect(cx+L*.6,y+4,26,8)}
if(CUS.scope){x.fillStyle='#14171c';x.fillRect(cx+L*.15,y-18,L*.35,8);x.fillStyle='#4da3ff';x.fillRect(cx+L*.15,y-16,3,4)}
if(CUS.supp){x.fillStyle='#3a3f48';x.fillRect(cx+L,y-6,28,12)}
if(CUS.grip){x.fillStyle='#1d2026';x.fillRect(cx+L*.7,y+4,8,16)}}
function wkUI(){const a=$('wps'),b=$('sk'),c=$('at');a.innerHTML=b.innerHTML=c.innerHTML='';
WP.forEach((w,i)=>{const e=document.createElement('button');e.textContent=w.n;if(CUS.w==i)e.className='on';e.onclick=()=>{CUS.w=i;save();wkUI()};a.appendChild(e)});
SK.forEach((k,i)=>{const e=document.createElement('button');e.className='sw'+(CUS.skin==i?' on':'');e.style.background=k;e.setAttribute('aria-label','skin '+(i+1));e.onclick=()=>{CUS.skin=i;save();wkUI()};b.appendChild(e)});
AT.forEach(([k,n])=>{const e=document.createElement('button');e.textContent=n;if(CUS[k])e.className='on';e.onclick=()=>{CUS[k]=CUS[k]?0:1;save();wkUI()};c.appendChild(e)});pv()}

let AC;function snd(f,d,t,v){try{AC=AC||new AudioContext();const o=AC.createOscillator(),n=AC.createGain();o.type=t;o.frequency.value=f;n.gain.value=v;n.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);o.connect(n);n.connect(AC.destination);o.start();o.stop(AC.currentTime+d)}catch(e){}}
// ---------- input
addEventListener('keydown',e=>{keys[e.code]=1;if(!M)return;const p=M.p;if(e.code=='Space'&&!(document.activeElement&&/INPUT|TEXTAREA/.test(document.activeElement.tagName))){e.preventDefault();if(!e.repeat)JN++}if(e.code=='KeyR')act('r');if(e.code=='KeyG')throwG(M.p,0);if(e.code=='KeyH')throwG(M.p,1);if(/^Digit[12]$/.test(e.code)){const L=e.code[5]=='1'?PIS:BIG,i=L.find(j=>p.have[j]);if(i!=null)act('s',i)}if(e.code=='Escape')showPause($('pause').style.display!='flex')});
addEventListener('keyup',e=>keys[e.code]=0);
addEventListener('blur',()=>{for(const k in keys)keys[k]=0;md=0});
cv.onmousemove=e=>{mx=e.offsetX;my=e.offsetY};cv.onmousedown=()=>md=1;addEventListener('mouseup',()=>md=0);cv.oncontextmenu=e=>e.preventDefault();
cv.onwheel=e=>{if(!M)return;const p=M.p;let i=p.w;for(let k=0;k<WP.length;k++){i=(i+(e.deltaY>0?1:WP.length-1))%WP.length;if(p.have[i]){act('s',i);break}}};
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>pickMap(b.dataset.m,!!b.dataset.on));
$('dif').onclick=()=>{dif=dif<1?1:dif==1?1.4:.6;$('dif').textContent='سختی: '+(dif==1?'متوسط':dif>1?'سخت':'آسان')};
// ---------- map
function hitW(x,y,r){const G=M.G,x0=Math.floor((x-r)/250),x1=Math.floor((x+r)/250),y0=Math.floor((y-r)/250),y1=Math.floor((y+r)/250);
for(let gx=x0;gx<=x1;gx++)for(let gy=y0;gy<=y1;gy++){const L=G[gx*1000+gy];if(L)for(const w of L)if(x>w.x-r&&x<w.x+w.w+r&&y>w.y-r&&y<w.y+w.h+r)return 1}return 0}
function mkGrid(){M.G={};for(const w of M.Wl)for(let gx=Math.floor(w.x/250);gx<=Math.floor((w.x+w.w)/250);gx++)for(let gy=Math.floor(w.y/250);gy<=Math.floor((w.y+w.h)/250);gy++)(M.G[gx*1000+gy]=M.G[gx*1000+gy]||[]).push(w)}
function fp(){for(let i=0;i<200;i++){const x=rr(80,M.S-80),y=rr(80,M.S-80);if(!hitW(x,y,26))return{x,y}}return{x:M.S/2,y:M.S/2}}
function bld(x,y,w,h){M.Bl.push({x,y,w,h});const t=24,d=110;
for(const yy of[y,y+h-t]){const gx=x+rr(40,w-d-40);M.Wl.push({x,y:yy,w:gx-x,h:t},{x:gx+d,y:yy,w:x+w-gx-d,h:t})}
for(const xx of[x,x+w-t]){const gy=y+rr(40,h-d-40);M.Wl.push({x:xx,y,w:t,h:gy-y},{x:xx,y:gy+d,w:t,h:y+h-gy-d})}}
function mv(e,dx,dy){const ox=e.x,oy=e.y;if(!hitW(e.x+dx,e.y,14))e.x+=dx;if(!hitW(e.x,e.y+dy,14))e.y+=dy;return Math.hypot(e.x-ox,e.y-oy)}
const EYE=46,eyeH=e=>(e.z||0)+(e.cr?30:46),bodyH=e=>e.cr?46:66;
function ray(x,y,a,L,ig,ne,WL,z0,sl){const dx=Math.cos(a),dy=Math.sin(a),V=sl!==undefined;let t=L,h=null,hz=0;if(V&&sl<0)t=Math.min(t,-z0/sl);
for(const w of (WL||M.Wl)){let lo=0,hi=t;
if(dx){let p=(w.x-x)/dx,q=(w.x+w.w-x)/dx;if(p>q)[p,q]=[q,p];lo=Math.max(lo,p);hi=Math.min(hi,q)}else if(x<w.x||x>w.x+w.w)continue;
if(dy){let p=(w.y-y)/dy,q=(w.y+w.h-y)/dy;if(p>q)[p,q]=[q,p];lo=Math.max(lo,p);hi=Math.min(hi,q)}else if(y<w.y||y>w.y+w.h)continue;
if(hi>=lo&&lo<t){if(V){const H=w.k?58:((w.w>=M.S-1&&w.h<=45)||(w.h>=M.S-1&&w.w<=45))?130:84,zl=z0+sl*lo,zh=z0+sl*hi;if(zl>H&&zh>H)continue;if(zl>H)lo=(H-z0)/sl}t=lo}}
if(ne&&M.Fx)for(const f of M.Fx){if(f.k!='s')continue;const ox=x-f.x,oy=y-f.y,b=ox*dx+oy*dy,c=ox*ox+oy*oy-f.r*f.r;if(c<0)t=Math.min(t,50);else{const d=b*b-c;if(d>=0){const t1=-b-Math.sqrt(d);if(t1>0&&t1<t)t=Math.min(t,t1+25)}}}
if(!ne)for(const e of M.E){if(!e.alive||e.air>0||e===ig||(ig&&e.team===ig.team))continue;const fx=e.x-x,fy=e.y-y,pr=fx*dx+fy*dy;if(pr<0||pr>t)continue;const q=fx*fx+fy*fy-pr*pr;if(q<225){const th=pr-Math.sqrt(225-q);if(th<t&&th>=0){if(V){const z=z0+sl*th,ez=e.z||0;if(z<ez||z>ez+bodyH(e))continue;hz=z-ez}t=th;h=e}}}
return{t,h,z:hz}}
// ---------- match
function start(mode,o){o=o||{};
const mp=MAPS[mode].find(m=>m.id==o.map)||MAPS[mode][0],th=THEME[mp.th],br=mode=='br',S=mp.S,seed=o.seed||((Math.random()*2147483647)|0);
M={mode,S,br,th,mapId:mp.id,mapN:mp.n,t:0,E:[],Wl:[],Bl:[],C:[],D:[],L:[],T:[],B:[],F:[],sc:[0,0],end:0,shk:0,hm:0,z:null,fin:null,mp:o.mp?1:0,client:o.client?1:0,ev:[],cq:[],Gr:[],Fx:[],seed,sn:0,snT:0,lastS:performance.now()};
mkTex();mkTexN(mp.th);RNG=mulb(seed);
const n=Math.round(S/mp.c),c=S/n,t=40,mn=Math.max(200,c*.4);
M.Wl.push({x:0,y:0,w:S,h:t},{x:0,y:S-t,w:S,h:t},{x:0,y:0,w:t,h:S},{x:S-t,y:0,w:t,h:S});
for(let i=0;i<n;i++)for(let j=0;j<n;j++){const x=i*c,y=j*c,r=R();
if(r<mp.bp){const w=rr(mn,c-150),h=rr(mn,c-150);bld(x+rr(70,c-w-70),y+rr(70,c-h-70),w,h)}
else if(r<mp.bp+mp.cp)for(let k=0;k<3;k++){const s=rr(50,90);M.Wl.push({x:x+rr(70,c-s-70),y:y+rr(70,c-s-70),w:s,h:s,k:1})}}
mkGrid();
M.Pt=[];for(let i=0;i<S/14;i++)M.Pt.push({x:rr(0,S),y:rr(0,S),r:rr(80,220),c:R()<.5?0:1});
if(th.bush)for(let i=0,k=Math.round(th.bush*(S/2400)*(S/2400));i<k;i++){const q=fp();M.D.push({x:q.x,y:q.y,r:rr(20,38)})}
RNG=Math.random;
const T=o.client?o.ros.length:br?30:mode=='tdm'?10:8;
const base=(bot,team,name,col)=>({bot,team,name,col,x:0,y:0,a:0,hp:100,ar:0,have:WP.map(()=>0),am:WP.map(()=>0),w:0,cd:0,rl:0,k:0,d:0,lv:0,alive:1,rt:0,sp:0,fl:0,ht:0,wp:null,tg:null,t:0,sd:1,sk:0,mvg:0,air:0,hum:bot?0:1});
const BCL=['#5b6b3a','#7a6a45','#4f5a64','#3f5a3a','#6b4f3a','#55606b','#74713f'];
const mk=(bot,team,i,nm)=>{const e=base(bot,team,nm||(bot?NM[i%NM.length]:'YOU'),mode=='tdm'?(team?'#8a3b32':'#2f5d8c'):bot?BCL[i%7]:HC[i%HC.length]);M.E.push(e);return e};
if(o.client){o.ros.forEach(r=>{const e=base(r.h?0:1,r.t,r.n,r.c);if(r.u)e.cus={w:r.u[0],skin:r.u[1],mag:r.u[2],scope:r.u[3],supp:r.u[4],grip:r.u[5]};M.E.push(e)});M.p=M.E[o.me]}
else if(o.mp){o.hs.forEach((h,j)=>{const e=mk(0,mode=='tdm'?j%2:j,j,h.n);e.cus=h.cus;e.conn=h.conn||null;e.inT=performance.now();h.e=e});
const cnt=[0,0];if(mode=='tdm')M.E.forEach(e=>cnt[e.team]++);
M.p=M.E[0]}
else{M.p=mk(0,0,0,SESS?SESS.name:0);for(let i=1;i<T;i++)mk(1,mode=='tdm'?(i<=4?0:1):i,i)}
if(!o.client)for(const e of M.E)lo(e);
if(br){M.z={x:S/2,y:S/2,r:S*.74,ph:0,t:55,sh:0,p:0,dur:36,tx:0,ty:0,tr:0,ox:0,oy:0,or:0};
if(!o.client){nz();
const an=R()*P2,dx=Math.cos(an),dy=Math.sin(an);M.E.forEach((e,i)=>{const tt=(i+R()*.6)/M.E.length-.5;e.x=cl(S/2+dx*tt*S*.9-dy*rr(-120,120),120,S-120);e.y=cl(S/2+dy*tt*S*.9+dx*rr(-120,120),120,S-120);e.air=AIRT;
if(!e.hum){const a=R()*P2,d=rr(300,2400);e.lz={x:cl(e.x+Math.cos(a)*d,150,S-150),y:cl(e.y+Math.sin(a)*d,150,S-150)}}});
for(let i=0,k=Math.round(S*S/154000);i<k;i++){const q=fp(),r=R();M.L.push(r<.5?{x:q.x,y:q.y,t:'w',i:[2,9,3,10,4,8,7,2,9,1][Math.floor(R()*10)]}:r<.78?{x:q.x,y:q.y,t:'m'}:{x:q.x,y:q.y,t:'a'})}}}
$('menu').style.display='none';$('pbt').style.display='flex';
try{if(o.mp&&navigator.wakeLock)navigator.wakeLock.request('screen').catch(()=>{})}catch(e){}}
function nz(){const z=M.z,tr=Math.max(90,z.r*.62),a=R()*P2,d=rr(0,(z.r-tr)*.9);z.tx=cl(z.x+Math.cos(a)*d,tr,M.S-tr);z.ty=cl(z.y+Math.sin(a)*d,tr,M.S-tr);z.tr=tr}
function lo(e){const m=M.mode;const bg=e.bot?BIG[Math.floor(R()*BIG.length)]:(BIG.includes(cs(e).w)?cs(e).w:2),pi=e.bot?0:(PIS.includes(cs(e).p)?cs(e).p:0);e.have=WP.map(()=>0);if(m=='gg')e.have[GG[e.lv]]=1;else{e.have[pi]=1;if(m!='br'||e.hum)e.have[bg]=1}
e.am=WP.map((w,i)=>mm(e,i));e.w=m=='gg'?GG[e.lv]:m=='br'?pi:bg;
e.gr=e.bot?null:(cs(e).g||['frag','smoke']).map(k=>({k,n:2}));e.hp=100;e.ar=0;e.rl=0;e.cd=.3;e.sp=1.5;e.alive=1;const q=fp();e.x=q.x;e.y=q.y;e.a=R()*P2;e.wp=null;e.tg=null}
function sw(e,i){if(e.have[i]&&e.w!=i){e.w=i;e.rl=0;e.cd=.2}}
function reload(e){if(e.rl>0||e.am[e.w]>=mm(e,e.w))return;e.rl=WP[e.w].rl}
function best(e){for(const i of PR)if(e.have[i]){e.w=i;e.rl=0;break}}
function fire(e){const w=WP[e.w];if(e.cd>0||e.rl>0||!e.alive||e.air>0)return;if(e.am[e.w]<=0){reload(e);return}
e.am[e.w]--;e.cd=w.r;const c=cs(e),cp=pc(e);e.fl=cp&&c.supp?0:.06;const sp=Math.max(.004,(e.bot?w.s+.06/dif:w.s*1.05*(cp&&c.scope?.8:1))+(e.mvg?(cp&&c.grip?.015:.03):0)+(e.spr?.04:0)+((e.z||0)>1?.03:0)-(e.cr&&!e.mvg?.008:0));
for(let k=0;k<w.p;k++){const a=e.a+rr(-sp,sp),sl=Math.tan(cl((e.pt||0)+rr(-sp,sp)*.8,-1.2,1.2)),r=ray(e.x,e.y,a,w.rg,e,0,null,eyeH(e),sl),z2=Math.max(0,eyeH(e)+sl*r.t);
const tr={x1:e.x+Math.cos(e.a)*22,y1:e.y+Math.sin(e.a)*22,x2:e.x+Math.cos(a)*r.t,y2:e.y+Math.sin(a)*r.t,z1:eyeH(e)-6,z2,l:.07};M.T.push(tr);evp('t',tr.x1|0,tr.y1|0,tr.x2|0,tr.y2|0,tr.z1|0,z2|0);
if(r.h){const hs=r.z>=(r.h.cr?30:50);hurt(r.h,w.d*(1-.4*r.t/w.rg)*(hs?1.5:1),e,hs)}}
evp('s',eix(e),e.w);
const dp=Math.hypot(e.x-M.p.x,e.y-M.p.y);if(e===M.p){M.shk=Math.max(M.shk,(e.w==4?10:e.w==3?8:3)*(cp&&c.grip?.6:1));snd(e.w==3?90:e.w==4?60:e.w==1?220:150,.09,'sawtooth',cp&&c.supp?.015:.06)}else if(dp<600)snd(140,.07,'sawtooth',.02*(1-dp/600));
if(e.am[e.w]<=0)reload(e)}
function hurt(v,d,by,hs){if(!v.alive||v.sp>0||v.air>0)return;if(!M.mp&&v===M.p&&by&&by.bot)d*=.75;if(v.ar>0){const a=Math.min(v.ar,d*.5);v.ar-=a;d-=a}
v.hp-=d;v.ht=.18;if(by===M.p){M.hm=.2;M.hs=hs?1:0}else if(by&&by.hum)evp('h',eix(by),hs?1:0);if(v===M.p)snd(80,.1,'square',.07);const b={x:v.x+rr(-10,10),y:v.y+rr(-10,10),r:rr(2,5)};M.B.push(b);evp('b',b.x|0,b.y|0,b.r);if(v.hp<=0)die(v,by)}
function fin1(h,won,txt){if(h.done)return;h.done=1;if(h===M.p){M.fin={won,txt};M.res=M.fin;M.end=3}else if(h.conn)send(h.conn,{t:'fin',won,txt})}
function endAll(){if(!M.mp||M.over)return;M.over=1;M.overT=3.5}
function endM(fn){for(const h of M.E)if(h.hum){const r=fn(h);fin1(h,r[0],r[1])}endAll()}
function die(v,by){if(!v.alive)return;v.alive=0;v.d++;v.rt=3;M.C.push({x:v.x,y:v.y,a:v.a,col:v.col});evp('c',v.x|0,v.y|0,+v.a.toFixed(2),v.col);if(M.C.length>25)M.C.shift();
for(let i=0;i<8;i++){const b={x:v.x+rr(-16,16),y:v.y+rr(-16,16),r:rr(4,10)};M.B.push(b);evp('b',b.x|0,b.y|0,b.r)}if(M.B.length>160)M.B.splice(0,10);
const k=by&&by!==v,fs=k?`${by.name}  [${WP[by.w].n}]  ${v.name}`:`${v.name}  (out)`;M.F.push({t:4.5,s:fs,me:by===M.p||v===M.p});if(M.F.length>5)M.F.shift();evp('k',fs,k?eix(by):-1,eix(v));
if(M.br){v.have.forEach((h,i)=>{if(h&&i>0)M.L.push({x:v.x+rr(-22,22),y:v.y+rr(-22,22),t:'w',i})});M.L.push({x:v.x,y:v.y,t:'m'});
const al=M.E.filter(e=>e.alive);if(v.hum)fin1(v,0,`رتبه ${al.length+1} از ${M.E.length} · کشته: ${v.k}`);
if(al.length<=1){const w=al[0];if(w&&w.hum)fin1(w,1,`رتبه ۱ · کشته: ${w.k}`);endAll()}else if(!al.some(e=>e.hum))endAll()}
if(!k)return;by.k++;const m=M.mode;
if(m=='tdm'){M.sc[by.team]++;if(M.sc[by.team]>=40)endM(h=>[h.team==by.team,`آبی ${M.sc[0]} - ${M.sc[1]} قرمز`])}
if(m=='dm'&&by.k>=25)endM(h=>[h===by,`برنده: ${by.name} · کشته‌های تو: ${h.k}`]);
if(m=='gg'){if(by.lv>=4)return endM(h=>[h===by,`برنده: ${by.name}`]);by.lv++;const w=GG[by.lv];by.have=WP.map(()=>0);by.have[w]=1;by.w=w;by.rl=0;by.am[w]=mm(by,w);by.hp=Math.min(100,by.hp+25)}}
function menu(msg){try{document.exitPointerLock()}catch(e){}const f=M&&(M.fin||M.res);const gain=awardM();M=null;netLeave();$('pause').style.display='none';$('pbt').style.display='none';$('res').textContent=(msg!=null?msg:f?(f.won?'🏆 پیروزی! ':'💀 باختی. ')+f.txt:'')+gain;$('menu').style.display='flex'}
// ---------- update
function upd(dt){if(M.paused&&!M.mp)return;const m=M,z=m.z;m.t+=dt;gr(dt);
for(const t of m.T)t.l-=dt;m.T=m.T.filter(t=>t.l>0);for(const f of m.F)f.t-=dt;m.F=m.F.filter(f=>f.t>0);
m.shk*=.85;m.hm=Math.max(0,m.hm-dt);
if(m.fin){m.end-=dt;if(m.end<=0){if(!m.mp){menu();return}m.fin=null}else if(!m.mp)return}
if(m.over){m.overT-=dt;if(m.overT<=0){netBc({t:'end'});menu()}return}
if(z){if(!z.sh){z.t-=dt;if(z.t<=0){z.sh=1;z.ph++;z.p=0;z.ox=z.x;z.oy=z.y;z.or=z.r}}
else{z.p+=dt/z.dur;const k=Math.min(1,z.p);z.x=z.ox+(z.tx-z.ox)*k;z.y=z.oy+(z.ty-z.oy)*k;z.r=z.or+(z.tr-z.or)*k;if(k>=1){z.sh=0;z.t=25;nz()}}}
for(const e of m.E){
if(!e.alive){if(!m.br){e.rt-=dt;if(e.rt<=0)lo(e)}continue}
e.cd-=dt;e.sp=Math.max(0,e.sp-dt);e.fl-=dt;e.ht-=dt;
if(e.rl>0){e.rl-=dt;if(e.rl<=0)e.am[e.w]=mm(e,e.w)}
if(e===m.p)pl(e,dt,locInp());else if(e.hum&&e.conn)pl(e,dt,netInp(e));else ai(e,dt);
if(e.air>0){e.air-=dt;if(e.air<=0)land(e)}
if(m.br&&!(e.air>0)){for(let i=m.L.length-1;i>=0;i--){const l=m.L[i];if(Math.abs(l.x-e.x)<26&&Math.abs(l.y-e.y)<26){let ok=0;
if(l.t=='w'){if(!(l.own===e&&Math.hypot(e.x-l.ox,e.y-l.oy)<70)){let ob=-1;for(const k of BIG)if(e.have[k])ob=k;
if(ob!=l.i){if(ob>=0){e.have[ob]=0;m.L.push({x:e.x+rr(-14,14),y:e.y+rr(-14,14),t:'w',i:ob,own:e,ox:e.x,oy:e.y})}
e.have[l.i]=1;e.am[l.i]=mm(e,l.i);ok=1;if(e.hum)sw(e,l.i);else best(e)}}}
else if(l.t=='m'&&e.hp<100){e.hp=Math.min(100,e.hp+45);ok=1}else if(l.t=='a'&&e.ar<100){e.ar=Math.min(100,e.ar+50);ok=1}
if(ok)m.L.splice(i,1)}}
if(e.alive&&Math.hypot(e.x-z.x,e.y-z.y)>z.r){e.hp-=dt*(1.5+z.ph*2);e.ht=.1;if(e.hp<=0)die(e,null)}}}
if(m.mp)netTickHost(dt)}
let JN=0,TCR=0;
function locInp(){let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0),iy=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0),sh=md;const sr=keys.ShiftLeft||TS.spr!=null;
const L=TS.l;if(L){const dx=L.x-L.x0,dy=L.y-L.y0,d=Math.hypot(dx,dy);if(d>8){const k=Math.min(1,d/50)/d;ix=dx*k;iy=dy*k}}
let a=null;if(TS.on){if(USE3D&&R3&&R3.fp){if(TS.fire!=null)sh=1}else{const r=TS.r;if(r){const dx=r.x-r.x0,dy=r.y-r.y0,d=Math.hypot(dx,dy);if(d>10){a=Math.atan2(dy,dx);if(d>28)sh=1}}}}else a=aim3D();
if(USE3D&&R3){if(R3.fp){const c=Math.cos(R3.fa),s=Math.sin(R3.fa),f=-iy,jx=f*c-ix*s,jy=f*s+ix*c;ix=jx;iy=jy;a=R3.fa}else{const c=Math.cos(R3.yaw),s=Math.sin(R3.yaw),jx=ix*c+iy*s,jy=-ix*s+iy*c;ix=jx;iy=jy;if(TS.on&&a!=null)a-=R3.yaw}}
return{ix,iy,sr:sr?1:0,sh:sh?1:0,a,pt:(USE3D&&R3&&R3.fp)?R3.pit:0,jn:JN&65535,cr:(keys.KeyC||TCR)?1:0}}
function netInp(e){const I=e.inp;if(!I||performance.now()-e.inT>1500)return{ix:0,iy:0,sr:0,sh:0,a:null,pt:0};return I}
function pl(p,dt,I){if(!M.client&&!M.br&&p.ht<-4)p.hp=Math.min(100,p.hp+10*dt);
const ix=I.ix,iy=I.iy,sr=I.sr;
const l=Math.max(1,Math.hypot(ix,iy)),mvn=ix||iy;
if(p.air>0){p.spr=0;const sp=sr?240:200;p.x=cl(p.x+ix/l*sp*dt,60,M.S-60);p.y=cl(p.y+iy/l*sp*dt,60,M.S-60);if(sr)p.air-=dt*1.2;p.mvg=0;if(I.a!=null)p.a=I.a;p.pt=I.pt||0;return}
if(p.sta==null)p.sta=100;
p.z=p.z||0;p.vz=p.vz||0;const gr0=p.z<=.01&&p.vz<=0;
if(I.jn!=null){if(p.jn0==null)p.jn0=I.jn;else if(I.jn!==p.jn0){p.jn0=I.jn;if(gr0&&!p.cr&&p.sta>12){p.vz=300;p.sta-=10}}}
if(gr0)p.cr=I.cr?1:0;
if(!gr0||p.vz>0){p.vz-=1100*dt;p.z+=p.vz*dt;if(p.z<=0){p.z=0;p.vz=0}}
if(sr&&mvn&&!p.cr&&p.sta>(p.sl?25:0)){p.spr=1;p.sl=0;p.sta-=28*dt;if(p.sta<=0){p.sta=0;p.sl=1}}else{p.spr=0;p.sta=Math.min(100,p.sta+20*dt)}
const sp=(p.spr?290:190)*(p.cr?.5:1);p.mvg=mvn?1:0;mv(p,ix/l*sp*dt,iy/l*sp*dt);
if(I.a!=null)p.a=I.a;p.pt=I.pt||0;
if(I.sh&&!p.spr&&!M.client)fire(p)}
function land(e){e.air=0;if(hitW(e.x,e.y,16)){let ok=0;for(let r=24;r<=480&&!ok;r+=24)for(let k=0;k<12&&!ok;k++){const a=k/12*P2,x=e.x+Math.cos(a)*r,y=e.y+Math.sin(a)*r;if(x>60&&y>60&&x<M.S-60&&y<M.S-60&&!hitW(x,y,18)){e.x=x;e.y=y;ok=1}}if(!ok){const q=fp();e.x=q.x;e.y=q.y}}e.sp=2}
function pick(e){const z=M.z;if(M.br){if(Math.hypot(e.x-z.x,e.y-z.y)>z.r*.85)return{x:z.x+rr(-.3,.3)*z.r,y:z.y+rr(-.3,.3)*z.r};
let b=null,bd=1e9;for(const l of M.L){const d=Math.hypot(l.x-e.x,l.y-e.y);if(d<bd&&(l.t=='w'?!BIG.some(k=>e.have[k]):l.t=='m'?e.hp<80:e.ar<40)){bd=d;b=l}}if(b&&R()<.85)return{x:b.x,y:b.y}}
return fp()}
function ai(e,dt){if(e.air>0){const lz=e.lz||e,dx=lz.x-e.x,dy=lz.y-e.y,d=Math.hypot(dx,dy);if(d>20){e.x+=dx/d*200*dt;e.y+=dy/d*200*dt;e.a=Math.atan2(dy,dx)}else if(e.air>2)e.air=2;return}
const w=WP[e.w];e.t-=dt;
if(e.t<=0){e.t=.2+R()*.15;let b=null,bd=e.w==4?1100:750;
for(const o of M.E)if(o.alive&&!(o.air>0)&&o.team!==e.team){const d=Math.hypot(o.x-e.x,o.y-e.y);if(d<bd&&ray(e.x,e.y,Math.atan2(o.y-e.y,o.x-e.x),d,e,1).t>=d){bd=d;b=o}}
e.tg=b;if(R()<.3)e.sd=-e.sd}
const sp=135+25*dif,tg=e.tg&&e.tg.alive?e.tg:null,tn=dt*3.5*dif;let mvd;
const turn=da=>{let df=da-e.a;df=Math.atan2(Math.sin(df),Math.cos(df));e.a+=cl(df,-tn,tn);return df};
if(tg){const df=turn(Math.atan2(tg.y-e.y,tg.x-e.x)),d=Math.hypot(tg.x-e.x,tg.y-e.y);
if(Math.abs(df)<.15&&d<w.rg*.8){e.pt=Math.atan2((tg.z||0)+(tg.cr?20:32)-eyeH(e),d);fire(e)}
const fw=d>350?1:d<180?-1:0;
mvd=mv(e,(Math.cos(e.a)*fw+Math.cos(e.a+1.57)*e.sd*.7)*sp*dt,(Math.sin(e.a)*fw+Math.sin(e.a+1.57)*e.sd*.7)*sp*dt);
if(mvd<sp*dt*.2)e.sd=-e.sd}
else{if(!e.wp||Math.hypot(e.wp.x-e.x,e.wp.y-e.y)<40||e.sk>.5){e.wp=pick(e);e.sk=0}
turn(Math.atan2(e.wp.y-e.y,e.wp.x-e.x));mvd=mv(e,Math.cos(e.a)*sp*dt,Math.sin(e.a)*sp*dt);
e.sk=mvd<sp*dt*.3?e.sk+dt:0;if(e.am[e.w]<w.m*.4)reload(e)}}
// ---------- render
function vis3(p,e){if(e===p||e.team===p.team||e.air>0)return true;const d=Math.hypot(e.x-p.x,e.y-p.y);return d<1000&&ray(p.x,p.y,Math.atan2(e.y-p.y,e.x-p.x),d,p,1,[]).t>=d}
function visP(p,e){if(vis(p,e))return true;const d0=Math.hypot(e.x-p.x,e.y-p.y);if(d0>=1000)return false;const a=Math.atan2(e.y-p.y,e.x-p.x),nx=-Math.sin(a),ny=Math.cos(a);
for(const o of[-13,13]){const tx=e.x+nx*o,ty=e.y+ny*o,d=Math.hypot(tx-p.x,ty-p.y);if(ray(p.x,p.y,Math.atan2(ty-p.y,tx-p.x),d,p,1).t>=d-1)return true}
const W=M.WN&&M.WN.n===M.Wl.length?M.WN.l:(M.WN={n:M.Wl.length,l:M.Wl.filter(w=>!w.k)}).l;
return ray(p.x,p.y,a,d0,p,1,W).t>=d0}
function vis(p,e){const d=Math.hypot(e.x-p.x,e.y-p.y);return e===p||e.team===p.team||e.air>0||(d<1000&&ray(p.x,p.y,Math.atan2(e.y-p.y,e.x-p.x),d,p,1).t>=d)}
const TX={},TXC=new Map();
function tex(T,f){const c=document.createElement('canvas');c.width=c.height=T;const x=c.getContext('2d');f(x,fn=>{for(let a=-1;a<2;a++)for(let b=-1;b<2;b++)fn(a*T,b*T)});const pt=g.createPattern(c,'repeat');TXC.set(pt,c);return pt}
function blobs(x,W9,n,cs,r0,r1){for(let i=0;i<n;i++){const px=rr(0,256),py=rr(0,256),r=rr(r0,r1),c=cs[i%cs.length];W9((a,b)=>{const q=x.createRadialGradient(px+a,py+b,0,px+a,py+b,r);q.addColorStop(0,c);q.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=q;x.fillRect(px+a-r,py+b-r,2*r,2*r)})}}
function mkTex(){if(TX.grass)return;
TX.grass=tex(256,(x,W9)=>{x.fillStyle='#3e7b2f';x.fillRect(0,0,256,256);blobs(x,W9,12,['rgba(25,65,18,.4)','rgba(140,180,60,.25)'],30,70);
const cs=['#4f9138','#2f6425','#5fa244','#386f2a','#79b34c'];x.lineCap='round';
for(let i=0;i<3200;i++){const px=rr(0,256),py=rr(0,256),an=-1.57+rr(-.9,.9),l=rr(3,10),c=cs[(i*7)%5],lw=rr(.8,1.8);W9((a,b)=>{x.strokeStyle=c;x.lineWidth=lw;x.beginPath();x.moveTo(px+a,py+b);x.lineTo(px+a+Math.cos(an)*l,py+b+Math.sin(an)*l);x.stroke()})}
for(let i=0;i<14;i++){const px=rr(0,256),py=rr(0,256),c=['#f4f0e0','#f2d54a','#e98fb0'][i%3];W9((a,b)=>{x.fillStyle=c;x.beginPath();x.arc(px+a,py+b,1.6,0,P2);x.fill()})}});
TX.sand=tex(256,(x,W9)=>{x.fillStyle='#bba878';x.fillRect(0,0,256,256);blobs(x,W9,14,['rgba(120,95,50,.28)','rgba(235,220,175,.3)'],30,80);
const cs=['#a89463','#cfbd90','#9a8659','#d8c9a0'];for(let i=0;i<2400;i++){const px=rr(0,256),py=rr(0,256),c=cs[i%4],q=rr(1,2.6);W9((a,b)=>{x.fillStyle=c;x.fillRect(px+a,py+b,q,q*.7)})}
for(let i=0;i<50;i++){const px=rr(0,256),py=rr(0,256),r=rr(1.5,4);W9((a,b)=>{x.fillStyle='rgba(60,48,30,.35)';x.beginPath();x.ellipse(px+a+1,py+b+1,r,r*.8,0,0,P2);x.fill();x.fillStyle='#b5a37a';x.beginPath();x.ellipse(px+a,py+b,r,r*.8,0,0,P2);x.fill()})}
x.strokeStyle='rgba(70,52,28,.3)';x.lineWidth=2;for(let i=0;i<2;i++)for(let j=0;j<2;j++)x.strokeRect(i*128+1,j*128+1,126,126)});
TX.brick=tex(128,x=>{x.fillStyle='#5a5148';x.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let c=-1;c<5;c++){const bx=c*32+(r&1?16:0),by=r*16,h=rr(-16,16)|0;x.fillStyle=`rgb(${152+h},${78+h/2},${60+h/2})`;x.fillRect(bx+1,by+1,30,14);x.fillStyle='rgba(255,255,255,.12)';x.fillRect(bx+1,by+1,30,2);x.fillStyle='rgba(0,0,0,.22)';x.fillRect(bx+1,by+12,30,3)}
for(let i=0;i<500;i++){x.fillStyle=`rgba(0,0,0,${rr(.04,.12)})`;x.fillRect(rr(0,128),rr(0,128),2,2)}});
TX.wood=tex(128,x=>{for(let c=0;c<8;c++){const h=rr(-12,12)|0;x.fillStyle=`rgb(${142+h},${102+h},${64+h})`;x.fillRect(c*16,0,16,128);for(let k=0;k<10;k++){x.strokeStyle='rgba(60,38,18,.22)';x.lineWidth=1;const gx=c*16+rr(2,14);x.beginPath();x.moveTo(gx,0);x.lineTo(gx+rr(-2,2),128);x.stroke()}x.strokeStyle='rgba(40,24,10,.7)';x.lineWidth=2;x.strokeRect(c*16,-2,16,132)}});
TX.crate=tex(64,x=>{for(let k=0;k<4;k++){x.fillStyle=k%2?'#946f3e':'#80602f';x.fillRect(0,k*16,64,16);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(0,k*16+15,64,1)}
x.strokeStyle='#4f3818';x.lineWidth=6;x.strokeRect(3,3,58,58);x.lineWidth=5;x.beginPath();x.moveTo(6,6);x.lineTo(58,58);x.moveTo(58,6);x.lineTo(6,58);x.stroke();x.fillStyle='#c9b27a';for(const[a,b]of[[8,8],[56,8],[8,56],[56,56]]){x.beginPath();x.arc(a,b,2,0,P2);x.fill()}});
TX.flw=tex(64,x=>{for(let k=0;k<4;k++){const h=rr(-10,10)|0;x.fillStyle=`rgb(${118+h},${86+h},${54+h})`;x.fillRect(0,k*16,64,16);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(0,k*16,64,1);x.fillRect(rr(8,56),k*16,1,16)}});
TX.flt=tex(64,x=>{for(let i=0;i<2;i++)for(let j=0;j<2;j++){const h=rr(-8,8)|0;x.fillStyle=`rgb(${112+h},${108+h},${100+h})`;x.fillRect(i*32,j*32,32,32);x.strokeStyle='rgba(0,0,0,.3)';x.strokeRect(i*32+.5,j*32+.5,31,31)}})}
function mkTexN(k){if(k=='snow'&&!TX.snow){
TX.snow=tex(256,(x,W9)=>{x.fillStyle='#dde8f1';x.fillRect(0,0,256,256);blobs(x,W9,14,['rgba(150,180,210,.28)','rgba(255,255,255,.45)'],30,80);for(let i=0;i<1800;i++){const px=rr(0,256),py=rr(0,256),q=rr(.8,2);W9((a,b)=>{x.fillStyle=i%3?'rgba(255,255,255,.75)':'rgba(140,170,200,.35)';x.fillRect(px+a,py+b,q,q)})}});
TX.conc=tex(128,x=>{x.fillStyle='#7d838c';x.fillRect(0,0,128,128);for(let r=0;r<4;r++)for(let c=0;c<4;c++){const h=rr(-10,10)|0;x.fillStyle=`rgb(${128+h},${134+h},${142+h})`;x.fillRect(c*32+1,r*32+1,30,30);x.fillStyle='rgba(255,255,255,.14)';x.fillRect(c*32+1,r*32+1,30,2)}for(let i=0;i<400;i++){x.fillStyle=`rgba(0,0,0,${rr(.04,.1)})`;x.fillRect(rr(0,128),rr(0,128),2,2)}});
TX.fls=tex(64,x=>{for(let i=0;i<2;i++)for(let j=0;j<2;j++){const h=rr(-6,6)|0;x.fillStyle=`rgb(${168+h},${180+h},${192+h})`;x.fillRect(i*32,j*32,32,32);x.strokeStyle='rgba(0,0,0,.25)';x.strokeRect(i*32+.5,j*32+.5,31,31)}})}
if(k=='urban'&&!TX.asph){
TX.asph=tex(256,(x,W9)=>{x.fillStyle='#3a3e45';x.fillRect(0,0,256,256);blobs(x,W9,12,['rgba(20,22,26,.4)','rgba(95,100,110,.25)'],30,70);for(let i=0;i<2600;i++){const px=rr(0,256),py=rr(0,256);W9((a,b)=>{x.fillStyle=i%2?'rgba(255,255,255,.07)':'rgba(0,0,0,.18)';x.fillRect(px+a,py+b,1.6,1.6)})}
x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=1.5;for(let i=0;i<6;i++){let px=rr(0,256),py=rr(0,256);x.beginPath();x.moveTo(px,py);for(let k=0;k<6;k++){px+=rr(-14,14);py+=rr(-14,14);x.lineTo(px,py)}x.stroke()}});
TX.flc=tex(64,x=>{for(let i=0;i<2;i++)for(let j=0;j<2;j++){const h=rr(-6,6)|0;x.fillStyle=`rgb(${88+h},${92+h},${98+h})`;x.fillRect(i*32,j*32,32,32);x.strokeStyle='rgba(0,0,0,.35)';x.strokeRect(i*32+.5,j*32+.5,31,31)}})}}
function sold(e,m){const wk=Math.sin((e.x+e.y)*.06);
g.save();g.translate(e.x,e.y);g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(5,7,16,13,0,0,P2);g.fill();g.rotate(e.a);
if(e.sp>0&&((m.t*10)|0)%2)g.globalAlpha=.5;
g.fillStyle='#1c1c1c';g.beginPath();g.ellipse(-4+wk*6,-7,7,4,0,0,P2);g.ellipse(-4-wk*6,7,7,4,0,0,P2);g.fill();
const gl=14+GX[e.w];
const c=cs(e);g.fillStyle=pc(e)?SK[c.skin]:'#23262c';g.fillRect(6,-2.5,gl,5);g.fillStyle='#5a606a';g.fillRect(6,-2.5,gl,1.5);g.fillStyle='#14161a';g.fillRect(2,-3.5,9,7);if(pc(e)){if(c.scope){g.fillStyle='#14171c';g.fillRect(10,-5,12,3);g.fillStyle='#4da3ff';g.fillRect(20,-5,2,3)}if(c.supp){g.fillStyle='#3a3f48';g.fillRect(6+gl,-3.5,9,7)}}
g.strokeStyle=e.col;g.lineWidth=6;g.lineCap='round';g.beginPath();g.moveTo(0,-12);g.lineTo(13,-2);g.moveTo(0,12);g.lineTo(18,2);g.stroke();
g.fillStyle='#d9a97a';g.beginPath();g.arc(14,-2,3.2,0,P2);g.arc(20,2,3.2,0,P2);g.fill();
g.fillStyle=e.col;g.beginPath();g.ellipse(-1,0,10,16,0,0,P2);g.fill();g.strokeStyle=e.ht>0?'#fff':'rgba(0,0,0,.55)';g.lineWidth=2;g.stroke();
g.fillStyle='rgba(0,0,0,.25)';g.fillRect(-9,-7,6,14);
g.fillStyle=e.col;g.beginPath();g.arc(1,0,8,0,P2);g.fill();g.fillStyle='rgba(255,255,255,.2)';g.beginPath();g.arc(-1,-2,4.5,0,P2);g.fill();g.strokeStyle='rgba(0,0,0,.6)';g.lineWidth=1.5;g.beginPath();g.arc(1,0,8,0,P2);g.stroke();
if(e.fl>0){g.fillStyle='#ffd36b';g.beginPath();g.arc(12+gl,0,8,0,P2);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(12+gl,0,4,0,P2);g.fill()}
g.restore()}
function visPoly(p,Rv){const A=[];for(let i=0;i<220;i++)A.push(i/220*P2-Math.PI);
const WL=M.Wl.filter(w=>!(w.x>p.x+Rv||w.x+w.w<p.x-Rv||w.y>p.y+Rv||w.y+w.h<p.y-Rv));
for(const w of WL){
for(const[qx,qy]of[[w.x,w.y],[w.x+w.w,w.y],[w.x,w.y+w.h],[w.x+w.w,w.y+w.h]]){const a=Math.atan2(qy-p.y,qx-p.x);A.push(a-.0003,a,a+.0003)}}
A.sort((a,b)=>a-b);return A.map(a=>{let t=ray(p.x,p.y,a,Rv,p,1,WL).t;if(t<Rv)t+=26;return[p.x+Math.cos(a)*t,p.y+Math.sin(a)*t]})}
function camE(m){const p=m.p;if(p.alive||!m.mp||!m.br)return p;let c=m.E[m.cid];if(!c||!c.alive){c=m.E.find(e=>e.alive&&e.hum)||m.E.find(e=>e.alive)||p;m.cid=m.E.indexOf(c)}return c}
function draw2D(){g.setTransform(D,0,0,D,0,0);const m=M,p=camE(m),S=m.S,z=m.z;
const Z=zoom()*(p.air>0?.8:1),vw=W/Z,vh=H/Z,cx=p.x-vw/2+(R()-.5)*m.shk,cy=p.y-vh/2+(R()-.5)*m.shk;
g.fillStyle='#05080b';g.fillRect(0,0,W,H);g.save();g.scale(Z,Z);g.translate(-cx,-cy);
g.fillStyle=TX[m.th.g];g.fillRect(0,0,S,S);
for(const t of m.Pt){if(t.x+t.r<cx||t.x-t.r>cx+vw||t.y+t.r<cy||t.y-t.r>cy+vh)continue;const q=g.createRadialGradient(t.x,t.y,0,t.x,t.y,t.r);q.addColorStop(0,t.c?m.th.p1:m.th.p2);q.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=q;g.fillRect(t.x-t.r,t.y-t.r,t.r*2,t.r*2)}
for(const b of m.Bl){g.fillStyle=TX[m.th.f];g.fillRect(b.x,b.y,b.w,b.h)}
for(const d of m.D){if(d.x<cx-60||d.x>cx+vw+60||d.y<cy-60||d.y>cy+vh+60)continue;g.fillStyle='rgba(0,0,0,.3)';g.beginPath();g.arc(d.x+6,d.y+8,d.r,0,P2);g.fill();for(let k=0;k<4;k++){g.fillStyle=m.th.bc[k];g.beginPath();g.arc(d.x+Math.sin(d.x*(k+1))*d.r*.22,d.y+Math.cos(d.y*(k+1))*d.r*.22,d.r*(1-k*.2),0,P2);g.fill()}}
g.fillStyle='rgba(120,10,10,.5)';for(const b of m.B){g.beginPath();g.arc(b.x,b.y,b.r,0,P2);g.fill()}
for(const c of m.C){g.save();g.translate(c.x,c.y);g.rotate(c.a);g.fillStyle='rgba(0,0,0,.3)';g.beginPath();g.ellipse(3,4,17,14,0,0,P2);g.fill();g.fillStyle=c.col;g.globalAlpha=.7;g.beginPath();g.ellipse(0,0,10,16,0,0,P2);g.fill();g.fillStyle='rgba(0,0,0,.4)';g.beginPath();g.arc(2,0,8,0,P2);g.fill();g.restore()}
g.font='bold 13px Tahoma';g.textAlign='center';
for(const l of m.L){g.fillStyle=l.t=='w'?'#f0a020':l.t=='m'?'#3ddc84':'#4da3ff';g.fillRect(l.x-12,l.y-12,24,24);g.fillStyle='#10131a';g.fillText(l.t=='w'?WP[l.i].n[0]:l.t=='m'?'+':'A',l.x,l.y+5)}
for(const w of m.Wl){if(w.x>cx+vw||w.x+w.w<cx||w.y>cy+vh||w.y+w.h<cy)continue;g.fillStyle='rgba(0,0,0,.16)';g.fillRect(w.x+4,w.y+5,w.w+4,w.h+5);g.fillRect(w.x+7,w.y+9,w.w+3,w.h+4);g.fillRect(w.x+10,w.y+13,w.w,w.h);
if(w.k){g.save();g.translate(w.x,w.y);g.scale(w.w/64,w.h/64);g.fillStyle=TX.crate;g.fillRect(0,0,64,64);g.restore()}else{g.fillStyle=TX[m.th.w];g.fillRect(w.x,w.y,w.w,w.h)}
g.strokeStyle='rgba(0,0,0,.6)';g.lineWidth=2;g.strokeRect(w.x,w.y,w.w,w.h);g.fillStyle='rgba(255,255,255,.2)';g.fillRect(w.x,w.y,w.w,3);g.fillRect(w.x,w.y,3,w.h);g.fillStyle='rgba(0,0,0,.28)';g.fillRect(w.x,w.y+w.h-3,w.w,3);g.fillRect(w.x+w.w-3,w.y,3,w.h)}
g.lineWidth=2;for(const t of m.T){g.strokeStyle=`rgba(255,226,140,${t.l*12})`;g.beginPath();g.moveTo(t.x1,t.y1);g.lineTo(t.x2,t.y2);g.stroke()}
for(const e of m.E){if(!e.alive||!vis(p,e))continue;
sold(e,m);
if(e!==p){g.fillStyle='rgba(0,0,0,.6)';g.fillRect(e.x-16,e.y-27,32,5);g.fillStyle=e.team==p.team?'#3ddc84':'#e5484d';g.fillRect(e.x-16,e.y-27,32*cl(e.hp/100,0,1),5);g.font='11px Tahoma';g.fillStyle='#fff';g.fillText(e.name,e.x,e.y-32)}}
if(z){g.beginPath();g.rect(cx-60,cy-60,vw+120,vh+120);g.arc(z.x,z.y,Math.max(1,z.r),0,P2,true);g.fillStyle='rgba(200,30,30,.3)';g.fill('evenodd');
g.strokeStyle='#ff5050';g.lineWidth=5;g.beginPath();g.arc(z.x,z.y,z.r,0,P2);g.stroke();g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=3;g.beginPath();g.arc(z.tx,z.ty,z.tr,0,P2);g.stroke()}
g.restore();
if(!(p.air>0)){const mk=MK.getContext('2d'),sc=MK.width/W;mk.setTransform(1,0,0,1,0,0);mk.globalCompositeOperation='source-over';mk.filter='none';mk.clearRect(0,0,MK.width,MK.height);mk.fillStyle='rgba(5,8,12,.94)';mk.fillRect(0,0,MK.width,MK.height);
mk.globalCompositeOperation='destination-out';mk.setTransform(sc*Z,0,0,sc*Z,MK.width/2-p.x*sc*Z,MK.height/2-p.y*sc*Z);
const pg=visPoly(p,900);mk.filter='blur(1.5px)';mk.beginPath();mk.moveTo(pg[0][0],pg[0][1]);for(const q of pg)mk.lineTo(q[0],q[1]);mk.closePath();mk.fillStyle='#000';mk.fill();
mk.setTransform(1,0,0,1,0,0);g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';g.drawImage(MK,0,0,W,H);
const fg=g.createRadialGradient(W/2,H/2,300*Z,W/2,H/2,860*Z);fg.addColorStop(0,'rgba(5,8,12,0)');fg.addColorStop(1,'rgba(5,8,12,.9)');g.fillStyle=fg;g.fillRect(0,0,W,H)}
chutes(m,Z,cx,cy);hud()}
function chutes(m,Z,cx,cy){g.save();g.scale(Z,Z);g.translate(-cx,-cy);
for(const e of m.E){if(!e.alive||!(e.air>0))continue;const alt=Math.min(1,e.air/AIRT);
g.fillStyle='rgba(0,0,0,.25)';g.beginPath();g.ellipse(e.x+alt*70,e.y+alt*90,26,22,0,0,P2);g.fill();
g.save();g.translate(e.x,e.y);for(let k=0;k<8;k++){g.fillStyle=k%2?'#f2f2f2':e.col;g.beginPath();g.moveTo(0,0);g.arc(0,0,34,k*P2/8,(k+1)*P2/8);g.closePath();g.fill()}
g.strokeStyle='rgba(0,0,0,.6)';g.lineWidth=2;g.beginPath();g.arc(0,0,34,0,P2);g.stroke();g.fillStyle='#14161a';g.beginPath();g.arc(0,0,5,0,P2);g.fill();g.restore()}
fxd(m);g.restore()}
function throwG(e,i){if(!M||!e)return;if(M.client){M.cq.push(['g',i]);M.inT=1;return}const q=e.gr&&e.gr[i];if(!q||q.n<=0||!e.alive||e.air>0)return;q.n--;M.Gr.push({x:e.x,y:e.y,vx:Math.cos(e.a)*520,vy:Math.sin(e.a)*520,t:0,k:q.k,by:e})}
function gr(dt){const m=M;for(const q of m.Gr){q.t+=dt;if(q.t<.7){const nx=q.x+q.vx*dt,ny=q.y+q.vy*dt;if(hitW(nx,ny,5))q.t=.7;else{q.x=nx;q.y=ny}}if(q.t>=1.6&&!q.d){q.d=1;boom(q)}}
m.Gr=m.Gr.filter(q=>!q.d);for(const f of m.Fx){f.t-=dt;if(f.k=='f'){f.tk=(f.tk||0)-dt;if(f.tk<=0){f.tk=.25;for(const e of m.E)if(e.alive&&Math.hypot(e.x-f.x,e.y-f.y)<f.r)hurt(e,5,f.by)}}}m.Fx=m.Fx.filter(f=>f.t>0)}
function boom(q){const m=M;if(q.k=='smoke')m.Fx.push({k:'s',x:q.x,y:q.y,r:140,t:12,s:m.t});else if(q.k=='fire')m.Fx.push({k:'f',x:q.x,y:q.y,r:110,t:7,by:q.by});
else{m.Fx.push({k:'e',x:q.x,y:q.y,r:170,t:.35});snd(60,.3,'sawtooth',.2);m.shk=Math.max(m.shk,8);for(const e of m.E){if(!e.alive)continue;const d=Math.hypot(e.x-q.x,e.y-q.y);if(d>170)continue;if(m.mode=='tdm'&&e.team==q.by.team&&e!==q.by)continue;if(ray(q.x,q.y,Math.atan2(e.y-q.y,e.x-q.x),d,q.by,1).t<d-1)continue;hurt(e,115*(1-d/170),q.by)}}}
function fxd(m){for(const f of m.Fx){if(f.k=='s'){const a=Math.min(1,f.t/2,(m.t-f.s)/.6+.2);for(let i=0;i<7;i++){const an=i*.9+m.t*.15,dd=f.r*.45*(i%3?1:.5);g.fillStyle=`rgba(190,195,200,${.34*a})`;g.beginPath();g.arc(f.x+Math.cos(an)*dd,f.y+Math.sin(an)*dd,f.r*.62,0,P2);g.fill()}}
else if(f.k=='f'){for(let i=0;i<6;i++){const an=i*1.1+m.t*3,dd=f.r*.5*((i%3)/2+.2);g.fillStyle=`rgba(255,${90+i*18},20,${.28+.12*Math.sin(m.t*10+i)})`;g.beginPath();g.arc(f.x+Math.cos(an)*dd,f.y+Math.sin(an)*dd,f.r*.42,0,P2);g.fill()}}
else{const k=1-f.t/.35;g.fillStyle=`rgba(255,200,80,${.7*(1-k)})`;g.beginPath();g.arc(f.x,f.y,f.r*(.3+.7*k),0,P2);g.fill()}}
for(const q of m.Gr){g.fillStyle=q.k=='smoke'?'#9aa':q.k=='fire'?'#e8742a':'#3a4a2a';g.beginPath();g.arc(q.x,q.y,5,0,P2);g.fill()}}
function hud(){const m=M,p=m.p,z=m.z;g.direction='ltr';
const gr=g.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.75);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,'rgba(0,0,0,.55)');g.fillStyle=gr;g.fillRect(0,0,W,H);
if(p.ht>0){g.fillStyle=`rgba(255,0,0,${Math.min(.3,p.ht)})`;g.fillRect(0,0,W,H)}
if(p.air>0){g.textAlign='center';g.font='bold 22px Tahoma';g.fillStyle='#fff';g.fillText('PARACHUTE  '+Math.ceil(p.air)+'s',W/2,H-64);g.font='13px Tahoma';g.fillText('Move = steer   ·   Sprint = dive',W/2,H-44)}
if(p.gr){g.textAlign='right';g.font='12px Tahoma';g.fillStyle='#e6ebf2';g.fillText(p.gr.map((q,i)=>'GH'[i]+': '+({frag:'Frag',smoke:'Smoke',fire:'Fire'})[q.k]+' x'+q.n).join('   '),W-16,H-96)}
const bar=(x,y,w,v,c)=>{g.fillStyle='rgba(0,0,0,.55)';g.fillRect(x,y,w,12);g.fillStyle=c;g.fillRect(x,y,w*cl(v/100,0,1),12)};
bar(20,H-34,200,p.hp,'#e5484d');bar(20,H-52,200,p.ar,'#4da3ff');if(p.sta<99)bar(20,H-70,200,p.sta,'#f0a020');
g.fillStyle='#fff';g.font='bold 13px Tahoma';g.textAlign='left';g.fillText('HP '+Math.ceil(p.hp),228,H-24);if(p.ar>0)g.fillText('ARMOR '+Math.ceil(p.ar),228,H-42);
const w=WP[p.w];g.textAlign='right';g.font='bold 28px Tahoma';g.fillStyle='#f0a020';g.fillText(p.rl>0?'RELOAD':p.am[p.w]+' / '+mm(p,p.w),W-24,H-44);
g.font='bold 14px Tahoma';g.fillStyle='#fff';g.fillText(w.n,W-24,H-70);
[PIS,BIG].forEach((L,n)=>{g.fillStyle=L.some(j=>p.have[j])?(L.includes(p.w)?'#f0a020':'#aab4c6'):'#3a4252';g.fillText(n+1,W-24-(1-n)*24,H-18)});
g.textAlign='center';g.font='bold 18px Tahoma';g.fillStyle='#fff';let s='';
if(m.mode=='dm')s=`DEATHMATCH   KILLS ${p.k}/25   DEATHS ${p.d}`;
else if(m.mode=='tdm')s=`BLUE ${m.sc[0]}  -  ${m.sc[1]} RED   (first to 40)`;
else if(m.mode=='gg')s=`GUN GAME   LEVEL ${p.lv+1}/5   ${WP[GG[p.lv]].n}`;
else s=`ALIVE ${m.E.filter(e=>e.alive).length}   KILLS ${p.k}   `+(z.sh?'ZONE SHRINKING':'NEXT ZONE '+Math.ceil(z.t)+'s');
g.fillText(s,W/2,28);
g.font='13px Tahoma';g.textAlign='right';m.F.forEach((f,i)=>{const tw=g.measureText(f.s).width;g.fillStyle=f.me?'rgba(240,160,32,.4)':'rgba(0,0,0,.5)';g.fillRect(W-24-tw-10,44+i*22,tw+16,20);g.fillStyle='#fff';g.fillText(f.s,W-24,59+i*22)});
if(!p.alive&&!m.br){g.textAlign='center';g.font='bold 26px Tahoma';g.fillStyle='#fff';g.fillText('RESPAWN IN '+Math.max(1,Math.ceil(p.rt)),W/2,H/2)}
if(m.mp&&m.br&&!p.alive&&!m.fin){g.textAlign='center';g.font='bold 16px Tahoma';g.fillStyle='#fff';g.fillText('SPECTATING: '+camE(m).name+'   (Esc / \u2630 = LEAVE)',W/2,H-18)}
if(m.br){const ms=Math.min(150,H*.3),k=ms/m.S;g.fillStyle='rgba(0,0,0,.55)';g.fillRect(14,14,ms,ms);g.save();g.beginPath();g.rect(14,14,ms,ms);g.clip();g.translate(14,14);
g.fillStyle='rgba(255,255,255,.18)';for(const o of m.Wl)g.fillRect(o.x*k,o.y*k,Math.max(1,o.w*k),Math.max(1,o.h*k));
g.strokeStyle='#ff5050';g.lineWidth=2;g.beginPath();g.arc(z.x*k,z.y*k,z.r*k,0,P2);g.stroke();g.strokeStyle='#fff';g.lineWidth=1;g.beginPath();g.arc(z.tx*k,z.ty*k,z.tr*k,0,P2);g.stroke();
g.fillStyle='#3fa7ff';g.beginPath();g.arc(camE(m).x*k,camE(m).y*k,4,0,P2);g.fill();g.restore()}
if(TS.on){g.lineWidth=2;for(const q of[TS.l])if(q){g.strokeStyle='rgba(255,255,255,.35)';g.beginPath();g.arc(q.x0,q.y0,50,0,P2);g.stroke();g.fillStyle='rgba(255,255,255,.3)';const d=Math.hypot(q.x-q.x0,q.y-q.y0)||1,k=Math.min(50,d)/d;g.beginPath();g.arc(q.x0+(q.x-q.x0)*k,q.y0+(q.y-q.y0)*k,24,0,P2);g.fill()}
for(const b of BT()){g.fillStyle='rgba(0,0,0,.45)';g.strokeStyle='rgba(255,255,255,.5)';g.beginPath();g.arc(b.x,b.y,30,0,P2);g.fill();g.stroke();g.fillStyle=b.k=='sp'&&TS.spr!=null?'#f0a020':'#fff';g.font='bold 20px Tahoma';g.textAlign='center';g.fillText(b.t,b.x,b.y+7)}}
const sp=WP[p.w].s*220+8+(p.mvg?6:0);g.strokeStyle=m.hm>0?(m.hs?'#ffd23b':'#ff3b3b'):'#fff';g.lineWidth=2;g.beginPath();
if(m.hm>0){g.moveTo(mx-8,my-8);g.lineTo(mx+8,my+8);g.moveTo(mx+8,my-8);g.lineTo(mx-8,my+8)}else{g.arc(mx,my,sp,0,P2);g.moveTo(mx-sp-6,my);g.lineTo(mx-sp+4,my);g.moveTo(mx+sp-4,my);g.lineTo(mx+sp+6,my);g.moveTo(mx,my-sp-6);g.lineTo(mx,my-sp+4);g.moveTo(mx,my+sp-4);g.lineTo(mx,my+sp+6)}if(!TS.on)g.stroke();if(m.hm>0&&m.hs){g.font='bold 13px Tahoma';g.fillStyle='#ffd23b';g.textAlign='center';g.fillText('HEADSHOT',mx,my-28)}
if(m.fin){g.fillStyle='rgba(0,0,0,.5)';g.fillRect(0,H/2-60,W,120);g.textAlign='center';g.font='900 52px Impact,sans-serif';g.fillStyle=m.fin.won?'#f0a020':'#e5484d';g.fillText(m.fin.won?'VICTORY':'DEFEAT',W/2,H/2+18)}}
function loop(ts){requestAnimationFrame(loop);const dt=Math.min(.05,(ts-last)/1000||0);last=ts;if(M){if(M.client)cupd(dt);else upd(dt);if(M){if(M.client&&!M.got){g.setTransform(D,0,0,D,0,0);g.fillStyle='#05080b';g.fillRect(0,0,W,H);g.fillStyle='#fff';g.font='bold 18px Tahoma';g.textAlign='center';g.fillText('...',W/2,H/2)}else{draw();if(M.client&&performance.now()-M.lastS>3000){g.setTransform(D,0,0,D,0,0);g.fillStyle='#ff8a8a';g.font='bold 14px Tahoma';g.textAlign='center';g.fillText('WEAK CONNECTION…',W/2,70)}}}}}
wkUI();requestAnimationFrame(loop);
/* keep online matches ticking while the tab is hidden (rAF is paused there) */
(function(){let prev=performance.now(),w;try{w=new Worker(URL.createObjectURL(new Blob(['setInterval(()=>postMessage(0),50)'])))}catch(e){return}
w.onmessage=()=>{const now=performance.now(),dt=Math.min(.05,(now-prev)/1000);prev=now;if(!document.hidden||!M||!M.mp)return;last=now;try{if(M.client)cupd(dt);else upd(dt)}catch(e){console.warn(e)}}})();

/* ===== maps ===== */
const AIRT=18;
const THEME={
sand:{g:'sand',w:'brick',f:'flt',p1:'rgba(240,225,180,.16)',p2:'rgba(90,65,30,.22)',bush:0,bc:[]},
grass:{g:'grass',w:'wood',f:'flw',p1:'rgba(150,190,70,.16)',p2:'rgba(15,50,10,.28)',bush:55,bc:['#245a1e','#2f6a27','#3b7a2f','#4c9040']},
snow:{g:'snow',w:'conc',f:'fls',p1:'rgba(255,255,255,.22)',p2:'rgba(110,140,170,.18)',bush:30,bc:['#8d9bab','#a6b3c1','#c3cdd8','#e3eaf1']},
urban:{g:'asph',w:'brick',f:'flc',p1:'rgba(130,135,145,.14)',p2:'rgba(8,10,14,.25)',bush:0,bc:[]}};
const MAPS={
dm:[{id:'dust',n:'غبار',th:'sand',S:2400,c:600,bp:.5,cp:.35},{id:'city',n:'شهر',th:'urban',S:2600,c:450,bp:.72,cp:.18},{id:'arctic',n:'قطب',th:'snow',S:2400,c:600,bp:.32,cp:.5}],
tdm:[{id:'dust',n:'پایگاه کویری',th:'sand',S:2800,c:700,bp:.5,cp:.35},{id:'city',n:'خیابان‌ها',th:'urban',S:3000,c:500,bp:.7,cp:.2},{id:'arctic',n:'یخ‌زار',th:'snow',S:2800,c:700,bp:.34,cp:.5}],
gg:[{id:'dust',n:'غبار',th:'sand',S:2000,c:500,bp:.5,cp:.35},{id:'yard',n:'انبار',th:'urban',S:2000,c:500,bp:.4,cp:.5},{id:'arctic',n:'قطب',th:'snow',S:2000,c:500,bp:.3,cp:.5}],
br:[{id:'isle',n:'جزیره سبز',th:'grass',S:8400,c:600,bp:.45,cp:.3},{id:'sahara',n:'صحرای بزرگ',th:'sand',S:8400,c:600,bp:.4,cp:.35},{id:'tundra',n:'یخچال',th:'snow',S:8400,c:600,bp:.38,cp:.4}]};
/* ===== online (WebRTC / PeerJS) ===== */
const NETV='frontline1',TARGET={br:30,tdm:10,dm:8,gg:8},MN={br:'بتل رویال',tdm:'دث‌مچ تیمی',dm:'دث‌مچ',gg:'Gun Game'};
const HC=['#2f6fb3','#c2417e','#2fa8a0','#d97f2b','#8a5bd6','#c9b227','#7fb34a','#b3562f'];
let NT=null;
const fa=n=>n.toLocaleString('fa-IR'),send=(c,o)=>{try{c&&c.send(o)}catch(e){}};
const eix=e=>M.E.indexOf(e),evp=(...a)=>{if(M&&M.mp&&!M.client)M.ev.push(a)};
const cleanName=v=>String(v||'').replace(/[^\p{L}\p{N} _-]/gu,'').trim().slice(0,12)||'Player';
const myName=()=>SESS?SESS.name:cleanName($('pn').value);
const cusArr=()=>[CUS.w,CUS.skin,CUS.mag,CUS.scope,CUS.supp,CUS.grip,CUS.p||0,CUS.g||['frag','smoke']];
const cusObj=a=>{a=Array.isArray(a)?a:[];const n=(i,m)=>cl(a[i]|0,0,m);return{w:BIG.includes(a[0]|0)?a[0]|0:2,p:PIS.includes(a[6]|0)?a[6]|0:0,g:(Array.isArray(a[7])&&a[7].length==2?a[7]:['frag','smoke']).map(k=>['frag','smoke','fire'].includes(k)?k:'frag'),skin:n(1,SK.length-1),mag:n(2,1),scope:n(3,1),supp:n(4,1),grip:n(5,1)}};
function mulb(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
try{$('pn').value=localStorage.getItem('flname')||('Player'+(10+Math.floor(Math.random()*90)))}catch(e){$('pn').value='Player'}
$('pn').onchange=()=>{if(!SESS)try{localStorage.setItem('flname',myName())}catch(e){}};

const SB_URL='https://aqwadxoyotoavavlgfqr.supabase.co',SB_KEY='sb_publishable_RVck28AkaweI_U1fJrnWKw_WLEULhVV';
/* --- transports --- */
function wrapConn(c){const w={onmsg:null,onclose:null,send(o){try{c.send(o)}catch(e){}},close(){try{c.close()}catch(e){}}};c.on('data',d=>w.onmsg&&w.onmsg(d));c.on('close',()=>{w.cl=1;w.onclose&&w.onclose()});c.on('error',e=>{w.why=(e&&e.type)||'err';dbg('conn error: '+((e&&e.type)||e))});try{const pc=c.peerConnection;pc.addEventListener('iceconnectionstatechange',()=>{w.ice=pc.iceConnectionState;dbg('ICE: '+w.ice)})}catch(e){}return w}
function wrapPeer(p){const n={id:p.id,onconn:null,q:[],
connect(id,ms=3500){return new Promise((ok,no)=>{let d=0;const c=p.connect(id,{serialization:'json',reliable:true});
const eh=e=>{if(e.type=='peer-unavailable'&&String(e.message||'').includes(id))fail('none')};
const fail=r=>{if(!d){d=1;p.off('error',eh);try{c.close()}catch(_){}no(r)}};
p.on('error',eh);c.on('open',()=>{if(!d){d=1;p.off('error',eh);ok(wrapConn(c))}});setTimeout(()=>fail('timeout'),ms)})},
close(){try{p.destroy()}catch(e){}}};
p.on('connection',c=>c.on('open',()=>{const w=wrapConn(c);n.onconn?n.onconn(w):n.q.push(w)}));return n}
const TP_PEER={async load(){if(window.Peer)return;
for(const u of['https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js','https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js','https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.5.4/peerjs.min.js']){
try{await new Promise((ok,no)=>{const e=document.createElement('script');const t=setTimeout(()=>{e.remove();no('t')},8000);e.onload=()=>{clearTimeout(t);ok()};e.onerror=()=>{clearTimeout(t);e.remove();no('e')};e.src=u;document.head.appendChild(e)});if(window.Peer)return}catch(e){}}
throw'load'},
node(id){return new Promise((ok,no)=>{let d=0;const ICE={iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun.cloudflare.com:3478'},{urls:'stun:global.stun.twilio.com:3478'},{urls:'stun:openrelay.metered.ca:80'},{urls:['turn:openrelay.metered.ca:80','turn:openrelay.metered.ca:443','turn:openrelay.metered.ca:443?transport=tcp','turns:openrelay.metered.ca:443?transport=tcp'],username:'openrelayproject',credential:'openrelayproject'}]};const p=id?new Peer(id,{debug:0,config:ICE}):new Peer({debug:0,config:ICE});p.on('disconnected',()=>{
    try{
        if(!p.destroyed) p.reconnect();
    }catch(e){}
});
p.on('open',()=>{if(!d){d=1;ok(wrapPeer(p))}});
p.on('error',e=>{
    if(d)return;

    const t=e&&e.type||'err';dbg('peer error: '+t);

    if(t==='network'||t==='socket-error'||t==='socket-closed'||t==='server-error'){
        try{
            if(!p.destroyed && p.disconnected)p.reconnect();
        }catch(_){}
        return;
    }

    d=1;
    try{p.destroy()}catch(_){}
    no(t);
});

setTimeout(()=>{
    if(!d){
        d=1;
        try{p.destroy()}catch(_){}
        no('timeout');
    }
},25000)})}};
const TP_BC={async load(){},node(id){return new Promise((ok,no)=>{
const ch=new BroadcastChannel('flbc'),me=id||('a'+Math.random().toString(36).slice(2,9)),cs2={},pend={};let taken=0;
const mkc=(cid,peer)=>{const c={onmsg:null,onclose:null,send(d){ch.postMessage({k:'dat',cid,to:peer,d})},close(){ch.postMessage({k:'cls',cid,to:peer});delete cs2[cid]}};cs2[cid]=c;return c};
const n={id:me,onconn:null,q:[],connect(to){return new Promise((res,rej)=>{const cid=Math.random().toString(36).slice(2),t=setTimeout(()=>{delete pend[cid];rej('none')},500);pend[cid]=peer=>{clearTimeout(t);res(mkc(cid,peer))};ch.postMessage({k:'syn',to,from:me,cid})})},close(){ch.close()}};
ch.onmessage=ev=>{const m=ev.data;
if(m.k=='who'&&id&&m.id==me)ch.postMessage({k:'taken',id:me});
else if(m.k=='taken'&&m.id==me)taken=1;
else if(m.k=='syn'&&id&&m.to==me){const c=mkc(m.cid,m.from);ch.postMessage({k:'ack',to:m.from,from:me,cid:m.cid});n.onconn?n.onconn(c):n.q.push(c)}
else if(m.k=='ack'&&m.to==me&&pend[m.cid]){const f=pend[m.cid];delete pend[m.cid];f(m.from)}
else if(m.k=='dat'&&m.to==me&&cs2[m.cid]){const c=cs2[m.cid];c.onmsg&&c.onmsg(m.d)}
else if(m.k=='cls'&&m.to==me&&cs2[m.cid]){const c=cs2[m.cid];delete cs2[m.cid];c.onclose&&c.onclose()}};
if(id){ch.postMessage({k:'who',id});setTimeout(()=>{if(taken){ch.close();no('unavailable-id')}else ok(n)},300)}else ok(n)})}};
const TP_SB={async load(){},
node(id){return new Promise((ok,no)=>{
const me=id||('a'+Math.random().toString(36).slice(2,9)),cs2={},pend={},joined={},nz=Math.random();let ref=0,ws,taken=0,hb,claiming=1;
const tx=(topic,event,payload)=>{try{ws.send(JSON.stringify({topic,event,payload,ref:String(++ref)}))}catch(e){}};
const bc=(topic,m)=>tx(topic,'broadcast',{type:'broadcast',event:'m',payload:m});
const join=ch=>joined[ch]||(joined[ch]=new Promise((res,rej)=>{const topic='realtime:'+ch,my=String(ref+1),t0=performance.now();let fin=0;const h=ev=>{try{const m=JSON.parse(ev.data);if(m.topic==topic&&m.event=='phx_reply'&&m.ref==my){ws.removeEventListener('message',h);fin=1;if(m.payload&&m.payload.status=='ok'){n.rtt=Math.max(60,performance.now()-t0);res(topic)}else{const R=m.payload&&m.payload.response,rs=R&&(R.reason||R.message);delete joined[ch];rej('join'+(rs?': '+rs:''))}}}catch(e){}};
ws.addEventListener('message',h);tx(topic,'phx_join',{config:{broadcast:{self:false,ack:false},presence:{key:''},postgres_changes:[],private:false}});setTimeout(()=>{if(fin)return;ws.removeEventListener('message',h);delete joined[ch];rej('jointimeout')},7000)}));
const mkc=(cid,peer,topic)=>{const c={onmsg:null,onclose:null,send(d){bc(topic,{k:'dat',cid,to:peer,from:me,d})},close(){bc(topic,{k:'cls',cid,to:peer,from:me});delete cs2[cid]}};cs2[cid]=c;return c};
const n={id:me,onconn:null,q:[],
async connect(to){const topic=await join('fl-'+to);const W=Math.round(Math.max(1400,(n.rtt||300)*2.6+500));return new Promise((res,rej)=>{const cid=Math.random().toString(36).slice(2),syn={k:'syn',to,from:me,cid},t=setTimeout(()=>{clearTimeout(t2);delete pend[cid];rej('none')},W),t2=setTimeout(()=>{if(pend[cid])bc(topic,syn)},Math.round(W*.45));pend[cid]=peer=>{clearTimeout(t);clearTimeout(t2);res(mkc(cid,peer,topic))};bc(topic,syn)})},
close(){dead();try{ws.close()}catch(e){}}};
const dead=()=>clearInterval(hb);
ws=new WebSocket('wss://'+SB_URL.slice(8)+'/realtime/v1/websocket?apikey='+SB_KEY+'&vsn=1.0.0');
ws.onerror=()=>no('ws');ws.onclose=()=>{dead();for(const c of Object.values(cs2))c.onclose&&c.onclose()};
ws.onmessage=ev=>{let m;try{m=JSON.parse(ev.data)}catch(e){return}if(m.event!='broadcast'||!m.payload)return;const x=m.payload.payload;if(!x)return;const topic=m.topic;
if(x.k=='who'&&id&&x.id==me){if(!claiming||x.nz==null||x.nz>nz)bc(topic,{k:'taken',id:me,f:x.nz});else if(x.nz<nz)taken=1}
else if(x.k=='taken'&&x.id==me&&(x.f==null||x.f==nz))taken=1;
else if(x.k=='syn'&&id&&x.to==me){if(cs2[x.cid]){bc(topic,{k:'ack',to:x.from,from:me,cid:x.cid});return}const c=mkc(x.cid,x.from,topic);bc(topic,{k:'ack',to:x.from,from:me,cid:x.cid});n.onconn?n.onconn(c):n.q.push(c)}
else if(x.k=='ack'&&x.to==me&&pend[x.cid]){const f=pend[x.cid];delete pend[x.cid];f(x.from)}
else if(x.k=='dat'&&x.to==me&&cs2[x.cid]){const c=cs2[x.cid];c.onmsg&&c.onmsg(x.d)}
else if(x.k=='cls'&&x.to==me&&cs2[x.cid]){const c=cs2[x.cid];delete cs2[x.cid];c.onclose&&c.onclose()}};
const to=setTimeout(()=>{no('timeout');try{ws.close()}catch(e){}},9000);
ws.onopen=async()=>{clearTimeout(to);hb=setInterval(()=>tx('phoenix','heartbeat',{}),25000);
if(!id){claiming=0;ok(n);return}
try{const topic=await join('fl-'+id);bc(topic,{k:'who',id,nz});setTimeout(()=>{claiming=0;if(taken){dead();ws.close();no('unavailable-id')}else ok(n)},Math.round(Math.max(700,(n.rtt||300)*2+450)))}catch(e){no(e)}}})}};
let TP=/[?&]bc\b/.test(location.search)?TP_BC:/[?&]sb\b/.test(location.search)?TP_SB:TP_PEER;

function withRelay(a,id){const n={id:a.id,q:a.q,_f:null,b:null,dead:0,
get onconn(){return this._f},
set onconn(f){this._f=f;a.onconn=f;if(this.b){this.b.onconn=f;this.b.q.splice(0).forEach(f)}},
close(){this.dead=1;try{a.close()}catch(e){}try{this.b&&this.b.close()}catch(e){}}};
TP_SB.node(id).then(b=>{if(n.dead){try{b.close()}catch(e){}return}n.b=b;if(n._f){b.onconn=n._f;b.q.splice(0).forEach(n._f)}}).catch(()=>{});return n}
const DBGL=[];function dbg(m){DBGL.push(((performance.now()/1000)|0)+'s '+m);if(DBGL.length>14)DBGL.shift();console.warn('[net]',m);const e=document.getElementById('lbDbg');if(e)e.textContent=DBGL.join('\n')}
const probe=(u,ms=5000)=>new Promise(r=>{const c=new AbortController(),t=setTimeout(()=>{c.abort();r(0)},ms);fetch(u,{mode:'no-cors',cache:'no-store',signal:c.signal}).then(()=>{clearTimeout(t);r(1)}).catch(()=>{clearTimeout(t);r(0)})});
/* --- matchmaking: first player claims the slot id and hosts, others connect to it --- */
async function matchmake(mode,st){
const sid=s=>`${NETV}-${mode}-${st.map}-${s}`;let anon=null;
const hand=c=>new Promise(res=>{const buf=[];let d=0;const fin=ok=>{if(!d){d=1;res({ok,buf})}};
c.onmsg=m=>{buf.push(m);if(m&&m.t=='wel')fin(1);else if(m&&m.t=='busy')fin(0)};c.onclose=()=>fin(0);
c.send({t:'join',n:myName(),c:cusArr()});setTimeout(()=>fin(0),Math.round(Math.max(8000,((anon&&anon.rtt)||300)*6+1500)))});
for(let s=0;s<12&&!st.x&&performance.now()<st.dl;s++){
for(let tr=0;tr<2&&!st.x;tr++){
anon=anon||await TP.node(null);
let c=null,er='';try{c=await anon.connect(sid(s),9000)}catch(e){er=e}dbg('slot '+s+': '+(c?'connected':'connect failed: '+er));
if(st.x){try{anon.close()}catch(e){}return null}
if(c){const h=await hand(c);dbg('handshake '+(h.ok?'ok':'failed'));if(h.ok)return{role:'client',node:anon,conn:c,buf:h.buf};try{c.close()}catch(e){}break}
if(er=='timeout'&&TP===TP_PEER){lbSet('اتصال مستقیم ممکن نشد؛ تلاش از مسیر رله…',1);let sb=null,c2=null;
try{sb=await TP_SB.node(null);c2=await sb.connect(sid(s))}catch(e){}
if(st.x){try{sb&&sb.close()}catch(_){}try{anon.close()}catch(_){}return null}
if(c2){const h2=await hand(c2);if(h2.ok){try{anon.close()}catch(_){}return{role:'client',node:sb,conn:c2,buf:h2.buf}}try{c2.close()}catch(_){}}
try{sb&&sb.close()}catch(_){}break}
if(er=='none'){dbg('no room found → hosting');try{const nd=await TP.node(sid(s));try{anon.close()}catch(e){}return{role:'host',node:TP===TP_PEER?withRelay(nd,sid(s)):nd}}catch(e){continue}}
break}}
try{anon&&anon.close()}catch(e){}return null}

/* --- lobby UI --- */
function lbSet(t,sp){$('lbSt').textContent=t;$('lbS').style.display=sp?'block':'none'}
function lbPlayers(names,T){$('lbC').textContent=fa(names.length)+' / '+fa(T);$('lbB').style.width=(names.length/T*100)+'%';const L=$('lbL');L.innerHTML='';for(const n of names){const c=document.createElement('span');c.textContent=n;L.appendChild(c)}}
async function lobby(mode,mapSel){
if(NT)return;const T=TARGET[mode],st={mode,T,x:0,map:mapSel||'any',dl:performance.now()+40000};NT=st;
const mname=st.map=='any'?'تصادفی':(MAPS[mode].find(m=>m.id==st.map)||{}).n;
$('lobby').style.display='flex';$('lbT').textContent=MN[mode]+' · '+mname;lbPlayers([],T);$('lbGo').style.display='none';
let dg=document.getElementById('lbDbg');if(!dg){dg=document.createElement('pre');dg.id='lbDbg';dg.style.cssText='margin:6px 0 0;max-width:94vw;max-height:30vh;overflow:auto;text-align:left;direction:ltr;font:11px/1.4 monospace;color:#8fa;white-space:pre-wrap';$('lobby').appendChild(dg)}DBGL.length=0;dg.textContent='';
lbSet('در حال بررسی اتصال به سرورها…',1);
const[okP,okS]=await Promise.all([probe('https://0.peerjs.com/peerjs/id'),probe(SB_URL+'/auth/v1/health')]);
dbg('PeerJS server: '+(okP?'OK':'unreachable')+' | Supabase: '+(okS?'OK':'unreachable'));
if(st.x)return;
if(TP===TP_PEER&&!okP&&okS){TP=TP_SB;dbg('PeerJS unreachable -> using relay transport')}
const WHY={timeout:'سرور جواب نداد','server-error':'سرور PeerJS در دسترس نیست',network:'اتصال به سرور PeerJS قطع است','socket-error':'اتصال به سرور PeerJS برقرار نشد',ws:'اتصال به سرور برقرار نشد'};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
for(let at=0;!st.x;at++){
lbSet(at?'در حال تلاش دوباره برای اتصال…':'در حال اتصال به سرویس آنلاین…',1);
let why='',r=null;
try{await TP.load()}catch(e){if(okS&&TP===TP_PEER){TP=TP_SB;dbg('PeerJS library blocked -> using relay transport')}else why='سرویس آنلاین بارگذاری نشد؛ اینترنت یا فیلترینگ را بررسی کن'}
if(st.x)return;
if(!why){lbSet('در حال جستجوی اتاق…',1);st.dl=performance.now()+40000;try{r=await matchmake(mode,st)}catch(e){console.warn('[online]',e);why=WHY[e]||(e&&e.message)||String(e)}}
if(st.x){if(r)try{r.node.close()}catch(e){}return}
if(r){Object.assign(st,r);r.role=='host'?hostLobby(st):clientLobby(st);return}
lbSet((why||'اتاقی پیدا نشد')+' — چند ثانیه دیگر دوباره تلاش می‌شود…',1);
await sleep(4000)}}
$('lbX').onclick=()=>{netLeave();$('lobby').style.display='none'};
function netLeave(){const s=NT;if(!s)return;NT=null;s.x=1;clearInterval(s.iv);
if(s.role=='host'){for(const h of s.hs)if(h.conn){send(h.conn,{t:'bye'});const c=h.conn;setTimeout(()=>{try{c.close()}catch(e){}},300)}const n=s.node;setTimeout(()=>{try{n.close()}catch(e){}},400)}
else if(s.role=='client'){send(s.conn,{t:'bye'});const c=s.conn,n=s.node;setTimeout(()=>{try{c.close();n.close()}catch(e){}},300)}
else if(s.node){try{s.node.close()}catch(e){}}}
function netBc(o){if(NT&&NT.role=='host')for(const h of NT.hs)send(h.conn,o)}

/* --- host --- */
function hostLob(st){const names=st.hs.map(h=>h.n),w=names.length<2;lbPlayers(names,st.T);
lbSet(w?'در انتظار بازیکن دیگر… (بازی با حداقل ۲ نفر شروع می‌شود)':'شروع بازی تا '+fa(Math.max(0,st.cd))+' ثانیه…',1);
$('lbGo').style.display=w?'none':'inline-block';$('lbGo').textContent='شروع الان';
for(const h of st.hs)send(h.conn,{t:'lob',names,cd:st.cd,T:st.T,w:w?1:0})}
function hostLobby(st){st.role='host';st.hs=[{n:myName(),cus:cusObj(cusArr()),conn:null}];st.state='lobby';st.cd=st.mode=='br'?30:20;
const drop=h=>{if(h.gone)return;h.gone=1;const c=h.conn;h.conn=null;try{c&&c.close()}catch(e){}
if(st.state=='lobby'){st.hs=st.hs.filter(x=>x!==h);if(!st.x)hostLob(st)}else if(h.e){h.e.hum=0;h.e.alive=0;h.e.rt=1e9;h.e.conn=null;h.e.inp=null;setTimeout(()=>{if(!M||!M.mp||st.x)return;if(M.E.filter(e=>e.hum).length<2){netBc({t:'end'});menu('بازیکن‌های دیگر از بازی خارج شدند.')}},0)}};
st.drop=drop;
st.node.onconn=conn=>{let h=null;
conn.onmsg=m=>{if(!m||st.x)return;
if(!h){if(m.t!='join')return;if(st.state!='lobby'||st.hs.length>=st.T){send(conn,{t:'busy'});setTimeout(()=>{try{conn.close()}catch(e){}},600);return}
h={n:cleanName(m.n),cus:cusObj(m.c),conn};st.hs.push(h);if(st.cd<10)st.cd=10;send(conn,{t:'wel'});hostLob(st);return}
if(m.t=='in'){const e=h.e;if(!e||!e.hum)return;const f=v=>Number.isFinite(+v)?+v:0;
e.inp={ix:cl(f(m.ix),-1,1),iy:cl(f(m.iy),-1,1),sr:m.sr?1:0,sh:m.sh?1:0,a:(m.a==null||!Number.isFinite(+m.a))?null:+m.a,pt:Number.isFinite(+m.pt)?cl(+m.pt,-1.2,1.2):0,jn:(+m.jn|0)&65535,cr:m.cr?1:0};e.inT=performance.now();
if(Array.isArray(m.q))for(const c of m.q.slice(0,6)){if(c[0]=='r')reload(e);else if(c[0]=='s')sw(e,cl(c[1]|0,0,WP.length-1));else if(c[0]=='g')throwG(e,cl(c[1]|0,0,1))}}
else if(m.t=='bye')drop(h)};
conn.onclose=()=>{if(h)drop(h)}};
st.node.q.splice(0).forEach(st.node.onconn);
st.iv=setInterval(()=>{if(st.state!='lobby'||st.x)return;const n=st.hs.length;
if(n<2){st.cd=st.mode=='br'?30:20;hostLob(st);return}st.cd--;if(n>=st.T||st.cd<=0){hostGo(st);return}hostLob(st)},1000);
$('lbGo').onclick=()=>{if(st.state=='lobby')hostGo(st)};hostLob(st)}
function hostGo(st){if(st.state!='lobby'||st.hs.length<2)return;st.state='play';clearInterval(st.iv);const seed=(Math.random()*2147483647)|0;
const mapId=st.map=='any'?MAPS[st.mode][Math.floor(Math.random()*MAPS[st.mode].length)].id:st.map;
start(st.mode,{mp:1,seed,hs:st.hs,map:mapId});
const ros=M.E.map(e=>({n:e.name,c:e.col,t:e.team,h:e.hum?1:0,u:e.cus?[e.cus.w,e.cus.skin,e.cus.mag,e.cus.scope,e.cus.supp,e.cus.grip]:0}));
st.hs.forEach((h,j)=>{if(h.conn)send(h.conn,{t:'go',mode:st.mode,seed,map:mapId,me:j,ros})});
$('lobby').style.display='none'}
function netTickHost(dt){const s=NT;if(!s||s.role!='host'||s.state!='play')return;M.snT+=dt;if(M.snT<1/12)return;M.snT=0;
const r1=Math.round,r2=v=>Math.round(v*100)/100;
const E=M.E.map(e=>[r1(e.x),r1(e.y),r2(e.a),Math.max(0,Math.ceil(e.hp)),e.alive?1:0,e.w,e.fl>0?1:0,e.sp>0?1:0,e.ht>0?1:0,e.k,e.d,e.lv,Math.ceil(e.ar),e.air>0?+e.air.toFixed(1):0,r2(e.z||0),e.cr?1:0,Math.round((e.pt||0)*50)]);
const o={t:'s',E,sc:M.sc,ev:M.ev,gx:M.Fx.map(f=>[f.k=='s'?0:f.k=='f'?1:2,f.x|0,f.y|0,f.r,+f.t.toFixed(1)]),gg:M.Gr.map(q=>[q.x|0,q.y|0,q.k=='smoke'?0:q.k=='fire'?1:2])};M.ev=[];const z=M.z;
if(z)o.z=[z.x,z.y,z.r,z.ph,z.t,z.sh,z.p,z.dur,z.tx,z.ty,z.tr].map(v=>Math.round(v*10)/10);
M.sn++;if(M.L.length!==M.lLen||M.sn%45==0){o.L=M.L.map(l=>[l.x|0,l.y|0,l.t=='w'?0:l.t=='m'?1:2,l.i||0]);M.lLen=M.L.length}
for(const e of M.E)if(e.hum&&e.conn){
if(performance.now()-e.inT>15000){const h=s.hs.find(h=>h.e===e);if(h)s.drop(h);continue}
o.me=[e.rl>0?+e.rl.toFixed(2):0,...e.am,e.have.reduce((a,h,i)=>a|(h?1<<i:0),0),Math.round(e.sta==null?100:e.sta),e.rt>0?+e.rt.toFixed(1):0,...(e.gr||[]).map(q=>q.n)];send(e.conn,o)}}

/* --- client --- */
function clientLobby(st){st.role='client';
const gone=msg=>{if(st.x)return;const inM=M;netLeave();if(inM)menu(msg||'');else{$('lobby').style.display='flex';lbSet(msg||'اتاق بسته شد.',0);$('lbGo').style.display='none'}};
const on=m=>{if(!m||st.x)return;
if(m.t=='lob'){lbPlayers(m.names,m.T);lbSet(m.w?'در انتظار بازیکن دیگر…':'شروع بازی تا '+fa(Math.max(0,m.cd))+' ثانیه…',1);$('lbGo').style.display='none'}
else if(m.t=='go'){$('lobby').style.display='none';start(m.mode,{mp:1,client:1,seed:m.seed,ros:m.ros,me:m.me,map:m.map})}
else if(m.t=='s'){if(M&&M.client)netSnap(m)}
else if(m.t=='fin'){if(M){M.fin={won:m.won,txt:m.txt};M.res=M.fin;M.end=3}}
else if(m.t=='end'){if(M)menu();else gone('')}
else if(m.t=='bye')gone('میزبان بازی را ترک کرد.')};
st.conn.onmsg=on;st.conn.onclose=()=>gone('ارتباط با میزبان قطع شد'+(st.conn.why||st.conn.ice?' ('+(st.conn.why||st.conn.ice)+')':' (اتصال بسته شد)')+'.');
lbSet('در انتظار شروع بازی توسط میزبان…',1);$('lbGo').style.display='none';
st.buf.forEach(on)}
function act(c,i){if(M.client){M.cq.push(i==null?[c]:[c,i]);M.inT=1;return}c=='r'?reload(M.p):sw(M.p,i)}
function netTickClient(dt){const s=NT;if(!s||s.role!='client')return;M.inT=(M.inT||0)+dt;if(M.inT<.1)return;M.inT=0;const I=locInp();
send(s.conn,{t:'in',ix:+I.ix.toFixed(2),iy:+I.iy.toFixed(2),a:I.a==null?null:+I.a.toFixed(3),sr:I.sr,sh:I.sh,pt:+(I.pt||0).toFixed(3),jn:I.jn,cr:I.cr,q:M.cq.splice(0)})}
function netSnap(s){const m=M,p=m.p,myi=m.E.indexOf(p);m.got=1;m.lastS=performance.now();
s.E.forEach((r,i)=>{const e=m.E[i];if(!e)return;const own=e===p,wasA=e.alive;
if(own){if(!e.l0)e.a=r[2];const dx=r[0]-e.x,dy=r[1]-e.y;if(!e.l0||!r[4]||!wasA||Math.hypot(dx,dy)>90){e.x=r[0];e.y=r[1]}else{e.x+=dx*.25;e.y+=dy*.25}if(e.hp>r[3]&&r[4])snd(80,.1,'square',.07)}
else{e.tx=r[0];e.ty=r[1];e.ta=r[2];if(!e.l0||(!wasA&&r[4])){e.x=r[0];e.y=r[1];e.a=r[2]}}
e.l0=1;e.hp=r[3];e.alive=r[4];e.w=r[5];if(r[6])e.fl=.06;e.sp=r[7];if(r[8])e.ht=.18;e.k=r[9];e.d=r[10];e.lv=r[11];e.ar=r[12];e.air=r[13]||0;if(!own){e.z=r[14]||0;e.cr=r[15]||0;e.pt=(r[16]||0)/50}});
if(s.me){const q=s.me;p.rl=q[0];const nw=WP.length;for(let i=0;i<nw;i++){p.am[i]=q[1+i];p.have[i]=(q[nw+1]>>i)&1}p.sta=q[nw+2];p.rt=q[nw+3];p.gr=(CUS.g||['frag','smoke']).map((k,i)=>({k,n:q[nw+4+i]||0}))}
m.sc=s.sc;if(s.gx)m.Fx=s.gx.map(a=>({k:['s','f','e'][a[0]],x:a[1],y:a[2],r:a[3],t:a[4],s:m.t-1}));if(s.gg)m.Gr=s.gg.map(a=>({x:a[0],y:a[1],k:['smoke','fire','frag'][a[2]]}));
if(s.z&&m.z){const z=m.z,q=s.z;z.x=q[0];z.y=q[1];z.r=q[2];z.ph=q[3];z.t=q[4];z.sh=q[5];z.p=q[6];z.dur=q[7];z.tx=q[8];z.ty=q[9];z.tr=q[10]}
if(s.L)m.L=s.L.map(a=>({x:a[0],y:a[1],t:['w','m','a'][a[2]],i:a[3]}));
for(const v of s.ev||[]){const k=v[0];
if(k=='t')m.T.push({x1:v[1],y1:v[2],x2:v[3],y2:v[4],z1:v[5],z2:v[6],l:.07});
else if(k=='s'){const e=m.E[v[1]],w=v[2];if(e===p){m.shk=Math.max(m.shk,(w==4?10:w==3?8:3)*(CUS.w==w&&CUS.grip?.6:1));snd(w==3?90:w==4?60:w==1?220:150,.09,'sawtooth',CUS.w==w&&CUS.supp?.015:.06)}
else if(e){const d=Math.hypot(e.x-p.x,e.y-p.y);if(d<600)snd(140,.07,'sawtooth',.02*(1-d/600))}}
else if(k=='b'){m.B.push({x:v[1],y:v[2],r:v[3]});if(m.B.length>160)m.B.splice(0,10)}
else if(k=='c'){m.C.push({x:v[1],y:v[2],a:v[3],col:v[4]});if(m.C.length>25)m.C.shift()}
else if(k=='k'){m.F.push({t:4.5,s:v[1],me:v[2]==myi||v[3]==myi});if(m.F.length>5)m.F.shift()}
else if(k=='h'&&v[1]==myi){m.hm=.2;m.hs=v[2]||0}}}
function cupd(dt){const m=M,p=m.p;m.t+=dt;
for(const t of m.T)t.l-=dt;m.T=m.T.filter(t=>t.l>0);for(const f of m.F)f.t-=dt;m.F=m.F.filter(f=>f.t>0);
m.shk*=.85;m.hm=Math.max(0,m.hm-dt);
if(m.fin){m.end-=dt;if(m.end<=0)m.fin=null}
if(m.z&&!m.z.sh)m.z.t=Math.max(0,m.z.t-dt);
const k=Math.min(1,dt*14);
for(const e of m.E){e.fl-=dt;e.ht-=dt;if(e.air>0)e.air-=dt;if(e!==p&&e.tx!=null){e.x+=(e.tx-e.x)*k;e.y+=(e.ty-e.y)*k;let df=e.ta-e.a;df=Math.atan2(Math.sin(df),Math.cos(df));e.a+=df*k}}
if(m.got&&p.alive)pl(p,dt,locInp());
if(performance.now()-m.lastS>25000){menu('ارتباط با میزبان قطع شد (۲۵ ثانیه داده‌ای نرسید).');return}
netTickClient(dt)}

/* ===== account (Supabase Auth, REST) ===== */
let SESS=null,AMODE='in',AUTHCB=null;
try{SESS=JSON.parse(localStorage.getItem('fl_sess')||'null')}catch(e){}
const saveS=()=>{try{SESS?localStorage.setItem('fl_sess',JSON.stringify(SESS)):localStorage.removeItem('fl_sess')}catch(e){}};
function sbErr(j,st){const m=String(j.error_description||j.msg||j.message||j.error||'');
if(/invalid login/i.test(m))return'ایمیل یا رمز عبور اشتباه است.';
if(/already registered|already been registered/i.test(m))return'این ایمیل قبلاً ثبت شده است.';
if(/not confirmed/i.test(m))return'ایمیل هنوز تأیید نشده؛ لینک ارسال‌شده را باز کن.';
if(/not authorized|not_authorized/i.test(m))return'سرور اجازهٔ ارسال ایمیل تأیید به این آدرس را ندارد (تنظیمات ایمیل Supabase).';
if(/sending.*email|email.*send/i.test(m))return'ارسال ایمیل تأیید ناموفق بود؛ تنظیمات ایمیل Supabase را بررسی کن.';
if(/password/i.test(m)&&/(6|short|weak|least)/i.test(m))return'رمز عبور باید حداقل ۶ کاراکتر باشد.';
if(/valid email|invalid.*email|email.*invalid/i.test(m))return'ایمیل معتبر نیست.';
if(/rate limit|too many|security purposes/i.test(m)||st==429)return'تلاش‌های زیاد؛ کمی بعد دوباره امتحان کن.';
if(/signups? (not allowed|disabled)/i.test(m))return'ثبت‌نام فعلاً غیرفعال است.';
return m||('خطای سرور ('+st+')')}
async function sb(path,body,tok,meth){let r;
try{r=await fetch(SB_URL+path,{method:meth||'POST',headers:{apikey:SB_KEY,'Content-Type':'application/json',...(tok?{Authorization:'Bearer '+tok}:{})},body:JSON.stringify(body||{})})}catch(e){throw new Error('اتصال به سرویس ثبت‌نام برقرار نشد.')}
let j={};try{j=await r.json()}catch(e){}if(!r.ok)throw new Error(sbErr(j,r.status));return j}
function setSess(j){const u=j.user||{},md=u.user_metadata||{};PROF={xp:0,money:0,own:[]};renderProf();
KITS=Array.isArray(md.kits)&&md.kits.length?md.kits.slice(0,3):[null,null,null];while(KITS.length<3)KITS.push(null);try{localStorage.setItem('fl_kits',JSON.stringify(KITS))}catch(e){}
SESS={at:j.access_token,rt:j.refresh_token,exp:j.expires_at||(Math.floor(Date.now()/1000)+(j.expires_in||3600)),id:u.id,email:u.email,name:cleanName(md.username||String(u.email||'').split('@')[0])};saveS();renderAcc();loadProf()}
function renderAcc(){const a=$('acc');a.innerHTML='';const b=document.createElement('button');b.className='chip';
if(SESS){const v=document.createElement('span');v.className='av';v.textContent=(SESS.name||'?')[0].toUpperCase();const n=document.createElement('span');n.className='nm';const t=document.createElement('b');t.textContent=SESS.name;n.append(t);
const x=document.createElement('span');x.className='xp';x.innerHTML='<span id="accSub">LV 1</span><span class="xpb"><i id="xpi"></i></span>';b.append(v,n,x);b.onclick=openAcct;$('pn').value=SESS.name;$('pn').readOnly=true}
else{b.textContent='ورود / ثبت‌نام';b.onclick=()=>openAuth('in')}
a.appendChild(b);renderProf()}
async function sbInit(){renderAcc();if(SESS&&SESS.exp-Date.now()/1000<120){try{setSess(await sb('/auth/v1/token?grant_type=refresh_token',{refresh_token:SESS.rt}))}catch(e){if(!/اتصال/.test(e.message)){SESS=null;saveS();renderAcc()}}}else if(SESS)loadProf()}
function openAuth(mode,note){AMODE=mode;$('aM').className='';$('aM').textContent=note||'';$('auth').style.display='flex';aTab()}
function aTab(){$('tL').classList.toggle('on',AMODE=='in');$('tS').classList.toggle('on',AMODE=='up');$('aU').style.display=AMODE=='up'?'block':'none';$('aG').textContent=AMODE=='up'?'ثبت‌نام':'ورود';$('aP').autocomplete=AMODE=='up'?'new-password':'current-password'}
$('tL').onclick=()=>{AMODE='in';aTab()};$('tS').onclick=()=>{AMODE='up';aTab()};
$('aX').onclick=()=>{AUTHCB=null;$('auth').style.display='none'};
for(const id of['aU','aE','aP'])$(id).addEventListener('keydown',e=>{if(e.key=='Enter')$('aG').click()});
$('aG').onclick=async()=>{const em=$('aE').value.trim(),pw=$('aP').value,un=$('aU').value.trim(),M_=$('aM');M_.className='er';
if(AMODE=='up'&&!/^[\p{L}\p{N}_]{3,12}$/u.test(un)){M_.textContent='نام کاربری باید ۳ تا ۱۲ حرف، عدد یا _ باشد.';return}
if(!/^\S+@\S+\.\S+$/.test(em)){M_.textContent='ایمیل معتبر نیست.';return}
if(pw.length<6){M_.textContent='رمز عبور باید حداقل ۶ کاراکتر باشد.';return}
$('aG').disabled=true;M_.className='';M_.textContent='لطفاً صبر کن…';
try{let j;
if(AMODE=='up'){j=await sb('/auth/v1/signup',{email:em,password:pw,data:{username:un}});
if(!j.access_token){M_.className='ok';M_.textContent='ثبت‌نام انجام شد. ایمیل تأیید برایت ارسال شد؛ بعد از تأیید، وارد شو.';AMODE='in';aTab();return}}
else j=await sb('/auth/v1/token?grant_type=password',{email:em,password:pw});
setSess(j);$('auth').style.display='none';$('aP').value='';const cb=AUTHCB;AUTHCB=null;if(cb)cb()}
catch(e){M_.className='er';M_.textContent=e.message}finally{$('aG').disabled=false}};
const requireAuth=cb=>{if(SESS){cb();return}AUTHCB=cb;openAuth('in','برای بازی آنلاین باید وارد شوی یا ثبت‌نام کنی.')};

/* ===== pause / map select ===== */
function showPause(on){const p=$('pause');
if(on){if(!M)return;$('pTxt').textContent=M.mp?(NT&&NT.role=='host'?'اگر خارج شوی، بازی برای بقیه بازیکن‌ها هم تمام می‌شود.':'از بازی آنلاین خارج می‌شوی.'):'بازی متوقف است.';if(!M.mp)M.paused=1;p.style.display='flex'}
else{p.style.display='none';if(M)M.paused=0}}
$('pbt').onclick=()=>showPause(1);$('pGo').onclick=()=>showPause(0);$('pQ').onclick=()=>{showPause(0);if(M)M.fin=null;menu()};
const TC={sand:'#bba878',grass:'#3e7b2f',snow:'#9fb4c8',urban:'#4a4f58'};
function pickMap(mode,online){const L=$('msL');L.innerHTML='';$('msT').textContent=(online?'آنلاین · ':'')+MN[mode]+' — انتخاب مپ';
const items=(online?[{id:'any',n:'تصادفی',th:'urban',S:0}]:[]).concat(MAPS[mode]);
for(const m of items){const b=document.createElement('button');b.className='mp';b.style.setProperty('--tc',m.id=='any'?'#2a3347':TC[m.th]);
const n=document.createElement('b');n.textContent=m.n;const sm=document.createElement('small');sm.textContent=m.id=='any'?'میزبان انتخاب می‌کند':fa(m.S)+' × '+fa(m.S);b.append(n,sm);
b.onclick=()=>{$('mapsel').style.display='none';online?requireAuth(()=>kitPick(()=>lobby(mode,m.id))):start(mode,{map:m.id})};L.appendChild(b)}
$('mapsel').style.display='flex'}
$('msX').onclick=()=>$('mapsel').style.display='none';
/* desktop intro + kit pick */
if(!matchMedia('(pointer:coarse)').matches){document.querySelector('#intro p').style.display='none';document.querySelector('#intro .ph').style.display='none'}
let KITS=[null,null,null];try{const k=JSON.parse(localStorage.getItem('fl_kits')||'null');if(Array.isArray(k))KITS=k}catch(e){}
const GN={frag:'Frag',smoke:'Smoke',fire:'Fire'};
function saveKit(i){KITS[i]={p:CUS.p||0,w:CUS.w,g:[...(CUS.g||['frag','smoke'])]};try{localStorage.setItem('fl_kits',JSON.stringify(KITS))}catch(e){}save();if(SESS)sb('/auth/v1/user',{data:{kits:KITS}},SESS.at,'PUT').catch(()=>{})}
function kitUI(edit){const row=(id,items,cur,set)=>{const L=$(id);L.innerHTML='';items.forEach(([n,v])=>{const b=document.createElement('button');b.textContent=owned(v)?n:'🔒 '+n+' '+PRICE[v]+'$';if(cur()==v)b.className='on';b.onclick=()=>{if(!owned(v)){if(PROF.money<PRICE[v]){b.textContent='پول کافی نیست';return}if(SESS){b.textContent='…';buyItem(v).then(()=>{set(v);save();kitUI(edit);pv()}).catch(er=>{b.textContent=er.message});return}PROF.money-=PRICE[v];PROF.own.push(v);saveProf()}set(v);save();kitUI(edit);pv()};L.appendChild(b)})};
CUS.g=CUS.g||['frag','smoke'];if(!BIG.includes(CUS.w))CUS.w=2;
const S=$('kS');S.innerHTML='';[0,1,2].forEach(i=>{const k=KITS[i],b=document.createElement('button');
b.textContent=edit?'ذخیره در کیت '+(i+1)+(k?' ✓':''):(k?'کیت '+(i+1)+': '+WP[k.w].n+' + '+WP[k.p||0].n:'کیت '+(i+1)+' (خالی)');
b.onclick=()=>{if(edit){saveKit(i);kitUI(edit)}else if(k&&owned(k.p||0)&&owned(k.w)){CUS.p=k.p||0;CUS.w=k.w;CUS.g=[...k.g];save();kitUI(edit);pv()}};S.appendChild(b)});
row('kP',PIS.map(i=>[WP[i].n,i]),()=>CUS.p||0,v=>CUS.p=v);row('kL',BIG.map(i=>[WP[i].n,i]),()=>CUS.w,v=>CUS.w=v);
[0,1].forEach(si=>row('kG'+si,['frag','smoke','fire'].map(k=>[GN[k],k]),()=>CUS.g[si],v=>CUS.g[si]=v))}
$('kb').onclick=()=>{kitUI(1);$('kH').textContent='ساخت کیت';$('kT').textContent='';$('kGo').style.display='none';$('kX').style.display='';$('kit').style.display='flex'};
$('kX').onclick=()=>$('kit').style.display='none';
let PROF={xp:0,money:0,own:[]};try{Object.assign(PROF,JSON.parse(localStorage.getItem('fl_prof')||'{}'))}catch(e){}
const PRICE={5:300,6:500,7:800,8:1000,9:600,10:900},owned=i=>!PRICE[i]||PROF.own.includes(i),lvl=()=>1+Math.floor(Math.sqrt(PROF.xp/100));
function saveProf(){try{localStorage.setItem('fl_prof',JSON.stringify(PROF))}catch(e){}renderProf()}
/* signed-in players: coins / XP / weapons live in the Supabase `profiles` table and change ONLY through server functions */
const sbRpc=(fn,body)=>sb('/rest/v1/rpc/'+fn,body||{},SESS&&SESS.at);
const SB_ERR={'not enough money':'پول کافی نیست','already owned':'قبلاً خریده‌ای','unknown item':'آیتم نامعتبر','not authenticated':'دوباره وارد شو'};
function applyProf(r){const o=Array.isArray(r)?r[0]:r;if(!o)return;PROF={xp:o.out_xp|0,money:o.out_money|0,own:Array.isArray(o.out_own)?o.out_own:[]};saveProf();return o}
async function loadProf(){if(!SESS)return;try{applyProf(await sbRpc('get_profile'))}catch(e){}}
async function buyItem(i){try{if(!applyProf(await sbRpc('buy_item',{p_item:i})))throw new Error('x')}catch(e){throw new Error(SB_ERR[e.message]||'خرید انجام نشد')}}
function renderProf(){const l=lvl(),a=100*(l-1)*(l-1),b=100*l*l;const e=$('accSub');if(e)e.textContent='LV '+l;const x=$('xpi');if(x)x.style.width=Math.round((PROF.xp-a)/(b-a)*100)+'%';$('coin').innerHTML='<i></i><b>'+PROF.money+'</b>'}
function awardM(){if(!M||!M.p||M.awarded||M.mapId==null)return'';const w=M.fin||M.res,k=M.p.k||0;if(M.t<25&&!w)return'';M.awarded=1;const xp=k*20+(w&&w.won?100:25),cash=k*10+(w&&w.won?150:20);if(SESS){sbRpc('award_match',{p_kills:k,p_won:!!(w&&w.won),p_secs:Math.round(M.t),p_mode:String(M.mode)}).then(applyProf).catch(()=>{})}else{PROF.xp+=xp;PROF.money+=cash;saveProf()}return'  (+'+fa(xp)+' XP · +'+fa(cash)+' 💰)'}
renderProf();sbInit();
function kitPick(done){kitUI(0);$('kH').textContent='انتخاب کیت';$('kGo').style.display='';$('kX').style.display='none';let t=15;
const go=()=>{clearInterval(KT);$('kit').style.display='none';if(!owned(CUS.w))CUS.w=2;if(!owned(CUS.p))CUS.p=0;save();done()};
$('kT').textContent=t;$('kit').style.display='flex';clearInterval(KT);KT=setInterval(()=>{t--;$('kT').textContent=t;if(t<=0)go()},1000);$('kGo').onclick=()=>{if(!ONL)try{lockPtr()}catch(e){}go()}}
const start0=start;let KT=0;
start=function(mode,o){if(o&&(o.mp||o.client))return start0(mode,o);kitPick(()=>start0(mode,o))};
/* tabs / account page / shop */
let ONL=true;const HB={sec:'br',mode:'br',map:'any'};
const HM={br:{img:'battelroyal.png',n:'بتل رویال',ic:'🪂',on:'با بازیکن‌های واقعی از آسمان بپر، لوت کن و آخر بازی زنده بمون.',off:'با بات‌ها تمرین کن؛ چتر، لوت و زون کوچک‌شونده مثل بازی واقعی.',f:['🪂 پرش با چتر','🔥 زون کوچک‌شونده','🏆 آخرین نفر برنده']},
tdm:{img:'teamdeathmatch.png',n:'دث‌مچ تیمی',ic:'🛡️',on:'۵ در برابر ۵ با بازیکن‌های واقعی.',off:'۵ در برابر ۵ با بات‌ها؛ تیم برنده با ۴۰ کشته.',f:['👥 ۵ در برابر ۵','🤝 بازی تیمی']},
dm:{img:'deathmatch.png',n:'دث‌مچ',ic:'💀',on:'همه‌علیه‌همه با بازیکن‌های واقعی.',off:'همه‌علیه‌همه با بات‌ها؛ اولین نفر با ۲۵ کشته برنده است.',f:['⚔️ همه‌علیه‌همه']},
gg:{img:'gungame.png',n:'Gun Game',ic:'🔫',on:'با هر کشته سلاحت عوض می‌شود؛ با بازیکن‌های واقعی.',off:'با هر کشته سلاحت عوض می‌شود؛ با بات‌ها.',f:['🔁 تعویض سلاح با هر کشته']}};
const SECS={br:['br'],mp:['tdm','dm','gg']};
function setNet(on){ONL=on;$('tOn').className=on?'on':'';$('tOf').className=on?'':'on';$('right').dataset.net=on?'on':'off';
$('secT').textContent=on?'🌐 با بازیکن‌های واقعی بازی کن.':'🤖 با بات‌ها بازی کن؛ مناسب تمرین.';
document.querySelectorAll('.hc .tg').forEach(t=>t.textContent=on?'ONLINE':'OFFLINE');
$('hcB').textContent=on?'تا '+fa(TARGET.br)+' بازیکن واقعی؛ آخرین نفر زنده برنده است':'۳۰ نفر با بات‌ها، چتر و زون کوچک‌شونده';
$('hcM').textContent=on?'نبردهای سریع با بازیکن‌های واقعی':'نبردهای سریع با بات‌ها';
if($('hub').style.display=='flex')hubDraw()}
function hubMaps(){const items=(ONL?[{id:'any',n:'تصادفی',th:'urban'}]:[]).concat(MAPS[HB.mode]);
if(!items.some(m=>m.id==HB.map))HB.map=items[0].id;
const L=$('hmaps');L.innerHTML='';
for(const m of items){const b=document.createElement('button');b.className='mp'+(m.id==HB.map?' sel':'');b.style.setProperty('--tc',m.id=='any'?'#2a3347':TC[m.th]);
const n=document.createElement('b');n.textContent=m.n;const sm=document.createElement('small');sm.textContent=m.id=='any'?'مپ به‌صورت تصادفی انتخاب می‌شود':fa(m.S)+' × '+fa(m.S);b.append(n,sm);
b.onclick=()=>{HB.map=m.id;hubMaps()};L.appendChild(b)}}
function hubDraw(){const m=HM[HB.mode],ms=SECS[HB.sec];
$('hub').dataset.net=ONL?'on':'off';$('hbt').textContent=HB.sec=='br'?'🪂 بتل رویال':'⚔️ مولتی‌پلیر';
const bd=$('hbd');bd.textContent=ONL?'ONLINE':'OFFLINE';bd.className='bdg'+(ONL?' on':'');
$('hico').textContent=m.ic;$('hico').style.setProperty('--img','url("'+m.img+'")');$('hnm').textContent=m.n;$('hds').textContent=ONL?m.on:m.off;
const md=$('hmodes');md.innerHTML='';md.style.display=ms.length>1?'flex':'none';
if(ms.length>1)for(const k of ms){const b=document.createElement('button');b.textContent=HM[k].n;b.style.setProperty('--img','url("'+HM[k].img+'")');if(k==HB.mode)b.className='on';b.onclick=()=>{HB.mode=k;HB.map='any';hubDraw()};md.appendChild(b)}
const f=$('hfacts');f.innerHTML='';const cnt=ONL?'👤 تا '+fa(TARGET[HB.mode])+' بازیکن':(HB.mode=='br'?'🤖 ۳۰ نفر با بات‌ها':'🤖 با بات‌ها');
for(const t of [cnt].concat(m.f)){const s=document.createElement('span');s.textContent=t;f.appendChild(s)}
$('hgo').textContent=ONL?'🌐 جستجوی بازی آنلاین':'▶ شروع بازی';hubMaps()}
function hubOpen(sec){HB.sec=sec;HB.mode=SECS[sec][0];HB.map='any';hubDraw();$('hub').style.display='flex'}
const hubClose=()=>$('hub').style.display='none';
document.querySelectorAll('[data-hub]').forEach(b=>b.onclick=()=>hubOpen(b.dataset.hub));
$('tOn').onclick=()=>setNet(true);$('tOf').onclick=()=>setNet(false);$('hbk').onclick=hubClose;
$('hgo').onclick=()=>{const mode=HB.mode,map=HB.map;
if(ONL)requireAuth(()=>kitPick(()=>{hubClose();lobby(mode,map)}));else{hubClose();start(mode,{map})}};
$('lbX').addEventListener('click',()=>{if(!M)$('hub').style.display='flex'});
addEventListener('keydown',e=>{if(e.code=='Escape'&&$('hub').style.display=='flex')hubClose()});
setNet(true);
function openAcct(){if(!SESS)return openAuth('in');const l=lvl(),b=100*l*l;$('aN').textContent=SESS.name;$('aE2').textContent=SESS.email||'';
$('aL').textContent='Lv '+fa(l)+' · '+fa(PROF.xp)+' / '+fa(b)+' XP · 💰 '+fa(PROF.money);
$('aK').textContent='کیت‌های ذخیره‌شده: '+fa(KITS.filter(Boolean).length)+' از ۳ · تفنگ‌های خریده‌شده: '+fa(PROF.own.length);$('acct').style.display='flex'}
$('aC').onclick=()=>$('acct').style.display='none';
$('aS').onclick=()=>{$('acct').style.display='none';openShop()};
$('aO').onclick=async()=>{const t=SESS&&SESS.at;SESS=null;saveS();PROF={xp:0,money:0,own:[]};KITS=[null,null,null];try{localStorage.removeItem('fl_prof');localStorage.removeItem('fl_kits')}catch(e){}renderAcc();$('acct').style.display='none';try{await sb('/auth/v1/logout',{},t)}catch(e){}};
$('shb').onclick=openShop;$('shX').onclick=()=>$('shop').style.display='none';
function openShop(){const L=$('shL');L.innerHTML='';$('shM').textContent='💰 '+fa(PROF.money);
for(const k of Object.keys(PRICE)){const i=+k,w=WP[i],d=document.createElement('div');d.className='si';const t=document.createElement('span');t.textContent=w.n+(PIS.includes(i)?' (پیستول)':' (تفنگ بزرگ)');
const sm=document.createElement('small');sm.textContent='آسیب '+w.d+(w.p>1?'×'+w.p:'')+' · خشاب '+w.m;t.appendChild(sm);const b=document.createElement('button');
if(owned(i)){b.textContent='دارید ✓';b.disabled=true}else{b.textContent=fa(PRICE[i])+' 💰';b.onclick=()=>{if(PROF.money<PRICE[i]){b.textContent='پول کافی نیست';return}if(SESS){b.textContent='…';buyItem(i).then(openShop).catch(er=>{b.textContent=er.message});return}PROF.money-=PRICE[i];PROF.own.push(i);saveProf();openShop()}}
d.append(t,b);L.appendChild(d)}$('shop').style.display='flex'}
/* fullscreen */
(function(){const de=document.documentElement,b=document.getElementById('fsb'),it=document.getElementById('intro');
const isFs=()=>document.fullscreenElement||document.webkitFullscreenElement;
const can=!!(de.requestFullscreen||de.webkitRequestFullscreen);
async function enter(){try{if(de.requestFullscreen)await de.requestFullscreen({navigationUI:'hide'});else if(de.webkitRequestFullscreen)de.webkitRequestFullscreen()}catch(e){}
try{await screen.orientation.lock('landscape')}catch(e){}}
function leave(){try{try{screen.orientation.unlock()}catch(e){}if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen()}catch(e){}}
function sync(){b.classList.toggle('on',!!isFs());setTimeout(rs,150)}
document.addEventListener('fullscreenchange',sync);document.addEventListener('webkitfullscreenchange',sync);
b.addEventListener('click',e=>{e.stopPropagation();if(!can){alert('مرورگر شما فول اسکرین را پشتیبانی نمی‌کند. در آیفون از منوی اشتراک‌گذاری گزینه «Add to Home Screen» را بزنید تا بازی تمام‌صفحه باز شود.');return}isFs()?leave():enter()});
['touchstart','mousedown','pointerdown'].forEach(t=>b.addEventListener(t,e=>e.stopPropagation()));
document.getElementById('introFs').onclick=()=>{it.remove();if(can)enter();else alert('مرورگر شما فول اسکرین را پشتیبانی نمی‌کند. در آیفون گزینه «Add to Home Screen» را بزنید.')};
document.getElementById('introGo').onclick=()=>it.remove();
})();


/* ================= 3D renderer (Three.js) ================= */
let USE3D=typeof THREE!=='undefined',R3=null;
const COARSE=!!(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
let GQ=(()=>{try{const v=localStorage.getItem('flq');if(v!=null&&v>=0&&v<=2)return+v}catch(e){}return COARSE?1:2})();const SHD=GQ>=1;
function tx3(name){const c=TXC.get(TX[name]);if(!c)return null;if(!c._t){const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=R3?R3.aniso:1;c._t=t}return c._t}
function init3(){
const cn=$('c3');let r;
try{r=new THREE.WebGLRenderer({canvas:cn,antialias:GQ>=1,powerPreference:'high-performance'})}catch(e){USE3D=false;cn.style.display='none';return null}
r.setClearColor(0x05080b,1);r.setPixelRatio(Math.min(window.devicePixelRatio||1,[1,COARSE?1.5:1.75,2][GQ]));
if(SHD){r.shadowMap.enabled=true;r.shadowMap.type=GQ>=2?THREE.PCFSoftShadowMap:THREE.PCFShadowMap}
if(GQ>=2){r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.15}
const sc=new THREE.Scene();sc.fog=new THREE.Fog(0x05080b,1300,2900);
const cam=new THREE.PerspectiveCamera(46,1,10,7000);
sc.add(new THREE.HemisphereLight(0xdfe9ff,0x4b4a3c,GQ>=2?.6:.62));
const sun=new THREE.DirectionalLight(0xfff1d6,GQ>=2?.92:.66);sun.castShadow=SHD;
if(SHD){const ms=GQ>=2?(COARSE?2048:4096):(COARSE?1024:2048),ex=GQ>=2?820:1000;sun.shadow.mapSize.set(ms,ms);const s=sun.shadow.camera;s.left=-ex;s.right=ex;s.top=ex;s.bottom=-ex;s.near=100;s.far=2600;sun.shadow.bias=-.0006;sun.shadow.normalBias=1.5}
sc.add(sun);sc.add(sun.target);
let aniso=1;try{aniso=Math.min(GQ>=2?16:GQ?8:4,r.capabilities.getMaxAnisotropy())}catch(e){}
sc.add(cam);const vm=new THREE.Group();vm.visible=false;cam.add(vm);
return R3={vm,fp:false,fa:0,pit:0,view:0,env:-1,rec:0,rmx:0,rmy:0,vmk:'',r,sc,cam,sun,aniso,yaw:0,w:0,h:0,m:null,root:null,v:new THREE.Vector3(),av:new THREE.Vector3(),dm:new THREE.Object3D(),tc:new THREE.Color(),t0:performance.now(),ents:new Map()}}
const newA=()=>({p:[],n:[],u:[],c:[],i:[]});
function quad(A,P,nr,UV,C){const b=A.p.length/3;for(let k=0;k<4;k++){A.p.push(P[k][0],P[k][1],P[k][2]);A.n.push(nr[0],nr[1],nr[2]);A.u.push(UV[k][0],UV[k][1]);A.c.push(C[k],C[k],C[k])}A.i.push(b,b+1,b+2,b,b+2,b+3)}
function geoA(A){const G=new THREE.BufferGeometry();G.setAttribute('position',new THREE.Float32BufferAttribute(A.p,3));G.setAttribute('normal',new THREE.Float32BufferAttribute(A.n,3));G.setAttribute('uv',new THREE.Float32BufferAttribute(A.u,2));G.setAttribute('color',new THREE.Float32BufferAttribute(A.c,3));G.setIndex(A.i);return G}
function boxA(A,x,z,w,d,h,T,ct){const x1=x+w,z1=z+d,U=(a,o,l)=>ct?(a-o)/l:a/T,V=y=>ct?y/h:y/T,lo=.6,hi=.97;
quad(A,[[x,h,z],[x,h,z1],[x1,h,z1],[x1,h,z]],[0,1,0],[[U(x,x,w),U(z,z,d)],[U(x,x,w),U(z1,z,d)],[U(x1,x,w),U(z1,z,d)],[U(x1,x,w),U(z,z,d)]],[1,1,1,1]);
quad(A,[[x1,0,z],[x,0,z],[x,h,z],[x1,h,z]],[0,0,-1],[[U(x1,x,w),0],[U(x,x,w),0],[U(x,x,w),V(h)],[U(x1,x,w),V(h)]],[lo,lo,hi,hi]);
quad(A,[[x,0,z1],[x1,0,z1],[x1,h,z1],[x,h,z1]],[0,0,1],[[U(x,x,w),0],[U(x1,x,w),0],[U(x1,x,w),V(h)],[U(x,x,w),V(h)]],[lo,lo,hi,hi]);
quad(A,[[x,0,z],[x,0,z1],[x,h,z1],[x,h,z]],[-1,0,0],[[U(z,z,d),0],[U(z1,z,d),0],[U(z1,z,d),V(h)],[U(z,z,d),V(h)]],[lo,lo,hi,hi]);
quad(A,[[x1,0,z1],[x1,0,z],[x1,h,z],[x1,h,z1]],[1,0,0],[[U(z1,z,d),0],[U(z,z,d),0],[U(z,z,d),V(h)],[U(z1,z,d),V(h)]],[lo,lo,hi,hi])}
function instM(geo,mat,cap,col){const im=new THREE.InstancedMesh(geo,mat,cap);im.frustumCulled=false;im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);if(col){im.setColorAt(0,new THREE.Color(1,1,1));im.instanceColor.setUsage(THREE.DynamicDrawUsage)}im.count=0;return im}
function build3(m){
const R=R3,S=m.S,th=m.th;
if(R.root){R.sc.remove(R.root);R.root.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material&&o.material.dispose)o.material.dispose()})}
const root=new THREE.Group();R.sc.add(root);R.root=root;R.m=m;R.ents=new Map();R.cp=[];R.fS=[];R.fF=[];R.fE=[];R.yaw=0;R.fp=true;R.view=m.br?0:1;R.fa=m.p?m.p.a:0;R.pit=0;R.env=-1;R.vmk='';
// ground
const gt=tx3(th.g),gT=gt.image.width;
{const G=new THREE.PlaneGeometry(S,S);G.rotateX(-Math.PI/2);G.translate(S/2,0,S/2);const uv=G.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*S/gT,uv.getY(i)*S/gT);
const me=new THREE.Mesh(G,new THREE.MeshLambertMaterial({map:gt}));me.receiveShadow=true;root.add(me)}
// colour patches
{const N=2048,c=document.createElement('canvas');c.width=c.height=N;const x=c.getContext('2d'),k=N/S;
for(const t of m.Pt){const q=x.createRadialGradient(t.x*k,t.y*k,0,t.x*k,t.y*k,t.r*k);q.addColorStop(0,t.c?th.p1:th.p2);q.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=q;x.fillRect((t.x-t.r)*k,(t.y-t.r)*k,t.r*2*k,t.r*2*k)}
const G=new THREE.PlaneGeometry(S,S);G.rotateX(-Math.PI/2);G.translate(S/2,.6,S/2);
const me=new THREE.Mesh(G,new THREE.MeshLambertMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));me.receiveShadow=true;root.add(me)}
// building floors
if(m.Bl.length){const ft=tx3(th.f),A=newA(),T=ft.image.width;
for(const b of m.Bl)quad(A,[[b.x,.9,b.y],[b.x,.9,b.y+b.h],[b.x+b.w,.9,b.y+b.h],[b.x+b.w,.9,b.y]],[0,1,0],[[b.x/T,b.y/T],[b.x/T,(b.y+b.h)/T],[(b.x+b.w)/T,(b.y+b.h)/T],[(b.x+b.w)/T,b.y/T]],[1,1,1,1]);
const me=new THREE.Mesh(geoA(A),new THREE.MeshLambertMaterial({map:ft,vertexColors:true,side:THREE.DoubleSide}));me.receiveShadow=true;root.add(me)}
// walls + crates
{const wt=tx3(th.w),A=newA(),C=newA(),T=wt.image.width;
for(const w of m.Wl){if(w.k)boxA(C,w.x,w.y,w.w,w.h,58,0,1);else{const bd=(w.w>=S-1&&w.h<=45)||(w.h>=S-1&&w.w<=45);boxA(A,w.x,w.y,w.w,w.h,bd?130:84,T*1.15,0)}}
const wm=new THREE.Mesh(geoA(A),new THREE.MeshLambertMaterial({map:wt,vertexColors:true,side:THREE.DoubleSide}));wm.castShadow=wm.receiveShadow=SHD;wm.frustumCulled=false;root.add(wm);
if(C.i.length){const cm=new THREE.Mesh(geoA(C),new THREE.MeshLambertMaterial({map:tx3('crate'),vertexColors:true,side:THREE.DoubleSide}));cm.castShadow=cm.receiveShadow=SHD;cm.frustumCulled=false;root.add(cm)}}
// bushes
if(m.D.length){const im=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,GQ>=2?2:1),new THREE.MeshLambertMaterial({}),m.D.length*4),d=R.dm,c=R.tc;im.frustumCulled=false;let n=0;
for(const b of m.D)for(let k=0;k<4;k++){const r=b.r*(1-k*.2);d.position.set(b.x+Math.sin(b.x*(k+1))*b.r*.22,10+k*7,b.y+Math.cos(b.y*(k+1))*b.r*.22);d.scale.set(r,r*.72,r);d.rotation.set(0,0,0);d.updateMatrix();im.setMatrixAt(n,d.matrix);im.setColorAt(n,c.set(th.bc[k]));n++}
im.castShadow=SHD;im.receiveShadow=SHD;root.add(im)}
// dynamic instanced layers
R.loot=instM(new THREE.BoxGeometry(20,20,20),new THREE.MeshLambertMaterial({}),900,1);R.loot.castShadow=false;root.add(R.loot);
{const bg=new THREE.CylinderGeometry(2.4,2.4,160,6,1,true);bg.translate(0,80,0);R.beam=instM(bg,new THREE.MeshBasicMaterial({transparent:true,opacity:.42,blending:THREE.AdditiveBlending,depthWrite:false}),900,1);root.add(R.beam)}
{const bg=new THREE.CircleGeometry(1,10);bg.rotateX(-Math.PI/2);R.blood=instM(bg,new THREE.MeshBasicMaterial({color:0x6e0a0a,transparent:true,opacity:.7,depthWrite:false}),420,0);root.add(R.blood)}
R.trc=instM(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}),240,1);root.add(R.trc);
R.gre=instM(new THREE.SphereGeometry(5.5,10,8),new THREE.MeshLambertMaterial({}),48,1);root.add(R.gre);
// battle-royale zone
if(m.z){const ZM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{zc:{value:new THREE.Vector2()},tc:{value:new THREE.Vector2()},zr:{value:1},tr:{value:1}},
vertexShader:'varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);}',
fragmentShader:'varying vec3 vW;uniform vec2 zc,tc;uniform float zr,tr;void main(){float d=length(vW.xz-zc);float o=smoothstep(zr-3.,zr+3.,d);float ring=1.-smoothstep(2.,7.,abs(d-zr));float dt=length(vW.xz-tc);float wr=1.-smoothstep(1.5,4.5,abs(dt-tr));vec3 c=mix(vec3(.78,.1,.1),vec3(1.,.31,.31),ring);c=mix(c,vec3(1.),wr);float a=max(o*.32,max(ring*.95,wr*.8));gl_FragColor=vec4(c,a);}'});
const G=new THREE.PlaneGeometry(S,S);G.rotateX(-Math.PI/2);G.translate(S/2,2.5,S/2);R.zp=new THREE.Mesh(G,ZM);R.zp.renderOrder=3;root.add(R.zp);
R.zw=new THREE.Mesh(new THREE.CylinderGeometry(1,1,460,96,1,true),new THREE.MeshBasicMaterial({color:0xff3030,transparent:true,opacity:.2,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false}));R.zw.position.y=230;root.add(R.zw)}}
const SKINS=['#e8bd98','#d9a97a','#b98a62','#8d5a3b','#f1cdb0'],UNIF=[['#55603f','#454d33'],['#6a5f47','#564d3a'],['#44505a','#363f48'],['#5c5b4b','#48473a'],['#4a5a45','#3b4837'],['#665a40','#4f4631']],G3={};
const gg3=(k,f)=>G3[k]||(G3[k]=f());
function shade(c,k){return new THREE.Color(c).multiplyScalar(k)}
function seg(m,A,B){if(!seg.Y){seg.Y=new THREE.Vector3(0,1,0);seg.D=new THREE.Vector3()}const d=seg.D.set(B[0]-A[0],B[1]-A[1],B[2]-A[2]),L=d.length()||1;m.position.set((A[0]+B[0])/2,(A[1]+B[1])/2,(A[2]+B[2])/2);m.quaternion.setFromUnitVectors(seg.Y,d.multiplyScalar(1/L));m.scale.y=L}
function ik(S,H,l1,l2,po){const dx=H[0]-S[0],dy=H[1]-S[1],dz=H[2]-S[2],D0=Math.hypot(dx,dy,dz)||1,d=Math.min(Math.max(D0,Math.abs(l1-l2)+.2),l1+l2-.05),ux=dx/D0,uy=dy/D0,uz=dz/D0,a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a));
let px=po[0],py=po[1],pz=po[2];const k=px*ux+py*uy+pz*uz;px-=ux*k;py-=uy*k;pz-=uz*k;const pl=Math.hypot(px,py,pz)||1;
return[[S[0]+ux*a+px/pl*h,S[1]+uy*a+py/pl*h,S[2]+uz*a+pz/pl*h],[S[0]+ux*d,S[1]+uy*d,S[2]+uz*d]]}
function mkSold(e){const R=R3,sh=SHD,Q=GQ>=2?14:9,G=new THREE.Group(),Bd=new THREE.Group(),U=new THREE.Group(),UB=new THREE.Group();
G.add(Bd);Bd.add(U);U.position.set(0,28,0);U.add(UB);UB.position.set(0,-28,0);
const idx=Math.max(0,M.E.indexOf(e)),un=UNIF[idx%UNIF.length],skc=SKINS[(idx*5+(e.team|0))%SKINS.length];
const lm=c=>new THREE.MeshLambertMaterial({color:c}),mTop=lm(un[0]),mPan=lm(un[1]),mSk=lm(skc),mBk=lm('#1b1d20'),mVest=lm(shade(e.col,.5)),mHelm=lm(new THREE.Color(un[1]).lerp(new THREE.Color(e.col),.45)),mPk=lm(shade(un[1],.8)),gunM=lm('#2b2e33');
const part=(par,geo,mat,x,y,z,sx,sy,sz)=>{const me=new THREE.Mesh(geo,mat);me.position.set(x,y,z);if(sx!=null)me.scale.set(sx,sy,sz);me.castShadow=sh;par.add(me);return me};
const cyl=(k,a,b,h)=>gg3(k,()=>new THREE.CylinderGeometry(a,b,h,Q)),box=(k,x,y,z)=>gg3(k,()=>new THREE.BoxGeometry(x,y,z)),sph=(k,r,w,h,a,b,c,d)=>gg3(k,()=>new THREE.SphereGeometry(r,w,h,a,b,c,d));
// legs
const leg=s=>{const hp=new THREE.Group();hp.position.set(0,27,s*6.2);Bd.add(hp);part(hp,cyl('th',5.4,4.4,13),mPan,0,-6.5,0);const kn=new THREE.Group();kn.position.set(0,-13,0);hp.add(kn);part(kn,cyl('sn',4.3,3.3,13),mPan,0,-6.5,0);part(kn,sph('kp',3.6,8,6),mPk,2.6,0,0,.8,1,1);part(kn,box('bt',11,5.2,6.8),mBk,2.4,-14,0);return{hp,kn}};
const L=leg(-1),Rg=leg(1);
part(Bd,box('pv',11,6.5,17),mPan,0,28,0);part(Bd,box('bl',11.6,2,17.6),mBk,0,31,0);
// torso
part(UB,cyl('tl',7.2,7.8,11),mTop,0,36,0,1,1,1.5);part(UB,sph('ch',9,Q+2,Q),mTop,.3,43.5,0,.85,1,1.5);
part(UB,box('vp',5,16,21),mVest,4.2,42,0);part(UB,box('po',4,5.5,5),mBk,6.4,35.5,5.6);part(UB,box('po',4,5.5,5),mBk,6.4,35.5,-5.6);part(UB,box('pk',9,19,18),mPk,-9,41,0);
// head
part(UB,cyl('nk',2.8,3.1,3.2),mSk,.5,51.4,0);part(UB,sph('hd',7,Q+2,Q),mSk,1.2,57.5,0,1.04,1.1,.96);
part(UB,sph('hl',8.5,Q+4,8,0,Math.PI*2,0,Math.PI*.56),mHelm,.8,59,0);part(UB,box('gg',2.2,3.4,11.5),mBk,7.6,58,0);
// arms
const arm=s=>{const sd=part(UB,sph('sd',4.3,8,6),mTop,.5,46.5,s*11.5),u=part(UB,cyl('ua',3.4,3,1),mTop,0,0,0),f=part(UB,cyl('fa',3,2.5,1),mTop,0,0,0),h=part(UB,sph('gl',3.1,8,6),mBk,0,0,0);return{sd,u,f,h,s}};
const aR=arm(1),aL=arm(-1);
// gun
const gunG=new THREE.Group();gunG.position.set(2,40,2.8);UB.add(gunG);
const rec=part(gunG,box('r',1,1,1),gunM,0,0,0),bar=part(gunG,gg3('br',()=>new THREE.CylinderGeometry(1,1,1,8).rotateZ(Math.PI/2)),mBk,0,0,0),stk=part(gunG,box('r',1,1,1),mBk,0,0,0),grp=part(gunG,box('r',1,1,1),mBk,0,0,0),mag=part(gunG,box('r',1,1,1),mBk,0,0,0),
scope=part(gunG,box('r',1,1,1),lm('#14171c'),0,0,0),supp=part(gunG,gg3('br',()=>new THREE.CylinderGeometry(1,1,1,8).rotateZ(Math.PI/2)),lm('#3a3f48'),0,0,0);
const fl=new THREE.Mesh(gg3('fl',()=>new THREE.SphereGeometry(5,8,6)),new THREE.MeshBasicMaterial({color:0xffd36b}));gunG.add(fl);
const disc=new THREE.Mesh(gg3('dc',()=>new THREE.CircleGeometry(19,24).rotateX(-Math.PI/2)),new THREE.MeshBasicMaterial({color:e.col,transparent:true,opacity:.32,depthWrite:false}));disc.position.y=1.4;G.add(disc);
const ring=new THREE.Mesh(gg3('rg',()=>new THREE.RingGeometry(24,28,32).rotateX(-Math.PI/2)),new THREE.MeshBasicMaterial({color:0xffc04d,transparent:true,opacity:.9,depthTest:false}));ring.position.y=2;ring.renderOrder=9;G.add(ring);
R.root.add(G);
const o={G,Bd,U,hpL:L.hp,knL:L.kn,hpR:Rg.hp,knR:Rg.kn,aR,aL,gunG,rec,bar,stk,grp,mag,scope,supp,fl,gunM,ring,fm:[mTop,mPan,mSk,mVest,mHelm],can:null,gl:-1,gk:'',lx:e.x,ly:e.y,ph:0,sw:0,mf:0,cz:0,shown:false};R.ents.set(e,o);return o}
function layGun(o,gl,pis,pcv,c){o.rec.scale.set(gl*.5,6,4.6);o.rec.position.set(gl*.25,0,0);
o.bar.scale.set(gl*.58,1.25,1.25);o.bar.position.set(gl*.71,1.4,0);
o.stk.visible=!pis;o.stk.scale.set(7,5,3.6);o.stk.position.set(-3.5,-1,0);
o.grp.scale.set(3,7,3);o.grp.position.set(gl*.2,-5.5,0);o.grp.rotation.z=-.25;
o.mag.visible=pis!==2;o.mag.scale.set(3.6,9,3.4);o.mag.position.set(gl*.4,-6.5,0);
o.scope.visible=!!(pcv&&c.scope);o.scope.scale.set(gl*.28,3.4,3.4);o.scope.position.set(gl*.35,5,0);
o.supp.visible=!!(pcv&&c.supp);o.supp.scale.set(9,2.7,2.7);o.supp.position.set(gl+4,1.4,0);
o.fl.position.set(gl+3+(pcv&&c.supp?9:0),1.4,0);
// hands hold the weapon; elbows follow by two-bone IK
const Rh=[2+gl*.22,36.8,3.2],Lh=pis?[2+gl*.3,37.5,.6]:[2+Math.min(gl*.58,17),40.4,2.2];
for(const [a,h,po] of [[o.aR,Rh,[0,-1,.5]],[o.aL,Lh,[0,-1,-.6]]]){const S=[.5,46.5,a.s*11.5],r=ik(S,h,11.5,11,po);seg(a.u,S,r[0]);seg(a.f,r[0],r[1]);a.h.position.set(r[1][0],r[1][1],r[1][2])}}
function mkCanopy(e){const G=new THREE.Group(),geo=new THREE.SphereGeometry(40,16,6,0,Math.PI*2,0,Math.PI/2),pos=geo.attributes.position,cl2=[],c1=new THREE.Color(e.col),c2=new THREE.Color(0xf2f2f2);
for(let i=0;i<pos.count;i++){const ph=Math.atan2(pos.getZ(i),pos.getX(i))+Math.PI,k=Math.floor(ph/(Math.PI*2/8));const c=k%2?c2:c1;cl2.push(c.r,c.g,c.b)}
geo.setAttribute('color',new THREE.Float32BufferAttribute(cl2,3));
const me=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true,side:THREE.DoubleSide}));me.position.y=84;me.scale.y=.7;me.castShadow=SHD;G.add(me);
const rp=[];for(let k=0;k<8;k++){const a=k/8*Math.PI*2;rp.push(Math.cos(a)*38,84,Math.sin(a)*38,0,52,0)}
const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.Float32BufferAttribute(rp,3));G.add(new THREE.LineSegments(rg,new THREE.LineBasicMaterial({color:0xdddddd})));return G}
function updSold(o,e,m,dt){const c=cs(e),pcv=pc(e),w=e.w,gl=14+GX[w],z=e.z||0,alt=e.air>0?Math.min(1,e.air/AIRT):0;
o.G.position.set(e.x,alt*380+z,e.y);o.G.rotation.y=-e.a;
const mvd=Math.hypot(e.x-o.lx,e.y-o.ly);o.lx=e.x;o.ly=e.y;o.ph+=mvd*.085;
const mvn=mvd>.15&&!alt&&z<1?1:0,k1=Math.min(1,dt*10);o.mf+=(mvn-o.mf)*k1;o.cz+=((e.cr?1:0)-o.cz)*Math.min(1,dt*12);
const ph=o.ph,cz=o.cz,jp=z>1.5||alt>0?1:0,sw=Math.sin(ph)*.72*o.mf;o.sw=sw;
const kf=p=>Math.max(0,Math.cos(p))*.95*o.mf;
o.hpL.rotation.z=sw+cz*1.15+jp*.55;o.knL.rotation.z=-kf(ph)-cz*1.9-jp*1.0;
o.hpR.rotation.z=-sw+cz*1.15+jp*.2;o.knR.rotation.z=-kf(ph+Math.PI)-cz*1.9-jp*.6;
o.Bd.position.y=-cz*9+Math.abs(Math.sin(ph))*1.4*o.mf;
const pt=e===m.p&&R3?R3.pit:(e.pt||0);o.U.rotation.z=-cz*.14+cl(pt,-.9,.9)*.45;
const gk=w+'|'+(pcv?c.skin+'/'+c.scope+'/'+c.supp:'x');
if(o.gk!==gk){o.gk=gk;o.gl=gl;o.gunM.color.set(pcv?SK[c.skin]:'#2b2e33');layGun(o,gl,PIS.includes(w)?1:(w==3?2:0),pcv,c)}
o.fl.visible=e.fl>0;const em=e.ht>0?0x666666:0;for(const mt of o.fm)mt.emissive.setHex(em);
o.ring.visible=e===m.p;
if(e.air>0){if(!o.can){o.can=mkCanopy(e);o.G.add(o.can)}o.can.visible=true}else if(o.can)o.can.visible=false}
function poolG(arr,i,mk){return arr[i]||(arr[i]=mk())}

function vmBuild(R,p){const G=R.vm;while(G.children.length)G.remove(G.children[0]);
const lm=c=>new THREE.MeshLambertMaterial({color:c,depthTest:false}),sleeve=lm(UNIF[Math.max(0,M.E.indexOf(p))%UNIF.length][0]),skin=lm('#d9a97a'),gm=lm('#23262c'),dk=lm('#14171c');
const mk=(geo,mat,ro)=>{const m=new THREE.Mesh(geo,mat);m.renderOrder=ro;m.frustumCulled=false;G.add(m);return m};
R.vmo={gun:mk(new THREE.BoxGeometry(1,1,1),gm,21),gunM:gm,aR:mk(new THREE.BoxGeometry(1,1,1),sleeve,20),aL:mk(new THREE.BoxGeometry(1,1,1),sleeve,20),hR:mk(new THREE.SphereGeometry(3.4,8,6),skin,22),hL:mk(new THREE.SphereGeometry(3.4,8,6),skin,22),
scope:mk(new THREE.BoxGeometry(4,4,14),dk,22),supp:mk(new THREE.BoxGeometry(7,7,10),dk,22),fl:mk(new THREE.SphereGeometry(6,8,6),new THREE.MeshBasicMaterial({color:0xffd36b,depthTest:false}),23)}}
function vmLimb(m,x0,y0,z0,x1,y1,z1,th){const dx=x1-x0,dy=y1-y0,dz=z1-z0,L=Math.hypot(dx,dy,dz)||1;m.position.set((x0+x1)/2,(y0+y1)/2,(z0+z1)/2);m.rotation.order='YXZ';m.rotation.set(-Math.asin(dy/L),Math.atan2(dx,dz),0);m.scale.set(th,th,L)}
function updVM(R,p,m,dt,on){const G=R.vm;G.visible=!!on;if(!on)return;
if(R.vmk!==p.col||!R.vmo){R.vmk=p.col;vmBuild(R,p)}
const o=R.vmo,c=cs(p),pcv=pc(p),gl=(14+GX[p.w])*1.9;
if(p.fl>.045)R.rec=1;R.rec=Math.max(0,R.rec-dt*7);const rc=R.rec,sw=R.o_sw||0,bx=Math.sin(m.t*9)*Math.abs(sw)*2.2,by=-Math.abs(Math.cos(m.t*9))*Math.abs(sw)*1.6;
const gx=11+bx,gy=-12.5+by+rc*.8,gz=-24+rc*5;
o.gunM.color.set(pcv?SK[c.skin]:'#23262c');
o.gun.scale.set(6,7,gl);o.gun.position.set(gx,gy,gz-gl/2);o.gun.rotation.set(rc*.04,0,0);
vmLimb(o.aR,26+bx,-34,-8,gx+2,gy-3,gz-gl*.12,5.5);o.hR.position.set(gx+2,gy-3,gz-gl*.12);
vmLimb(o.aL,-16+bx,-34,-8,gx-3,gy-2,gz-gl*.62,5.5);o.hL.position.set(gx-3,gy-2,gz-gl*.62);
o.scope.visible=!!(pcv&&c.scope);o.scope.position.set(gx,gy+6,gz-gl*.45);
o.supp.visible=!!(pcv&&c.supp);o.supp.position.set(gx,gy,gz-gl-4);
o.fl.visible=p.fl>0;o.fl.position.set(gx,gy,gz-gl-(pcv&&c.supp?10:4))}
function draw3(){
if(!R3&&!init3())return false;
const R=R3,m=M,p=camE(m),dm=R.dm,tc=R.tc,now=performance.now(),dt=Math.min(.05,(now-R.t0)/1000);R.t0=now;
if(R.m!==m)build3(m);
if(R.w!==W||R.h!==H){R.w=W;R.h=H;R.r.setSize(W,H,false);R.cam.aspect=W/H;R.cam.updateProjectionMatrix()}
R.yaw+=((keys.KeyE?1:0)-(keys.KeyQ?1:0))*dt*1.9;
// camera
const air=p.air>0,alt=air?Math.min(1,p.air/AIRT):0,shx=(Math.random()-.5)*m.shk,shz=(Math.random()-.5)*m.shk;
let fpv=false;
if(R.fp){
 if(p!==m.p)R.fa=p.a;else if(!TS.on){}
 else if(TS.r){R.fa+=(TS.r.dx||0)*.006;R.pit=cl(R.pit-(TS.r.dy||0)*.005,-1.1,1.2);TS.r.dx=TS.r.dy=0}else R.pit*=Math.max(0,1-dt*2.5)
 R.eh=R.eh==null?eyeH(p):R.eh+(eyeH(p)-R.eh)*Math.min(1,dt*16);
 const cf=Math.cos(R.fa),sf=Math.sin(R.fa),cp=Math.cos(R.pit),sp=Math.sin(R.pit),lx=cf*cp,ly=sp,lz=sf*cp;
 fpv=R.view==1&&!air;mx=W/2;my=H/2;
 let fov=fpv?76:air?68:62;if(R.cam.fov!==fov){R.cam.fov=fov;R.cam.near=fpv?4:8;R.cam.updateProjectionMatrix()}
 if(fpv){const bob=Math.abs(R.o_sw||0)*1.2;R.cam.position.set(p.x+cf*6+shx,R.eh+bob,p.y+sf*6+shz);R.cam.lookAt(p.x+cf*6+lx*300,R.eh+bob+ly*300,p.y+sf*6+lz*300)}
 else{let dist=air?240:135;const hit=ray(p.x,p.y,R.fa+Math.PI,dist+34,null,1).t;dist=Math.min(dist,Math.max(26,hit-26));
  const ty=R.eh+10+alt*380,tx=p.x-sf*14,tz=p.y+cf*14;
  R.cam.position.set(tx-lx*dist+shx,Math.max(14,ty-ly*dist),tz-lz*dist+shz);R.cam.lookAt(tx+lx*300,ty+ly*300,tz+lz*300)}
 R.sun.position.set(p.x-380,1050,p.y+560);R.sun.target.position.set(p.x,0,p.y)}
else{
 R.yaw+=((keys.KeyE?1:0)-(keys.KeyQ?1:0))*dt*1.9;
 if(R.cam.fov!==46){R.cam.fov=46;R.cam.near=10;R.cam.updateProjectionMatrix()}
 const Zm=zoom()*(air?.8:1),d=(H/Zm)/(2*Math.tan(23*Math.PI/180))*1.05,pitch=1.08,dh=d*Math.cos(pitch),dy=d*Math.sin(pitch),ty=alt*380;
 R.cam.position.set(p.x+Math.sin(R.yaw)*dh+shx,ty+dy,p.y+Math.cos(R.yaw)*dh+shz);R.cam.lookAt(p.x,ty+18,p.y);
 R.sun.position.set(p.x-380,1050,p.y+560);R.sun.target.position.set(p.x,0,p.y)}
{const env=R.fp?1:0;if(R.env!==env){R.env=env;if(env){const SKY={sand:0xd9cfae,grass:0xa9c4d8,snow:0xd7e2ec,asph:0x8c949e},c=SKY[m.th.g]||0xa9c4d8;R.sc.background=new THREE.Color(c);R.sc.fog.color.setHex(c);R.sc.fog.near=650;R.sc.fog.far=3300}else{R.sc.background=null;R.sc.fog.color.setHex(0x05080b);R.sc.fog.near=1300;R.sc.fog.far=2900}}}
// soldiers
for(const e of m.E){const o=R.ents.get(e)||mkSold(e),on=!!e.alive&&vis3(p,e);o.shown=on;o.G.visible=on&&!(e.sp>0&&((m.t*10)|0)%2)&&!(fpv&&e===p);if(on){updSold(o,e,m,dt);if(e===p)R.o_sw=o.sw}}
updVM(R,p,m,dt,fpv);
// corpses
for(let i=0;i<m.C.length;i++){const c=m.C[i],o=poolG(R.cp,i,()=>{const G=new THREE.Group(),mt=new THREE.MeshLambertMaterial({color:0x555555}),b=new THREE.Mesh(new THREE.BoxGeometry(18,7,30),mt);b.position.y=3.5;b.castShadow=SHD;G.add(b);const h=new THREE.Mesh(new THREE.SphereGeometry(8,8,6),new THREE.MeshLambertMaterial({color:0x8a6a50}));h.position.set(14,5,0);G.add(h);G.userData.mt=mt;R.root.add(G);return G});
o.visible=true;o.position.set(c.x,0,c.y);o.rotation.y=-c.a;o.userData.mt.color.set(c.col).multiplyScalar(.55)}
for(let i=m.C.length;i<R.cp.length;i++)R.cp[i].visible=false;
// blood
{const n=Math.min(m.B.length,420);for(let i=0;i<n;i++){const b=m.B[i];dm.position.set(b.x,1.1,b.y);dm.scale.set(b.r*1.3,1,b.r*1.3);dm.rotation.set(0,0,0);dm.updateMatrix();R.blood.setMatrixAt(i,dm.matrix)}R.blood.count=n;R.blood.instanceMatrix.needsUpdate=true}
// loot
{const n=Math.min(m.L.length,900),LC={w:0xf0a020,m:0x3ddc84,a:0x4da3ff};for(let i=0;i<n;i++){const l=m.L[i],cc=LC[l.t];
dm.position.set(l.x,15+Math.sin(m.t*3+i)*3,l.y);dm.rotation.set(0,m.t*1.6+i,0);dm.scale.set(1,1,1);dm.updateMatrix();R.loot.setMatrixAt(i,dm.matrix);R.loot.setColorAt(i,tc.setHex(cc));
dm.position.y=0;dm.rotation.set(0,0,0);dm.updateMatrix();R.beam.setMatrixAt(i,dm.matrix);R.beam.setColorAt(i,tc.setHex(cc))}
R.loot.count=R.beam.count=n;R.loot.instanceMatrix.needsUpdate=R.beam.instanceMatrix.needsUpdate=true;if(n){R.loot.instanceColor.needsUpdate=R.beam.instanceColor.needsUpdate=true}}
// bullet tracers
{const n=Math.min(m.T.length,240),d2=R.d2||(R.d2=new THREE.Object3D());d2.rotation.order='YXZ';
for(let i=0;i<n;i++){const t=m.T[i],z1=t.z1==null?EYE-6:t.z1,z2=t.z2==null?z1:t.z2,dx=t.x2-t.x1,dz=t.y2-t.y1,dy=z2-z1,L=Math.hypot(dx,dy,dz)||1,a=Math.min(1,Math.max(0,t.l*12));
d2.position.set((t.x1+t.x2)/2,(z1+z2)/2,(t.y1+t.y2)/2);d2.rotation.set(-Math.asin(cl(dy/L,-1,1)),Math.atan2(dx,dz),0);d2.scale.set(1.8,1.8,L);d2.updateMatrix();R.trc.setMatrixAt(i,d2.matrix);R.trc.setColorAt(i,tc.setRGB(a,.88*a,.55*a))}
R.trc.count=n;R.trc.instanceMatrix.needsUpdate=true;if(n)R.trc.instanceColor.needsUpdate=true}
// grenades
{const n=Math.min(m.Gr.length,48);for(let i=0;i<n;i++){const q=m.Gr[i],k=q.t==null?1:Math.min(1,q.t/.7);dm.position.set(q.x,8+Math.sin(k*Math.PI)*26,q.y);dm.rotation.set(0,0,0);dm.scale.set(1,1,1);dm.updateMatrix();R.gre.setMatrixAt(i,dm.matrix);R.gre.setColorAt(i,tc.setHex(q.k=='smoke'?0x9aabab:q.k=='fire'?0xe8742a:0x56703a))}
R.gre.count=n;R.gre.instanceMatrix.needsUpdate=true;if(n)R.gre.instanceColor.needsUpdate=true}
// smoke / fire / explosions
{let ns=0,nf=0,ne=0;
for(const f of m.Fx){
if(f.k=='s'){const G=poolG(R.fS,ns++,()=>{const G=new THREE.Group(),mt=new THREE.MeshLambertMaterial({color:0xbec3c8,transparent:true,depthWrite:false});for(let i=0;i<7;i++)G.add(new THREE.Mesh(new THREE.SphereGeometry(1,14,10),mt));G.userData.mt=mt;R.root.add(G);return G});
G.visible=true;const a=Math.min(1,f.t/2,(m.t-f.s)/.6+.2);G.userData.mt.opacity=Math.max(0,.46*a);
G.children.forEach((s,i)=>{const an=i*.9+m.t*.15,dd=f.r*.45*(i%3?1:.5),r=f.r*.5;s.position.set(f.x+Math.cos(an)*dd,r*.7,f.y+Math.sin(an)*dd);s.scale.set(r,r*.75,r)})}
else if(f.k=='f'){const G=poolG(R.fF,nf++,()=>{const G=new THREE.Group();for(let i=0;i<6;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(1,10,8),new THREE.MeshBasicMaterial({color:new THREE.Color(1,(90+i*18)/255,20/255),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));G.add(s)}R.root.add(G);return G});
G.visible=true;G.children.forEach((s,i)=>{const an=i*1.1+m.t*3,dd=f.r*.5*((i%3)/2+.2),r=f.r*.3;s.position.set(f.x+Math.cos(an)*dd,r*.9,f.y+Math.sin(an)*dd);s.scale.set(r,r*1.5,r);s.material.opacity=Math.max(0,(.3+.14*Math.sin(m.t*10+i))*1.7)})}
else{const s=poolG(R.fE,ne++,()=>{const s=new THREE.Mesh(new THREE.SphereGeometry(1,16,12),new THREE.MeshBasicMaterial({color:0xffc850,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));R.root.add(s);return s});
const k=1-f.t/.35,r=f.r*(.3+.7*k)*.75;s.visible=true;s.position.set(f.x,r*.6+10,f.y);s.scale.set(r,r,r);s.material.opacity=Math.max(0,.85*(1-k))}}
for(let i=ns;i<R.fS.length;i++)R.fS[i].visible=false;for(let i=nf;i<R.fF.length;i++)R.fF[i].visible=false;for(let i=ne;i<R.fE.length;i++)R.fE[i].visible=false}
// zone
if(m.z&&R.zp){const z=m.z,u=R.zp.material.uniforms;u.zc.value.set(z.x,z.y);u.tc.value.set(z.tx,z.ty);u.zr.value=Math.max(1,z.r);u.tr.value=z.tr;R.zw.position.x=z.x;R.zw.position.z=z.y;R.zw.scale.set(Math.max(1,z.r),1,Math.max(1,z.r));R.zw.visible=z.r<m.S*1.3}
R.r.render(R.sc,R.cam);return true}
function proj(x,y,z){const R=R3,v=R.v.set(x,y,z).project(R.cam);return v.z<1?[(v.x+1)/2*W,(1-v.y)/2*H]:null}
function labels3(){const R=R3,m=M,p=camE(m),zs=Math.min(1.4,Math.max(.85,zoom()));g.textAlign='center';
for(const e of m.E){if(e===p||!e.alive)continue;const o=R.ents.get(e);if(!o||!o.shown||!visP(p,e))continue;const s=proj(e.x,(e.air>0?Math.min(1,e.air/AIRT)*380:0)+84,e.y);if(!s)continue;const w=34*zs;
g.fillStyle='rgba(0,0,0,.6)';g.fillRect(s[0]-w/2,s[1]-6,w,5);g.fillStyle=e.team==p.team?'#3ddc84':'#e5484d';g.fillRect(s[0]-w/2,s[1]-6,w*cl(e.hp/100,0,1),5);g.font=Math.round(11*zs)+'px Tahoma';g.fillStyle='#fff';g.fillText(e.name,s[0],s[1]-11)}
if(!(p.air>0)){g.font='bold '+Math.round(12*zs)+'px Tahoma';for(const l of m.L){if(Math.abs(l.x-p.x)>240||Math.abs(l.y-p.y)>240||Math.hypot(l.x-p.x,l.y-p.y)>240)continue;const s=proj(l.x,46,l.y);if(!s)continue;g.fillStyle=l.t=='w'?'#f0a020':l.t=='m'?'#3ddc84':'#4da3ff';g.fillText(l.t=='w'?WP[l.i].n:l.t=='m'?'Medkit':'Armor',s[0],s[1])}}}
function aim3D(){const R=R3,p=M&&M.p;if(!USE3D||!R||!R.m||!p)return Math.atan2(my-H/2,mx-W/2);
const v=R.av.set((mx/W)*2-1,-(my/H)*2+1,.5).unproject(R.cam),o=R.cam.position,dx=v.x-o.x,dy=v.y-o.y,dz=v.z-o.z;
if(dy>-1e-3)return Math.atan2(my-H/2,mx-W/2);const t=(36-o.y)/dy;return Math.atan2(o.z+dz*t-p.y,o.x+dx*t-p.x)}
function draw(){if(USE3D){try{g.setTransform(D,0,0,D,0,0);g.clearRect(0,0,W,H);if(draw3()){labels3();hud();hint3();cv.style.cursor=document.pointerLockElement===cv?'none':'default';return}}catch(e){console.error(e);USE3D=false;$('c3').style.display='none'}}draw2D()}
addEventListener('keydown',e=>{if(e.code=='KeyV'&&typeof THREE!=='undefined'&&M){if(!M.br)return;if(USE3D&&R3&&R3.fp)R3.view^=1;else{USE3D=!USE3D;$('c3').style.display=USE3D?'block':'none'}}});
let SENS=1;try{SENS=+localStorage.getItem('flsens')||1}catch(e){}
function lockPtr(){if(!USE3D||TS.on||document.pointerLockElement===cv||!cv.requestPointerLock)return;try{const q=cv.requestPointerLock({unadjustedMovement:true});if(q&&q.catch)q.catch(()=>{try{cv.requestPointerLock()}catch(e){}})}catch(e){try{cv.requestPointerLock()}catch(e2){}}}
addEventListener('mousemove',e=>{if(!R3)return;R3.rmx=e.clientX;R3.rmy=e.clientY;if(USE3D&&R3.fp&&M&&M.p&&M.p.alive&&document.pointerLockElement===cv){const k=.0022*SENS;R3.fa+=e.movementX*k;R3.pit=cl(R3.pit-e.movementY*k,-1.1,1.2)}});
cv.addEventListener('mousedown',()=>{if(M)lockPtr()});
(()=>{const e=$('sens');if(!e)return;e.value=SENS;e.oninput=()=>{SENS=+e.value;try{localStorage.setItem('flsens',SENS)}catch(x){}}})();
function hint3(){if(!R3||!R3.fp||TS.on||!M||document.pointerLockElement===cv||$('pause').style.display=='flex'||$('kit').style.display=='flex')return;g.font='bold 15px Tahoma';g.textAlign='center';const t='برای نگاه کردن و شلیک، روی صفحه کلیک کنید',w=g.measureText(t).width+34;g.fillStyle='rgba(0,0,0,.6)';g.fillRect(W/2-w/2,H*.76-18,w,36);g.fillStyle='#fff';g.fillText(t,W/2,H*.76+5)}
document.addEventListener('pointerlockchange',()=>{if(!document.pointerLockElement)setTimeout(()=>{if(!document.pointerLockElement&&M&&R3&&R3.fp&&USE3D&&$('pause').style.display!='flex')showPause(1)},90)});
(()=>{const b=$('gfx'),N=['کم','متوسط','بالا'];b.textContent='گرافیک: '+N[GQ];if(GQ>=2)$('vg').style.display='block';
b.onclick=()=>{const n=(GQ+1)%3;try{localStorage.setItem('flq',n)}catch(e){}b.textContent='گرافیک: '+N[n]+' …';setTimeout(()=>location.reload(),300)}})();
