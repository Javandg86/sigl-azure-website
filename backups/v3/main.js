import './style.css'

const logo = '/sigl-hero-logo.png'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home"><img src="${logo}" alt="SIGL logo" /></a>
      <nav class="nav-links">
        <a href="#system">AI System</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#proof">Proof</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="v2-hero">
        <div class="hero-field"></div>
        <div class="hero-copy">
          <img class="hero-mark" src="${logo}" alt="SIGL logo" />
          <p class="eyebrow">Independent AI Assurance</p>
          <h1>Verify the AI systems your organization depends on.</h1>
          <p>
            SIGL helps organizations test, govern, and prove the security of AI systems before
            attackers, customers, auditors, or regulators expose the risk.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Request AI Assurance Assessment</a>
            <a class="btn secondary" href="#system">View Assurance Model</a>
          </div>
        </div>

        <div class="hero-console">
          <div class="console-head">
            <span></span><span></span><span></span>
            <strong>SIGL / AI TRUST ENGINE</strong>
          </div>
          <div class="console-body">
            <div><b>Surface</b><span>Mapped</span></div>
            <div><b>Threats</b><span>Modeled</span></div>
            <div><b>Testing</b><span>Active</span></div>
            <div><b>Controls</b><span>Verified</span></div>
            <div><b>Evidence</b><span>Ready</span></div>
          </div>
        </div>
      </section>

      <section id="system" class="system-section">
        <div class="section-intro">
          <p class="eyebrow">The SIGL Assurance Model</p>
          <h2>AI trust is not assumed. It is tested, controlled, and proven.</h2>
        </div>

        <div class="assurance-flow">
          <article><span>01</span><strong>Discover</strong><p>Map AI systems, data flows, prompts, agents, APIs, tools, identities, and business context.</p></article>
          <article><span>02</span><strong>Attack</strong><p>Test injection, leakage, tool abuse, retrieval failure, unsafe outputs, and workflow misuse.</p></article>
          <article><span>03</span><strong>Control</strong><p>Validate guardrails, monitoring, approvals, ownership, access boundaries, and response paths.</p></article>
          <article><span>04</span><strong>Prove</strong><p>Produce evidence leadership can use for security reviews, audits, procurement, and risk decisions.</p></article>
        </div>
      </section>

      <section id="dashboard" class="dashboard-section">
        <div class="dashboard-copy">
          <p class="eyebrow">Executive Assurance Dashboard</p>
          <h2>Give leadership clarity before AI risk becomes public risk.</h2>
          <p>
            SIGL translates technical AI security findings into business-ready assurance:
            what was tested, what failed, what improved, and what still needs attention.
          </p>
        </div>

        <div class="dash-card">
          <div class="dash-row"><span>Risk Visibility</span><b>High</b></div>
          <div class="meter"><i style="width: 88%"></i></div>
          <div class="dash-row"><span>Control Evidence</span><b>Ready</b></div>
          <div class="meter"><i style="width: 76%"></i></div>
          <div class="dash-row"><span>Deployment Confidence</span><b>Improving</b></div>
          <div class="meter"><i style="width: 68%"></i></div>
          <div class="dash-row"><span>Board Readiness</span><b>Clear</b></div>
          <div class="meter"><i style="width: 82%"></i></div>
        </div>
      </section>

      <section id="capabilities" class="capabilities-section">
        <div class="section-intro">
          <p class="eyebrow">Capabilities</p>
          <h2>Security testing, governance verification, and evidence in one model.</h2>
        </div>

        <div class="capability-grid">
          <article><span>AI Pentesting</span><p>LLM apps, agents, prompts, RAG, APIs, tools, sensitive data paths, and workflow abuse.</p></article>
          <article><span>Governance Verification</span><p>Policies, ownership, approvals, controls, documentation, and deployment readiness.</p></article>
          <article><span>Architecture Review</span><p>Cloud AI design, identity boundaries, logging, monitoring, and secure tool-use patterns.</p></article>
          <article><span>Evidence Vault</span><p>Findings, controls, remediation, logs, reports, and executive-ready assurance records.</p></article>
        </div>
      </section>

      <section id="proof" class="proof-section">
        <div class="proof-card">
          <p class="eyebrow">Selected Real-World Work</p>
          <h2>Tested with emerging technology teams. Built for organizations that need defensible AI trust.</h2>
          <p>
            SIGL has completed AI security and penetration testing work for Mission Coach AI and Teens In Tech.
            The model is designed to scale into environments where security, evidence, and accountability matter.
          </p>
          <div class="engagements">
            <div><strong>Mission Coach AI</strong><span>AI pentesting and evidence-backed security review</span></div>
            <div><strong>Teens In Tech</strong><span>AI security testing support for an emerging technology organization</span></div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <img src="${logo}" alt="SIGL logo" />
        <p class="eyebrow">Start The Assessment</p>
        <h2>Evaluate your AI risk exposure before someone else does.</h2>
        <p>Request AI penetration testing, governance verification, architecture review, or evidence readiness support.</p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Assurance%20Assessment%20Request">Request Assessment</a>
      </section>
    </main>

    <footer>
      <img src="${logo}" alt="SIGL logo" />
      <span>Independent AI Assurance • Security • Governance • Evidence</span>
    </footer>
  </div>
`
