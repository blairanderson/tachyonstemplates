/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import CenteredIconsHoverGlow from './CenteredIconsHoverGlow.js';
import InlineText from './InlineText.js';
import SimpleLargeType from './SimpleLargeType.js';
import SmallPrint from './SmallPrint.js';
import Social from './Social.js';
import SocialCircles from './SocialCircles.js';
import SocialSimple from './SocialSimple.js';
import SocialSimpleText from './SocialSimpleText.js';
import SocialText from './SocialText.js';
import Studios from './Studios.js';

storiesOf('Footers')
  .addWithInfo('Centerediconshoverglow', CenteredIconsHoverGlow, {
    inline: true
  })
  .addWithInfo('Inlinetext', InlineText, { inline: true })
  .addWithInfo('Simplelargetype', SimpleLargeType, { inline: true })
  .addWithInfo('Smallprint', SmallPrint, { inline: true })
  .addWithInfo('Social', Social, { inline: true })
  .addWithInfo('Socialcircles', SocialCircles, { inline: true })
  .addWithInfo('Socialsimple', SocialSimple, { inline: true })
  .addWithInfo('Socialsimpletext', SocialSimpleText, { inline: true })
  .addWithInfo('Socialtext', SocialText, { inline: true })
  .addWithInfo('Studios', Studios, { inline: true });
