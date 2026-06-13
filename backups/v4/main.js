import './style.css'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <canvas id="siglCanvas" aria-hidden="true"></canvas>

    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <nav class="nav-links">
        <a href="#threats">Threats</a>
        <a href="#assurance">Assurance</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#proof">Proof</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="hero-v3">
        <div class="hero-v3-copy">
          <img class="hero-logo" src="${logo}" alt="SIGL logo" />
          <p class="eyebrow">Independent AI Assurance</p>
          <h1>Verify trust in AI systems before failure becomes public.</h1>
          <p>
            SIGL tests, governs, and proves AI security for organizations deploying
            AI in environments where risk, accountability, and evidence matter.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Request AI Assurance Assessment</a>
            <a class="btn secondary" href="#threats">Enter Command Center</a>
          </div>
        </div>

        <div class="holo-core">
          <div class="core-ring r1"></div>
          <div class="core-ring r2"></div>
          <div class="core-ring r3"></div>
          <div class="core-center">
            <strong>AI TRUST</strong>
            <span>VERIFYING</span>
          </div>
        </div>
      </section>

      <section id="threats" class="cinema-section">
        <div class="cinema-copy">
          <p class="eyebrow">Threat Simulation</p>
          <h2>AI systems introduce attack paths traditional security misses.</h2>
          <p>
            Prompt injection, agent tool abuse, data leakage, unsafe retrieval,
            and autonomous workflow misuse can expose the business before teams realize the risk exists.
          </p>
        </div>

        <div class="threat-simulator">
          <div class="sim-line active"><span>01</span><b>Prompt Injection</b><em>Detected</em></div>
          <div class="sim-line"><span>02</span><b>Agent Tool Abuse</b><em>Contained</em></div>
          <div class="sim-line"><span>03</span><b>Data Exposure</b><em>Mapped</em></div>
          <div class="sim-line"><span>04</span><b>RAG Failure Mode</b><em>Validated</em></div>
          <div class="sim-line"><span>05</span><b>Evidence Record</b><em>Generated</em></div>
        </div>
      </section>

      <section id="assurance" class="assurance-cinema">
        <div class="section-intro">
          <p class="eyebrow">The SIGL Assurance Loop</p>
          <h2>Discover. Attack. Control. Prove.</h2>
        </div>

        <div class="loop-grid">
          <article><span>01</span><strong>Discover</strong><p>Map AI systems, prompts, agents, APIs, data flows, tools, identities, and owners.</p></article>
          <article><span>02</span><strong>Attack</strong><p>Test realistic abuse cases across LLM apps, RAG pipelines, automation, and workflows.</p></article>
          <article><span>03</span><strong>Control</strong><p>Validate guardrails, logging, approvals, monitoring, escalation paths, and security boundaries.</p></article>
          <article><span>04</span><strong>Prove</strong><p>Deliver evidence leadership can use for customer reviews, audits, procurement, and risk decisions.</p></article>
        </div>
      </section>

      <section id="dashboard" class="dashboard-v3">
        <div class="dash-copy">
          <p class="eyebrow">Executive Trust Dashboard</p>
          <h2>Turn technical AI risk into board-ready clarity.</h2>
          <p>
            SIGL gives leaders visibility into what was tested, what failed,
            what improved, and what evidence exists to defend the decision.
          </p>
        </div>

        <div class="trust-panel">
          <div class="trust-score">
            <span>ASSURANCE STATUS</span>
            <strong>READY</strong>
          </div>
          <div class="trust-metric"><b>Risk Visibility</b><i style="--w: 91%"></i></div>
          <div class="trust-metric"><b>Evidence Coverage</b><i style="--w: 84%"></i></div>
          <div class="trust-metric"><b>Control Validation</b><i style="--w: 78%"></i></div>
          <div class="trust-metric"><b>Executive Readiness</b><i style="--w: 88%"></i></div>
        </div>
      </section>

      <section class="positioning-section">
        <p class="eyebrow">Why SIGL Exists</p>
        <h2>AI is being deployed faster than organizations can verify it.</h2>
        <p>
          SIGL provides independent AI verification before trust is assumed —
          connecting security testing, governance validation, and evidence-backed assurance
          into one defensible operating model.
        </p>
      </section>

      <section id="proof" class="proof-v3">
        <div class="proof-card">
          <p class="eyebrow">Selected Work</p>
          <h2>Real-world AI security work. Built to scale into high-consequence environments.</h2>
          <p>
            SIGL has completed AI security and penetration testing work for Mission Coach AI
            and Teens In Tech. Our approach is designed for organizations that need security,
            accountability, and proof before AI systems scale.
          </p>
          <div class="engagements">
            <div><strong>Mission Coach AI</strong><span>AI pentesting and evidence-backed security review</span></div>
            <div><strong>Teens In Tech</strong><span>AI security testing support for an emerging technology organization</span></div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-v3">
        <img src="${logo}" alt="SIGL logo" />
        <p class="eyebrow">Start The Assessment</p>
        <h2>Evaluate your AI risk exposure before someone else does.</h2>
        <p>Request AI pentesting, governance verification, architecture review, or evidence readiness support.</p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Assurance%20Assessment%20Request">Request Assessment</a>
      </section>
    </main>

    <footer>
      <img src="${logo}" alt="SIGL logo" />
      <span>Independent AI Assurance • AI Security • Governance • Evidence</span>
    </footer>
  </div>
`

const canvas = document.getElementById('siglCanvas')
const ctx = canvas.getContext('2d')
let w, h, nodes

function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
  nodes = Array.from({ length: Math.min(90, Math.floor(w / 16)) }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - .5) * .45,
    vy: (Math.random() - .5) * .45,
    r: Math.random() * 1.8 + .8
  }))
}

function draw() {
  ctx.clearRect(0, 0, w, h)

  for (const n of nodes) {
    n.x += n.vx
    n.y += n.vy
    if (n.x < 0 || n.x > w) n.vx *= -1
    if (n.y < 0 || n.y > h) n.vy *= -1
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]
      const b = nodes[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < 145) {
        ctx.strokeStyle = `rgba(124,221,255,${(1 - d / 145) * .18})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }

  for (const n of nodes) {
    ctx.fillStyle = 'rgba(124,221,255,.75)'
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fill()
  }

  requestAnimationFrame(draw)
}

window.addEventListener('resize', resize)
resize()
draw()
