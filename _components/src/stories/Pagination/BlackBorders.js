import React from 'react';
export default () =>
  <div className="tc cf mv2">
    <a
      className="link ba near-black b--near-black pa2 mr2"
      rel="prev"
      href="/foo?page=1"
    >
      ← Previous
    </a>
    <a
      className="link ba b--near-black near-black pa2 mr2"
      rel="prev"
      href="/foo?page=1"
    >
      1
    </a>
    <span className="b bg-dark-blue near-white ba b--near-black pa2 mr2">
      2
    </span>
    <a
      className="link ba b--near-black near-black pa2 mr2"
      rel="next"
      href="/foo?page=3"
    >
      3
    </a>
    <a className="link ba b--near-black near-black pa2 mr2" href="/foo?page=4">
      4
    </a>
    <span className="mr2">…</span>
    <a className="link ba b--near-black near-black pa2 mr2" href="/foo?page=9">
      9
    </a>
    <a className="link ba b--near-black near-black pa2 mr2" href="/foo?page=10">
      10
    </a>
    <a
      className="link ba near-black b--near-black pa2 mr2"
      rel="next"
      href="/foo?page=3"
    >
      Next →
    </a>
  </div>;
