import React from 'react';
import { COLORS } from './theme.js';
import { Badge } from './UI.jsx';
import { AGENTS } from './agentsData.js';

export function AgentCard({ agent, go }) {
  return (
    <div
      style={{
        background: COLORS.white,
        border: `1px solid ${COLORS.line}`,
        borderRadius: 4,
        padding: '22px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 16, color: COLORS.ink }}>
          {agent.name}
        </div>
        <Badge kind={agent.status} />
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: COLORS.accentDeep }}>
        {agent.subtitle}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: COLORS.slate }}>{agent.description}</div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: COLORS.slateLight, lineHeight: 1.6 }}>
        {agent.workflow}
      </div>
      <button
        onClick={() => go(agent.id)}
        style={{
          marginTop: 8,
          alignSelf: 'flex-start',
          background: COLORS.navy,
          color: COLORS.white,
          border: 'none',
          borderRadius: 3,
          padding: '9px 16px',
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontWeight: 600,
          fontSize: 12.5,
          cursor: 'pointer',
        }}
      >
        View Demonstration
      </button>
    </div>
  );
}

export function AgentGrid({ go }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
      {AGENTS.map((a) => (
        <AgentCard key={a.id} agent={a} go={go} />
      ))}
    </div>
  );
}

/** Simple, executive-readable ecosystem diagram — not a technical architecture chart */
export function AgentEcosystemDiagram({ go }) {
  const branch1 = AGENTS.slice(1, 5); // ReconIQ, CA Intelligence, SSI Guardian, MessageIQ
  const chain = AGENTS.slice(5); // Exception Prioritizer -> Ops Knowledge -> ClientOps AI

  const Node = ({ label, id, root }) => (
    <div
      onClick={() => id && go(id)}
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: root ? 14 : 12.5,
        fontWeight: root ? 700 : 500,
        color: root ? COLORS.white : COLORS.navy,
        background: root ? COLORS.navy : COLORS.white,
        border: `1px solid ${root ? COLORS.navy : COLORS.line}`,
        borderRadius: 4,
        padding: root ? '10px 20px' : '8px 14px',
        cursor: id ? 'pointer' : 'default',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      <Node label="CustodyQAI" root />
      <div style={{ width: 1, height: 24, background: COLORS.line }} />
      <Node label="CustodyQAI Resolve" id="resolve" />
      <div style={{ width: 1, height: 20, background: COLORS.line }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 6 }}>
        {branch1.map((a) => (
          <Node key={a.id} label={a.name} id={a.id} />
        ))}
      </div>

      <div style={{ width: 1, height: 20, background: COLORS.line }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
        {chain.map((a) => (
          <Node key={a.id} label={a.name} id={a.id} />
        ))}
      </div>
    </div>
  );
}
