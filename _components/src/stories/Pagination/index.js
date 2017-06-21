/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BlackBorders from './BlackBorders';

storiesOf(
  'Pagination'
).addWithInfo('Pagination with near-black borders', BlackBorders, {
  inline: true
});
