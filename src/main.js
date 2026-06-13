import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#home" aria-label="SIGL home">
        <img src="/sigl-logo.png" alt="SIGL logo" />
      </a>

      <nav class="nav-links">
        <a href="#capabilities">Capabilities</a>
        <a href="#services">Services</a>
        <a href="#method">Method</a>
        <a href="#proof">Proof</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="nav-cta" href="#contact">Schedule Assessment</a>
    </header>

    <main id="home">
      <section class="hero">
        <div class="hero-bg" aria-hidden="true">
          <span class="grid-glow"></span>
          <span class="signal signal-a"></span>
          <span class="signal signal-b"></span>
          <span class="signal signal-c"></span>
        </div>

        <div class="hero-inner">
          <p class="eyebrow">Independent AI Security & Assurance</p>

          <h1>Secure AI Systems. Verify Trust. Prove Compliance.</h1>

          <p class="hero-lead">
            SIGL helps organizations test, govern, and defend AI systems before attackers,
            customers, auditors, or regulators expose the risk.
          </p>

          <div class="hero-actions">
            <a class="btn primary" href="#contact">Book an AI Security Review</a>
            <a class="btn ghost" href="#services">Explore Capabilities</a>
          </div>

          <div class="hero-metrics">
            <div>
              <strong>AI Pentesting</strong>
              <span>Prompt, agent, RAG, API, and workflow abuse paths</span>
            </div>
            <div>
              <strong>Governance Verification</strong>
              <span>Controls, ownership, policy, evidence, and readiness</span>
            </div>
            <div>
              <strong>Evidence Systems</strong>
              <span>Audit-ready records for leadership and customer reviews</span>
            </div>
          </div>
        </div>

        <div class="command-card" aria-label="SIGL assurance terminal">
          <div class="command-top">
            <span></span><span></span><span></span>
            <p>SIGL Assurance Engine</p>
          </div>
          <div class="scan-line"></div>
          <pre>AI_SURFACE        mapped
PROMPT_RISK       tested
AGENT_TOOLS       bounded
DATA_EXPOSURE     reviewed
CONTROL_EVIDENCE  collected
EXEC_REPORT       ready</pre>
        </div>
      </section>

      <section id="capabilities" class="section compact">
        <div class="section-heading">
          <p class="eyebrow">Built For</p>
          <h2>Organizations that cannot afford AI failure.</h2>
          <p>
            SIGL is designed for teams operating AI in environments where security,
            trust, accountability, and evidence matter.
          </p>
        </div>

        <div class="value-grid">
          <article><span>01</span><h3>AI-Enabled Products</h3><p>Validate AI features before they reach customers or production users.</p></article>
          <article><span>02</span><h3>Trust-Critical Systems</h3><p>Reduce uncertainty where decisions, workflows, or users rely on AI outputs.</p></article>
          <article><span>03</span><h3>Sensitive Data Environments</h3><p>Test for leakage, exposure, misuse, weak boundaries, and unsafe retrieval flows.</p></article>
          <article><span>04</span><h3>Regulated Operations</h3><p>Connect AI risks to controls, evidence, governance, and audit-readiness.</p></article>
          <article><span>05</span><h3>Executive Accountability</h3><p>Give leaders clear risk visibility before AI issues become public issues.</p></article>
          <article><span>06</span><h3>Evidence-Driven Teams</h3><p>Turn testing, remediation, and control validation into defensible records.</p></article>
        </div>
      </section>

      <section id="services" class="section services">
        <div class="section-heading">
          <p class="eyebrow">What SIGL Delivers</p>
          <h2>AI security services built for real-world deployment.</h2>
        </div>

        <div class="service-stack">
          <article class="service-card large">
            <div class="service-index">01</div>
            <h3>AI Penetration Testing</h3>
            <p>
              Security testing for LLM apps, autonomous agents, prompt workflows,
              RAG pipelines, APIs, tool integrations, and sensitive data paths.
            </p>
            <ul>
              <li>Prompt injection and jailbreak testing</li>
              <li>Agent tool-abuse and privilege boundary testing</li>
              <li>Data exposure, retrieval, and workflow abuse analysis</li>
            </ul>
          </article>

          <article class="service-card">
            <div class="service-index">02</div>
            <h3>AI Governance Verification</h3>
            <p>
              Review AI controls, ownership, approvals, policies, system documentation,
              and deployment readiness.
            </p>
          </article>

          <article class="service-card">
            <div class="service-index">03</div>
            <h3>AI Security Architecture Review</h3>
            <p>
              Evaluate cloud AI architecture, identity flows, data boundaries,
              logging, monitoring, and secure tool-use design.
            </p>
          </article>

          <article class="service-card">
            <div class="service-index">04</div>
            <h3>Audit Evidence Vault</h3>
            <p>
              Build evidence records that connect risks, controls, findings,
              remediation, logs, and executive reporting.
            </p>
          </article>
        </div>
      </section>

      <section id="method" class="section method">
        <div class="method-copy">
          <p class="eyebrow">The SIGL Method</p>
          <h2>Proof over promises.</h2>
          <p>
            Most reviews stop at a report. SIGL connects testing, governance,
            remediation, and evidence so leadership can see what was tested,
            what changed, and what remains exposed.
          </p>
        </div>

        <div class="timeline">
          <div><span>Assess</span><p>Map systems, data flows, AI workflows, integrations, identities, and risk owners.</p></div>
          <div><span>Attack</span><p>Test realistic abuse paths across prompts, agents, APIs, RAG, and automation layers.</p></div>
          <div><span>Control</span><p>Connect findings to practical guardrails, monitoring, policy, and remediation actions.</p></div>
          <div><span>Prove</span><p>Deliver executive-ready evidence for customer reviews, audits, and risk decisions.</p></div>
        </div>
      </section>

      <section id="proof" class="section proof">
        <div class="proof-panel">
          <p class="eyebrow">Real-World Work</p>
          <h2>Proven with emerging technology teams. Built to scale into high-consequence environments.</h2>
          <p>
            SIGL has completed AI security and penetration testing work for technology
            organizations including Mission Coach AI and Teens In Tech. Our methodology
            is designed for organizations that need security, governance, and evidence
            before AI systems scale.
          </p>

          <div class="proof-cards">
            <div>
              <strong>Mission Coach AI</strong>
              <span>AI pentesting and evidence-backed security review</span>
            </div>
            <div>
              <strong>Teens In Tech</strong>
              <span>AI security testing support for an emerging technology organization</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact">
        <p class="eyebrow">Start Before The Risk Is Public</p>
        <h2>Bring SIGL in before your AI system is tested by the wrong audience.</h2>
        <p>
          Schedule an AI security review, AI penetration test, governance verification,
          or evidence readiness session.
        </p>
        <a class="btn primary" href="mailto:info@siglaicompliance.com?subject=SIGL%20AI%20Security%20Review%20Request">Contact SIGL</a>
      </section>
    </main>

    <footer>
      <span>© SIGL AI Compliance</span>
      <span>AI Security • Governance • Evidence • Trust Verification</span>
    </footer>
  </div>
`
