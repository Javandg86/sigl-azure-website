import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  LayoutDashboard, Database, ShieldCheck, ClipboardCheck, Landmark,
  FileText, BarChart3, Settings, Bell, Menu, X
} from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'
import './product-demo.css'

const nav = [
  ['Dashboard', LayoutDashboard],
  ['AI Inventory', Database],
  ['Risk Assessments', ShieldCheck],
  ['Tests', ClipboardCheck],
  ['Governance', Landmark],
  ['Evidence', FileText],
  ['Reports', BarChart3],
  ['Settings', Settings],
]

const colors = {
  gold: '#D89517',
  blue: '#146EF5',
  green: '#16A34A',
  red: '#DC2626',
  purple: '#7C3AED',
}

const riskTrend = [
  { month: 'Jan', value: 70 },
  { month: 'Feb', value: 76 },
  { month: 'Mar', value: 62 },
  { month: 'Apr', value: 77 },
  { month: 'May', value: 68 },
  { month: 'Jun', value: 74 },
]

const systems = [
  ['Customer Support Bot', 'Sarah Mitchell', 'OpenAI', 'Customer Support', 'High', 'Active', 'Jun 10, 2025'],
  ['Sales Copilot', 'James Donovan', 'Microsoft', 'Sales Productivity', 'Medium', 'Active', 'Jun 2, 2025'],
  ['HR Resume Screener', 'Lisa Chen', 'HireVue', 'Talent Acquisition', 'High', 'Active', 'May 28, 2025'],
  ['Marketing Content Assistant', 'Emily Rodriguez', 'Jasper', 'Content Generation', 'Medium', 'Active', 'Jun 5, 2025'],
  ['Internal Knowledge Agent', 'Tom Harrison', 'Anthropic', 'Internal Support', 'Low', 'Active', 'May 20, 2025'],
  ['Claims Triage Assistant', 'Michael Johnson', 'AWS Bedrock', 'Claims Automation', 'High', 'Active', 'Jun 1, 2025'],
]

const assessments = [
  ['Bias & Fairness Review', 'Customer Churn Model', 'Ethics & Fairness', 'High', 'Alex Kim', 'Jun 25, 2025', 'Open'],
  ['Prompt Injection Review', 'Support Copilot', 'Security', 'High', 'Jamie Rivera', 'Jun 28, 2025', 'In Review'],
  ['Vendor Risk Review', 'Third-Party Analytics', 'Third-Party', 'Medium', 'Sam Collins', 'Jul 02, 2025', 'Needs Action'],
  ['Data Privacy Review', 'Marketing Insights AI', 'Privacy', 'Medium', 'Maya Patel', 'Jul 05, 2025', 'In Review'],
  ['Human Oversight Review', 'Document Summarizer', 'Governance', 'Medium', 'Alex Kim', 'Jul 10, 2025', 'Open'],
  ['Model Transparency Review', 'Credit Scoring Model', 'Transparency', 'Low', 'Taylor Chen', 'Jul 15, 2025', 'Completed'],
]

const tests = [
  ['Bias & Fairness Test', 'Applicant Screening AI', 'Fairness', 'Jun 20, 2025 10:15 AM', 'Passed', 'Alex Kim'],
  ['Prompt Injection Simulation', 'Customer Support Copilot', 'Security', 'Jun 19, 2025 4:32 PM', 'Failed', 'Jamie Wong'],
  ['Hallucination Stress Test', 'Research Assistant AI', 'Reliability', 'Jun 19, 2025 11:08 AM', 'Needs Review', 'Maria Patel'],
  ['Data Leakage Test', 'Marketing Content Gen AI', 'Security', 'Jun 18, 2025 2:45 PM', 'Passed', 'Alex Kim'],
  ['Harmful Output Review', 'Customer Support Copilot', 'Safety', 'Jun 17, 2025 9:20 AM', 'In Progress', 'Jamie Wong'],
  ['Access Control Test', 'Internal Knowledge Bot', 'Security', 'Jun 16, 2025 3:10 PM', 'Passed', 'Ravi Batra'],
]

