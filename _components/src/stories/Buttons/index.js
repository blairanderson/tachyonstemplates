/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic';
import BasicPreviousNext from './BasicPreviousNext';

storiesOf('Button')
  .addWithInfo('Basic', Basic, {inline: true}});
  .addWithInfo('Basic Previous Next', BasicPreviousNext, {inline: true}});
