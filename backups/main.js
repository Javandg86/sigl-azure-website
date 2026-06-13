import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home" aria-label="SIGL home">
        <img src="/sigl-logo.png" alt="SIGL logo" />
      </a>

      <nav class="nav-links">
        <a href="#mission">Mission</a>
        <a href="#services">Services</a>
        <a href="#assurance">Assurance</a>
        <a href="#proof">Proof</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="nav-cta" href="#contact">Request Review</a>
    </header>

    <main id="home">
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">For Organizations Operating High-Risk AI Systems</p>
            <h1>Independent AI Security, Governance, and Trust Verification.</h1>
            <p class="lead">
              SIGL helps teams prove AI systems are secure, defensible, and ready for scrutiny —
              through AI penetration testing, governance verification, and audit-ready evidence.
            </p>

            <div class="hero-actions">
              <a class="btn primary" href="#contact">Book an AI Risk Review</a>
              <a class="btn secondary" href="#services">Explore Services</a>
            </div>

            <div class="signal-row">
              <span>AI Pentesting</span>
              <span>Governance Verification</span>
              <span>Evidence Systems</span>
            </div>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <div class="orb orb-one"></div>
            <div class="orb orb-two"></div>
            <div class="terminal-card">
              <div class="terminal-top">
                <span></span><span></span><span></span>
              </div>
              <pre>
SIGL://AI_ASSURANCE
STATUS      VERIFIED
RISK        MAPPED
EVIDENCE    COLLECTED
TRUST       DEFENSIBLE
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" class="marquee-section">
        <div class="marquee">
          <span>AI Security</span>
          <span>Independent Verification</span>
          <span>Governance Evidence</span>
          <span>High-Risk AI Systems</span>
        </div>
      </section>

      <section id="services" class="section">
        <div class="section-heading">
          <p class="eyebrow">What SIGL Delivers</p>
          <h2>Security and assurance services for AI systems that must be trusted.</h2>
        </div>

        <div class="service-grid">
          <article class="service-card featured">
            <p class="service-index">01</p>
            <h3>AI Penetration Testing</h3>
            <p>
              Real-world testing for LLM applications, agents, prompts, APIs, workflows,
              tool integrations, data exposure, and abuse paths.
            </p>
          </article>

          <article class="service-card">
            <p class="service-index">02</p>
            <h3>AI Governance Verification</h3>
            <p>
              Review policies, controls, ownership, documentation, approvals, and operational
              readiness for responsible AI deployment.
            </p>
          </article>

          <article class="service-card">
            <p class="service-index">03</p>
            <h3>Audit Evidence Vault</h3>
            <p>
              Build traceable evidence systems that connect findings, controls, risks,
              reports, logs, and executive-ready assurance records.
            </p>
          </article>

          <article class="service-card">
            <p class="service-index">04</p>
            <h3>AI Risk Readiness Sprint</h3>
            <p>
              Rapidly identify AI risk gaps, prioritize remediation, and prepare leadership
              for customer, regulator, or board-level questions.
            </p>
          </article>
        </div>
      </section>

      <section id="assurance" class="section split">
        <div>
          <p class="eyebrow">Assurance Architecture</p>
          <h2>Built to show proof, not promises.</h2>
        </div>

        <div class="assurance-panel">
          <div class="assurance-step">
            <span>Assess</span>
            <p>Identify systems, workflows, data movement, AI attack surface, and governance gaps.</p>
          </div>
          <div class="assurance-step">
            <span>Test</span>
            <p>Validate exposure through structured AI security testing and abuse-case analysis.</p>
          </div>
          <div class="assurance-step">
            <span>Map</span>
            <p>Connect risks to controls, evidence, remediation status, and executive reporting.</p>
          </div>
          <div class="assurance-step">
            <span>Prove</span>
            <p>Deliver audit-ready artifacts, evidence links, findings, and defensible records.</p>
          </div>
        </div>
      </section>

      <section id="proof" class="section proof">
        <div class="proof-copy">
          <p class="eyebrow">Real-World Engagements</p>
          <h2>Proven with emerging technology teams. Designed for high-consequence environments.</h2>
          <p>
            SIGL has conducted AI security and penetration testing work for technology organizations,
            including Mission Coach AI and Teens In Tech. Our operating model is built for teams
            that need confidence, accountability, and evidence before AI systems scale.
          </p>
        </div>

        <div class="proof-grid">
          <div class="proof-card">
            <span>Mission Coach AI</span>
            <p>AI pentest engagement and evidence-backed review.</p>
          </div>
          <div class="proof-card">
            <span>Teens In Tech</span>
            <p>AI security testing support for an emerging technology organization.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact">
        <p class="eyebrow">Start the Review</p>
        <h2>Bring SIGL in before AI risk becomes public risk.</h2>
        <p>
          Schedule an AI security review, AI pentest, or governance verification session.
        </p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com">Contact SIGL</a>
      </section>
    </main>

    <footer>
      <span>© SIGL AI Compliance</span>
      <span>AI Security • Governance • Evidence</span>
    </footer>
  </div>
`
