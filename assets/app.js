'use strict';
const D = window.RESEARCH;
const $ = selector => document.querySelector(selector);
// Read resolved semantic tokens from CSS: no duplicate visualization palette.
const themeColor = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const chartColors = { chaos: themeColor('--color-chaos'), unlearning: themeColor('--color-unlearning'), accent: themeColor('--color-accent') };
const browserTheme = $('meta[name="theme-color"]');
if (browserTheme) browserTheme.content = themeColor('--color-background');
const favicon = $('link[rel="icon"]');
if (favicon) {
 const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="' + themeColor('--color-primary') + '"/><text x="8" y="29" font-size="28" fill="' + themeColor('--color-highlight') + '" font-family="serif">m</text></svg>';
 favicon.href = 'data:image/svg+xml,' + encodeURIComponent(icon);
}
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe = url => { try { const parsed = new URL(url, location.href); return ['http:', 'https:', 'mailto:'].includes(parsed.protocol) ? esc(parsed.href) : '#'; } catch { return '#'; } };
const domainLabel = domain => domain === 'Unlearning' ? 'Machine unlearning' : 'Chaos & dynamics';
function notify(message) {
 const toast = $('#toast'); if (!toast) return;
 toast.textContent = message; toast.hidden = false;
 clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => toast.hidden = true, 3500);
}
const citationRecords = [...D.references, ...(D.publications || [])];
function copyButton(id) { return '<button type="button" class="cite" data-cite="' + esc(id) + '">Copy BibTeX</button>'; }
document.addEventListener('click', async event => {
 const button = event.target.closest('[data-cite]'); if (!button) return;
 const record = citationRecords.find(r => r.id === button.dataset.cite); if (!record) return;
 try { await navigator.clipboard.writeText(record.bib); notify('BibTeX copied'); }
 catch {
  let box = button.parentElement.querySelector('.copy-fallback');
  if (!box) { box = document.createElement('textarea'); box.className = 'copy-fallback'; box.setAttribute('aria-label', 'BibTeX citation — select and copy'); button.after(box); }
  box.value = record.bib; box.focus(); box.select(); notify('Select and copy the citation below.');
 }
});
function bibDetails(record) { return '<details><summary>BibTeX</summary><pre><code>' + esc(record.bib) + '</code></pre>' + copyButton(record.id) + '</details>'; }
function authors(text) { return esc(text).replace('Matteo Berta', '<strong>Matteo Berta</strong>'); }
if ($('#publication-list')) {
 $('#publication-list').innerHTML = [...D.publications].sort((a,b) => b.year-a.year).map(p =>
  '<article class="publication' + (p.featured ? ' featured-citation' : '') + '" id="paper-' + esc(p.id) + '"><div class="pub-year">' + p.year +
  '</div><div><h3><a href="' + (p.featured ? '#featured-title' : safe(p.url)) + '">' + (p.featured ? 'EMNLP Industry Track — featured above ↗' : esc(p.title)) + '</a></h3>' +
  (p.featured ? '' : '<p class="pub-authors">' + authors(p.authors) + '</p>') +
  '<p class="pub-meta">' + esc(p.venue) + ' / ' + esc(p.track) + '</p><div class="pub-actions"><a href="' + safe(p.url) + '">' + esc(p.linkLabel) + '</a>' + bibDetails(p) + '</div></div></article>'
 ).join('');
 const featured = D.publications.find(p => p.featured);
 if (featured) {
  $('#featured-title').textContent = featured.title;
  $('.featured-authors').innerHTML = authors(featured.authors);
  $('.featured-copy .btn').href = featured.url;
 }
}
if ($('#references-list')) {
 $('#references-list').innerHTML = D.references.map(r => '<article class="reference" id="ref-' + esc(r.id) + '"><div><h3><a href="' + safe(r.url) + '">' + esc(r.title) + ' ↗</a></h3><p>' + esc(r.authors) + ' · ' + esc(r.venue) + ' · ' + r.year + '</p>' + bibDetails(r) + '</div></article>').join('');
}
if ($('#work') && (D.findings.length || D.projects.length)) {
 $('#work').hidden = false;
 for (const [key, title] of [['findings','Selected findings'],['projects','Currently exploring']]) {
  if (D[key].length) $('#' + key).innerHTML = '<h3>' + title + '</h3>' + D[key].map(item => '<article><h3>' + esc(item.title) + '</h3><p>' + esc(item.summary) + '</p>' + (item.links || []).map(link => '<a href="' + safe(link.url) + '">' + esc(link.label) + '</a>').join(' · ') + '</article>').join('');
 }
}
// The conference images and captions remain real content, not placeholders.
document.querySelectorAll('.photo-journal .conference').forEach((figure, index) => {
 const venue = D.venues[index]; if (!venue) return;
 figure.querySelector('img').src = venue.image;
 figure.querySelector('.photo-meta').textContent = venue.date + ' / ' + venue.location.toUpperCase();
});
document.querySelectorAll('.fieldnote-stats strong').forEach(el => el.textContent = D.terms.length);
const invitation = $('.fieldnotes-copy .btn');
if (invitation) invitation.innerHTML = 'Explore all ' + D.terms.length + ' concepts <span aria-hidden="true">↗</span>';

