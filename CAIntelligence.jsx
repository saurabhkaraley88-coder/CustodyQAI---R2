import React, { useState } from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow, Badge, WorkflowChain, DisclaimerBar, ExplainabilityPanel } from '../shared/UI.jsx';

export default function CAIntelligence() {
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
            CA Intelligence
          </h1>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#8FB5A0', marginBottom: 14 }}>
            AI Corporate Actions Analyst
          </div>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 600, lineHeight: 1.7, marginBottom: 18 }}>
            Demonstrates AI extraction and interpretation of a fictional corporate action announcement.
          </p>
          <WorkflowChain
            steps={['Notice', 'AI Extraction', 'Classification', 'Eligibility', 'Entitlement', 'Operational Actions']}
            dark
          />
        </Wrap>
      </div>

      <Wrap style={{ padding: '60px 28px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8593A6', marginBottom: 10, letterSpacing: '0.08em' }}>
          ILLUSTRATIVE CORPORATE ACTION — FICTIONAL DATA
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden', marginBottom: 22 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, background: COLORS.line }}>
            {[
              ['Company', 'ABC Industries Ltd'],
              ['Event', 'Bonus Issue'],
              ['Ratio', '1:2'],
              ['Record Date', '15 September 2026'],
              ['Ex-Date', '14 September 2026'],
              ['Election Required', 'No'],
              ['Client Holding', '50,000 shares'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: COLORS.paper, padding: '14px 18px' }}>
                <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 4 }}>{k}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: COLORS.ink, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {!analyzed && (
          <button
            onClick={() => setAnalyzed(true)}
            style={{
              background: '#1E8F5F', color: COLORS.white, border: 'none', borderRadius: 3,
              padding: '11px 22px', fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', marginBottom: 24,
            }}
          >
            Run AI Extraction
          </button>
        )}

        {analyzed && (
          <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, padding: '26px', background: COLORS.white, marginBottom: 24 }}>
            <Eyebrow>Extracted Information</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginBottom: 24 }}>
              {[
                ['Event Type', 'Bonus Issue'],
                ['Ratio', '1:2'],
                ['Record Date', '15 September 2026'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: COLORS.slateLight, marginBottom: 3 }}>{k}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: COLORS.ink }}>{v}</div>
                </div>
              ))}
            </div>

            <Eyebrow>AI Operational Impact</Eyebrow>
            <ul style={{ margin: 0, marginBottom: 24, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.85, color: COLORS.ink }}>
              <li>Validate eligible holdings</li>
              <li>Calculate entitlement</li>
              <li>Confirm record-date position</li>
              <li>Validate custodian notification</li>
              <li>Process entitlement</li>
              <li>Reconcile received securities</li>
            </ul>

            <div style={{ background: COLORS.navy, borderRadius: 4, padding: '18px 20px', marginBottom: 20 }}>
              <div style={{ fontSize: 12.5, color: '#8FB5A0', marginBottom: 6 }}>AI-Derived Entitlement</div>
              <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: 22, color: COLORS.white }}>
                25,000 additional shares
              </div>
              <div style={{ fontSize: 12, color: '#B7C2D1', marginTop: 4 }}>Based on client holding of 50,000 shares at a 1:2 bonus ratio.</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.paper, border: `1px solid ${COLORS.line}`, borderRadius: 3, padding: '12px 16px' }}>
              <span style={{ fontSize: 13, color: COLORS.ink, fontWeight: 500 }}>Human Review Required</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep }}>Yes</span>
            </div>
          </div>
        )}

        <ExplainabilityPanel
          whatHappened="A bonus issue announcement (1:2 ratio) was extracted for ABC Industries Ltd, record date 15 September 2026."
          why="The announcement structure matches a standard bonus issue pattern, requiring no client election and a direct entitlement calculation against the record-date holding."
          evidence={[
            'Event type identified as Bonus Issue from the announcement text.',
            'Ratio of 1:2 extracted and applied to the client holding of 50,000 shares.',
            'Record date confirmed as 15 September 2026, ex-date 14 September 2026.',
          ]}
          action="Confirm the record-date position, validate custodian notification, and process the entitlement of 25,000 shares."
          confidence={94}
          humanApproval="An operations analyst must confirm the record-date position and approve entitlement processing."
        />

        <DisclaimerBar text="Illustrative corporate action using fictional data. CustodyQAI does not claim integration with real corporate-action data feeds." />
      </Wrap>
    </div>
  );
}
