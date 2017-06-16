import React from 'react';
export default () =>
  <header className="z-max cf fixed bg-light-blue w-100 ph3 pv3 pv4-ns ph4-m ph5-l bg-animate bb b--black-10 affix">
    <div className="w-80 center">
      <nav className="f5 tracked fl w-50">
        <a className="link dim dib b dark-blue" href="#page-top">
          Title
        </a>
      </nav>
      <nav className="f6 tracked tr fl w-50">
        <a className="link dim ph3 dib dark-blue" href="#download">
          Download
        </a>
        <a className="link dim ph3 dib dark-blue" href="#features">
          Features
        </a>
        <a className="link dim ph3 dib dark-blue" href="#contact">Contact</a>
      </nav>
    </div>
  </header>;