// Organic constellations, with curved edges attached to slowly drifting nodes.
const graphStates = new WeakMap();
function renderGraph(host) {
 const previous = graphStates.get(host);
 if (previous) previous.dispose();
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 const state = { paused: previous ? previous.paused : reduced.matches, dispose() {} };
 graphStates.set(host, state);
 const narrow = innerWidth < 600, width = narrow ? 380 : 800;
 const verticalScale = narrow ? 1.1 : 1.4, height = (narrow ? 940 : 580)*verticalScale;
 const renderedWidth = host.getBoundingClientRect().width || width;
 // SVG text scales with its viewBox: compensate to keep labels at 13 screen pixels.
 const labelPixels = parseFloat(getComputedStyle(document.documentElement).fontSize)*.8125 || 13;
 const labelSize = Math.max(14, labelPixels*width/renderedWidth);
 host.style.setProperty('--graph-label-size',labelSize+'px');
 // Deliberately asymmetric clusters leave space for every multiline label.
 const layouts = narrow ? {
  Unlearning: [[90,55],[265,95],[165,185],[78,275],[275,295],[180,380]],
  Chaos: [[80,475],[270,465],[175,555],[285,620],[65,640],[175,710],[285,770],[75,805],[170,860],[285,875]]
 } : {
  Unlearning: [[85,90],[270,65],[185,220],[80,350],[290,340],[205,475]],
  Chaos: [[455,65],[650,70],[555,165],[720,205],[440,260],[590,295],[715,370],[460,400],[580,480],[720,495]]
 };
 const positions = new Map();
 for (const domain of ['Unlearning', 'Chaos']) {
  D.terms.filter(t => t.domain === domain).forEach((term,index) => {
   const point = layouts[domain][index] || [width/2, height/verticalScale/2];
   const base = [point[0],point[1]*verticalScale];
   positions.set(term.id, {base, x:base[0], y:base[1], phase:index*1.83+(domain==='Chaos'?2:0)});
  });
 }
 const seen = new Set(), edges = [];
 for (const term of D.terms) for (const id of term.related) {
  if (!positions.has(id)) continue;
  const key = [term.id,id].sort().join('|');
  if (seen.has(key)) continue;
  seen.add(key); edges.push({source:term.id,target:id,bend:(edges.length%2 ? -1 : 1)*(18+edges.length%4*8)});
 }
 const edgeMarkup = edges.map(edge => '<path class="graph-edge ' + (D.terms.find(t=>t.id===edge.source).domain==='Chaos'?'chaos':'') + '" data-source="' + esc(edge.source) + '" data-target="' + esc(edge.target) + '" fill="none"/>').join('');
 const nodes = D.terms.map(term => {
  const lines = []; let line = '';
  for (const word of term.title.split(' ')) { if ((line + ' ' + word).trim().length > 16 && line) { lines.push(line); line = word; } else line = (line + ' ' + word).trim(); } lines.push(line);
  const href = $('#concept-list') ? '#' + term.id : 'taxonomy.html#' + term.id;
  return '<a class="graph-node ' + (term.domain === 'Chaos' ? 'chaos' : '') + '" data-node="' + esc(term.id) + '" href="' + href + '" aria-label="Read ' + esc(term.title) + '"><title>' + esc(term.title) + '</title><circle class="node-halo" r="15"/><circle r="6"/><text text-anchor="middle" y="' + (labelSize*1.5).toFixed(2) + '">' + lines.map((text,i) => '<tspan x="0" dy="' + (i ? labelSize*1.2 : 0) + '">' + esc(text) + '</tspan>').join('') + '</text></a>';
 }).join('');
 host.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" role="group" aria-label="Related concepts, grouped by research domain">' + edgeMarkup + nodes + '</svg><div class="graph-motion-controls"><span>Hover or focus to explore connections</span><button class="motion-toggle graph-motion" type="button">Pause map</button></div>';
 const nodeElements = [...host.querySelectorAll('[data-node]')];
 const paths = [...host.querySelectorAll('.graph-edge')];
 const toggle = host.querySelector('.graph-motion');
 let frame = 0, last = 0, elapsed = 0, pointer = false, focus = false, visible = true;
 const listeners = [];
 function listen(target, type, fn) { target.addEventListener(type,fn); listeners.push(()=>target.removeEventListener(type,fn)); }
 function paint() {
  for (const point of positions.values()) {
   // Small, independent elliptical drifts keep labels stable enough to read.
   point.x = point.base[0] + (reduced.matches && state.paused ? 0 : Math.sin(elapsed*.26+point.phase)*6);
   point.y = point.base[1] + (reduced.matches && state.paused ? 0 : Math.cos(elapsed*.19+point.phase)*5);
  }
  nodeElements.forEach(node => {
   const p = positions.get(node.dataset.node);
   node.setAttribute('transform','translate('+p.x.toFixed(2)+' '+p.y.toFixed(2)+')');
  });
  paths.forEach((path,index) => {
   const edge=edges[index],a=positions.get(edge.source),b=positions.get(edge.target);
   const dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy)||1;
   const cx=(a.x+b.x)/2-dy/length*edge.bend,cy=(a.y+b.y)/2+dx/length*edge.bend;
   path.setAttribute('d','M '+a.x.toFixed(2)+' '+a.y.toFixed(2)+' Q '+cx.toFixed(2)+' '+cy.toFixed(2)+' '+b.x.toFixed(2)+' '+b.y.toFixed(2));
  });
 }
 function loop(time) {
  if (time-last>=40) { elapsed+=Math.min(time-last,100)/1000; last=time; paint(); }
  frame=requestAnimationFrame(loop);
 }
 function sync() {
  cancelAnimationFrame(frame);
  toggle.textContent=state.paused?'Play map':'Pause map';
  toggle.setAttribute('aria-label',state.paused?'Play concept map movement':'Pause concept map movement');
  toggle.setAttribute('aria-pressed',String(state.paused));
  if (!state.paused && !pointer && !focus && visible && !document.hidden) { last=performance.now(); frame=requestAnimationFrame(loop); }
 }
 function select(id) {
  host.classList.toggle('has-selection',Boolean(id));
  const neighbors=new Set([id]);
  edges.forEach(edge => { if(edge.source===id)neighbors.add(edge.target); if(edge.target===id)neighbors.add(edge.source); });
  nodeElements.forEach(node => node.classList.toggle('is-connected',neighbors.has(node.dataset.node)));
  paths.forEach((path,index) => path.classList.toggle('is-connected',edges[index].source===id||edges[index].target===id));
 }
 listen(toggle,'click',()=>{ state.paused=!state.paused; sync(); });
 listen(host,'pointerenter',()=>{pointer=true;sync();});
 listen(host,'pointerleave',()=>{pointer=false;if(!focus)select(null);sync();});
 listen(host,'focusin',()=>{focus=true;sync();});
 listen(host,'focusout',event=>{if(!host.contains(event.relatedTarget)){focus=false;select(null);sync();}});
 nodeElements.forEach(node => {
  listen(node,'pointerenter',()=>select(node.dataset.node));
  listen(node,'pointerleave',()=>{const active=nodeElements.find(el=>el===document.activeElement);select(active?active.dataset.node:null);});
  listen(node,'focus',()=>select(node.dataset.node));
 });
 listen(document,'visibilitychange',sync);
 listen(reduced,'change',()=>{state.paused=reduced.matches;paint();sync();});
 const observer = typeof IntersectionObserver!=='undefined' ? new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}) : null;
 if(observer)observer.observe(host);
 let resizeFrame=0;
 const sizeObserver = typeof ResizeObserver!=='undefined' ? new ResizeObserver(entries=>{
  if(Math.abs(entries[0].contentRect.width-renderedWidth)>2) {
   cancelAnimationFrame(resizeFrame);
   resizeFrame=requestAnimationFrame(()=>renderGraph(host));
  }
 }) : null;
 if(sizeObserver)sizeObserver.observe(host);
 state.dispose=()=>{cancelAnimationFrame(frame);cancelAnimationFrame(resizeFrame);listeners.forEach(remove=>remove());if(observer)observer.disconnect();if(sizeObserver)sizeObserver.disconnect();};
 paint(); sync();
}
document.querySelectorAll('.concept-graph').forEach(renderGraph);
document.querySelectorAll('[data-graph-highlight]').forEach(button => button.addEventListener('click', () => {
 const both = button.getAttribute('aria-pressed') !== 'true';
 button.setAttribute('aria-pressed', String(both));
 button.textContent = both ? 'Emphasize machine unlearning' : 'Highlight both domains';
 button.closest('.fieldnotes-graph, .taxonomy-graph-holder').querySelector('.concept-graph').classList.toggle('both', both);
}));
let graphNarrow = innerWidth < 600;
window.addEventListener('resize', () => { if ((innerWidth < 600) !== graphNarrow) { graphNarrow = innerWidth < 600; document.querySelectorAll('.concept-graph').forEach(renderGraph); } });

