/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import FixedLeftRight from './FixedLeftRight';
import FixedSemiTransparent from './FixedSemiTransparent';

storiesOf('Navigation')
  .addWithInfo('Fixed Left Right', FixedLeftRight, {
    inline: true
  })
  .addWithInfo('Fixed Semi Transparent', FixedSemiTransparent, {
    inline: true
  });
