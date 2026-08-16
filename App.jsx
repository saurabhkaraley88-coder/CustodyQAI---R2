import React, { useState } from 'react';
import { COLORS, fontImport } from './shared/theme.js';
import { Wrap, Eyebrow, SectionHeading } from './shared/UI.jsx';
import { AgentGrid, AgentEcosystemDiagram } from './shared/AgentSuiteBlock.jsx';
import HumanInLoop from './shared/HumanInLoop.jsx';

import Resolve from './agents/Resolve.jsx';
import ReconIQ from './agents/ReconIQ.jsx';
import CAIntelligence from './agents/CAIntelligence.jsx';
import SSIGuardian from './agents/SSIGuardian.jsx';
import MessageIQ from './agents/MessageIQ.jsx';
import ExceptionPrioritizer from './agents/ExceptionPrioritizer.jsx';
import OpsKnowledgeAgent from './agents/OpsKnowledgeAgent.jsx';
import ClientOpsAI from './agents/ClientOpsAI.jsx';

import AgentSuite from './pages/AgentSuite.jsx';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'resolve', label: 'Resolve' },
  { id: 'agentsuite', label: 'Agent Suite' },
  { id: 'how', label: 'How It Works' },
  { id: 'explainable', label: 'Explainable AI' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

/* ---------- WORKFLOW DIAGRAM (signature element) ---------- */
function WorkflowStrip() {
  const steps = ['Trade', 'Settlement', 'Exception', 'AI Investigation', 'Root Cause', 'Recommended Action', 'Resolution'];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0, padding: '28px 0' }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: i === 3 ? COLORS.navy : '#5C6B80',
              background: i === 3 ? COLORS.white : 'transparent',
              border: i === 3 ? `1px solid ${COLORS.accent}` : '1px solid transparent',
              padding: i === 3 ? '6px 12px' : '6px 2px',
              borderRadius: 3,
              fontWeight: i === 3 ? 600 : 400,
              whiteSpace: 'nowrap',
            }}
          >
            {s}
          </div>
          {i < steps.length - 1 && <div style={{ width: 20, height: 1, background: '#3A4A63', margin: '0 4px', flexShrink: 0 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------- HOME PAGE ---------- */
function Home({ go }) {
  const problemCards = [
    ['Settlement Exceptions', 'Identify and investigate settlement issues.'],
    ['Reconciliation Breaks', 'Help classify breaks and identify probable causes.'],
    ['Corporate Actions', 'Assist teams in interpreting announcements and identifying operational impact.'],
    ['Operational Knowledge', 'Help teams retrieve relevant procedures, historical cases, and operational knowledge.'],
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '90px 28px 50px' }}>
          <Eyebrow>CustodyQAI</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 44, lineHeight: 1.2, maxWidth: 720, margin: '0 0 22px' }}>
            Explainable Agentic AI for Custody &amp; Post-Trade Operations
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#B7C2D1', maxWidth: 560, marginBottom: 34 }}>
            CustodyQAI is building domain-aware AI agents designed to investigate exceptions, understand
            operational workflows, and support decision-making across custody and post-trade operations.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 20 }}>
            <button onClick={() => go('resolve')} style={btn(COLORS.accent, COLORS.white)}>Explore CustodyQAI Resolve</button>
            <button onClick={() => go('agentsuite')} style={btnOutline}>Explore the Agent Suite</button>
          </div>
          <div style={{ borderTop: '1px solid #22314A', overflowX: 'auto' }}>
            <WorkflowStrip />
          </div>
        </Wrap>
      </div>

      {/* Problem */}
      <Wrap style={{ padding: '80px 28px' }}>
        <SectionHeading
          eyebrow="The Problem"
          title="Custody Operations Are Built Around Exceptions"
          sub="Custody operations involve complex workflows, multiple systems, market infrastructures, counterparties, instructions, messages, and operational controls. When an exception occurs, operations teams may need to investigate information across multiple sources before determining what happened and what action should be taken. CustodyQAI is exploring how explainable AI agents can assist with this investigation process."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 1, background: COLORS.line }}>
          {problemCards.map(([t, d]) => (
            <div key={t} style={{ background: COLORS.white, padding: '26px 24px' }}>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 15, color: COLORS.ink, marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: COLORS.slate }}>{d}</div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Vision */}
      <div style={{ background: COLORS.paper }}>
        <Wrap style={{ padding: '80px 28px' }}>
          <SectionHeading
            eyebrow="Our Approach"
            title="From Workflow Automation to Workflow Intelligence"
            sub="Traditional automation follows predefined rules. CustodyQAI explores a different approach: AI agents that can understand context, retrieve relevant information, reason through an operational problem, explain their conclusions, and recommend the next step while keeping humans in control."
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0 }}>
            {['Data', 'Context', 'Reasoning', 'Recommendation', 'Human Review', 'Action'].map((s, i, arr) => (
              <React.Fragment key={s}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.navy, background: COLORS.white, border: `1px solid ${COLORS.line}`, padding: '8px 14px', borderRadius: 3 }}>
                  {s}
                </div>
                {i < arr.length - 1 && <div style={{ width: 18, height: 1, background: '#C4CDD9', margin: '0 6px' }} />}
              </React.Fragment>
            ))}
          </div>
        </Wrap>
      </div>

      {/* Agent Suite Overview */}
      <Wrap style={{ padding: '80px 28px' }}>
        <SectionHeading
          eyebrow="Explore the CustodyQAI Agent Suite"
          title="One Platform. Multiple Operational Intelligence Agents."
          sub="CustodyQAI is exploring a portfolio of specialized AI agents across settlement, reconciliation, corporate actions, exception management, operational knowledge, and client servicing. CustodyQAI Resolve is the first working demonstration; the remaining agents are concept demonstrations."
        />
        <div style={{ marginBottom: 48, overflowX: 'auto', padding: '10px 0' }}>
          <AgentEcosystemDiagram go={go} />
        </div>
        <AgentGrid go={go} />
      </Wrap>
    </div>
  );
}

