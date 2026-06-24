import './style.css'
import { initAiTrustNetwork } from './three/aiNetwork.js'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open navigation menu">☰</button>
      <nav class="nav-links" id="siteNav">
        <a href="#pulse">Pulse Check</a>
        <a href="#command">Command Center</a>
        <a href="#threats">Threats</a>
        <a href="#assurance">Assurance</a>
        <a href="#proof">Proof</a>
        <a href="#careers">Careers</a>
        <a href="#partnerships">Partnerships</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="v5-hero">
        <div id="trustNetwork" class="trust-network" aria-hidden="true"></div>

        <div class="hero-copy">
          <p class="eyebrow">SIGL — The AI Assurance Company</p>
          <h1>Verify trust in AI systems before the world tests them for you.</h1>
          <p>
            SIGL independently validates AI security, governance, architecture, and evidence
            for organizations deploying AI where failure is not acceptable.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Request AI Assurance Assessment</a>
            <a class="btn secondary" href="#command">Enter Command Center</a>
          </div>
        </div>

        <aside class="hero-cockpit" aria-label="SIGL AI assurance cockpit">
          <div class="cockpit-top">
            <span></span><span></span><span></span>
            <strong>LIVE AI ASSURANCE VIEW</strong>
          </div>

          <div class="cockpit-core">
            <div class="core-pulse"></div>
            <div class="core-label">
              <b>AI SYSTEM</b>
              <em>UNDER REVIEW</em>
            </div>
          </div>

          <div class="cockpit-grid">
            <div><small>Threat Paths</small><strong>17</strong><span>mapped</span></div>
            <div><small>Controls</small><strong>42</strong><span>validated</span></div>
            <div><small>Evidence</small><strong>Ready</strong><span>audit trail</span></div>
            <div><small>Status</small><strong>Active</strong><span>monitoring</span></div>
          </div>
        </aside>
      </section>


      <section id="pulse" class="pulse-section">
        <div class="pulse-shell">
          <div class="pulse-bg-orb"></div>
          <div class="pulse-bg-net"></div>

          <div class="pulse-screen active" data-step="0">
            <h2>Free AI Risk<br/>Pulse Check</h2>
            <h3>Find out if your organization is audit-ready.</h3>
            <p>This quick 3-minute assessment helps identify gaps in AI governance, testing, documentation, and oversight.</p>
            <div class="pulse-feature-grid">
              <div>🛡️<span>AI Governance</span></div>
              <div>📋<span>Testing</span></div>
              <div>📄<span>Documentation</span></div>
              <div>👁️<span>Oversight</span></div>
            </div>
            <div class="pulse-actions">
              <button class="pulse-btn primary" data-start>Start Assessment →</button>
              <button class="pulse-btn ghost" data-learn>Learn More →</button>
            </div>
            <div class="pulse-notes">
              <span>✓ No technical expertise required</span>
              <span>⚡ Instant results</span>
            </div>
          </div>

          <div class="pulse-screen pulse-learn-screen" data-step="learn">
            <h2>What is the AI Risk Pulse Check?</h2>
            <p>
              The AI Risk Pulse Check is a quick assessment designed to help organizations
              identify potential gaps in AI governance, testing, documentation, oversight,
              and vendor exposure.
            </p>

            <div class="pulse-learn-grid">
              <article>
                <h3>Why it matters</h3>
                <p>AI systems can introduce business, privacy, security, legal, and operational risk faster than traditional review processes can detect. A pulse check gives leadership early visibility before those gaps become public issues.</p>
              </article>
              <article>
                <h3>What it reviews</h3>
                <p>The assessment reviews AI usage, customer-facing exposure, sensitive data handling, vendor reliance, governance maturity, documentation, testing, oversight, and audit evidence readiness.</p>
              </article>
              <article>
                <h3>What they’ll get</h3>
                <p>Participants receive a risk pulse score, key exposure signals, and a recommended next step based on their responses. It is not a full audit, but it helps identify where deeper review is needed.</p>
              </article>
              <article>
                <h3>The benefits</h3>
                <p>Organizations can quickly understand AI risk posture, prepare for customer security reviews, strengthen governance, prioritize remediation, and decide whether they need AI pentesting or an AI assurance review.</p>
              </article>
            </div>

            <div class="pulse-actions">
              <button class="pulse-btn ghost" data-home>← Back</button>
              <button class="pulse-btn primary" data-start>Take Assessment →</button>
            </div>
          </div>

          <div class="pulse-screen" data-step="1">
            <p class="pulse-step">STEP 1 OF 5</p>
            <h2>About Your Organization</h2>
            <p>Help us understand your organization so we can tailor your AI Risk Pulse Check.</p>
            <div class="pulse-form-card">
              <label>Company name <input value="Acme Corp" /></label>
              <label>Industry <select><option>Healthcare</option><option>Technology</option><option>Financial Services</option><option>Government</option><option>Other</option></select></label>
              <label>Company size <select><option>11–50 employees</option><option>51–200 employees</option><option>201–1,000 employees</option><option>1,000+ employees</option></select></label>
              <label>Your role <select><option>Founder / Operator</option><option>CISO / Security Leader</option><option>Compliance / Risk</option><option>Executive</option></select></label>
              <div class="pulse-wide">
                <strong>Are you currently using AI in your business?</strong>
                <div class="pulse-options"><button class="selected">Yes, actively</button><button>Piloting / exploring</button><button>Not yet</button></div>
              </div>
              <button class="pulse-btn ghost" data-prev>← Back</button>
              <button class="pulse-btn primary" data-next>Continue →</button>
            </div>
          </div>

          <div class="pulse-screen" data-step="2">
            <p class="pulse-step">STEP 2 OF 5</p>
            <h2>How Are You Using AI?</h2>
            <p>Select the ways your organization is currently using or planning to use AI.</p>
            <div class="pulse-use-grid">
              <button class="selected">💬 Customer support chatbot</button>
              <button class="selected">📄 Content generation</button>
              <button>📈 Data analysis / forecasting</button>
              <button class="selected">👤 Internal copilot</button>
              <button class="selected">🔗 Workflow automation</button>
              <button>⚖️ Decision support</button>
            </div>
            <h3>Is any of this AI customer-facing?</h3>
            <div class="pulse-options"><button class="selected">Yes</button><button>No</button><button>Not sure</button></div>
            <div class="pulse-actions"><button class="pulse-btn ghost" data-prev>← Back</button><button class="pulse-btn primary" data-next>Continue →</button></div>
          </div>

          <div class="pulse-screen" data-step="3">
            <p class="pulse-step">STEP 3 OF 5</p>
            <h2>Data & Vendor Exposure</h2>
            <p>These questions help us understand data handling and external AI dependency risk.</p>
            <div class="pulse-question-layout">
              <div class="pulse-governance">
                <div><b>1</b><span>Does your AI process personal, confidential, or sensitive business data?</span><button class="selected">Yes</button><button>No</button><button>Not sure</button></div>
                <div><b>2</b><span>Do you rely on third-party AI vendors or models?</span><button class="selected">Yes</button><button>No</button><button>Not sure</button></div>
                <div><b>3</b><span>Does AI influence recommendations or decisions affecting people?</span><button class="selected">Yes</button><button>No</button><button>Not sure</button></div>
                <div><b>4</b><span>Do you know which data is being sent to external AI tools?</span><button>Yes</button><button>No</button><button class="selected">Not sure</button></div>
              </div>
              <aside class="pulse-signal-card">
                <h3>Current Exposure Signals</h3>
                <p>🛡️ Sensitive data <em>Elevated</em></p>
                <p>👥 Vendor reliance <em>Elevated</em></p>
                <p>🎯 Decision impact <em>Elevated</em></p>
              </aside>
            </div>
            <div class="pulse-actions"><button class="pulse-btn ghost" data-prev>← Back</button><button class="pulse-btn primary" data-next>Continue →</button></div>
          </div>

          <div class="pulse-screen" data-step="4">
            <p class="pulse-step">STEP 4 OF 5</p>
            <h2>Governance & Documentation</h2>
            <p>Strong governance and documentation help demonstrate AI due diligence.</p>
            <div class="pulse-governance">
              <div><b>1</b><span>Do you have a written AI use policy?</span><button>In place</button><button class="selected">Partial</button><button>Not in place</button></div>
              <div><b>2</b><span>Has someone been assigned accountability for AI oversight?</span><button class="selected">In place</button><button>Partial</button><button>Not in place</button></div>
              <div><b>3</b><span>Do you maintain an inventory of AI tools and systems?</span><button>In place</button><button>Partial</button><button class="selected">Not in place</button></div>
              <div><b>4</b><span>Do you document AI decisions, approvals, or evidence?</span><button>In place</button><button class="selected">Partial</button><button>Not in place</button></div>
            </div>
            <div class="pulse-actions"><button class="pulse-btn ghost" data-prev>← Back</button><button class="pulse-btn primary" data-next>Continue →</button></div>
          </div>

          <div class="pulse-screen" data-step="5">
            <p class="pulse-step">STEP 5 OF 5</p>
            <h2>Testing & Oversight</h2>
            <p>Testing and human oversight help ensure AI systems are safe, reliable, and accountable.</p>
            <div class="pulse-governance">
              <div><b>1</b><span>Do you test AI systems for harmful outputs, prompt issues, or misuse?</span><button>Regularly</button><button>Sometimes</button><button class="selected">Not yet</button></div>
              <div><b>2</b><span>Is there human review for important AI outputs?</span><button>Regularly</button><button class="selected">Sometimes</button><button>Not yet</button></div>
              <div><b>3</b><span>Do you retain audit evidence, reports, or supporting files?</span><button>Regularly</button><button class="selected">Sometimes</button><button>Not yet</button></div>
              <div><b>4</b><span>Do you have a process for AI incidents or failures?</span><button>Regularly</button><button>Sometimes</button><button class="selected">Not yet</button></div>
            </div>
            <div class="pulse-actions"><button class="pulse-btn ghost" data-prev>← Back</button><button class="pulse-btn primary" data-next>See My Results →</button></div>
          </div>

          <div class="pulse-screen" data-step="6">
            <h2>Your AI Risk Pulse Checker Results</h2>
            <p>Your score is calculated based on your answers across AI usage, data exposure, governance, documentation, testing, and oversight.</p>
            <div class="pulse-results">
              <div class="risk-ring"><span id="riskScore">0</span><small>/100</small><em>Elevated Risk</em></div>
              <div class="result-card">🛡️<strong>62%</strong><span>Governance</span></div>
              <div class="result-card">📋<strong>38%</strong><span>Testing</span></div>
              <div class="result-card">📄<strong>49%</strong><span>Documentation</span></div>
              <div class="result-card">👁️<strong>57%</strong><span>Oversight</span></div>
            </div>
            <div class="pulse-results-grid">
              <div><h3>Top Risk Signals</h3><p>• No formal testing program</p><p>• Incomplete AI inventory</p><p>• Limited audit evidence</p><p>• Sensitive data and vendor exposure</p></div>
              <div><h3>Recommended Service Path</h3><strong>AI Risk & Audit Readiness Review</strong><p>Get a prioritized assessment of your AI risk posture, control gaps, and audit readiness.</p></div>
            </div>
            <button class="pulse-btn primary" data-next>Next Step →</button>
          </div>

          <div class="pulse-screen" data-step="7">
            <h2>Take the Next Step</h2>
            <p>Your results show AI risk areas that may need attention.</p>
            <div class="pulse-next">
              <div>
                <h3>Recommended Service Path</h3>
                <div class="recommended">🛡️ <strong>AI Risk & Audit Readiness Review</strong><p>A focused review to confirm governance, documentation, testing, and oversight gaps.</p></div>
                <p>✓ Review your risk snapshot</p><p>✓ Get tailored next-step recommendations</p><p>✓ Learn how to secure and document your AI systems</p>
              </div>
              <form class="pulse-lead-form">
                <h3>Schedule Your Free Consultation</h3>
                <input placeholder="Name" />
                <input placeholder="Company" />
                <input placeholder="Work Email" />
                <select><option>Preferred Timeframe</option><option>This week</option><option>Next week</option><option>This month</option></select>
                <a class="pulse-btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Risk%20Pulse%20Check%20Consultation">Schedule Free Consultation →</a>
                <a class="pulse-btn ghost" href="mailto:info@siglaicompliance.com?subject=Email%20My%20AI%20Risk%20Pulse%20Results">Email Results to Me</a>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="command" class="command-center">
        <div class="section-head center">
          <p class="eyebrow">AI Assurance Command Center</p>
          <h2>From unknown AI risk to defensible trust.</h2>
          <p>
            SIGL connects adversarial testing, governance validation, architecture review,
            and audit-ready evidence into one operating model.
          </p>
        </div>

        <div class="command-grid">
          <article><span>01</span><strong>Discover</strong><p>Map AI systems, agents, prompts, data flows, APIs, tools, identities, and owners.</p></article>
          <article><span>02</span><strong>Attack</strong><p>Validate realistic abuse paths including injection, leakage, tool misuse, and unsafe automation.</p></article>
          <article><span>03</span><strong>Control</strong><p>Verify guardrails, monitoring, logging, approvals, access boundaries, and response paths.</p></article>
          <article><span>04</span><strong>Prove</strong><p>Create executive-ready evidence for customer reviews, audits, procurement, and risk decisions.</p></article>
        </div>
      </section>

      <section id="threats" class="threat-lab">
        <div>
          <p class="eyebrow">AI Threat Lab</p>
          <h2>Modern AI creates risk traditional security reviews miss.</h2>
          <p>
            SIGL tests AI failure modes before they become incidents: prompt injection,
            agent tool abuse, data leakage, RAG poisoning, unsafe automation, and weak oversight.
          </p>
        </div>

        <div class="threat-console">
          <div class="console-row"><b>Prompt Injection</b><span>Detected</span></div>
          <div class="console-row"><b>LLM Output Manipulation</b><span>Tested</span></div>
          <div class="console-row"><b>Sensitive Data Exposure</b><span>Mapped</span></div>
          <div class="console-row"><b>Model Evasion</b><span>Validated</span></div>
          <div class="console-row"><b>Autonomous Agent Abuse</b><span>Contained</span></div>
          <div class="console-row"><b>AI Privacy Failure</b><span>Reviewed</span></div>
          <div class="console-row"><b>Evidence Package</b><span>Generated</span></div>
        </div>
      </section>

      <section id="assurance" class="assurance-suite">
        <div class="section-head">
          <p class="eyebrow">SIGL Capabilities</p>
          <h2>Security testing, governance verification, and evidence in one model.</h2>
        </div>

        <div class="suite-grid">
          <article><h3>AI Penetration Testing</h3><p>LLM apps, prompts, agents, RAG, APIs, tool integrations, data exposure, and workflow abuse.</p></article>
          <article><h3>Governance Verification</h3><p>Policies, ownership, approvals, controls, documentation, and deployment readiness.</p></article>
          <article><h3>Architecture Review</h3><p>Cloud AI design, identity boundaries, logging, monitoring, and secure tool-use patterns.</p></article>
          <article><h3>Evidence Vault</h3><p>Findings, controls, remediation, logs, reports, and executive-ready assurance records.</p></article>
          <article><h3>AI Adversarial Validation</h3><p>Evaluate AI systems against prompt injection, output manipulation, privacy exposure, model evasion, agent abuse, and advanced adversarial techniques before deployment.</p></article>
        </div>
      </section>

      <section class="testing-section">
        <div class="section-head center">
          <p class="eyebrow">What SIGL Tests</p>
          <h2>Advanced AI attack categories translated into business risk.</h2>
          <p>
            SIGL validates whether AI systems can resist the failure modes that matter most before they reach customers, employees, sensitive workflows, or executive review.
          </p>
        </div>

        <div class="testing-grid">
          <article><strong>Prompt Injection Resilience</strong><p>Test whether attackers can manipulate system behavior through direct or indirect prompt attacks.</p></article>
          <article><strong>Output Manipulation Resistance</strong><p>Evaluate unsafe, misleading, unauthorized, or policy-breaking AI responses.</p></article>
          <article><strong>Sensitive Data Protection</strong><p>Assess exposure risk across prompts, retrieval systems, logs, memory, files, and connected tools.</p></article>
          <article><strong>Autonomous Agent Security</strong><p>Validate tool-use boundaries, privilege escalation paths, action controls, and human approval gates.</p></article>
          <article><strong>Model Evasion Resistance</strong><p>Test adversarial techniques designed to bypass AI safety, detection, classification, or control logic.</p></article>
          <article><strong>AI Privacy Controls</strong><p>Review privacy risks, data minimization, leakage paths, retention, and user-facing exposure.</p></article>
          <article><strong>Human Oversight Validation</strong><p>Check whether humans can detect, intervene, approve, and document high-risk AI actions.</p></article>
          <article><strong>Evidence Readiness</strong><p>Confirm the organization can prove what was tested, what failed, what changed, and what remains exposed.</p></article>
        </div>
      </section>

      <section id="proof" class="proof-section">
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


      <section id="careers" class="careers-section">
        <div class="split-copy">
          <p class="eyebrow">Careers at SIGL</p>
          <h2>Help build the future of AI Assurance.</h2>
          <p>
            SIGL is interested in connecting with AI security researchers, AI red teamers,
            cloud security professionals, governance specialists, and AI engineers who want
            to help organizations deploy AI responsibly and securely.
          </p>
          <a class="btn secondary" href="mailto:info@siglaicompliance.com?subject=SIGL%20Future%20Career%20Opportunities">Future Opportunities</a>
        </div>
      </section>

      <section id="partnerships" class="partnerships-section">
        <div class="split-copy">
          <p class="eyebrow">Partnerships</p>
          <h2>Partner with SIGL to help clients secure and verify AI systems.</h2>
          <p>
            SIGL collaborates with organizations that help clients deploy secure,
            governed, and defensible AI systems.
          </p>
        </div>

        <div class="partner-grid">
          <article>Technology Consultants</article>
          <article>Compliance Advisors</article>
          <article>Managed Service Providers</article>
          <article>Managed Security Service Providers</article>
          <article>AI Startups</article>
          <article>Cloud Solution Providers</article>
          <article>Industry Associations</article>
          <article>Technology Incubators & Accelerators</article>
        </div>

        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20Partnership%20Opportunity">Explore Partnership Opportunities</a>
      </section>

      <section id="contact" class="contact-section">
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

