/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import LeftBorder from './LeftBorder.js';
import PullQuote from './PullQuote.js';

storiesOf('Quotes')
  .addWithInfo('Leftborder', LeftBorder, { inline: true })
  .addWithInfo('Pullquote', PullQuote, { inline: true });
