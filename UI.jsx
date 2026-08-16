import React from 'react';
import { COLORS } from './theme.js';

export function Wrap({ children, style }) {
  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 28px', ...style }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, color }) {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: color || COLORS.accent,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, dark }) {
  return (
    <div style={{ marginBottom: 40, maxWidth: 680 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontFamily: "'IBM Plex Serif', serif",
          fontWeight: 500,
          fontSize: 28,
          lineHeight: 1.25,
          color: dark ? COLORS.white : COLORS.ink,
          margin: 0,
          marginBottom: sub ? 12 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: dark ? '#B7C2D1' : COLORS.slate, margin: 0 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** Prototype / Concept / Illustrative status badge */
export function Badge({ kind = 'Prototype' }) {
  const map = {
    Prototype: { bg: '#EDF3FA', border: COLORS.accent, color: COLORS.accentDeep },
    Concept: { bg: '#F3EFE3', border: COLORS.amber, color: '#8A6420' },
    Illustrative: { bg: '#EEF3F0', border: COLORS.green, color: '#1F5C44' },
  };
  const s = map[kind] || map.Prototype;
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}66`,
        borderRadius: 3,
        padding: '3px 9px',
        display: 'inline-block',
      }}
    >
      {kind}
    </span>
  );
}

/** Small horizontal chain of workflow labels, e.g. Exception → Evidence → ... */
export function WorkflowChain({ steps, dark, small }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: small ? 4 : 6,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: small ? 11 : 12,
      }}
    >
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span
            style={{
              background: dark ? '#141C17' : COLORS.paper,
              color: dark ? '#D8D3C4' : COLORS.navy,
              border: `1px solid ${dark ? '#22302A' : COLORS.line}`,
              padding: small ? '4px 8px' : '6px 12px',
              borderRadius: 3,
              whiteSpace: 'nowrap',
            }}
          >
            {s}
          </span>
          {i < steps.length - 1 && <span style={{ color: COLORS.slateLight }}>→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

/** Standard disclaimer footer for every agent demonstration */
export function DisclaimerBar({ text }) {
  return (
    <div
      style={{
        marginTop: 28,
        padding: '12px 16px',
        background: '#FBF7EC',
        border: `1px solid ${COLORS.amber}55`,
        borderRadius: 4,
        fontSize: 12,
        color: '#8A6420',
        lineHeight: 1.6,
      }}
    >
      {text ||
        'Illustrative prototype using fictional data. Demonstration does not represent a live production system or client deployment.'}
    </div>
  );
}

/** Confidence meter bar */
export function Confidence({ value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 6, background: COLORS.line, borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${value}%`, height: '100%', background: COLORS.accent }} />
      </div>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: COLORS.accentDeep, fontWeight: 600 }}>
        {value}%
      </span>
    </div>
  );
}

/**
 * Reusable explainability panel shown at the bottom of every agent demo:
 * What happened / Why / Evidence considered / Action / Confidence / Human approval
 */
export function ExplainabilityPanel({ whatHappened, why, evidence, action, confidence, humanApproval }) {
  const rows = [
    ['What happened?', whatHappened],
    ['Why does the AI think this happened?', why],
    ['What action is recommended?', action],
    ['What requires human approval?', humanApproval],
  ];
  return (
    <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: 4, overflow: 'hidden', marginTop: 24 }}>
      <div style={{ background: COLORS.navy, padding: '12px 18px' }}>
        <Eyebrow color="#8FB5A0">Explainability Panel</Eyebrow>
      </div>
      <div style={{ padding: '18px 20px', background: COLORS.white }}>
        {rows.map(([q, a]) => (
          <div key={q} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 3 }}>{q}</div>
            <div style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.6 }}>{a}</div>
          </div>
        ))}
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 6 }}>What evidence was considered?</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: COLORS.ink, lineHeight: 1.75 }}>
            {evidence.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12.5, color: COLORS.slate, fontWeight: 600, marginBottom: 6 }}>What is the confidence?</div>
          <Confidence value={confidence} />
        </div>
      </div>
    </div>
  );
}
