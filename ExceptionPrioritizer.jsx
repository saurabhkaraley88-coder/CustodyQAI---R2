import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel } from '../shared/UI.jsx';

const EXCEPTIONS = [
  { id: 'TR-10482', type: 'SSI Mismatch', risk: 'High', sla: '1h 20m', priority: 1 },
  { id: 'TR-10476', type: 'Reconciliation Break', risk: 'Medium', sla: '4h', priority: 2 },
  { id: 'CA-9082', type: 'Corporate Action', risk: 'Medium', sla: '1 day', priority: 3 },
  { id: 'TR-10391', type: 'Settlement Exception', risk: 'Low', sla: '2 days', priority: 4 },
];

const RISK_COLOR = { High: COLORS.red, Medium: COLORS.amber, Low: COLORS.green };

export default function ExceptionPrioritizer() {
  const [filter, setFilter] = useState('All');
  const [explain, setExplain] = useState(false);

  const filtered = EXCEPTIONS.filter((e) => filter === 'All' || e.risk === filter);

  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            Exception Prioritizer
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI-Powered Exception Command Center
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Prioritizes open exceptions by risk, SLA proximity, and historical pattern. The AI recommends
            prioritization — it does not autonomously change settlement instructions or execute transactions.
          </p>
          <WorkflowChain steps={['Exceptions', 'Risk Scoring', 'SLA Analysis', 'Priority Ranking', 'Explanation']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 16, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE PROTOTYPE — MOCK EXCEPTION QUEUE
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          {['All', 'High', 'Medium', 'Low'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? COLORS.navy : COLORS.white,
                color: filter === f ? COLORS.white : COLORS.navy,
                border: `1px solid ${COLORS.navy}`,
                borderRadius: 3,
                padding: '7px 14px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              {f === 'All' ? 'All' : `${f} Risk`}
            </button>
          ))}
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 0.8fr 0.8fr 0.8fr', background: COLORS.navy, padding: '10px 18px', gap: 8 }}>
            {['ID', 'Type', 'Risk', 'SLA', 'Priority'].map((h) => (
              <div key={h} style={{ fontSize: 11, color: '#8FB5A0', fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.05em' }}>
                {h.toUpperCase()}
              </div>
            ))}
          </div>
          {filtered.map((e) => (
            <div
              key={e.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.4fr 0.8fr 0.8fr 0.8fr',
                padding: '14px 18px',
                gap: 8,
                borderTop: `1px solid ${COLORS.line}`,
                alignItems: 'center',
                background: e.priority === 1 ? '#FBF2F0' : COLORS.white,
              }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: COLORS.ink }}>{e.id}</div>
              <div style={{ fontSize: 13, color: COLORS.slate }}>{e.type}</div>
              <div>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: RISK_COLOR[e.risk], fontFamily: "'IBM Plex Mono', monospace" }}>{e.risk}</span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: COLORS.slate }}>{e.sla}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.navy }}>#{e.priority}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExplain(true)}
          style={{
            background: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: 3,
            padding: '11px 22px', fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', marginBottom: 24,
          }}
        >
          Explain Priority — Why is TR-10482 Priority #1?
        </button>

        {explain && (
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '22px 24px', background: COLORS.white, marginBottom: 24 }}>
            <Eyebrow>AI Explanation</Eyebrow>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.85, color: COLORS.ink }}>
              <li>High settlement risk</li>
              <li>Approaching operational deadline (SLA: 1h 20m)</li>
              <li>Counterparty instruction discrepancy</li>
              <li>Similar historical exceptions resulted in settlement delays</li>
            </ul>
          </div>
        )}

        <ExplainabilityPanel
          whatHappened="TR-10482 (SSI Mismatch) was ranked Priority #1 among four open exceptions."
          why="It combines the highest risk classification with the closest SLA deadline and a discrepancy pattern historically linked to settlement delays."
          evidence={[
            'Risk classified as High.',
            'SLA window of 1h 20m is the narrowest among open exceptions.',
            'Counterparty instruction discrepancy detected.',
            'Similar historical exceptions resulted in settlement delays.',
          ]}
          action="Route TR-10482 to an operations analyst first, ahead of the other three open exceptions."
          confidence={92}
          humanApproval="The AI recommends the queue order; analysts remain responsible for working and resolving each exception."
        />

        <DisclaimerBar text="Illustrative prototype using a mock exception queue. The AI recommends prioritization only — it does not execute transactions or override settlement instructions." />
      </Wrap>
    </div>
  );
}
