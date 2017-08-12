import React from 'react';
export default () =>
  <div className="dt mw6 center pt0 pb5 pv5-m pv6-ns">
    <div className="db dtc-ns v-mid-ns">
      <img
        src="http://tachyons.io/img/super-wide.jpg"
        alt="A bright blue sky"
        className="w-100 mw7 w5-ns"
      />
    </div>
    <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
      <p className="lh-copy">
        For desktop, this text is vertically aligned middle, no matter what the
        height of the image is. On mobile, this is a paragraph below an image.
      </p>
    </div>
  </div>;
