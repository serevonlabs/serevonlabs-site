const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function onScroll(){if(header) header.classList.toggle('scrolled',scrollY>30)}
onScroll();addEventListener('scroll',onScroll,{passive:true});
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