const evidence = [
  ['Enterprise AI Policy v2.1', 'Policy', 'AI Policy Manager', 'Alex Kim', '2.1', '2h ago', 'Verified'],
  ['Bias & Fairness Report', 'Test Report', 'Fairness Evaluator', 'Jamie Lee', '1.0', '5h ago', 'Verified'],
  ['Vendor Assessment Report', 'Vendor Doc', 'Vendor Risk Tracker', 'Sam Chen', '1.2', '1d ago', 'Verified'],
  ['Data Handling Standard', 'Policy', 'Data Platform', 'Morgan Taylor', '1.3', '2d ago', 'Pending Review'],
  ['Incident Log Template', 'Procedure', 'Governance Hub', 'Alex Kim', '1.0', '3d ago', 'Pending Review'],
  ['Human Review SOP', 'Procedure', 'Review Workflow', 'Jordan Lee', '1.1', '4d ago', 'Verified'],
]

function Badge({ value }) {
  const cls = value?.includes('High') || value === 'Failed' || value === 'Missing'
    ? 'red'
    : value?.includes('Medium') || value?.includes('Partial') || value?.includes('Review') || value?.includes('Action')
      ? 'orange'
      : value?.includes('Low') || value?.includes('Passed') || value?.includes('Verified') || value?.includes('Active') || value?.includes('Completed')
        ? 'green'
        : 'blue'
  return <span className={`demo-badge ${cls}`}>{value}</span>
}

function Metric({ title, value, sub, color = 'gold', progress }) {
  return (
    <article className="metric-card">
      <div className={`metric-icon ${color}`}>●</div>
      <p>{title}</p>
      <strong>{value}</strong>
      {sub && <span>{sub}</span>}
      {progress !== undefined && <div className="progress"><i style={{ width: `${progress}%`, background: colors[color] || colors.gold }} /></div>}
    </article>
  )
}

function CTA({ title = 'Need help building this inside your organization?', onOpen }) {
  return (
    <section className="conversion-panel">
      <div>
        <h3>{title}</h3>
        <p>SIGL offers governance sprints, training, red-team testing, audit evidence support, and ongoing advisory retainers.</p>
      </div>
      <div className="cta-row">
        <button onClick={() => onOpen('Start Governance Sprint')}>Start Governance Sprint</button>
        <button onClick={() => onOpen('Explore Governance Course')}>Explore Governance Course</button>
        <button onClick={() => onOpen('Request Retainer Consultation')}>Request Retainer</button>
      </div>
    </section>
  )
}

