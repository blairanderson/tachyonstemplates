import React from 'react';
import list from './list.js';
export default () =>
  <ul className="list pa3 pa5-ns">
    {list.map(function(item, index) {
      return (
        <li key={index + item} className="dib mr2">
          <a href="#" className="f4 f2-ns b db pa2 link dim mid-gray">
            {item}
          </a>
        </li>
      );
    })}
  </ul>;
