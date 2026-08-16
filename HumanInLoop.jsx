import React from 'react';
import { COLORS } from './theme.js';
import { Wrap, SectionHeading } from './UI.jsx';

export default function HumanInLoop() {
  const aiDoes = ['Investigate', 'Classify', 'Retrieve', 'Summarize', 'Prioritize', 'Recommend', 'Draft'];
  const humanDoes = [
    'Approval',
    'Exception override',
    'Financially material actions',
    'External communications',
    'System updates',
    'Final operational decisions',
  ];
  return (
    <div style={{ background: COLORS.paper }}>
      <Wrap style={{ padding: '70px 28px' }}>
        <SectionHeading eyebrow="Human-in-the-Loop" title="AI Assistance, Human Control" />
        <p style={{ fontSize: 14.5, lineHeight: 1.8, color: COLORS.slate, maxWidth: 680, marginBottom: 32 }}>
          CustodyQAI is designed around the principle that AI should assist operational teams rather than blindly
          execute financially material actions.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 30 }}>
          <div style={{ background: COLORS.white, border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '22px 22px' }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, color: COLORS.accentDeep, marginBottom: 12 }}>
              AI may
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: COLORS.ink, lineHeight: 1.9 }}>
              {aiDoes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: COLORS.navy, borderRadius: 4, padding: '22px 22px' }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, color: '#8FB5A0', marginBottom: 12 }}>
              Human operators remain responsible for
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#EAF0F7', lineHeight: 1.9 }}>
              {humanDoes.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Serif', serif",
            fontStyle: 'italic',
            fontSize: 17,
            color: COLORS.ink,
            borderLeft: `3px solid ${COLORS.accent}`,
            paddingLeft: 16,
          }}
        >
          AI recommends. Humans remain accountable.
        </div>
      </Wrap>
    </div>
  );
}
