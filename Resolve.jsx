import React from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel } from '../shared/UI.jsx';

export default function Resolve() {
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Product Concept</Eyebrow>
            <Badge kind="Prototype" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            CustodyQAI Resolve
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI Settlement Exception Investigator
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Assists operations analysts in investigating settlement exceptions — bringing evidence, reasoning, and a
            recommended action into a single audit-friendly view.
          </p>
          <WorkflowChain steps={['Exception', 'Evidence', 'Root Cause', 'Recommendation', 'Human Review', 'Resolution']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            color: '#8593A6',
            marginBottom: 10,
            letterSpacing: '0.08em',
          }}
        >
          ILLUSTRATIVE PROTOTYPE — NOT A REAL TRANSACTION
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 1,
              background: COLORS.line,
            }}
          >
            {[
              ['Trade ID', 'TR-10458'],
              ['Exception', 'SSI Mismatch'],
              ['Settlement Date', '24 August 2026'],
              ['Counterparty', 'ABC Securities'],
              ['Market', 'India'],
              ['Status', 'Investigation Required'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: COLORS.paper, padding: '14px 18px' }}>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 4 }}>{k}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: COLORS.ink, fontWeight: 600 }}>
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '28px 26px', background: COLORS.white }}>
            <Eyebrow>AI Investigation</Eyebrow>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500 }}>Probable Root Cause</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>
                Confidence: 87%
              </div>
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontStyle: 'italic',
                fontSize: 18,
                color: COLORS.ink,
                marginBottom: 22,
              }}
            >
              Counterparty settlement instruction mismatch.
            </div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500, marginBottom: 8 }}>Supporting Evidence</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.65, color: COLORS.slate, marginBottom: 24, borderLeft: `2px solid ${COLORS.line}`, paddingLeft: 14 }}>
              The settlement instruction differs from the latest available SSI reference data and shows characteristics
              similar to previously observed SSI-related exceptions.
            </div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 500, marginBottom: 10 }}>Recommended Actions</div>
            <ol style={{ margin: 0, marginBottom: 24, paddingLeft: 20, fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
              <li>Verify the latest SSI.</li>
              <li>Confirm the instruction with the counterparty.</li>
              <li>Update/rebook the instruction where required.</li>
              <li>Monitor settlement status against the market deadline.</li>
            </ol>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: COLORS.paper,
                border: `1px solid ${COLORS.line}`,
                borderRadius: 3,
                padding: '12px 16px',
              }}
            >
              <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Review Required</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Yes</span>
            </div>
          </div>
        </div>

        <ExplainabilityPanel
          whatHappened="A settlement exception was flagged: the settlement instruction for TR-10458 does not match the latest SSI reference data for the counterparty."
          why="The BIC and account details on the incoming instruction diverge from the approved SSI reference record, a pattern the system associates with SSI-related settlement breaks."
          evidence={[
            'Instruction fields differ from the latest approved SSI reference data.',
            'The discrepancy pattern matches previously observed SSI-related exceptions.',
            'Settlement date is 24 August 2026 — approaching market deadline.',
          ]}
          action="Verify the latest SSI, confirm with the counterparty, and update or rebook the instruction where required."
          confidence={87}
          humanApproval="An operations analyst must confirm the corrected SSI with the counterparty before the instruction is rebooked or settlement is released."
        />

        <DisclaimerBar />
      </Wrap>
    </div>
  );
}
