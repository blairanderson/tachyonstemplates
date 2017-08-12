import React from 'react';
import links from './list';

export default () =>
  <ul className="list ph3 ph5-ns pv4">
    {links.map(function(item, index) {
      return (
        <li key={index} className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim mid-gray">
            {item}
          </a>
        </li>
      );
    })}
  </ul>;
