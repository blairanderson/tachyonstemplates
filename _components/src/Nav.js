import React, { Component } from 'react';
class Nav extends Component {
  render() {
    return (
      <header className="bg-white w-100 ph3 pv3 pv4-ns ph4-m ph5-l bb b--light-gray">
        <nav className="mw8 center">
          <a
            href="/"
            title="Tachyons Templates Logo"
            className="link dim b dib mr3 f3 ba bw2 b--black"
            style={{ color: 'rgb(90,128,245)', borderColor: 'rgb(90,128,245)' }}
          >
            TT
          </a>
          <a
            className="link dim black b f6 f5-ns dib mr3"
            href="/"
            title="Tachyons Templates"
          >
            Tachyons Templates
          </a>
          <a
            className="link dim gray f6 f5-ns dib mr3"
            href="/contact/"
            title="Contact Tachyons Templates"
          >
            Contact
          </a>
        </nav>
      </header>
    );
  }
}

export default Nav;
