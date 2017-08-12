var list = [];
for (var i = 0; i <= 35; i++) {
  list.push(i);
}

import React from 'react';
export default () =>
  <nav className="ph3 ph5-ns pv4">
    <div className="nowrap overflow-x-auto">
      {list.map(function(num, index) {
        return (
          <a
            key={num}
            className="link dim gray f5 f4-ns dib mr3"
            href="#"
            title={'link ' + num}
          >
            Link {num}
          </a>
        );
      })}
    </div>
  </nav>;
