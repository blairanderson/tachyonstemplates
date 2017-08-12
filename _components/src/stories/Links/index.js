/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimateBackgroundColor from './AnimateBackgroundColor.js';
import AnimateColor from './AnimateColor.js';
import DimNoUnderline from './DimNoUnderline.js';
import UnderlineOnHover from './UnderlineOnHover.js';

storiesOf('Links')
  .addWithInfo('Animatebackgroundcolor', AnimateBackgroundColor, {
    inline: true
  })
  .addWithInfo('Animatecolor', AnimateColor, { inline: true })
  .addWithInfo('Dimnounderline', DimNoUnderline, { inline: true })
  .addWithInfo('Underlineonhover', UnderlineOnHover, { inline: true });
