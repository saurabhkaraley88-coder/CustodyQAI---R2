import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar } from '../shared/UI.jsx';

const VARIANTS = {
  default:
    'We are currently reviewing the settlement instructions associated with the transaction and have initiated the necessary validation with the relevant counterparty. We will provide an update once the instruction is confirmed.',
  concise:
    'Your trade is delayed due to a settlement instruction check. We are validating it with the counterparty now and will update you shortly.',
  formal:
    'We wish to advise that settlement of the referenced transaction remains pending due to an identified discrepancy in the settlement instructions. Validation with the relevant counterparty has been initiated, and a further update will be provided upon confirmation.',
};

export default function ClientOpsAI() {
  const [variant, setVariant] = useState('default');
  const [approved, setApproved] = useState(false);

  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            ClientOps AI
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI-Assisted Custody Client Servicing
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Drafts client-ready responses to custody servicing queries for human review and approval before sending.
          </p>
          <WorkflowChain steps={['Client Query', 'Internal Analysis', 'Draft Response', 'Human Approval']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 16, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE PROTOTYPE — FICTIONAL CLIENT QUERY
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '18px 20px', marginBottom: 20, background: COLORS.paper }}>
          <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 6 }}>Client Query</div>
          <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: 16, color: COLORS.ink }}>
            "Why has my trade not settled?"
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 20 }}>
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '20px' }}>
            <Eyebrow>Internal AI Analysis</Eyebrow>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.ink }}>
              Settlement remains pending due to an SSI mismatch identified during pre-settlement validation.
            </div>
          </div>
          <div style={{ border: `1px solid ${COLORS.accent}55`, background: '#EDF3FA', borderRadius: 4, padding: '20px' }}>
            <Eyebrow>Client-Ready Response</Eyebrow>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.ink }}>{VARIANTS[variant]}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 22 }}>
          <button onClick={() => setVariant('default')} style={btnStyle(variant === 'default')}>Regenerate</button>
          <button onClick={() => setVariant('concise')} style={btnStyle(variant === 'concise')}>Make More Concise</button>
          <button onClick={() => setVariant('formal')} style={btnStyle(variant === 'formal')}>Make More Formal</button>
          <button
            onClick={() => setApproved(true)}
            style={{ ...btnStyle(false), background: '#1E8F5F', color: COLORS.white, borderColor: '#1E8F5F' }}
          >
            Approve Response
          </button>
        </div>

        {approved && (
          <div style={{ border: `1px solid ${COLORS.green}55`, background: '#EEF3F0', borderRadius: 4, padding: '14px 18px', marginBottom: 20, fontSize: 13.5, color: '#1F5C44' }}>
            Prototype — No communication has been sent.
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.paper, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '12px 16px', marginBottom: 24 }}>
          <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Approval Required</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Yes</span>
        </div>

        <DisclaimerBar text="Illustrative prototype using a fictional client query. No client communication is sent from this demonstration." />
      </Wrap>
    </div>
  );
}

function btnStyle(active) {
  return {
    background: active ? COLORS.navy : COLORS.white,
    color: active ? COLORS.white : COLORS.navy,
    border: `1px solid ${COLORS.navy}`,
    borderRadius: 3,
    padding: '9px 16px',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    fontSize: 12.5,
    cursor: 'pointer',
  };
}