initAiTrustNetwork(document.getElementById('trustNetwork'))


const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const siteNav = document.getElementById('siteNav')

mobileMenuBtn?.addEventListener('click', () => {
  siteNav?.classList.toggle('open')
})

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => siteNav.classList.remove('open'))
})



const pulseScreens = [...document.querySelectorAll('.pulse-screen')]
let pulseStep = 0
let lastPulseStep = 0

function showPulseStep(nextStep) {
  pulseStep = Math.max(0, Math.min(nextStep, pulseScreens.length - 1))
  pulseScreens.forEach((screen, index) => {
    screen.classList.toggle('active', index === pulseStep)
  })

  if (pulseStep === 7) {
    animateRiskScore(calculateRiskScore())
  }
}

function showPulseLearn() {
  lastPulseStep = pulseStep
  pulseScreens.forEach((screen) => screen.classList.remove('active'))
  document.querySelector('.pulse-learn-screen')?.classList.add('active')
}

function showPulseHome() {
  pulseScreens.forEach((screen) => screen.classList.remove('active'))
  pulseScreens[0]?.classList.add('active')
  pulseStep = 0
}

function calculateRiskScore() {
  let risk = 18

  const selectedTexts = [...document.querySelectorAll('#pulse .selected')]
    .map((el) => el.textContent.trim().toLowerCase())

  const addIf = (condition, points) => {
    if (condition) risk += points
  }

  addIf(selectedTexts.some(t => t.includes('yes, actively')), 8)
  addIf(selectedTexts.some(t => t.includes('customer support chatbot')), 6)
  addIf(selectedTexts.some(t => t.includes('workflow automation')), 8)
  addIf(selectedTexts.some(t => t.includes('decision support')), 10)
  addIf(selectedTexts.some(t => t.includes('yes')), 8)
  addIf(selectedTexts.some(t => t.includes('not sure')), 9)
  addIf(selectedTexts.some(t => t.includes('not in place')), 12)
  addIf(selectedTexts.some(t => t.includes('partial')), 7)
  addIf(selectedTexts.some(t => t.includes('not yet')), 13)
  addIf(selectedTexts.some(t => t.includes('sometimes')), 7)

  const selectedCount = selectedTexts.length
  if (selectedCount > 10) risk += 4
  if (selectedCount > 14) risk += 5

  return Math.max(12, Math.min(96, risk))
}

