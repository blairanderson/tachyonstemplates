import React from 'react';
import links from './list.js';

export default () =>
  <ul className="list ph3 ph5-ns pv4">
    {links.map(function(text, index) {
      return (
        <li key={index} className="dib mr1 mb2">
          <a
            href="#"
            className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20"
          >
            {text}
          </a>
        </li>
      );
    })}
  </ul>;
