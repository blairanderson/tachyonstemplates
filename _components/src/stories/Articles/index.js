/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Feature from './Feature';
import FullBleedBackground from './FullBleedBackground';
import HeadlineTitleText from './HeadlineTitleText.js';
import LargeTitleText from './LargeTitleText.js';
import LeftTitle from './LeftTitle.js';
import LeftTitleTopBorder from './LeftTitleTopBorder.js';
import PhotoEssay from './PhotoEssay';
import SingleColumnLargeTitle from './SingleColumnLargeTitle';
import TitleHighlightHeaderCover from './TitleHighlightHeaderCover';
import TitleText from './TitleText';
import TitleTextImage from './TitleTextImage';

storiesOf('Articles')
  .addWithInfo('Feature', Feature, {
    inline: true
  })
  .addWithInfo('Full Bleed Background', FullBleedBackground, { inline: true })
  .addWithInfo('Headline title text', HeadlineTitleText, { inline: true })
  .addWithInfo('Large title text', LargeTitleText, { inline: true })
  .addWithInfo('Left title ', LeftTitle, { inline: true })
  .addWithInfo('Left title top border', LeftTitleTopBorder, { inline: true })
  .addWithInfo('Photo Essay', PhotoEssay, { inline: true })
  .addWithInfo('Single column', SingleColumnLargeTitle, { inline: true })
  .addWithInfo('TitleHighlightHeaderCover', TitleHighlightHeaderCover, {
    inline: true
  })
  .addWithInfo('Title Text', TitleText, { inline: true })
  .addWithInfo('Title Text Image', TitleTextImage, { inline: true });
