import React from 'react';
export default () =>
  <div className="dt mw6 center pv4 pv5-m pv6-ns">
    <div className="dtc v-btm">
      <img
        src="http://tachyons.io/img/super-wide.jpg"
        alt="A bright blue sky"
        className="mw5 db"
      />
    </div>
    <div className="dtc v-btm pl3">
      <p className="lh-copy mv0">
        This text is aligned to the bottom, no matter what the height of the
        image is.
      </p>
    </div>
  </div>;
