import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel, Confidence } from '../shared/UI.jsx';

const SAMPLE_MESSAGE =
  'Settlement instruction for trade TR-10482 requires confirmation.\nPlease review the settlement account and counterparty instruction prior to settlement date.';

export default function MessageIQ() {
  const [message, setMessage] = useState(SAMPLE_MESSAGE);
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Eyebrow>Agent Suite</Eyebrow>
            <Badge kind="Concept" />
          </div>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 34, margin: '0 0 8px' }}>
            MessageIQ
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI Intelligence for Operational Messages
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Interprets operational messages to extract entities, required actions, and potential risk.
          </p>
          <WorkflowChain steps={['Message', 'Classification', 'Entity Extraction', 'Risk Flag', 'Next Step']} dark />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 10, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE PROTOTYPE — DEMONSTRATION USES PREDEFINED RESPONSES, NOT REAL-TIME SWIFT INTEGRATION
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 8 }}>Operational Message</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              border: `1px solid ${COLORS.line}`,
              borderRadius: 4,
              padding: '14px 16px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: COLORS.ink,
              resize: 'vertical',
              outline: 'none',
            }}
          />
        </div>

        <button
          onClick={() => setAnalyzed(true)}
          style={{
            background: '#1E8F5F', color: COLORS.white, border: 'none', borderRadius: 3,
            padding: '11px 22px', fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', marginBottom: 24,
          }}
        >
          Analyze Message
        </button>

        {analyzed && (
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '26px', background: COLORS.white, marginBottom: 24 }}>
            <Eyebrow>AI Interpretation</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 3 }}>Message Classification</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: COLORS.ink }}>Settlement Instruction</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 3 }}>Transaction Reference</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: COLORS.ink }}>TR-10482</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 3 }}>Potential Risk</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: COLORS.amber }}>SSI validation pending</div>
              </div>
            </div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 8 }}>Entities Detected</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Counterparty', 'Settlement Account', 'Trade Reference'].map((e) => (
                <span key={e} style={{ fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", color: COLORS.accentDeep, background: '#EDF3FA', border: `1px solid ${COLORS.accent}55`, padding: '5px 10px', borderRadius: 3 }}>
                  {e}
                </span>
              ))}
            </div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 6 }}>Action Required</div>
            <div style={{ fontSize: 13.5, color: COLORS.ink, marginBottom: 20 }}>Confirm settlement instruction</div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 6 }}>Recommended Next Step</div>
            <div style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.65, marginBottom: 22 }}>
              Validate settlement instruction against approved reference data.
            </div>

            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 8 }}>Confidence</div>
            <Confidence value={89} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.paper, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '12px 16px', marginTop: 20 }}>
              <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Review Required</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Yes</span>
            </div>
          </div>
        )}

        <ExplainabilityPanel
          whatHappened="An operational message referencing TR-10482 was submitted requesting confirmation of a settlement instruction."
          why="The message language and structure match the pattern of a pre-settlement confirmation request, referencing a settlement account and counterparty instruction."
          evidence={[
            'Message references trade TR-10482 and requests confirmation before settlement date.',
            'Language pattern matches known settlement-instruction confirmation requests.',
            'No explicit SSI reference was included in the message text.',
          ]}
          action="Validate the settlement instruction against approved reference data before confirming."
          confidence={89}
          humanApproval="An operations analyst must confirm the settlement instruction is correct before responding."
        />

        <DisclaimerBar text="Illustrative prototype using a fictional message and predefined demonstration responses. Does not reflect real-time SWIFT or messaging integration." />
      </Wrap>
    </div>
  );
}
