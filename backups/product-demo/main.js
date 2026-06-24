import './style.css'
import { initAiTrustNetwork } from './three/aiNetwork.js'

const logo = '/sigl-logo-exact.png'

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
      <a class="nav-cta" href="#contact-modal">Contact Us</a>
    </header>

    <main id="home">
      <section class="v5-hero">
        <div id="trustNetwork" class="trust-network" aria-hidden="true"></div>

        <div class="hero-copy">
          <p class="eyebrow">SIGL — The AI Compliance Company</p>
          <h1>Verify trust in AI systems before the world tests them for you.</h1>
          <p>
            SIGL independently validates AI security, governance, architecture, and evidence
            for organizations deploying AI where failure is not acceptable.
          </p>

        </div>

        <aside class="hero-cockpit" aria-label="SIGL AI compliance cockpit">
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
                <p>Organizations can quickly understand AI risk posture, prepare for customer security reviews, strengthen governance, prioritize remediation, and decide whether they need AI pentesting or an AI compliance review.</p>
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
              <label>Industry <select><option>Healthcare</option><option>Technology</option><option>Law</option><option>Startups</option><option>Financial Services</option><option>Government</option><option>Other</option></select></label>
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
              <form class="pulse-lead-form" id="pulseLeadForm">
                <h3>Schedule Your Free Consultation</h3>
                <input placeholder="Name" />
                <input placeholder="Company" />
                <input placeholder="Work Email" />
                <p class="booking-note">Choose a live 30-minute SIGL AI Risk Review slot. Availability: Monday-Friday, 9:00 AM-4:30 PM EST.</p>
                <div class="booking-calendar" id="bookingCalendar">
                  <div class="booking-calendar-head">
                    <button type="button" class="pulse-btn ghost" id="prevBookingWeek">← Previous</button>
                    <strong id="bookingWeekLabel">Loading availability...</strong>
                    <button type="button" class="pulse-btn ghost" id="nextBookingWeek">Next →</button>
                  </div>
                  <div class="booking-slots" id="bookingSlots"></div>
                </div>
                <input type="hidden" id="selectedSlot" />
                <button class="pulse-btn primary" type="submit">Send Results & Request Selected Time →</button>
                <a class="pulse-btn ghost" href="mailto:info@siglaicompliance.com?subject=Email%20My%20AI%20Risk%20Pulse%20Results">Email Results to Me</a>
              </form>
            </div>
          </div>
        </div>
      

      </section>

      <section id="command" class="command-center">
        <div class="section-head center">
          <p class="eyebrow">AI Compliance Command Center</p>
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
      
        <div class="section-start-cta">
          <a class="btn primary" href="#pulse">Start Assessment →</a>
        </div>
        <!-- command-start-cta -->
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
      
        <div class="section-start-cta">
          <a class="btn primary" href="#pulse">Start Assessment →</a>
        </div>
        <!-- threat-start-cta -->
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
      
        <div class="section-start-cta">
          <a class="btn primary" href="#pulse">Start Assessment →</a>
        </div>
        <!-- assurance-start-cta -->
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
      
        <div class="section-start-cta">
          <a class="btn primary" href="#pulse">Start Assessment →</a>
        </div>
        <!-- testing-start-cta -->
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
          <h2>Help build the future of AI Compliance.</h2>
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

    </main>


    <section id="contact-modal" class="contact-modal-section">
      <div class="contact-modal-card">
        <p class="eyebrow">Contact SIGL</p>
        <h2>Start the AI compliance conversation.</h2>
        <p>Send your contact details and SIGL will follow up.</p>
        <form class="contact-us-form" id="contactUsForm">
          <input placeholder="Name" required />
          <input placeholder="Business" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Phone Number" />
          <textarea placeholder="Tell us what you need help with / what this contact is about"></textarea>
          <button class="btn primary" type="submit">Send Contact Request</button>
        </form>
      </div>
    </section>

    <footer>
      <img src="${logo}" alt="SIGL logo" />
      <span>SIGL — The AI Compliance Company</span>
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
      score.closest('.risk-ring')?.style.setProperty('--score', `${finalScore * 3.6}deg`)
      clearInterval(timer)
    } else {
      score.textContent = String(n)
      score.closest('.risk-ring')?.style.setProperty('--score', `${n * 3.6}deg`)
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


const pulseLeadForm = document.getElementById('pulseLeadForm')

pulseLeadForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputs = pulseLeadForm.querySelectorAll('input')
  const timeframe = document.getElementById('selectedSlot')?.value || 'No consultation slot selected'
  const finalScore = calculateRiskScore()

  const selectedSignals = [...document.querySelectorAll('#pulse .selected')]
    .map((el) => el.textContent.trim())
    .filter(Boolean)

  const orgScreen = document.querySelector('.pulse-screen[data-step="1"]')
  const orgInputs = orgScreen?.querySelectorAll('input, select') || []

  const payload = {
    name: inputs[0]?.value || '',
    company: inputs[1]?.value || orgInputs[0]?.value || '',
    email: inputs[2]?.value || '',
    timeframe,
    selectedSlot: selectedBookingSlot,
    score: finalScore,
    industry: orgInputs[1]?.value || '',
    companySize: orgInputs[2]?.value || '',
    role: orgInputs[3]?.value || '',
    selectedSignals
  }

  const submitButton = pulseLeadForm.querySelector('button[type="submit"]')
  const originalText = submitButton?.textContent || 'Schedule Free Consultation →'

  if (submitButton) {
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
  }

  try {
    const response = await fetch('/api/pulse-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) throw new Error('API request failed')

    if (submitButton) {
      submitButton.textContent = 'Request Sent ✓'
    }

    const status = document.createElement('p')
    status.className = 'pulse-submit-status'
    status.textContent = 'Your request was received. SIGL will follow up using the email you provided.'
    pulseLeadForm.appendChild(status)
  } catch (error) {
    if (submitButton) {
      submitButton.textContent = 'Try Again'
      submitButton.disabled = false
    }

    const status = document.createElement('p')
    status.className = 'pulse-submit-status error'
    status.textContent = 'Something went wrong. Please email info@siglaicompliance.com directly.'
    pulseLeadForm.appendChild(status)
  }
})



