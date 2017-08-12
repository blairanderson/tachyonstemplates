/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import CircleAvatarTitleSubtitle from './CircleAvatarTitleSubtitle.js';
import RoundedAvatarTitleSubtitle from './RoundedAvatarTitleSubtitle.js';
import StartupHero from './StartupHero.js';

storiesOf('Headers')
  .addWithInfo('Circleavatartitlesubtitle', CircleAvatarTitleSubtitle, {
    inline: true
  })
  .addWithInfo('Roundedavatartitlesubtitle', RoundedAvatarTitleSubtitle, {
    inline: true
  })
  .addWithInfo('Startuphero', StartupHero, { inline: true });
