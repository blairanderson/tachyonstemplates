/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic.js';
import StripedDark from './StripedDark.js';

storiesOf('Tables')
  .addWithInfo('Basic', Basic, { inline: true })
  .addWithInfo('Stripeddark', StripedDark, { inline: true });