function animateRiskScore(finalScore) {
  const score = document.getElementById('riskScore')
  if (!score) return

  score.dataset.done = String(finalScore)
  let n = 0
  const step = Math.max(1, Math.ceil(finalScore / 34))

  const timer = setInterval(() => {
    n += step
    if (n >= finalScore) {
      score.textContent = String(finalScore)
      clearInterval(timer)
    } else {
      score.textContent = String(n)
    }
  }, 24)
}

document.querySelectorAll('[data-next]').forEach((btn) => {
  btn.addEventListener('click', () => showPulseStep(pulseStep + 1))
})

document.querySelectorAll('[data-prev]').forEach((btn) => {
  btn.addEventListener('click', () => showPulseStep(pulseStep - 1))
})

document.querySelectorAll('[data-learn]').forEach((btn) => {
  btn.addEventListener('click', () => showPulseLearn())
})

document.querySelectorAll('[data-home]').forEach((btn) => {
  btn.addEventListener('click', () => showPulseHome())
})

document.querySelectorAll('[data-start]').forEach((btn) => {
  btn.addEventListener('click', () => {
    pulseScreens.forEach((screen) => screen.classList.remove('active'))
    pulseStep = 1
    pulseScreens[1]?.classList.add('active')
  })
})

document.querySelectorAll('.pulse-options button, .pulse-use-grid button, .pulse-governance button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.parentElement
    if (!group.classList.contains('pulse-use-grid')) {
      group.querySelectorAll('button').forEach((b) => b.classList.remove('selected'))
    }
    btn.classList.toggle('selected')
  })
})


// Final Pulse Checker start-flow override
document.addEventListener('click', (event) => {
  const startButton = event.target.closest('[data-start]')
  if (!startButton) return

  event.preventDefault()
  event.stopImmediatePropagation()

  document.querySelectorAll('.pulse-screen').forEach((screen) => {
    screen.classList.remove('active')
  })

  const firstAssessmentScreen = document.querySelector('.pulse-screen[data-step="1"]')
  firstAssessmentScreen?.classList.add('active')
  pulseStep = 1
}, true)
