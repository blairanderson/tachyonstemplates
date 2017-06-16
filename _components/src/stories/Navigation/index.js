/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import FixedLeftRight from './FixedLeftRight';
import FixedSemiTransparent from './FixedSemiTransparent';

storiesOf('Navigation')
  .addWithInfo('Fixed Left Right', FixedLeftRight, {
    inline: true,
    header: false
  })
  .addWithInfo('Fixed Semi Transparent', FixedSemiTransparent, {
    inline: true,
    header: false
  });
