// IMPORTANT: Replace 91XXXXXXXXXX with your WhatsApp number (digits only, including India country code 91).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const products = {
 windows:{name:"Aluminium Windows",img:"images/window.svg",desc:"Aluminium window options for homes, offices and commercial spaces. Ask about styles, sizes, finishes and availability."},
 doors:{name:"Aluminium Doors",img:"images/door.svg",desc:"Discuss aluminium door options for your home, shop or office. Contact us for product details and requirements."},
 sections:{name:"Aluminium Sections",img:"images/sections.svg",desc:"Ask about aluminium profiles and sections for your project. Share the profile, size or application you need."},
 partitions:{name:"Glass Partitions",img:"images/partition.svg",desc:"Glass partition options for office and interior spaces. Ask us about possible configurations and requirements."},
 custom:{name:"Custom Aluminium Work",img:"images/custom.svg",desc:"Tell us about your space, measurements and preferred design so we can discuss your project needs."},
 railings:{name:"Railings & Other Solutions",img:"images/railings.svg",desc:"Contact us to discuss railing and other aluminium solutions suitable for your project."},
 mesh:{name:"Mosquito Mesh Windows",img:"images/window.svg",desc:"Ask about window mesh options, sizing and availability."},
 office:{name:"Office Partitions",img:"images/partition.svg",desc:"Explore options for dividing office and commercial spaces."},
 frames:{name:"Aluminium Frames",img:"images/sections.svg",desc:"Ask about aluminium frames for your application and project measurements."},
 fittings:{name:"Accessories & Fittings",img:"images/sections.svg",desc:"Contact us with the accessory or fitting you are looking for."}
};
function waUrl(message){return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`}
document.querySelectorAll('.wa-link').forEach(a=>{a.href=waUrl('Namaste Shyam Aluminium, mujhe aapke products ke baare mein jankari chahiye.');a.target='_blank';a.rel='noopener noreferrer';if(WHATSAPP_NUMBER.includes('X'))a.addEventListener('click',e=>{e.preventDefault();alert('Publish karne se pehle script.js mein 91XXXXXXXXXX ko apne WhatsApp number se badlein.');});});
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());
const detail=document.querySelector('[data-product-detail]');if(detail){const key=new URLSearchParams(location.search).get('product')||'windows';const p=products[key]||products.windows;document.title=p.name+' | Shyam Aluminium';document.querySelector('#detail-title').textContent=p.name;document.querySelector('#detail-desc').textContent=p.desc;document.querySelector('#detail-img').src=p.img;document.querySelector('#detail-img').alt=p.name;const b=document.querySelector('#detail-wa');b.href=waUrl(`Namaste Shyam Aluminium, mujhe ${p.name} ke baare mein jankari chahiye. Kripya price, sizes aur availability batayein.`);b.target='_blank';b.rel='noopener noreferrer';if(WHATSAPP_NUMBER.includes('X'))b.addEventListener('click',e=>{e.preventDefault();alert('Publish karne se pehle script.js mein WhatsApp number badlein.');});}
