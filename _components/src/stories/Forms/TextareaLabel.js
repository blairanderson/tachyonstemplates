import React from 'react';
export default () =>
  <form className="pa4 black-80">
    <div>
      <label for="comment" className="f6 b db mb2">
        Comments <span className="normal black-60">(optional)</span>
      </label>
      <textarea
        id="comment"
        name="comment"
        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
        aria-describedby="comment-desc"
      />
      <small id="comment-desc" className="f6 black-60">
        Helper text for a form control. Can use this text to{' '}
        <a href="#" className="link underline black-80 hover-blue">
          link to more info.
        </a>
      </small>
    </div>
  </form>;
