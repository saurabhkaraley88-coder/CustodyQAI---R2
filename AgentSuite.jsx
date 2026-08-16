import React from 'react';
import { COLORS } from '../shared/theme.js';
import { Wrap, Eyebrow } from '../shared/UI.jsx';
import { AgentGrid } from '../shared/AgentSuiteBlock.jsx';

export default function AgentSuite({ go }) {
  return (
    <div>
      <div style={{ background: COLORS.navy, color: COLORS.white }}>
        <Wrap style={{ padding: '70px 28px 50px' }}>
          <Eyebrow>CustodyQAI Agent Suite</Eyebrow>
          <h1 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500, fontSize: 32, margin: '0 0 14px' }}>
            Specialized AI Agents for Custody & Post-Trade Operations
          </h1>
          <p style={{ fontSize: 15, color: '#B7C2D1', maxWidth: 640, lineHeight: 1.7 }}>
            Exploring explainable AI agents across settlement, reconciliation, corporate actions, exception
            management, operational knowledge and client servicing.
          </p>
        </Wrap>
      </div>
      <Wrap style={{ padding: '60px 28px' }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.8, color: COLORS.slate, maxWidth: 700, marginBottom: 40 }}>
          CustodyQAI explores a portfolio of specialized AI agents designed around the exception-driven nature of
          custody and post-trade operations. Each agent below is an early-stage demonstration — clearly labeled as
          a working prototype or a concept demonstration — built on entirely fictional data.
        </p>
        <AgentGrid go={go} />
      </Wrap>
    </div>
  );
}
