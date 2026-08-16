import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar } from '../shared/UI.jsx';

const QUESTIONS = [
  {
    q: 'What should an operations analyst check when a settlement fails because of an SSI mismatch?',
    steps: [
      'Validate current SSI.',
      'Compare counterparty instruction with approved reference data.',
      'Check account and BIC details.',
      'Review settlement status.',
      'Check historical related exceptions.',
      'Escalate according to applicable SOP.',
    ],
    sources: ['Settlement Operations SOP v3.2', 'SSI Operations Guide', 'Historical Case #1842'],
  },
  {
    q: 'What should be checked before resolving a reconciliation break?',
    steps: [
      'Confirm the break amount and affected security.',
      'Check for related open trades or pending settlements.',
      'Compare trade date and settlement date against the position discrepancy.',
      'Review recent corporate action activity on the security.',
      'Check historical break patterns for the same counterparty or custodian.',
      'Document findings before posting any reconciliation adjustment.',
    ],
    sources: ['Reconciliation Operations SOP v2.1', 'Break Investigation Guide', 'Historical Case #1697'],
  },
];

export default function OpsKnowledgeAgent() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            Ops Knowledge Agent
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            Ask CustodyQAI
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            A knowledge-retrieval style agent that helps operations teams find relevant SOPs, historical cases, and
            operational guidance.
          </p>
          <WorkflowChain steps={['Question', 'Retrieval', 'Structured Answer', 'Sources Cited']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 20, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE KNOWLEDGE BASE — PROTOTYPE RAG DEMONSTRATION
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {QUESTIONS.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                textAlign: 'left',
                background: active === i ? COLORS.navy : COLORS.white,
                color: active === i ? COLORS.white : COLORS.ink,
                border: `1px solid ${COLORS.line}`,
                borderRadius: 4,
                padding: '14px 18px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              {item.q}
            </button>
          ))}
        </div>

        {active !== null && (
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '26px', background: COLORS.white, marginBottom: 24 }}>
            <Eyebrow>Structured Answer</Eyebrow>
            <ol style={{ margin: 0, marginBottom: 22, paddingLeft: 20, fontSize: 13.5, lineHeight: 1.95, color: COLORS.ink }}>
              {QUESTIONS[active].steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <Eyebrow>Knowledge Sources Used</Eyebrow>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {QUESTIONS[active].sources.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 12,
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: COLORS.accentDeep,
                    background: '#EDF3FA',
                    border: `1px solid ${COLORS.accent}55`,
                    padding: '6px 12px',
                    borderRadius: 3,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <DisclaimerBar text="Illustrative knowledge base. Sources shown are fictional examples and do not represent real internal bank or custodian documents." />
      </Wrap>
    </div>
  );
}