const contactUsForm = document.getElementById('contactUsForm')
contactUsForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  const inputs = contactUsForm.querySelectorAll('input')
  const payload = {
    name: inputs[0]?.value || '',
    company: inputs[1]?.value || '',
    email: inputs[2]?.value || '',
    phone: inputs[3]?.value || '',
    message: contactUsForm.querySelector('textarea')?.value || '',
    score: 0,
    industry: 'Contact Request',
    role: 'Website Contact',
    timeframe: 'Contact Us',
    selectedSignals: ['General contact request from website']
  }

  const btn = contactUsForm.querySelector('button')
  if (btn) btn.textContent = 'Sending...'

  try {
    const res = await fetch('/api/pulse-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('Request failed')
    if (btn) btn.textContent = 'Request Sent ✓'
  } catch {
    if (btn) btn.textContent = 'Please Email info@siglaicompliance.com'
  }
})



  


let bookingWeekOffset = 0
let selectedBookingSlot = ''

function formatDateLabel(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

async function loadBookingSlots() {
  const slotsEl = document.getElementById('bookingSlots')
  const labelEl = document.getElementById('bookingWeekLabel')
  if (!slotsEl || !labelEl) return

  slotsEl.innerHTML = '<p class="booking-loading">Loading available times...</p>'

  try {
    const res = await fetch(`/api/slots?weekOffset=${bookingWeekOffset}`)
    const data = await res.json()
    if (!res.ok || !data.ok) throw new Error('Could not load slots')

    labelEl.textContent = `${data.weekStartLabel} - ${data.weekEndLabel}`
    slotsEl.innerHTML = ''

    data.days.forEach((day) => {
      const dayCard = document.createElement('div')
      dayCard.className = 'booking-day'
      dayCard.innerHTML = `<h4>${day.label}</h4>`

      const slotWrap = document.createElement('div')
      slotWrap.className = 'booking-day-slots'

      day.slots.forEach((slot) => {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.className = slot.available ? 'booking-slot' : 'booking-slot unavailable'
        btn.textContent = slot.timeLabel
        btn.disabled = !slot.available
        btn.addEventListener('click', () => {
          document.querySelectorAll('.booking-slot').forEach((b) => b.classList.remove('selected'))
          btn.classList.add('selected')
          selectedBookingSlot = slot.id
          const hidden = document.getElementById('selectedSlot')
          if (hidden) hidden.value = `${day.label} ${slot.timeLabel} EST`
        })
        slotWrap.appendChild(btn)
      })

      dayCard.appendChild(slotWrap)
      slotsEl.appendChild(dayCard)
    })
  } catch {
    slotsEl.innerHTML = '<p class="booking-loading error">Availability could not be loaded. Please submit your request and SIGL will follow up.</p>'
  }
}

document.getElementById('prevBookingWeek')?.addEventListener('click', () => {
  bookingWeekOffset = Math.max(0, bookingWeekOffset - 1)
  loadBookingSlots()
})

document.getElementById('nextBookingWeek')?.addEventListener('click', () => {
  bookingWeekOffset += 1
  loadBookingSlots()
})

loadBookingSlots()



function renderDashboard() {
  document.querySelector('#app').innerHTML = `
    <div class="dashboard-page">
      <header class="dashboard-nav">
        <img src="/sigl-logo-exact.png" alt="SIGL logo" />
        <a href="/">← Back to Website</a>
      </header>

      <main class="dashboard-shell">
        <p class="eyebrow">SIGL Lead Command Center</p>
        <h1>Pulse Checker Dashboard</h1>

        <section class="dashboard-stats" id="dashboardStats"></section>

        <section class="dashboard-panel">
          <h2>Latest Leads</h2>
          <div id="dashboardLeads" class="dashboard-leads">Loading leads...</div>
        </section>
      </main>
    </div>
  `

  loadDashboard()
}

async function loadDashboard() {
  const statsEl = document.getElementById('dashboardStats')
  const leadsEl = document.getElementById('dashboardLeads')

  try {
    const res = await fetch('/api/dashboard-leads')
    const data = await res.json()
    if (!data.ok) throw new Error('Dashboard API failed')

    const stats = data.stats
    statsEl.innerHTML = `
      <article><span>Total Leads</span><strong>${stats.totalLeads}</strong></article>
      <article><span>Booked Consultations</span><strong>${stats.bookedConsultations}</strong></article>
      <article><span>Average Score</span><strong>${stats.averageScore}/100</strong></article>
      <article><span>High-Risk Leads</span><strong>${stats.highRiskLeads}</strong></article>
      <article><span>Qualified Leads</span><strong>${stats.qualifiedLeads}</strong></article>
      <article><span>Won Deals</span><strong>${stats.wonDeals}</strong></article>
      <article><span>Pipeline Value</span><strong>$${Number(stats.pipelineValue || 0).toLocaleString()}</strong></article>
      <article><span>Won Revenue</span><strong>$${Number(stats.wonRevenue || 0).toLocaleString()}</strong></article>
    `

    leadsEl.innerHTML = data.leads.map((lead) => {
      let signals = []
      try { signals = JSON.parse(lead.selectedSignals || '[]') } catch {}

      return `
        <article class="lead-card">
          <div>
            <h3>${lead.company || 'Unknown Company'}</h3>
            <p>${lead.name || 'No name'} • ${lead.email || 'No email'}</p>
            <p>${lead.industry || 'Unknown industry'} • ${lead.role || 'Unknown role'}</p>
            <p><strong>Preferred Time:</strong> ${lead.timeframe || 'Not selected'}</p>
          </div>
          <div class="lead-score">${lead.score || 0}/100</div>
          <details>
            <summary>Signals</summary>
            <ul>${signals.slice(0, 20).map((s) => `<li>${s}</li>`).join('')}</ul>
          </details>
          <div class="lead-crm">
            <label>Status
              <select data-row="${lead.rowKey}" class="lead-status">
                ${["New Lead","Qualified","Consultation Scheduled","Proposal Sent","Negotiation","Won","Lost"].map((status) => `<option ${status === (lead.status || "New Lead") ? "selected" : ""}>${status}</option>`).join("")}
              </select>
            </label>
            <label>Estimated Value
              <input data-row="${lead.rowKey}" class="lead-value" type="number" min="0" value="${lead.estimatedValue || 0}" />
            </label>
            <label>Notes
              <textarea data-row="${lead.rowKey}" class="lead-notes">${lead.notes || ""}</textarea>
            </label>
            <button class="pulse-btn primary save-lead" data-row="${lead.rowKey}">Save Lead</button>
          </div>
          ${lead.priority ? `<p class="report-ref">Priority: ${lead.priority}</p>` : ''}
          ${lead.reportBlob ? `
            <div class="report-actions">
              <span>PDF Report: ${lead.reportBlob}</span>
              <a class="pulse-btn ghost" href="/api/report?blob=${encodeURIComponent(lead.reportBlob)}" target="_blank" rel="noopener">View PDF</a>
              <a class="pulse-btn primary" href="/api/report?blob=${encodeURIComponent(lead.reportBlob)}" download>Download PDF</a>
            </div>
          ` : ''}
        </article>
      `
    }).join('')
  } catch {
    if (leadsEl) leadsEl.textContent = 'Dashboard could not be loaded.'
  }
}

if (window.location.pathname === '/sigl-dashboard') {
  renderDashboard()
}



document.addEventListener('click', async (event) => {
  const btn = event.target.closest('.save-lead')
  if (!btn) return

  const rowKey = btn.dataset.row
  const status = document.querySelector(`.lead-status[data-row="${rowKey}"]`)?.value || "New Lead"
  const estimatedValue = document.querySelector(`.lead-value[data-row="${rowKey}"]`)?.value || 0
  const notes = document.querySelector(`.lead-notes[data-row="${rowKey}"]`)?.value || ""

  btn.textContent = "Saving..."

  try {
    const res = await fetch('/api/update-lead-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rowKey, status, notes, estimatedValue })
    })

    if (!res.ok) throw new Error('Save failed')
    btn.textContent = "Saved ✓"
  } catch {
    btn.textContent = "Save Failed"
  }
})

