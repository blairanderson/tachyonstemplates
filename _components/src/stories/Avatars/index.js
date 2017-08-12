/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Circle from './Circle';
import CircleBorder from './CircleBorder';
import DoubleRing from './DoubleRing';
import RoundedLarge from './RoundedLarge';
import RoundedMedium from './RoundedMedium';
import RoundedSmall from './RoundedSmall';
import Square from './Square';

storiesOf('Avatars')
  .addWithInfo('Circle', Circle, { inline: true })
  .addWithInfo('CircleBorder', CircleBorder, { inline: true })
  .addWithInfo('DoubleRing', DoubleRing, { inline: true })
  .addWithInfo('RoundedLarge', RoundedLarge, { inline: true })
  .addWithInfo('RoundedMedium', RoundedMedium, { inline: true })
  .addWithInfo('RoundedSmall', RoundedSmall, { inline: true })
  .addWithInfo('Square', Square, { inline: true });
