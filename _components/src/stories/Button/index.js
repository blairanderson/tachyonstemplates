/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import BasicPreviousNext from './BasicPreviousNext';

storiesOf('Button').addWithInfo('Basic Previous Next', BasicPreviousNext, {
  inline: true
});
