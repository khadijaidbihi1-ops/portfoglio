const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',nav.classList.contains('open'));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMessage').textContent='Form demo: connect this form to Formspree, EmailJS or your backend.';form.reset();});}
