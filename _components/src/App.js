import React, { Component } from 'react';
import Nav from './Nav';
import ComponentList from './ComponentList';

const blue = { backgroundColor: 'rgb(90,128,245)' };

class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <ComponentList />
      </div>
    );
  }
}

export default App;

function description() {
  return (
    <div className="measure-wide center">
      <h2 className="lh-title">Tachyons Component Playground</h2>
      <p className="lh-copy">
        These Tachyons "Components" are composed of the super awesome
        subatomic properties.
      </p>
      <p className="lh-copy">
        If tachyons are ingredients, these components should be a seen as a
        decent little recipe for a useful UI object.
      </p>
      <p className="lh-copy">
        The better you learn tachyons, the better you will be at mixing and
        matching ingredients to make useful interface blocks.
      </p>
    </div>
  );
}
