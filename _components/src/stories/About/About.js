import React from 'react';

export default () =>
  <div className="vh-100 dt w-100 bg-dark-blue">
    <div className="mw8 center dtc v-mid white">
      <h1 className="f2 fw6 tc lh-title">
        Welcome to Tachyons Components Playground
      </h1>

      <h2 className="f3 fw1 tc lh-title">
        A searchable directory of Tachyons Components
      </h2>
      <Maintained />
      <ParagraphList paragraphs={paragraphs} />
    </div>
  </div>;

const Maintained = () =>
  <div className="tc white f6">
    Maintained by{' '}
    <a
      href="https://www.tachyonstemplates.com"
      className="white-70 link dim pointer"
    >
      Tachyons Templates
    </a>{' '}
    on{' '}
    <a
      href="https://github.com/blairanderson/tachyonstemplates/tree/master/_components/src/stories"
      target="_blank"
      className="white-70 link pointer"
    >
      GitHub
    </a>
  </div>;

const paragraphs = [
  'Tachyons is a fantastic framework for building out responsive interfaces. ',
  'After learning the API, I found myself being able to iterate very quickly but always wanted a little booster for starting projects. ',
  'Finally, find the components you want in your app and start building!'
];

const ParagraphList = ({ paragraphs }) =>
  <div>
    {paragraphs.map(function(p, index) {
      return (
        <p key={index} className="measure-wide center f5 lh-copy">
          {p}
        </p>
      );
    })}
  </div>;
