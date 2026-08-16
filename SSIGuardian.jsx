import React from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel } from '../shared/UI.jsx';

export default function SSIGuardian() {
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            SSI Guardian
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI Standing Settlement Instruction Validator
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Demonstrates comparison of two fictional SSI sources to flag potential mismatches before settlement
            release.
          </p>
          <WorkflowChain steps={['Instruction Received', 'Comparison', 'Risk Detection', 'Recommendation', 'Human Review']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 10, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE PROTOTYPE — FICTIONAL SSI DATA
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '20px' }}>
            <div style={{ fontSize: 12, color: COLORS.slateLight, marginBottom: 12, fontWeight: 600 }}>SOURCE A — Counterparty Instruction</div>
            {[['BIC', 'ABCXINBBXXX', true], ['Account', '987654321', false], ['Settlement Location', 'Mumbai', false]].map(([k, v, flag]) => (
              <div key={k} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: COLORS.slateLight }}>{k}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, fontWeight: 600, color: flag ? COLORS.red : COLORS.ink }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '20px' }}>
            <div style={{ fontSize: 12, color: COLORS.slateLight, marginBottom: 12, fontWeight: 600 }}>SOURCE B — Custodian SSI Record</div>
            {[['BIC', 'ABCXINBB123', true], ['Account', '987654321', false], ['Settlement Location', 'Mumbai', false]].map(([k, v, flag]) => (
              <div key={k} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: COLORS.slateLight }}>{k}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, fontWeight: 600, color: flag ? COLORS.red : COLORS.ink }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ border: `1px solid ${COLORS.red}55`, background: '#FBF2F0', borderRadius: 4, padding: '22px', marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 15, color: COLORS.red }}>
              Potential SSI Mismatch — Risk: HIGH
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.red }}>Confidence: 96%</div>
          </div>
          <div style={{ display: 'flex', gap: 24, marginBottom: 14, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, color: COLORS.slateLight }}>Mismatched Field</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.ink }}>BIC</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: COLORS.slateLight }}>Expected</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.red }}>ABCXINBBXXX</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: COLORS.slateLight }}>Reference</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.red }}>ABCXINBB123</div>
            </div>
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.65, color: COLORS.ink, marginBottom: 16 }}>
            The counterparty BIC differs from the currently available reference SSI. The instruction should be
            validated before settlement release.
          </div>
          <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 8 }}>Recommended Actions</div>
          <ol style={{ margin: 0, marginBottom: 16, paddingLeft: 20, fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
            <li>Verify current SSI.</li>
            <li>Contact authorized counterparty.</li>
            <li>Validate against approved reference data.</li>
            <li>Do not release based solely on the AI recommendation.</li>
          </ol>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.white, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '12px 16px' }}>
            <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Review</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.red, fontWeight: 700 }}>REQUIRED</span>
          </div>
        </div>

        <ExplainabilityPanel
          whatHappened="The counterparty instruction's BIC (ABCXINBBXXX) does not match the custodian's currently held SSI reference BIC (ABCXINBB123)."
          why="A BIC mismatch on an otherwise matching instruction (same account, same settlement location) is a high-confidence indicator of either a stale reference record or an incorrect incoming instruction."
          evidence={[
            'Account number and settlement location match across both sources.',
            'BIC differs between counterparty instruction and custodian SSI record.',
            'This pattern has previously indicated SSI data requiring revalidation.',
          ]}
          action="Verify the current SSI directly with the authorized counterparty before releasing settlement."
          confidence={96}
          humanApproval="Settlement must not be released based solely on this AI flag — a human must verify and confirm the correct SSI."
        />

        <DisclaimerBar text="Illustrative prototype using fictional SSI data. CustodyQAI does not claim direct integration with actual custodian SSI databases." />
      </Wrap>
    </div>
  );
}
