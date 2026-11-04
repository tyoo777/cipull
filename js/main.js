(function(){
var wa="https://wa.me/"+["62","85196","990449"].join("")+"?text="+encodeURIComponent("Halo Rangga, saya tertarik membuat website.");
document.querySelectorAll(".wal").forEach(function(a){a.href=wa});
var R=document.documentElement;
try{var s=localStorage.getItem("th");if(s)R.setAttribute("data-theme",s)}catch(e){}
var tb=document.getElementById("th");
function ic(){tb.textContent=R.getAttribute("data-theme")==="light"?"☾":"☀"}ic();
tb.onclick=function(){var n=R.getAttribute("data-theme")==="light"?"dark":"light";R.setAttribute("data-theme",n);try{localStorage.setItem("th",n)}catch(e){}ic()};
var W=["Web Designer","Web Engineer","Programmer Coding"],wi=0,ci=0,del=false,ty=document.getElementById("ty");
(function t(){var w=W[wi];ty.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(t,90)}else if(!del){del=true;setTimeout(t,1400)}else if(ci>0){ci--;setTimeout(t,45)}else{del=false;wi=(wi+1)%W.length;setTimeout(t,300)}})();
function clk(){var d=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));document.getElementById("clk").textContent=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")+" WIB"}clk();setInterval(clk,15000);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in2");var b=e.target.querySelector("[data-w]");if(b)b.style.width=b.dataset.w+"%";io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(x){io.observe(x)});
var st=document.getElementById("stage"),tl=document.getElementById("tilt");
st.addEventListener("pointermove",function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform="rotateY("+x*26+"deg) rotateX("+(-y*18)+"deg)"});
st.addEventListener("pointerleave",function(){tl.style.transform=""});
var g=document.getElementById("glow");window.addEventListener("pointermove",function(e){g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
var ls=[].slice.call(document.querySelectorAll(".links a"));
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)ls.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(function(x){so.observe(x)});
})();
(function(){
var P=["beranda","tentang","skill","proyek","layanan","paket","faq","kontak"],pg=[].slice.call(document.querySelectorAll(".page")),L=document.querySelector(".links"),ls=[].slice.call(L.querySelectorAll("a")),w=document.getElementById("wipe"),cur=null,ind=document.createElement("i");
ind.id="ind";L.appendChild(ind);
function mv(){var a=L.querySelector("a.on");if(a){ind.style.left=a.offsetLeft+14+"px";ind.style.width=a.offsetWidth-28+"px"}}
function go(first){var h=location.hash.slice(1);if(P.indexOf(h)<0)h="beranda";if(h===cur)return;cur=h;
function sw(){pg.forEach(function(s){s.classList.toggle("act",s.dataset.pg===h)});ls.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});window.scrollTo(0,0);mv()}
L.classList.remove("open");
if(first||matchMedia("(prefers-reduced-motion:reduce)").matches){sw()}else{w.classList.remove("go");void w.offsetWidth;w.classList.add("go");document.body.classList.add("leaving");setTimeout(function(){sw();document.body.classList.remove("leaving")},500)}}
addEventListener("hashchange",function(){go()});go(true);addEventListener("resize",mv);addEventListener("load",mv);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(mv);
document.getElementById("mb").onclick=function(){L.classList.toggle("open")};
var lb=document.getElementById("lb");
document.querySelectorAll(".pj img").forEach(function(i){i.onclick=function(){lb.innerHTML="<img src='"+i.src+"' alt=''>";lb.classList.add("on")}});
lb.onclick=function(){lb.classList.remove("on")};
document.getElementById("fs").onclick=function(){var n=document.getElementById("fn").value.trim(),m=document.getElementById("fm").value.trim();var t="Halo Rangga, saya "+(n||"calon klien")+". "+(m||"Saya tertarik membuat website.");window.open("https://wa.me/"+["62","85196","990449"].join("")+"?text="+encodeURIComponent(t),"_blank")};
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
var c=document.getElementById("pc"),x=c.getContext("2d"),ps=[],N=48,W,H;
var DP=Math.min(devicePixelRatio||1,2);function rs(){W=innerWidth;H=innerHeight;c.width=W*DP;c.height=H*DP;x.setTransform(DP,0,0,DP,0,0)}rs();addEventListener("resize",rs);
for(var i=0;i<N;i++)ps.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});
(function d(){x.clearRect(0,0,W,H);ps.forEach(function(p,i){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.fillStyle="rgba(160,150,255,.7)";x.beginPath();x.arc(p.x,p.y,1.6,0,6.3);x.fill();for(var j=i+1;j<N;j++){var q=ps[j],dx=p.x-q.x,dy=p.y-q.y,dd=dx*dx+dy*dy;if(dd<14000){x.strokeStyle="rgba(140,130,255,"+.18*(1-dd/14000)+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(d)})();
}
})();
(function(){
var d=document,B=d.body,ld=d.getElementById("ld"),n=d.getElementById("ldn"),bar=d.getElementById("ldi"),t=d.getElementById("ldt"),cr=d.getElementById("ldr"),T=["Menginisialisasi sistem","Memuat modul 3D","Menyiapkan antarmuka","Siap ditampilkan"],C=2*Math.PI*52,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
B.classList.add("lk");cr.style.strokeDasharray=C;cr.style.strokeDashoffset=C;
var h=d.querySelector(".hero > div:first-child");[].forEach.call(h.children,function(e,i){e.style.animationDelay=(i*.12+.1)+"s"});
function fin(){ld.classList.add("out");B.classList.add("rdy");setTimeout(function(){ld.classList.add("done");B.classList.remove("lk")},1700)}
var st=performance.now(),D=rm?300:3600;
(function s(now){var k=Math.min(1,(now-st)/D),e=1-Math.pow(1-k,2.2),p=Math.round(e*100);n.textContent=p+"%";bar.style.width=p+"%";cr.style.strokeDashoffset=C*(1-e);t.textContent=T[Math.min(3,Math.floor(e*4))];if(k<1)requestAnimationFrame(s);else setTimeout(fin,rm?0:350)})(st);
var sp=d.getElementById("sp"),nv=d.querySelector("nav"),tk=false;
function onS(){var y=scrollY,m=d.documentElement.scrollHeight-innerHeight;sp.style.transform="scaleX("+(m>0?y/m:0)+")";nv.classList.toggle("sc",y>30);d.documentElement.style.setProperty("--sy",y);tk=false}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});
d.querySelectorAll(".pg,.sv,.skills,.hb").forEach(function(g){[].forEach.call(g.children,function(e,i){e.style.transitionDelay=(i%3)*.13+"s"})});
d.querySelectorAll(".rv").forEach(function(e){e.addEventListener("transitionend",function(ev){if(ev.propertyName==="opacity"&&e.classList.contains("in2"))e.classList.add("fin")})});
})();
(function(){
var d=document,bn=d.getElementById("bn"),sh=d.getElementById("sheet"),mo=d.getElementById("more"),R=["beranda","tentang","skill","proyek","layanan","paket","faq","kontak"],M=["beranda","tentang","proyek","layanan","kontak"];
function act(){var h=location.hash.slice(1);if(R.indexOf(h)<0)h="beranda";[].forEach.call(bn.querySelectorAll("a"),function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});mo.classList.toggle("on",M.indexOf(h)<0);sh.classList.remove("on")}
act();addEventListener("hashchange",act);
mo.onclick=function(){sh.classList.toggle("on")};
sh.onclick=function(e){if(e.target===sh||e.target.closest("a"))sh.classList.remove("on")};
d.getElementById("th2").onclick=function(){d.getElementById("th").click();sh.classList.remove("on")};
d.querySelectorAll(".pj,.sc,.pk").forEach(function(c){c.classList.add("t3d");c.addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform="perspective(900px) rotateX("+(.5-y)*12+"deg) rotateY("+(x-.5)*14+"deg) translateY(-6px)";c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%")});c.addEventListener("pointerleave",function(){c.style.transform=""})});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var b=e.target,m=b.textContent.match(/(\d+)(.*)/);if(m){var T=+m[1],s=m[2],t0=performance.now();(function f(n){var k=Math.min(1,(n-t0)/1400);b.textContent=Math.round(T*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)}co.unobserve(b)}})},{threshold:.6});
d.querySelectorAll(".stat b").forEach(function(b){co.observe(b)});
})();
(function(){
var d=document,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var lw=d.getElementById("ldw");lw.innerHTML=lw.textContent.split("").map(function(c,i){return "<span style=\"animation-delay:"+(.4+i*.06)+"s\">"+(c===" "?"&nbsp;":c)+"</span>"}).join("");
d.querySelectorAll(".pj,.pk,.sc,.hbc,.stat,.ct,.term,.steps").forEach(function(e){e.classList.add("gb")});
d.querySelectorAll(".btn").forEach(function(b){b.addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var r=b.getBoundingClientRect();b.style.translate=(e.clientX-r.left-r.width/2)*.25+"px "+(e.clientY-r.top-r.height/2)*.35+"px"});b.addEventListener("pointerleave",function(){b.style.translate=""})});
if(matchMedia("(pointer:fine)").matches&&!rm){var cu=d.createElement("div");cu.id="cu";d.body.appendChild(cu);var cx=0,cy=0,tx=0,ty=0;addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY});(function a(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cu.style.transform="translate("+cx+"px,"+cy+"px)";requestAnimationFrame(a)})();d.addEventListener("pointerover",function(e){cu.classList.toggle("hv",!!e.target.closest("a,button,summary,input,textarea,.pj img"))})}
var cp=d.getElementById("cp"),ci=d.getElementById("cpi"),cl=d.getElementById("cpl"),W="https://wa.me/"+["62","85196","990449"].join("");
var IT=[["Beranda","#beranda","Halaman"],["Tentang saya","#tentang","Halaman"],["Skill dan teknologi 3D","#skill","Halaman"],["Proyek","#proyek","Halaman"],["Layanan dan cara kerja","#layanan","Halaman"],["Paket layanan","#paket","Halaman"],["FAQ","#faq","Halaman"],["Kontak","#kontak","Halaman"],["Chat WhatsApp",W,"Aksi"],["Kirim email","mailto:ciomr3772@gmail.com","Aksi"],["Ganti tema","th","Aksi"]],sel=0,cur=[];
function run(x){cp.classList.remove("on");if(x[1]==="th")d.getElementById("th").click();else if(x[1].indexOf("#")===0)location.hash=x[1];else window.open(x[1],"_blank")}
function rl(){var q=ci.value.toLowerCase();cur=IT.filter(function(x){return x[0].toLowerCase().indexOf(q)>-1});sel=0;cl.innerHTML="";cur.forEach(function(x,i){var b=d.createElement("button");b.className=i?"":"sel";b.innerHTML=x[0]+"<span>"+x[2]+"</span>";b.onclick=function(){run(x)};cl.appendChild(b)})}
function op(){cp.classList.add("on");ci.value="";rl();setTimeout(function(){ci.focus()},30)}
d.getElementById("ck").onclick=op;ci.oninput=rl;cp.onclick=function(e){if(e.target===cp)cp.classList.remove("on")};
addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();op()}else if(e.key==="Escape"){cp.classList.remove("on")}else if(cp.classList.contains("on")&&cur.length){var n=cur.length;if(e.key==="ArrowDown"){sel=(sel+1)%n;e.preventDefault()}else if(e.key==="ArrowUp"){sel=(sel-1+n)%n;e.preventDefault()}else if(e.key==="Enter"){run(cur[sel]);return}[].forEach.call(cl.children,function(b,i){b.classList.toggle("sel",i===sel)})}});
try{if(window.THREE&&!rm){
var cv=d.getElementById("t3"),R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true}),S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100),G=new THREE.Group(),mx=0,my=0,o=0,tg=1,mob=innerWidth<900;
R.setPixelRatio(Math.min(devicePixelRatio,2));C.position.z=9;S.add(G);
var K=new THREE.Mesh(new THREE.TorusKnotGeometry(2,.5,mob?90:160,mob?12:22),new THREE.MeshBasicMaterial({color:0x8b7bff,wireframe:true,transparent:true,opacity:.32}));
var I=new THREE.Mesh(new THREE.IcosahedronGeometry(1.1,1),new THREE.MeshBasicMaterial({color:0xff9bd6,wireframe:true,transparent:true,opacity:.55}));
var T=new THREE.Mesh(new THREE.TorusGeometry(3.4,.02,8,120),new THREE.MeshBasicMaterial({color:0x3b6cff,transparent:true,opacity:.6}));T.rotation.x=1.2;
G.add(K,I,T);
var N=mob?250:600,ps=new Float32Array(N*3);for(var i=0;i<N*3;i++)ps[i]=(Math.random()-.5)*44;
var gp=new THREE.BufferGeometry();gp.setAttribute("position",new THREE.BufferAttribute(ps,3));
var P2=new THREE.Points(gp,new THREE.PointsMaterial({color:0xb9a9ff,size:.06,transparent:true,opacity:.8}));S.add(P2);
function rz(){var w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();mob=w<900;G.position.x=mob?0:3.6;G.scale.setScalar(mob?.65:1)}rz();addEventListener("resize",rz);
addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function ho(){tg=(location.hash.slice(1)||"beranda")==="beranda"?1:.35}ho();addEventListener("hashchange",ho);
(function a(t){var s=scrollY*.002;K.rotation.x=t*.00015+s;K.rotation.y=t*.0002;I.rotation.x=-t*.0004;I.rotation.y=t*.0003;T.rotation.z=t*.0003;P2.rotation.y=t*.00002+mx*.2;G.rotation.y+=(mx*.8-G.rotation.y)*.05;G.rotation.x+=(my*.5-G.rotation.x)*.05;C.position.z=9+scrollY*.002;o+=(tg-o)*.04;cv.style.opacity=o;R.render(S,C);requestAnimationFrame(a)})(0);
}}catch(e){}
})();
