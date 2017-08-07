/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic';
import BasicRounded from './BasicRounded';
import BasicRoundedExtraSmall from './BasicRoundedExtraSmall';
import BasicPreviousNext from './BasicPreviousNext';
import CenteredIcons from './CenteredIcons';
import Pill from './Pill';
import PillGrow from './PillGrow';

storiesOf('Button')
  .addWithInfo('Basic', Basic, { inline: true })
  .addWithInfo('Basic Rounded', BasicRounded, { inline: true })
  .addWithInfo('Basic Rounded Extra Small', BasicRoundedExtraSmall, {
    inline: true
  })
  .addWithInfo('Basic Previous Next', BasicPreviousNext, { inline: true })
  .addWithInfo('Centered Icons', CenteredIcons, { inline: true })
  .addWithInfo('Pill', Pill, { inline: true })
  .addWithInfo('Pill Grow', PillGrow, { inline: true });
