import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home" aria-label="SIGL home">
        <img src="/sigl-hero-logo.png" alt="SIGL logo" />
      </a>

      <nav class="nav-links">
        <a href="#command">Command Center</a>
        <a href="#outcomes">Outcomes</a>
        <a href="#services">Capabilities</a>
        <a href="#why">Why SIGL</a>
        <a href="#proof">Proof</a>
      </nav>

      <a class="nav-cta" href="#contact">Request Assessment</a>
    </header>

    <main id="home">
      <section class="hero">
        <div class="aurora" aria-hidden="true"></div>
        <div class="mesh" aria-hidden="true"></div>

        <div class="hero-content">
          <div class="hero-logo-lockup">
            <img src="/sigl-hero-logo.png" alt="SIGL logo" />
            <span>Independent AI Assurance</span>
          </div>

          <p class="eyebrow">AI Security • Governance • Evidence</p>
          <h1>Independent verification for high-risk AI systems.</h1>
          <p class="hero-lead">
            SIGL helps organizations prove their AI systems are secure, governed,
            and defensible before attackers, customers, auditors, or regulators expose the risk.
          </p>

          <div class="hero-actions">
            <a class="btn primary" href="#contact">Request an AI Assurance Assessment</a>
            <a class="btn secondary" href="#command">See the SIGL Method</a>
          </div>
        </div>

        <aside class="mission-panel">
          <div class="panel-top">
            <img src="/sigl-hero-logo.png" alt="" />
            <span>ASSURANCE OPS</span>
          </div>

          <div class="radar">
            <span></span><span></span><span></span>
            <div class="radar-dot dot-a"></div>
            <div class="radar-dot dot-b"></div>
            <div class="radar-dot dot-c"></div>
          </div>

          <div class="status-grid">
            <div><strong>AI Surface</strong><span>Mapped</span></div>
            <div><strong>Abuse Paths</strong><span>Tested</span></div>
            <div><strong>Controls</strong><span>Verified</span></div>
            <div><strong>Evidence</strong><span>Ready</span></div>
          </div>
        </aside>
      </section>

      <section id="command" class="threat-command">
        <div class="threat-copy">
          <p class="eyebrow">AI Assurance Command Center</p>
          <h2>From attack surface to defensible trust.</h2>
          <p>
            SIGL turns AI uncertainty into a structured assurance path: discover the system,
            test the abuse cases, validate the controls, and produce evidence leadership can use.
          </p>
        </div>

        <div class="threat-map">
          <div class="threat-node core">
            <strong>AI SYSTEM</strong>
            <span>Agents • Prompts • Data • Tools</span>
          </div>
          <div class="threat-node n1"><strong>Threats</strong><span>Injection • Leakage • Abuse</span></div>
          <div class="threat-node n2"><strong>Testing</strong><span>Adversarial validation</span></div>
          <div class="threat-node n3"><strong>Controls</strong><span>Guardrails • Monitoring</span></div>
          <div class="threat-node n4"><strong>Evidence</strong><span>Audit-ready records</span></div>

          <svg class="threat-lines" viewBox="0 0 900 520" aria-hidden="true">
            <path d="M450 260 C280 130 190 130 135 95" />
            <path d="M450 260 C650 120 740 140 790 110" />
            <path d="M450 260 C235 350 180 410 130 440" />
            <path d="M450 260 C640 380 725 410 790 440" />
          </svg>
        </div>
      </section>

      <section id="outcomes" class="outcomes-section">
        <div class="section-heading">
          <p class="eyebrow">Executive Outcomes</p>
          <h2>What leadership gets from SIGL.</h2>
        </div>

        <div class="dashboard">
          <article><span>01</span><strong>Risk Visibility</strong><p>Know where AI systems can fail, leak data, be abused, or create business exposure.</p></article>
          <article><span>02</span><strong>Defensible Evidence</strong><p>Show what was tested, what was found, what changed, and what remains unresolved.</p></article>
          <article><span>03</span><strong>Deployment Confidence</strong><p>Reduce uncertainty before AI systems reach customers, employees, or sensitive workflows.</p></article>
          <article><span>04</span><strong>Customer Readiness</strong><p>Prepare for security reviews, enterprise procurement, vendor risk, and board-level questions.</p></article>
        </div>
      </section>

      <section id="services" class="services-section">
        <div class="section-heading">
          <p class="eyebrow">SIGL Capabilities</p>
          <h2>One operating model for AI risk, security, and proof.</h2>
        </div>

        <div class="capability-wall">
          <article class="capability primary-card">
            <span>01</span>
            <h3>AI Penetration Testing</h3>
            <p>
              Real-world testing for LLM apps, autonomous agents, prompts, APIs,
              RAG pipelines, tool integrations, data exposure, and workflow abuse paths.
            </p>
          </article>

          <article class="capability">
            <span>02</span>
            <h3>Governance Verification</h3>
            <p>Validate ownership, policies, approvals, controls, documentation, and readiness.</p>
          </article>

          <article class="capability">
            <span>03</span>
            <h3>Architecture Review</h3>
            <p>Review cloud AI design, identity boundaries, logging, monitoring, and tool-use controls.</p>
          </article>

          <article class="capability">
            <span>04</span>
            <h3>Evidence Vault</h3>
            <p>Connect findings, controls, remediation, logs, reports, and executive assurance records.</p>
          </article>
        </div>
      </section>

      <section id="why" class="why-section">
        <div>
          <p class="eyebrow">Why SIGL</p>
          <h2>Most firms test. SIGL helps you prove.</h2>
        </div>

        <div class="why-copy">
          <p>
            AI risk does not stop at a vulnerability report. Organizations need security testing,
            governance validation, remediation visibility, and evidence that can stand up to scrutiny.
          </p>
          <p>
            SIGL connects those pieces into a single assurance model built for organizations that
            cannot afford weak AI controls, unclear ownership, or undocumented risk decisions.
          </p>
        </div>
      </section>

      <section id="proof" class="proof-section">
        <div class="proof-card">
          <p class="eyebrow">Real-World Work</p>
          <h2>Proven with emerging technology teams. Built for high-consequence AI environments.</h2>
          <p>
            SIGL has completed AI security and penetration testing work for technology
            organizations including Mission Coach AI and Teens In Tech. Our methodology
            is designed for teams that need security, governance, and evidence before AI systems scale.
          </p>

          <div class="engagements">
            <div><strong>Mission Coach AI</strong><span>AI pentesting and evidence-backed security review</span></div>
            <div><strong>Teens In Tech</strong><span>AI security testing support for an emerging technology organization</span></div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <img src="/sigl-hero-logo.png" alt="SIGL logo" />
        <p class="eyebrow">Start Before The Risk Is Public</p>
        <h2>Evaluate your AI risk exposure before someone else does.</h2>
        <p>Schedule an AI security review, AI penetration test, governance verification, or evidence readiness session.</p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Assurance%20Assessment%20Request">Request Assessment</a>
      </section>
    </main>

    <footer>
      <img src="/sigl-hero-logo.png" alt="SIGL logo" />
      <span>AI Security • Governance • Evidence • Trust Verification</span>
    </footer>
  </div>
`
