import './style.css'
import { initAiTrustNetwork } from './three/aiNetwork.js'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <nav class="nav-links">
        <a href="#command">Command Center</a>
        <a href="#threats">Threats</a>
        <a href="#assurance">Assurance</a>
        <a href="#proof">Proof</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="v5-hero">
        <div id="trustNetwork" class="trust-network" aria-hidden="true"></div>

        <div class="hero-copy">
          <img class="hero-logo" src="${logo}" alt="SIGL logo" />
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
          <div class="console-row"><b>Agent Tool Abuse</b><span>Contained</span></div>
          <div class="console-row"><b>Data Exposure</b><span>Mapped</span></div>
          <div class="console-row"><b>RAG Failure Mode</b><span>Validated</span></div>
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
