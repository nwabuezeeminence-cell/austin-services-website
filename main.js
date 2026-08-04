const services = [
 {label:"Photocopy", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/></svg>`, page:"photocopy.html", price:"From ₦50/page"},
 {label:"Laminating", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/></svg>`, page:"laminating.html", price:"From ₦300"},
 {label:"Printing", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h4v-3h8v3h4c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5z"/></svg>`, page:"printing.html", price:"From ₦100/page"},
 {label:"Binding", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`, page:"binding.html", price:"From ₦500"},
 {label:"Computer Service", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4z"/></svg>`, page:"computer-service.html", price:"Call for quote"},
 {label:"Scanning", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L18 8l-8 8z"/></svg>`, page:"scanning.html", price:"From ₦100/page"},
 {label:"Passport Photos", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`, page:"passport-photos.html", price:"₦2,000 for 8pcs"},
 {label:"Graphic Design", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>`, page:"graphic-design.html", price:"From ₦5,000"},
 {label:"General Computer Services", icon:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z"/></svg>`, page:"computer-services.html", price:"Call for quote"}
];

function initHome(){
 const grid = document.getElementById('servicesGrid');
 if(!grid) return; 
 grid.innerHTML = '';
 services.forEach(s=>{
   const a = document.createElement('a'); // now clickable card
   a.className = 'card';
   a.href = s.page; 
   a.innerHTML = `
    <div class="icon-wrap">${s.icon}</div>
    <div class="label-wrap">
      <div class="label">${s.label}</div>
      <div class="price">${s.price}</div>
      <div style="color:#1e4a8a;font-weight:600;font-size:12px;margin-top:6px">Get Quote →</div>
    </div>
   `;
   grid.appendChild(a);
 });
}

function toggleNav(){
 const nav = document.getElementById('navLinks');
 if(nav) nav.classList.toggle('open');
}

window.addEventListener('load', () => {
 initHome();
 const hamburger = document.getElementById('hamburger');
 if(hamburger) hamburger.addEventListener('click', toggleNav);
});
