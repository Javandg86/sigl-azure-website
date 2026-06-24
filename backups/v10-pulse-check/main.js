import './style.css'
import { initAiTrustNetwork } from './three/aiNetwork.js'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open navigation menu">☰</button>
      <nav class="nav-links" id="siteNav">
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
