import './style.css'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <canvas id="siglCanvas"></canvas>

    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <nav class="nav-links">
        <a href="#journey">Journey</a>
        <a href="#threats">Threats</a>
        <a href="#assurance">Assurance</a>
        <a href="#proof">Proof</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="hero-v4">
        <div class="hero-copy">
          <img class="hero-logo" src="${logo}" alt="SIGL logo" />
          <p class="eyebrow">The AI Assurance Company</p>
          <h1>Trust in AI must be verified.</h1>
          <p>
            SIGL independently tests, governs, and proves AI systems before attackers,
            customers, auditors, or regulators expose the risk.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Request AI Assurance Assessment</a>
            <a class="btn secondary" href="#journey">Watch the Assurance Journey</a>
          </div>
        </div>

        <div class="command-orb">
          <div class="orb-ring ring-a"></div>
          <div class="orb-ring ring-b"></div>
          <div class="orb-ring ring-c"></div>
          <div class="orb-core">
            <strong>SIGL</strong>
            <span>VERIFYING AI TRUST</span>
          </div>
        </div>
      </section>

      <section id="journey" class="journey-section">
        <div class="section-head center">
          <p class="eyebrow">Cinematic Assurance Journey</p>
          <h2>From unknown AI risk to defensible trust.</h2>
          <p>
            SIGL visualizes and validates the full AI risk lifecycle: system discovery,
            threat simulation, adversarial testing, control validation, and evidence generation.
          </p>
        </div>

        <div class="journey-map">
          <div class="journey-node"><span>01</span><strong>AI System Detected</strong><p>Agents, prompts, APIs, data, tools, identities.</p></div>
          <div class="journey-node danger"><span>02</span><strong>Threat Paths Emerge</strong><p>Injection, leakage, tool abuse, retrieval failure.</p></div>
          <div class="journey-node"><span>03</span><strong>SIGL Tests Reality</strong><p>Abuse cases are validated against real workflows.</p></div>
          <div class="journey-node"><span>04</span><strong>Controls Activate</strong><p>Guardrails, monitoring, access, ownership, evidence.</p></div>
          <div class="journey-node final"><span>05</span><strong>Trust Becomes Defensible</strong><p>Executive-ready assurance records are produced.</p></div>
        </div>
      </section>

      <section id="threats" class="threat-theater">
        <div>
          <p class="eyebrow">AI Threat Theater</p>
          <h2>Modern AI creates risk traditional audits do not see.</h2>
          <p>
            SIGL tests the failure modes that matter most in AI-enabled products,
            autonomous workflows, sensitive data environments, and high-accountability operations.
          </p>
        </div>

        <div class="attack-board">
          <div class="attack active"><b>Prompt Injection</b><span>Detected</span></div>
          <div class="attack"><b>Agent Tool Abuse</b><span>Contained</span></div>
          <div class="attack"><b>Data Leakage</b><span>Mapped</span></div>
          <div class="attack"><b>RAG Poisoning</b><span>Validated</span></div>
          <div class="attack"><b>Unsafe Automation</b><span>Controlled</span></div>
        </div>
      </section>

      <section id="assurance" class="assurance-v4">
        <div class="section-head">
          <p class="eyebrow">SIGL Assurance Model</p>
          <h2>Security testing, governance validation, and evidence in one operating model.</h2>
        </div>

        <div class="assurance-grid">
          <article><span>01</span><h3>AI Penetration Testing</h3><p>LLM apps, prompts, agents, RAG, APIs, tools, data exposure, and workflow abuse.</p></article>
          <article><span>02</span><h3>Governance Verification</h3><p>Policies, ownership, approvals, documentation, controls, and deployment readiness.</p></article>
          <article><span>03</span><h3>Architecture Review</h3><p>Cloud AI design, identity boundaries, logging, monitoring, and tool-use security.</p></article>
          <article><span>04</span><h3>Evidence Vault</h3><p>Findings, controls, remediation, logs, reports, and executive-ready assurance records.</p></article>
        </div>
      </section>

      <section class="trust-dashboard">
        <div class="dashboard-card">
          <p class="eyebrow">Executive Trust Dashboard</p>
          <h2>Board-ready clarity for AI risk decisions.</h2>

          <div class="metric"><span>Risk Visibility</span><i style="--w:94%"></i><b>94%</b></div>
          <div class="metric"><span>Evidence Coverage</span><i style="--w:88%"></i><b>88%</b></div>
          <div class="metric"><span>Control Validation</span><i style="--w:81%"></i><b>81%</b></div>
          <div class="metric"><span>Deployment Readiness</span><i style="--w:91%"></i><b>91%</b></div>
        </div>
      </section>

      <section id="proof" class="proof-v4">
        <div class="proof-card">
          <p class="eyebrow">Selected Work</p>
          <h2>Real-world AI security work. Built for high-consequence AI environments.</h2>
          <p>
            SIGL has completed AI security and penetration testing work for Mission Coach AI
            and Teens In Tech. Our methodology is designed for organizations that need
            security, accountability, and proof before AI systems scale.
          </p>
          <div class="engagements">
            <div><strong>Mission Coach AI</strong><span>AI pentesting and evidence-backed security review</span></div>
            <div><strong>Teens In Tech</strong><span>AI security testing support for an emerging technology organization</span></div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-v4">
        <img src="${logo}" alt="SIGL logo" />
        <p class="eyebrow">Start Before The Risk Is Public</p>
        <h2>Evaluate your AI risk exposure before someone else does.</h2>
        <p>Request AI penetration testing, governance verification, architecture review, or evidence readiness support.</p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Assurance%20Assessment%20Request">Request Assessment</a>
      </section>
    </main>

    <footer>
      <img src="${logo}" alt="SIGL logo" />
      <span>SIGL — The AI Assurance Company</span>
    </footer>
  </div>
`

const canvas = document.getElementById('siglCanvas')
const ctx = canvas.getContext('2d')
let w, h, nodes, pulses

function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
  nodes = Array.from({ length: Math.min(120, Math.floor(w / 12)) }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - .5) * .55,
    vy: (Math.random() - .5) * .55,
    r: Math.random() * 1.8 + .7
  }))
  pulses = Array.from({ length: 7 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 120,
    speed: Math.random() * 1.2 + .5
  }))
}

function draw() {
  ctx.clearRect(0, 0, w, h)

  for (const p of pulses) {
    p.radius += p.speed
    if (p.radius > 420) {
      p.radius = 0
      p.x = Math.random() * w
      p.y = Math.random() * h
    }
    ctx.strokeStyle = `rgba(124,221,255,${Math.max(0, .16 - p.radius / 2600)})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
    ctx.stroke()
  }

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
      if (d < 135) {
        ctx.strokeStyle = `rgba(124,221,255,${(1 - d / 135) * .2})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }

  for (const n of nodes) {
    ctx.fillStyle = 'rgba(124,221,255,.78)'
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fill()
  }

  requestAnimationFrame(draw)
}

window.addEventListener('resize', resize)
resize()
draw()
