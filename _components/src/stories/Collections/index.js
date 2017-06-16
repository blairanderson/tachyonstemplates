/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import CoverArtWithHover from './CoverArtWithHover';

storiesOf(
  'Collections'
).addWithInfo('Cover Art With Hover', CoverArtWithHover, {
  inline: true
});