/* ---------- HOW IT WORKS PAGE ---------- */
function HowItWorks() {
  const steps = [
    ['Ingest', 'Exception data, operational files, messages, reference data, and approved knowledge sources.'],
    ['Understand', 'Extract relevant trade, settlement, counterparty, market, and exception information.'],
    ['Retrieve', 'Retrieve relevant SOPs, historical cases, reference information, and operational knowledge.'],
    ['Reason', 'AI evaluates available evidence and identifies probable causes.'],
    ['Recommend', 'The agent provides explainable recommendations while keeping the human operator in control.'],
  ];
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <Eyebrow>Architecture</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 32, margin: 0 }}>
            How CustodyQAI Agents Work
          </h1>
        </Wrap>
      </div>
      <Wrap style={{ padding: '60px 28px' }}>
        {steps.map(([t, d], i) => (
          <div key={t} style={{ display: 'flex', gap: 24, padding: '24px 0', borderBottom: i < steps.length - 1 ? `1px solid ${COLORS.line}` : 'none' }}>
            <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 26, color: COLORS.accent, fontWeight: 500, width: 48, flexShrink: 0 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 17, color: COLORS.ink, marginBottom: 6 }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.65, color: COLORS.slate, maxWidth: 560 }}>{d}</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 40, padding: '20px 24px', background: COLORS.paper, borderRadius: 4, border: `1px solid ${COLORS.line}` }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.navy }}>
            {['Human', 'AI Agent', 'Evidence', 'Recommendation', 'Human Decision'].map((s, i, arr) => (
              <React.Fragment key={s}>
                <span style={{ background: COLORS.white, border: `1px solid ${COLORS.line}`, padding: '6px 12px', borderRadius: 3 }}>{s}</span>
                {i < arr.length - 1 && <span style={{ color: COLORS.slateLight }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}

/* ---------- EXPLAINABLE AI PAGE ---------- */
function Explainable() {
  const questions = [
    'What happened?',
    'Why does the AI think this happened?',
    'What evidence was considered?',
    'What action is recommended?',
    'How confident is the recommendation?',
    'When should a human override the recommendation?',
  ];
  const principles = ['Human-in-the-loop', 'Explainability', 'Auditability', 'Operational controls'];
  const security = [
    'Data confidentiality', 'Human oversight', 'Explainability', 'Audit trails', 'Role-based access',
    'Data minimization', 'Controlled knowledge sources', 'Model governance', 'Confidence-based recommendations',
    'No autonomous execution without approval',
  ];
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <Eyebrow>Explainability</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 32, margin: '0 0 16px' }}>
            AI That Explains Its Reasoning
          </h1>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 620, lineHeight: 1.7 }}>
            In regulated financial environments, an AI recommendation should not simply produce an answer.
            The user should be able to understand the reasoning behind it.
          </p>
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.1em', color: COLORS.accent, marginBottom: 14 }}>
            EVERY AGENT FOLLOWS THIS CHAIN
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: COLORS.navy }}>
            {['Input', 'Context', 'Evidence', 'AI Reasoning', 'Recommendation', 'Human Review', 'Action'].map((s, i, arr) => (
              <React.Fragment key={s}>
                <span style={{ background: COLORS.paper, border: `1px solid ${COLORS.line}`, padding: '7px 13px', borderRadius: 3 }}>{s}</span>
                {i < arr.length - 1 && <span style={{ color: COLORS.slateLight }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          style={{
            fontFamily: "'IBM Plex Serif', serif",
            fontStyle: 'italic',
            fontSize: 19,
            color: COLORS.ink,
            borderLeft: `3px solid ${COLORS.accent}`,
            paddingLeft: 16,
            marginBottom: 50,
          }}
        >
          AI recommends. Humans remain accountable.
        </div>

        <SectionHeading title="The Reusable Explainability Panel" sub="Every agent demonstration ends with a panel answering the same six questions, so the pattern stays consistent regardless of which agent a person is using." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 50 }}>
          {questions.map((q) => (
            <div key={q} style={{ borderLeft: `2px solid ${COLORS.accent}`, paddingLeft: 14 }}>
              <div style={{ fontSize: 14.5, color: COLORS.ink, fontWeight: 500 }}>{q}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 50 }}>
          {principles.map((p) => (
            <span key={p} style={{ fontSize: 13, fontWeight: 600, color: COLORS.accentDeep, background: '#EDF3FA', border: `1px solid ${COLORS.accent}55`, padding: '8px 14px', borderRadius: 3 }}>
              {p}
            </span>
          ))}
        </div>

        <SectionHeading eyebrow="Designed for Regulated Financial Environments" title="Security & Trust Principles" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 24 }}>
          {security.map((s) => (
            <div key={s} style={{ fontSize: 13.5, color: COLORS.slate, display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ color: COLORS.accent }}>—</span> {s}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13.5, color: COLORS.slateLight, fontStyle: 'italic', maxWidth: 620, lineHeight: 1.6 }}>
          Future enterprise deployments would require appropriate security, regulatory, data governance, and
          technology controls based on the client's environment.
        </p>
      </Wrap>

      <HumanInLoop />
    </div>
  );
}

/* ---------- ABOUT PAGE ---------- */
function About() {
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <Eyebrow>About CustodyQAI</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 32, margin: 0 }}>
            Building AI for the Workflows Behind Custody
          </h1>
        </Wrap>
      </div>
      <Wrap style={{ padding: '60px 28px', maxWidth: 720 }}>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: COLORS.ink, marginBottom: 20 }}>
          CustodyQAI is an independent product initiative focused on exploring how explainable and agentic AI can
          improve custody and post-trade operations. The initiative combines deep custody domain understanding with
          modern AI and technology to explore practical applications across settlement, reconciliation, corporate
          actions, exception management, and operational transformation.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.85, color: COLORS.ink, marginBottom: 40 }}>
          The objective is not to apply AI simply because it is available. The objective is to identify operational
          problems where AI can create measurable business value while preserving human oversight, explainability,
          and operational controls.
        </p>

        <SectionHeading eyebrow="India-First, Globally Capable" title="Built from Custody Domain Understanding" />
        <p style={{ fontSize: 14.5, lineHeight: 1.8, color: COLORS.slate, marginBottom: 28 }}>
          The product initiative is informed by extensive experience in custody and capital markets operations.
          The initial product exploration considers operational workflows relevant to Indian capital markets, while
          keeping the architecture capable of supporting international custody environments.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.navy }}>
          {['Broker', 'Exchange / Clearing', 'Custodian', 'Depository', 'Client'].map((s, i, arr) => (
            <React.Fragment key={s}>
              <span style={{ background: COLORS.paper, border: `1px solid ${COLORS.line}`, padding: '6px 12px', borderRadius: 3 }}>{s}</span>
              {i < arr.length - 1 && <span style={{ color: COLORS.slateLight }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </Wrap>
    </div>
  );
}

/* ---------- CONTACT PAGE ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 32, margin: '0 0 14px' }}>
            Let's Talk Custody Technology
          </h1>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 560, lineHeight: 1.7 }}>
            Working on custody transformation, post-trade AI, settlement automation, reconciliation intelligence,
            corporate actions, exception management, or AI agents for financial operations.
          </p>
        </Wrap>
      </div>
      <Wrap style={{ padding: '60px 28px', maxWidth: 520 }}>
        {sent ? (
          <div style={{ fontSize: 15, color: COLORS.accentDeep }}>Thank you — your message has been noted.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {['Name', 'Company', 'Role', 'Email'].map((label) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12.5, color: COLORS.slate, display: 'block', marginBottom: 6 }}>{label}</label>
                <input
                  type={label === 'Email' ? 'email' : 'text'}
                  required
                  style={{ width: '100%', border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '10px 12px', fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: COLORS.ink, outline: 'none' }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 22 }}>
              <label style={{ fontSize: 12.5, color: COLORS.slate, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea
                required
                rows={4}
                style={{ width: '100%', border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '10px 12px', fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: COLORS.ink, outline: 'none', resize: 'vertical' }}
              />
            </div>
            <button type="submit" style={btn(COLORS.navy, COLORS.white)}>Connect</button>
          </form>
        )}
      </Wrap>
    </div>
  );
}

function btn(bg, color) {
  return {
    background: bg, color, border: 'none', borderRadius: 3, padding: '13px 24px',
    fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: 'pointer',
  };
}
const btnOutline = {
  background: 'transparent', color: COLORS.white, border: '1px solid #3A4A63', borderRadius: 3,
  padding: '13px 24px', fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500, fontSize: 14, cursor: 'pointer',
};

/* ---------- APP SHELL ---------- */
export default function App() {
  const [page, setPage] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const go = (p) => {
    setPage(p);
    setMobileNavOpen(false);
    window.scrollTo(0, 0);
  };

  const pages = {
    home: <Home go={go} />,
    resolve: <Resolve />,
    agentsuite: <AgentSuite go={go} />,
    reconiq: <ReconIQ />,
    'ca-intelligence': <CAIntelligence />,
    'ssi-guardian': <SSIGuardian />,
    messageiq: <MessageIQ />,
    'exception-prioritizer': <ExceptionPrioritizer />,
    'ops-knowledge': <OpsKnowledgeAgent />,
    'clientops-ai': <ClientOpsAI />,
    how: <HowItWorks />,
    explainable: <Explainable />,
    about: <About />,
    contact: <Contact />,
  };

  const activePage = pages[page] ? page : 'home';

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: COLORS.ink, background: COLORS.white, minHeight: '100vh' }}>
      <style>{`
        ${fontImport}
        * { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; }
        .navlink { transition: color 0.15s ease; }
        input:focus, textarea:focus { border-color: ${COLORS.accent} !important; }
        .desktop-nav { display: flex; }
        .mobile-nav-toggle { display: none; }
        @media (max-width: 760px) {
          .desktop-nav { display: none; }
          .mobile-nav-toggle { display: block; }
        }
      `}</style>

      {/* Nav */}
      <div style={{ borderBottom: `1px solid ${COLORS.line}`, position: 'sticky', top: 0, background: COLORS.white, zIndex: 10 }}>
        <Wrap style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 28px', flexWrap: 'wrap', gap: 12 }}>
          <div onClick={() => go('home')} style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 600, fontSize: 17, color: COLORS.navy, cursor: 'pointer', letterSpacing: '-0.01em' }}>
            CustodyQAI
          </div>

          <div className="desktop-nav" style={{ gap: 22, flexWrap: 'wrap' }}>
            {NAV.map((n) => (
              <div
                key={n.id}
                className="navlink"
                onClick={() => go(n.id)}
                style={{
                  fontSize: 13,
                  fontWeight: activePage === n.id ? 600 : 500,
                  color: activePage === n.id ? COLORS.accent : COLORS.slate,
                  cursor: 'pointer',
                }}
              >
                {n.label}
              </div>
            ))}
          </div>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileNavOpen((v) => !v)}
            style={{ background: 'none', border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '6px 10px', fontSize: 13, color: COLORS.navy, cursor: 'pointer' }}
          >
            {mobileNavOpen ? 'Close' : 'Menu'}
          </button>
        </Wrap>

        {mobileNavOpen && (
          <div style={{ borderTop: `1px solid ${COLORS.line}`, padding: '10px 28px 16px' }}>
            {NAV.map((n) => (
              <div
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  fontSize: 14,
                  fontWeight: activePage === n.id ? 600 : 500,
                  color: activePage === n.id ? COLORS.accent : COLORS.slate,
                  cursor: 'pointer',
                  padding: '10px 0',
                  borderBottom: `1px solid ${COLORS.line}`,
                }}
              >
                {n.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {pages[activePage]}

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${COLORS.line}`, background: COLORS.paper }}>
        <Wrap style={{ padding: '30px 28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12.5, color: COLORS.slateLight }}>CustodyQAI — a product initiative in early-stage exploration.</div>
          <div style={{ fontSize: 12.5, color: COLORS.slateLight }}>Explainable Agentic AI for Custody &amp; Post-Trade Operations</div>
        </Wrap>
      </div>
    </div>
  );
}