if ($('#concept-list')) {
 const search = $('#concept-search'), domain = $('#domain-filter'), category = $('#category-filter');
 const categories = [...new Set(D.terms.map(t => t.category))].sort();
 category.innerHTML += categories.map(c => '<option>' + esc(c) + '</option>').join('');
 function readParams() {
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  domain.value = ['Chaos','Unlearning'].includes(params.get('domain')) ? params.get('domain') : '';
  category.value = categories.includes(params.get('category')) ? params.get('category') : '';
 }
 function render(updateUrl = true) {
  const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const terms = D.terms.filter(t => (!domain.value || t.domain === domain.value) && (!category.value || t.category === category.value) && words.every(w => [t.title,t.definition,t.aliases,t.category,t.domain,domainLabel(t.domain)].join(' ').toLowerCase().includes(w))).sort((a,b) => a.title.localeCompare(b.title));
  $('#results-count').textContent = terms.length + ' of ' + D.terms.length + ' concepts';
  $('#no-results').hidden = terms.length !== 0;
  $('#concept-list').innerHTML = terms.map(t => '<article class="term" data-domain="' + esc(t.domain) + '" id="' + esc(t.id) + '"><div class="term-meta">' + esc(domainLabel(t.domain)) + '<br>' + esc(t.category) + '</div><div><h3>' + esc(t.title) + '<a class="permalink" href="#' + esc(t.id) + '" aria-label="Link to ' + esc(t.title) + '">#</a></h3><p>' + esc(t.definition) + '</p>' + (t.aliases ? '<p class="aliases">Also indexed as: ' + esc(t.aliases) + '</p>' : '') + '<div class="term-links">' + t.related.map(id => { const related = D.terms.find(r => r.id === id); return related ? '<a href="#' + esc(id) + '">' + esc(related.title) + ' ↗</a>' : ''; }).join('') + '</div><p class="sources">Sources: ' + t.refs.map(id => { const r = D.references.find(r => r.id === id); return '<a href="#ref-' + esc(id) + '">' + esc(r.authors) + ', ' + r.year + '</a> ' + copyButton(id); }).join(' · ') + '</p></div></article>').join('');
  if (updateUrl) {
   const url = new URL(location.href); url.search = '';
   if (search.value.trim()) url.searchParams.set('q',search.value.trim());
   if (domain.value) url.searchParams.set('domain',domain.value);
   if (category.value) url.searchParams.set('category',category.value);
   history.replaceState(null,'',url);
  }
 }
 function reset() { search.value = ''; domain.value = ''; category.value = ''; render(); }
 function revealHash() {
  const id = location.hash.slice(1);
  if (!D.terms.some(t => t.id === id)) return;
  if (!document.getElementById(id)) reset();
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({block:'start'}));
 }
 $('#filter-form').addEventListener('submit', event => event.preventDefault());
 search.addEventListener('input', () => render());
 domain.addEventListener('change', () => render());
 category.addEventListener('change', () => render());
 $('#clear-filters').addEventListener('click', () => { reset(); search.focus(); });
 // Reveal filtered targets before the browser follows graph/related links.
 document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]'); if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (D.terms.some(t => t.id === id) && !document.getElementById(id)) reset();
 });
 window.addEventListener('hashchange', revealHash);
 window.addEventListener('popstate', () => { readParams(); render(false); revealHash(); });
 readParams(); render(false); revealHash();
}

