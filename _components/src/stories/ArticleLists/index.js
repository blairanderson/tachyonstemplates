/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import TitlePreviewAuthorMedia from './TitlePreviewAuthorMedia';
import TitlePreviewAuthorMediaFlipped from './TitlePreviewAuthorMediaFlipped';

storiesOf('ArticleLists')
  .addWithInfo('Title Preview Author Media', TitlePreviewAuthorMedia, {
    inline: true
  })
  .addWithInfo(
    'Title Preview Author Media Flipped',
    TitlePreviewAuthorMediaFlipped,
    { inline: true }
  );
