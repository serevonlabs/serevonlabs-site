const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
function setHeader(){header?.classList.toggle('scrolled',window.scrollY>24)}setHeader();window.addEventListener('scroll',setHeader,{passive:true});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
