import React from 'react';
export default () =>
  <div className="dt mw6 center pv4 pv5-m pv6-ns">
    <div className="dtc v-mid">
      <img
        src="http://tachyons.io/img/super-wide.jpg"
        alt="A bright blue sky"
        className="mw5"
      />
    </div>
    <div className="dtc v-mid pl3">
      <p className="lh-copy">
        This text is vertically aligned middle, no matter what the height of the
        image is.
      </p>
    </div>
  </div>;
