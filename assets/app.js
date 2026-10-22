'use strict';
const D=window.RESEARCH;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=u=>{try{const v=new URL(u,location.href);return ['https:','http:','mailto:'].includes(v.protocol)?esc(v.href):'#';}catch{return '#';}};
function notify(text){const el=$('#toast');el.textContent=text;el.style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.style.display='none',3500);}
function citeButton(ref){return `<button type="button" class="cite" data-cite="${esc(ref.id)}">Copy BibTeX</button>`;}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-cite]');if(!b)return;const r=D.references.find(r=>r.id===b.dataset.cite);if(!r)return;try{await navigator.clipboard.writeText(r.bib);notify('BibTeX copied');}catch{const box=document.createElement('textarea');box.value=r.bib;box.setAttribute('aria-label','BibTeX citation — select and copy');b.after(box);box.focus();box.select();notify('Select and copy the citation below the button.');}});
function entry(item){return `<article class="entry"><span class="tag">${esc(item.status||item.type||'Research')}</span><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p>${item.date?`<p class="muted">${esc(item.date)}${item.location?' · '+esc(item.location):''}</p>`:''}<div class="entry-links">${(item.links||[]).map(l=>`<a href="${safe(l.url)}">${esc(l.label)} ↗</a>`).join('')}${(item.refs||[]).map(id=>{const r=D.references.find(r=>r.id===id);return r?`<a href="#ref-${esc(id)}">${esc(r.authors)}, ${r.year}</a>`:'';}).join('')}</div></article>`;}
function fill(selector,items,message){const el=$(selector);if(el)el.innerHTML=items.length?items.map(entry).join(''):`<div class="empty"><p>${message}</p></div>`;}
fill('#findings',D.findings,'Research findings will appear here, with a short takeaway, supporting evidence, and links to papers or code.');
fill('#projects',D.projects,'Project updates will appear here: the question, current approach, and next step.');
fill('#venue-list',D.venues,'Conference, workshop, and talk participation will appear here with dates and contributions.');
document.querySelectorAll('.brand').forEach(el=>el.innerHTML=`${esc(D.name)}<span> / research</span>`);
if($('#reference-list'))$('#reference-list').innerHTML=D.references.map(r=>`<article class="reference" id="ref-${esc(r.id)}"><div><a href="${safe(r.url)}">${esc(r.title)} ↗</a><p>${esc(r.authors)} · ${esc(r.venue)} · ${r.year}</p></div>${citeButton(r)}</article>`).join('');
if($('#contact-links')){const links=[['Email',D.email?'mailto:'+D.email:''],['GitHub',D.github],['Google Scholar',D.scholar]].filter(x=>x[1]);if(links.length)$('#contact-links').innerHTML=links.map(([l,u])=>`<a href="${safe(u)}">${l} ↗</a>`).join(' · ');}
if($('#terms')){
 const params=new URLSearchParams(location.search);let domain=['Unlearning','Chaos'].includes(params.get('domain'))?params.get('domain'):'All';
 const categories=[...new Set(D.terms.map(t=>t.category))].sort();$('#category').innerHTML+=categories.map(c=>`<option>${esc(c)}</option>`).join('');
 const search=$('#search'),category=$('#category');
 search.value=params.get('q')||'';if(categories.includes(params.get('category')))category.value=params.get('category');
 function render(){
  const query=search.value.trim().toLowerCase();const words=query.split(/\s+/).filter(Boolean);
  const terms=D.terms.filter(t=>(domain==='All'||t.domain===domain)&&(category.value==='All'||t.category===category.value)&&words.every(w=>[t.title,t.definition,t.aliases,t.category,t.domain].join(' ').toLowerCase().includes(w))).sort((a,b)=>a.title.localeCompare(b.title));
  document.querySelectorAll('[data-domain]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.domain===domain)));
  $('#result-count').textContent=`${terms.length} of ${D.terms.length} concepts`;
  $('#terms').innerHTML=terms.length?terms.map(t=>`<article class="term" id="${esc(t.id)}"><div class="term-meta">${esc(t.domain.toUpperCase())} / ${esc(t.category.toUpperCase())}</div><h2>${esc(t.title)}<a class="permalink" href="#${esc(t.id)}" aria-label="Link to ${esc(t.title)}">#</a></h2><p>${esc(t.definition)}</p>${t.aliases?`<p class="small muted">Also indexed as: ${esc(t.aliases)}</p>`:''}<div class="term-links">${t.related.map(id=>{const r=D.terms.find(r=>r.id===id);return r?`<a href="#${esc(id)}" data-related="${esc(id)}">${esc(r.title)} ↗</a>`:'';}).join('')}</div><p class="sources">Sources: ${t.refs.map(id=>{const r=D.references.find(r=>r.id===id);return `<a href="${safe(r.url)}">${esc(r.authors)}, ${r.year}</a>`;}).join(' · ')}</p><div class="entry-links">${t.refs.map(id=>citeButton(D.references.find(r=>r.id===id))).join('')}</div></article>`).join(''):'<div class="empty">No matching concepts. Try a broader search or reset the filters.</div>';
  const next=new URL(location.href);next.search='';if(domain!=='All')next.searchParams.set('domain',domain);if(query)next.searchParams.set('q',search.value.trim());if(category.value!=='All')next.searchParams.set('category',category.value);history.replaceState(null,'',next);
 }
 document.querySelectorAll('[data-domain]').forEach(b=>b.addEventListener('click',()=>{domain=b.dataset.domain;render();}));
 search.addEventListener('input',render);category.addEventListener('change',render);
 function reset(){domain='All';search.value='';category.value='All';render();}
 $('#reset').addEventListener('click',()=>{reset();search.focus();});
 document.addEventListener('click',e=>{const a=e.target.closest('[data-related]');if(!a)return;e.preventDefault();reset();location.hash=a.dataset.related;document.getElementById(a.dataset.related)?.scrollIntoView({block:'start'});});
 render();if(location.hash){const target=D.terms.find(t=>'#'+t.id===location.hash);if(target){reset();requestAnimationFrame(()=>document.getElementById(target.id)?.scrollIntoView({block:'start'}));}}
 window.addEventListener('popstate',()=>location.reload());
}
if($('#lorenz')){
 const canvas=$('#lorenz'),ctx=canvas.getContext('2d'),button=$('#motion');const media=matchMedia('(prefers-reduced-motion: reduce)');let paused=media.matches,angle=.35,raf=0;
 const points=[];let x=.1,y=0,z=0;for(let i=0;i<7500;i++){const dt=.005,dx=10*(y-x),dy=x*(28-z)-y,dz=x*y-(8/3)*z;x+=dx*dt;y+=dy*dt;z+=dz*dt;if(i>700)points.push([x,y,z]);}
 function draw(){const box=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=box.width*dpr;canvas.height=box.height*dpr;ctx.scale(dpr,dpr);const w=box.width,h=box.height,s=Math.min(w/65,h/57);ctx.clearRect(0,0,w,h);for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i];const project=p=>[w/2+(p[0]*Math.cos(angle)+p[1]*Math.sin(angle))*s,h*.93-p[2]*s];const A=project(a),B=project(b);ctx.beginPath();ctx.moveTo(...A);ctx.lineTo(...B);ctx.strokeStyle=i%500<250?'rgba(52,88,55,.34)':'rgba(109,139,64,.42)';ctx.lineWidth=.65;ctx.stroke();}button.textContent=paused?'Play animation':'Pause animation';if(!paused&&!document.hidden){angle+=.002;raf=requestAnimationFrame(draw);}}
 button.addEventListener('click',()=>{paused=!paused;cancelAnimationFrame(raf);draw();});window.addEventListener('resize',()=>{cancelAnimationFrame(raf);draw();});document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden)draw();});media.addEventListener('change',e=>{paused=e.matches;cancelAnimationFrame(raf);draw();});draw();
}