function DataTable({ headers, rows, onRow }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr>{headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} onClick={() => onRow?.(r)}>
              {r.map((c, i) => <td key={i}>{['High','Medium','Low','Active','Open','In Review','Needs Action','Completed','Passed','Failed','Needs Review','In Progress','Verified','Pending Review'].includes(c) ? <Badge value={c} /> : c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Modal({ modal, close, openLead }) {
  if (!modal) return null
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="detail-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>×</button>
        <p className="eyebrow">SIGL Demo Detail</p>
        <h2>{modal.title}</h2>
        <p>{modal.text}</p>
        <div className="modal-grid">
          {modal.items?.map((item, idx) => <article key={idx}><span>{item[0]}</span><strong>{item[1]}</strong></article>)}
        </div>
        <button className="primary-action" onClick={() => openLead(modal.cta || 'Book AI Risk Review')}>{modal.cta || 'Book AI Risk Review'}</button>
      </div>
    </div>
  )
}

function LeadModal({ interest, close }) {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const lead = Object.fromEntries(form.entries())
    lead.serviceInterest = interest
    lead.source = 'Interactive AI Risk Dashboard Demo'
    lead.timestamp = new Date().toISOString()
    const existing = JSON.parse(localStorage.getItem('siglDemoLeads') || '[]')
    localStorage.setItem('siglDemoLeads', JSON.stringify([lead, ...existing]))
    setSent(true)
  }

  return (
    <div className="modal-backdrop">
      <div className="detail-modal lead-modal">
        <button className="modal-close" onClick={close}>×</button>
        {!sent ? <>
          <p className="eyebrow">SIGL Service Request</p>
          <h2>{interest}</h2>
          <form onSubmit={submit} className="lead-form">
            <label>Name<input name="name" required /></label>
            <label>Company<input name="company" required /></label>
            <label>Work Email<input name="email" type="email" required /></label>
            <label>Phone optional<input name="phone" /></label>
            <label>Service Interest<select name="interest" defaultValue={interest}><option>{interest}</option><option>AI Risk & Audit Readiness Review</option><option>AI Governance Sprint</option><option>Contact the Red-Team</option><option>Vendor AI Risk Review</option></select></label>
            <label>Message optional<textarea name="message" /></label>
            <button className="primary-action">Submit Request</button>
          </form>
        </> : <>
          <h2>Thank you.</h2>
          <p>SIGL received your demo request and will follow up soon.</p>
          <button className="primary-action" onClick={close}>Close</button>
        </>}
      </div>
    </div>
  )
}

function Dashboard({ openLead }) {
  return (
    <div className="page-grid">
      <Metric title="AI Risk Score" value="72/100" sub="Moderate Risk" color="gold" progress={72} />
      <Metric title="Documentation Status" value="78%" sub="Complete" color="green" progress={78} />
      <Metric title="Governance Controls" value="64%" sub="Implemented" color="blue" progress={64} />
      <Metric title="Tests Run" value="3" sub="1 High, 2 Medium" color="purple" />
      <section className="panel wide">
        <h3>Risk Posture Over Time</h3>
        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={riskTrend}><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="#D89517" strokeWidth={3} /></LineChart>
        </ResponsiveContainer>
      </section>
      <section className="panel">
        <h3>Risk Breakdown</h3>
        {['Model Transparency — 78%', 'Data Management — 72%', 'Human Oversight — 69%', 'Systematic Updates — 71%'].map(x => <p className="activity" key={x}>{x}</p>)}
      </section>
      <section className="panel wide">
        <h3>Recent Activity</h3>
        {['AI Policy reviewed — Enterprise AI Policy v2.1 — 2h ago', 'Risk test completed — Bias & Fairness Test — 5h ago', 'Governance control updated — Model Transparency Control — 1d ago', 'Evidence file uploaded — Vendor Assessment Report.pdf — 1d ago'].map(x => <p className="activity" key={x}>{x}</p>)}
      </section>
      <CTA onOpen={openLead} title="Ready to understand your real AI risk posture?" />
    </div>
  )
}

function Inventory({ setModal, openLead }) {
  const [q, setQ] = useState('')
  const filtered = systems.filter(r => r.join(' ').toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="page-grid">
      <Metric title="Total Systems" value="28" color="gold" /><Metric title="High-Risk Systems" value="7" color="red" /><Metric title="Third-Party Tools" value="16" color="blue" /><Metric title="Reviews Due" value="5" color="purple" />
      <section className="panel wide2">
        <div className="tools"><div className="chips"><button>All Systems</button><button>High Risk</button><button>Customer-Facing</button><button>Third-Party Vendor</button></div><input placeholder="Search systems..." value={q} onChange={e=>setQ(e.target.value)} /></div>
        <DataTable headers={['System Name','Owner','Vendor','Use Case','Data Sensitivity','Status','Last Review']} rows={filtered} onRow={(r)=>setModal({title:r[0], text:'System Detail Preview', cta:'Request Vendor AI Risk Review', items:[['Vendor',r[2]],['Owner',r[1]],['Risk Level',r[4]],['Recommended Step','Vendor AI Risk Review']]})} />
      </section>
      <section className="panel"><h3>Recently Added</h3>{['Claims Triage Assistant','Finance Document Parser','IT Helpdesk Copilot','Research Summarizer','Code Review Assistant'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
      <CTA onOpen={openLead} title="Need help reviewing third-party AI systems?" />
    </div>
  )
}

function RiskAssessments({ setModal, openLead }) {
  return <div className="page-grid">
    <Metric title="Open Assessments" value="14" color="gold" /><Metric title="High Severity Findings" value="27" color="red" /><Metric title="Mitigations In Progress" value="18" color="blue" /><Metric title="Assessments Completed" value="42" color="green" />
    <section className="panel wide2"><DataTable headers={['Assessment Name','System','Category','Severity','Owner','Due Date','Status']} rows={assessments} onRow={(r)=>setModal({title:r[0], text:'Assessment Detail: sample finding and mitigation preview.', cta:'Book AI Risk & Audit Readiness Review', items:[['System',r[1]],['Category',r[2]],['Severity',r[3]],['Status',r[6]]]})} /></section>
    <section className="panel"><h3>Upcoming Deadlines</h3>{['Jun 25 — Bias & Fairness Review — High','Jun 28 — Prompt Injection Review — High','Jul 02 — Vendor Risk Review — Medium','Jul 05 — Data Privacy Review — Medium'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
    <CTA onOpen={openLead} />
  </div>
}

function Tests({ setModal, openLead }) {
  return <div className="page-grid">
    <Metric title="Tests Run" value="42" color="gold" /><Metric title="High Findings" value="8" color="red" /><Metric title="Medium Findings" value="21" color="gold" /><Metric title="Pass Rate" value="71%" color="green" />
    <section className="panel wide2"><h3>Recent Test Runs</h3><DataTable headers={['Test Name','System','Type','Date Run','Result','Owner']} rows={tests} onRow={(r)=>setModal({title:r[0], text:'The system responded inconsistently when challenged with adversarial prompts. Review prompt handling, human oversight, and testing coverage.', cta:'Contact the Red-Team', items:[['System',r[1]],['Type',r[2]],['Result',r[4]],['Owner',r[5]]]})} /></section>
    <section className="panel"><h3>Latest Findings</h3>{['Prompt injection bypass — High','Model disclosed training data — High','Biased response for age group — Medium','Inconsistent citations — Medium','Toxic content not flagged — Medium'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
    <CTA onOpen={openLead} title="Want SIGL to validate your AI systems?" />
  </div>
}

function Governance({ setModal, openLead }) {
  const rows = [['Policy Management','6','5 (83%)','Implemented','↗'],['Human Oversight','7','5 (71%)','Partial','↗'],['Model Transparency','6','4 (67%)','Partial','—'],['Incident Response','5','2 (40%)','Missing','↘'],['Vendor Management','6','3 (50%)','Partial','↘']]
  return <div className="page-grid">
    <Metric title="Policies Active" value="24" color="gold" /><Metric title="Controls Implemented" value="64%" color="gold" /><Metric title="Owners Assigned" value="38" color="blue" /><Metric title="Reviews Due" value="7" color="red" />
    <section className="panel wide"><h3>Control Framework Overview</h3><DataTable headers={['Domain','Controls','Implemented','Status','Trend']} rows={rows} onRow={(r)=>setModal({title:r[0], text:'Control Gap Detail: This control impacts accountability, oversight, audit evidence, and defensible AI operations.', cta:'Start AI Governance Sprint', items:[['Controls',r[1]],['Implemented',r[2]],['Status',r[3]]]})}/></section>
    <section className="panel"><h3>At Risk Controls</h3>{['IR-02 Incident Escalation — Missing','TR-03 Model Documentation — Partial','HO-02 Human-in-the-Loop — Partial','VM-01 Vendor Due Diligence — Partial'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
    <CTA onOpen={openLead} />
  </div>
}

function Evidence({ setModal, openLead }) {
  return <div className="page-grid">
    <Metric title="Evidence Files" value="128" color="gold" /><Metric title="Policies Uploaded" value="32" color="gold" /><Metric title="Reports Attached" value="46" color="blue" /><Metric title="Collection Progress" value="72%" color="green" progress={72} />
    <section className="panel wide2"><div className="chips"><button>All Types</button><button>Policies</button><button>Test Reports</button><button>Vendor Docs</button><button>Procedures</button></div><DataTable headers={['File Name','Category','Linked System','Owner','Version','Updated','Status']} rows={evidence} /></section>
    <section className="panel"><h3>Missing Evidence</h3>{['Model Risk Management Policy — Overdue','Red Teaming Report — Overdue','Vendor Security Assessment — Due in 3 days','Data Retention & Deletion Policy — Due in 7 days'].map(x=><p onClick={()=>setModal({title:x, text:'Evidence Gap Detail: Missing records can slow procurement, audit response, and executive assurance.', cta:'Request Audit Evidence Support'})} className="activity clickable" key={x}>{x}</p>)}</section>
    <CTA onOpen={openLead} />
  </div>
}


function Reports({ setModal, openLead }) {
  const templates = ['Executive Summary','AI Risk Snapshot','Governance Maturity Report','Red-Team Findings Report','Vendor Risk Report']
  const activity = [
    ['Jan', 4],
    ['Feb', 6],
    ['Mar', 5],
    ['Apr', 8],
    ['May', 7],
    ['Jun', 10],
  ]

  return <div className="page-grid reports-layout">
    <Metric title="Executive Reports" value="18" color="gold" />
    <Metric title="Audit Reports" value="12" color="purple" />
    <Metric title="Scheduled Reports" value="7" color="blue" />
    <Metric title="Exports This Month" value="28" color="green" />

    <section className="panel reports-template-panel">
      <h3>Report Templates</h3>
      <div className="report-templates">
        {templates.map(t=><article key={t}>
          <h3>{t}</h3>
          <p>Sample report template using demo data for executive and audit-ready communication.</p>
          <button onClick={()=>setModal({title:'Report Preview Generated', text:'This demo uses sample data. Sections include executive summary, risk score, top risks, control status, and recommended next steps.', cta:'Book Report Setup Consultation'})}>Generate Report →</button>
        </article>)}
      </div>
    </section>

    <aside className="report-side-stack">
      <section className="panel report-mini-card">
        <h3>Reporting Activity</h3>
        <div className="mini-bar-chart">
          {activity.map(([month, value]) => (
            <div className="mini-bar-item" key={month}>
              <span style={{ height: `${value * 12}px` }}></span>
              <small>{month}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="panel report-mini-card">
        <h3>Scheduled Deliveries</h3>
        <div className="scheduled-row"><span>Executive Summary</span><b>Quarterly</b></div>
        <div className="scheduled-row"><span>AI Risk Snapshot</span><b>Monthly</b></div>
        <div className="scheduled-row"><span>Governance Report</span><b>Quarterly</b></div>
      </section>
    </aside>

    <section className="panel wide">
      <h3>Recent Reports</h3>
      <DataTable
        headers={['Report Name','Type','Date','Owner','Format','Status']}
        rows={[
          ['Q2 Executive Summary','Executive','Jun 24, 2025','Alex Kim','PDF','Completed'],
          ['AI Risk Snapshot – June 2025','Risk Snapshot','Jun 23, 2025','Maya Lopez','PDF','Completed'],
          ['Governance Maturity – Q2 2025','Governance','Jun 20, 2025','Jamie Wong','PDF','Completed'],
          ['Red-Team Findings – v2','Red-Team','Jun 18, 2025','Devon Brooks','PDF','In Review'],
          ['Vendor Risk Report – Acme NLP','Vendor Risk','Jun 16, 2025','Alex Kim','Excel','Completed'],
          ['Monthly Audit Report – May 2025','Audit','Jun 12, 2025','Sarah Chen','PDF','Completed'],
        ]}
      />
    </section>

    <CTA onOpen={openLead} />
  </div>
}
) {
  const templates = ['Executive Summary','AI Risk Snapshot','Governance Maturity Report','Red-Team Findings Report','Vendor Risk Report']
  return <div className="page-grid">
    <Metric title="Executive Reports" value="18" color="gold" /><Metric title="Audit Reports" value="12" color="purple" /><Metric title="Scheduled Reports" value="7" color="blue" /><Metric title="Exports This Month" value="28" color="green" />
    <section className="panel wide2 report-templates">{templates.map(t=><article key={t}><h3>{t}</h3><p>Sample report template using demo data for executive and audit-ready communication.</p><button onClick={()=>setModal({title:'Report Preview Generated', text:'This demo uses sample data. Sections include executive summary, risk score, top risks, control status, and recommended next steps.', cta:'Book Report Setup Consultation'})}>Generate Report →</button></article>)}</section>
    <CTA onOpen={openLead} />
  </div>
}

function SettingsPage({ openLead }) {
  const [toast, setToast] = useState('')
  const toggle = () => { setToast('Demo setting updated.'); setTimeout(()=>setToast(''),1800) }
  return <div className="page-grid settings-grid">
    {toast && <div className="toast">{toast}</div>}
    <section className="panel"><h3>Workspace Profile</h3><label>Workspace Name<input defaultValue="Acme Corp"/></label><label>Industry<select defaultValue="Technology"><option>Technology</option></select></label><button onClick={toggle}>Save Changes</button></section>
    <section className="panel"><h3>Team Members</h3>{['Alex Kim — Admin — Active','Jamie Davis — Analyst — Active','Sam Patel — Reviewer — Active','Lee Morgan — Viewer — Active'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
    <section className="panel"><h3>Connected Integrations</h3>{['Slack — Connected','Google Drive — Connected','Microsoft Teams — Connected','Jira — Connected','OneDrive — Connected'].map(x=><p className="activity" key={x}>{x}</p>)}</section>
    <section className="panel"><h3>Security & Access</h3><p>MFA enabled</p><p>Session Timeout: 8 hours</p><button onClick={()=>openLead('Request Retainer Consultation')}>Request Retainer Consultation</button></section>
  </div>
}

function LeadAdmin() {
  const leads = JSON.parse(localStorage.getItem('siglDemoLeads') || '[]')
  return <div className="lead-admin"><h1>Demo Lead Admin</h1>{leads.map((l,i)=><article className="panel" key={i}><strong>{l.company}</strong><p>{l.name} — {l.email}</p><p>{l.serviceInterest}</p><small>{l.timestamp}</small></article>)}</div>
}

function App() {
  const [active, setActive] = useState('Dashboard')
  const [drawer, setDrawer] = useState(false)
  const [modal, setModal] = useState(null)
  const [leadInterest, setLeadInterest] = useState('')
  const Page = useMemo(() => ({
    Dashboard: <Dashboard openLead={setLeadInterest} />,
    'AI Inventory': <Inventory setModal={setModal} openLead={setLeadInterest} />,
    'Risk Assessments': <RiskAssessments setModal={setModal} openLead={setLeadInterest} />,
    Tests: <Tests setModal={setModal} openLead={setLeadInterest} />,
    Governance: <Governance setModal={setModal} openLead={setLeadInterest} />,
    Evidence: <Evidence setModal={setModal} openLead={setLeadInterest} />,
    Reports: <Reports setModal={setModal} openLead={setLeadInterest} />,
    Settings: <SettingsPage openLead={setLeadInterest} />,
  }), [])

  if (window.location.pathname === '/lead-demo-admin') return <LeadAdmin />

  return (
    <div className="demo-app">
      <button className="hamburger" onClick={() => setDrawer(true)}><Menu /></button>
      <aside className={`demo-sidebar ${drawer ? 'open' : ''}`}>
        <button className="drawer-close" onClick={() => setDrawer(false)}><X /></button>
        <img src="/sigl-logo-exact.png" alt="SIGL" />
        <nav>{nav.map(([name, Icon]) => <button key={name} className={active===name?'active':''} onClick={()=>{setActive(name);setDrawer(false)}}><Icon size={20}/>{name}</button>)}</nav>
        <div className="gold-wave" />
      </aside>
      <main className="demo-main">
        <header className="demo-topbar">
          <div>
            <h1>{active}</h1>
            <p>{active === 'Dashboard' ? 'See how SIGL turns AI risk into audit-ready clarity.' : sectionSubtitle(active)}</p>
          </div>
          <div className="user"><Bell /><span>2</span><b>AK</b><p>Alex Kim<br/><em>Acme Corp</em></p></div>
        </header>
        {active === 'Dashboard' && <section className="demo-hero"><h2>See How SIGL Turns AI Risk Into Audit-Ready Clarity</h2><p>Explore a sample AI risk dashboard built for organizations using AI tools, copilots, chatbots, automations, or customer-facing systems.</p><button onClick={()=>setLeadInterest('Book AI Risk Review')}>Book AI Risk Review</button><button onClick={()=>setActive('Reports')}>View Services</button></section>}
        <div className="fade-page">{Page[active]}</div>
        <footer className="demo-disclaimer">This interactive dashboard uses sample data for demonstration purposes. It does not perform live scans, security testing, legal analysis, or compliance certification.</footer>
      </main>
      <Modal modal={modal} close={()=>setModal(null)} openLead={setLeadInterest}/>
      {leadInterest && <LeadModal interest={leadInterest} close={()=>setLeadInterest('')} />}
    </div>
  )
}

function sectionSubtitle(s) {
  return ({
    'AI Inventory':'Catalog all AI systems, tools, vendors, and use cases.',
    'Risk Assessments':'Review active risk reviews across AI systems and business functions.',
    Tests:'Run and track AI red-team, safety, and validation testing.',
    Governance:'Manage policies, controls, ownership, and oversight workflows.',
    Evidence:'Organize audit-ready files, reports, policies, and testing artifacts.',
    Reports:'Generate executive summaries and audit-ready reporting.',
    Settings:'Configure workspace preferences, users, permissions, alerts, and integrations.'
  })[s] || ''
}

createRoot(document.getElementById('app')).render(<App />)
