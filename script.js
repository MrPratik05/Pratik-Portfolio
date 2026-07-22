const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

document.getElementById('year').textContent = new Date().getFullYear();

const stored = JSON.parse(localStorage.getItem('pratikPortfolioCMS') || '{}');
const data = { ...portfolioData, ...stored };

if (stored.profilePhoto) {
  const photo = $('#profilePhoto');
  photo.textContent = '';
  photo.style.backgroundImage = `url(${stored.profilePhoto})`;
}

const words = ['LLMs', 'RAG', 'LangGraph', 'MLOps', 'FastAPI'];
let wi = 0, ci = 0, deleting = false;
function typeLoop(){
  const word = words[wi];
  $('#typingText').textContent = word.slice(0, ci);
  if(!deleting && ci < word.length) ci++;
  else if(deleting && ci > 0) ci--;
  else { deleting = !deleting; if(!deleting) wi = (wi + 1) % words.length; }
  setTimeout(typeLoop, deleting ? 55 : 110);
}
typeLoop();

window.addEventListener('mousemove', e => {
  const glow = $('.cursor-glow');
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.bar span').forEach(bar => bar.style.width = bar.dataset.width + '%');
    }
  })
}, {threshold:.16});
$$('.reveal').forEach(el => io.observe(el));

function renderSkills() {
  $('#skillsGrid').innerHTML = data.skills.map(skill => `
    <article class="skill-card">
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    </article>
  `).join('');
}

let activeFilter = 'All';
function renderFilters(){
  const cats = ['All', ...new Set(data.projects.map(p => p.category))];
  $('#filters').innerHTML = cats.map(c => `<button class="filter-btn ${c===activeFilter?'active':''}" data-filter="${c}">${c}</button>`).join('');
  $$('.filter-btn').forEach(btn => btn.onclick = () => {activeFilter = btn.dataset.filter; renderFilters(); renderProjects();});
}
function renderProjects(){
  const projects = activeFilter === 'All' ? data.projects : data.projects.filter(p => p.category === activeFilter);
  $('#projectsGrid').innerHTML = projects.map((p,i) => `
    <article class="project-card">
      <div class="project-icon">${String(i+1).padStart(2,'0')}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="chips">${p.tech.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
     <div class="card-links">

  ${p.github && p.github !== '#'
    ? `
      <a
        class="project-btn"
        href="${p.github}"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    `
    : ''
  }

  ${p.demo && p.demo !== '#'
    ? `
      <a
        class="project-btn"
        href="${p.demo}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    `
    : ''
  }

</div>
    </article>
  `).join('');
}
function renderExperience(){
  $('#experienceList').innerHTML = data.experience.map(e => `
    <div class="experience-item">
      <div><p class="eyebrow">${e.date}</p><h3>${e.role}</h3><p>${e.company}</p></div>
      <ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');
}
function renderEducation(){
  $('#educationGrid').innerHTML = data.education.map(e => `
    <div class="edu-card"><p class="eyebrow">${e.date}</p><h3>${e.degree}</h3><p>${e.school}</p><p>${e.detail}</p></div>
  `).join('');
}
function renderCerts(){
  $('#certGrid').innerHTML = data.certifications.map(c => `<div class="cert-card"><p class="eyebrow">Credential</p><h3>${c}</h3><p>Verified certification / industry simulation.</p></div>`).join('');
}
renderSkills();renderFilters();renderProjects();renderExperience();renderEducation();renderCerts();