// Shared animation lifecycle: respect reduced motion and stop while hidden.
function animatedCanvas(canvas, button, draw) {
 if (!canvas || !button) return;
 const context = canvas.getContext('2d'); if (!context) { button.hidden = true; return; }
 const media = matchMedia('(prefers-reduced-motion: reduce)');
 let paused = media.matches, frame = 0, last = 0, phase = 0;
 function paint() {
  const box = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
  const width = Math.max(1,box.width), height = Math.max(1,box.height);
  if (canvas.width !== Math.round(width*dpr) || canvas.height !== Math.round(height*dpr)) { canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr); }
  context.setTransform(dpr,0,0,dpr,0,0); context.clearRect(0,0,width,height);
  draw(context,width,height,phase,paused);
 }
 function loop(time) {
  if (paused || document.hidden) return;
  if (time-last >= 40) { phase += Math.min(time-last,100)/1000; last=time; paint(); }
  frame = requestAnimationFrame(loop);
 }
 function sync() {
  cancelAnimationFrame(frame); last=performance.now();
  button.textContent = paused ? 'Play animation' : 'Pause animation';
  button.setAttribute('aria-label', (paused ? 'Play ' : 'Pause ') + (canvas.id === 'lorenz' ? 'Lorenz' : 'bifurcation highlight') + ' animation');
  button.setAttribute('aria-pressed',String(paused)); paint();
  if (!paused && !document.hidden) frame=requestAnimationFrame(loop);
 }
 button.addEventListener('click',() => { paused=!paused; sync(); });
 media.addEventListener('change',event => { paused=event.matches; sync(); });
 document.addEventListener('visibilitychange',sync);
 let resizeFrame; window.addEventListener('resize',() => { cancelAnimationFrame(resizeFrame); resizeFrame=requestAnimationFrame(paint); });
 sync();
 return { restart() { phase=0; sync(); } };
}
if ($('#lorenz')) {
 // Two RK4 trajectories differ only by 1e-5 in their initial x coordinate.
 const f = ([x,y,z]) => [10*(y-x),x*(28-z)-y,x*y-(8/3)*z];
 const step = (p,k,s) => p.map((v,i) => v+k[i]*s);
 const dt=.008;
 function advance(p) {
  const a=f(p),b=f(step(p,a,dt/2)),c=f(step(p,b,dt/2)),d=f(step(p,c,dt));
  return p.map((v,j) => v+dt*(a[j]+2*b[j]+2*c[j]+d[j])/6);
 }
 let seed=[.1,0,0];
 for(let i=0;i<1500;i++) seed=advance(seed);
 const original=[seed],nearby=[[seed[0]+1e-5,seed[1],seed[2]]];
 for(let i=1;i<18000;i++) {
  original.push(advance(original[i-1]));
  nearby.push(advance(nearby[i-1]));
 }
 const colors=[themeColor('--color-text'),themeColor('--color-accent')];
 let showStaticOverview=true;
 const animation=animatedCanvas($('#lorenz'),$('#lorenz-toggle'),(ctx,w,h,time,paused) => {
  const scale=Math.min(w/66,h/54),angle=.35;
  const project=p => [w/2+(p[0]*Math.cos(angle)+p[1]*Math.sin(angle))*scale,h*.94-p[2]*scale];
  // Sample by elapsed active time, so rendering speed does not alter the ODE.
  const end=paused && time===0 && showStaticOverview ? 4500 : 220+Math.floor(time*2.4/dt)%(original.length-221);
  const start=Math.max(0,end-1000),length=end-start;
  for(let track=0;track<2;track++) {
   const points=track ? nearby : original;
   ctx.strokeStyle=colors[track];ctx.lineWidth=track ? 1.6 : 1.25;
   ctx.setLineDash(track ? [4,3] : []);
   // Short sections fade from old ink to a clearly visible moving tip.
   for(let band=0;band<12;band++) {
    const from=start+Math.floor(length*band/12),to=start+Math.floor(length*(band+1)/12);
    if(to<=from) continue;
    ctx.globalAlpha=.12+.83*(band+1)/12;ctx.beginPath();
    ctx.moveTo(...project(points[from]));
    for(let i=from+1;i<=to;i++) ctx.lineTo(...project(points[i]));
    ctx.stroke();
   }
   ctx.setLineDash([]);ctx.globalAlpha=1;
   const [x,y]=project(points[end]);
   ctx.fillStyle=colors[track];ctx.beginPath();
   if(track) {ctx.moveTo(x,y-4);ctx.lineTo(x+4,y);ctx.lineTo(x,y+4);ctx.lineTo(x-4,y);ctx.closePath();}
   else ctx.arc(x,y,3,0,Math.PI*2);
   ctx.fill();
  }
  ctx.setLineDash([]);ctx.globalAlpha=1;
 });
 $('#lorenz-restart')?.addEventListener('click',()=>{showStaticOverview=false;animation?.restart();});
}
if ($('#logistic')) {
 const samples=[];
 for(let col=0;col<1000;col++) {
  const r=2.8+1.2*col/999;let x=.413;
  for(let n=0;n<650;n++) x=r*x*(1-x);
  for(let n=0;n<80;n++) { x=r*x*(1-x);samples.push([col/999,x]); }
 }
 const cache=document.createElement('canvas'),plot=cache.getContext('2d');
 animatedCanvas($('#logistic'),$('#logistic-toggle'),(ctx,w,h,time,paused) => {
  if(cache.width!==Math.round(w) || cache.height!==Math.round(h)) {
   cache.width=Math.round(w); cache.height=Math.round(h); plot.fillStyle=chartColors.chaos;
   for(const [r,x] of samples) plot.fillRect(r*(w-1),(1-x)*(h-15)+5,.8,.8);
  }
  ctx.drawImage(cache,0,0,w,h);
  if(!paused) {
   const x=(time/24%1)*w;ctx.fillStyle=chartColors.accent;ctx.globalAlpha=.12;ctx.fillRect(x-8,0,16,h);ctx.globalAlpha=1;
  }
 });
}
