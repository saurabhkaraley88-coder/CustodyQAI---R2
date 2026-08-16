import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel } from '../shared/UI.jsx';

function ActionBtn({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? COLORS.navy : COLORS.white,
        color: active ? COLORS.white : COLORS.navy,
        border: `1px solid ${COLORS.navy}`,
        borderRadius: 3,
        padding: '9px 16px',
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontWeight: 600,
        fontSize: 12.5,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export default function ReconIQ() {
  const [investigated, setInvestigated] = useState(false);
  const [showEvidence, setShowEvidence] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [summary, setSummary] = useState(false);

  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            ReconIQ
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI Reconciliation Investigator
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Demonstrates how AI could investigate reconciliation breaks between internal books and custodian
            positions.
          </p>
          <WorkflowChain steps={['Break Detected', 'Evidence', 'Classification', 'Recommendation', 'Human Review']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 10, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE PROTOTYPE — MOCK DATA
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden', marginBottom: 22 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, background: COLORS.line }}>
            {[
              ['Security', 'ABC Industries Ltd'],
              ['ISIN', 'INE123A01016'],
              ['Internal Position', '100,000'],
              ['Custodian Position', '98,500'],
              ['Difference', '1,500'],
              ['Trade Reference', 'TR-10491'],
              ['Status', 'Open Break'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: COLORS.paper, padding: '14px 18px' }}>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 4 }}>{k}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: COLORS.ink, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          <ActionBtn active={investigated} onClick={() => setInvestigated(true)}>Investigate Break</ActionBtn>
          <ActionBtn active={showEvidence} onClick={() => { setInvestigated(true); setShowEvidence(true); }}>View Evidence</ActionBtn>
          <ActionBtn active={showActions} onClick={() => { setInvestigated(true); setShowActions(true); }}>Show Recommended Actions</ActionBtn>
          <ActionBtn active={summary} onClick={() => { setInvestigated(true); setShowEvidence(true); setShowActions(true); setSummary(true); }}>
            Generate Investigation Summary
          </ActionBtn>
        </div>

        {investigated && (
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '26px', background: COLORS.white }}>
            <Eyebrow>AI Investigation</Eyebrow>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500 }}>AI Classification</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Confidence: 91%</div>
            </div>
            <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: 18, color: COLORS.ink, marginBottom: 22 }}>
              Likely Pending Settlement
            </div>

            {showEvidence && (
              <>
                <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500, marginBottom: 8 }}>Evidence</div>
                <ul style={{ margin: 0, marginBottom: 22, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.75, color: COLORS.ink }}>
                  <li>1,500 shares remain unmatched.</li>
                  <li>Related trade TR-10491 is still open.</li>
                  <li>Trade date and settlement date align with the position discrepancy.</li>
                  <li>Historical examples indicate similar breaks were caused by pending settlement.</li>
                </ul>
              </>
            )}

            {showActions && (
              <>
                <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500, marginBottom: 10 }}>Recommended Actions</div>
                <ol style={{ margin: 0, marginBottom: 22, paddingLeft: 20, fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
                  <li>Check settlement status of TR-10491.</li>
                  <li>Validate expected settlement date.</li>
                  <li>Confirm whether partial settlement occurred.</li>
                  <li>Reconcile position after settlement confirmation.</li>
                </ol>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.paper, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '12px 16px' }}>
              <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Review Required</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Yes</span>
            </div>

            {summary && (
              <div style={{ marginTop: 22, background: COLORS.navy, borderRadius: 4, padding: '18px 20px' }}>
                <Eyebrow color="#8FB5A0">Investigation Summary</Eyebrow>
                <div style={{ fontSize: 13, color: '#EAF0F7', lineHeight: 1.7 }}>
                  Break of 1,500 shares on ABC Industries Ltd (INE123A01016) is most likely explained by pending
                  settlement of related trade TR-10491. Recommend confirming settlement status before adjusting the
                  internal position. Human review required prior to any reconciliation entry.
                </div>
              </div>
            )}
          </div>
        )}

        <ExplainabilityPanel
          whatHappened="Internal position for ABC Industries Ltd shows 100,000 shares while the custodian position shows 98,500 — a 1,500 share break."
          why="The difference aligns closely with an open related trade (TR-10491) that has not yet reflected in the custodian position, a pattern historically associated with pending settlement."
          evidence={[
            '1,500 shares remain unmatched.',
            'Related trade TR-10491 is still open.',
            'Trade date and settlement date align with the position discrepancy.',
            'Historical examples indicate similar breaks were caused by pending settlement.',
          ]}
          action="Check the settlement status of TR-10491 and reconcile the position once settlement is confirmed."
          confidence={91}
          humanApproval="A reconciliation analyst must confirm settlement status before any adjustment is posted."
        />

        <DisclaimerBar />
      </Wrap>
    </div>
  );
}
