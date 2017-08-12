import React from 'react';
export default () =>
  <form className="pa4 black-80">
    <div className="measure">
      <label for="name" className="f6 b db mb2">
        Name <span className="normal black-60">(optional)</span>
      </label>
      <input
        id="name"
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
        aria-describedby="name-desc"
      />
      <small id="name-desc" className="f6 black-60 db mb2">
        Helper text for the form control.
      </small>
    </div>
  </form>;
