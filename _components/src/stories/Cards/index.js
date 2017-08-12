/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react';
import AlbumCentered from './AlbumCentered.js';
import AlbumLeft from './AlbumLeft.js';
import BasicTextCard from './BasicTextCard.js';
import NewsCard from './NewsCard.js';
import ProductCard from './ProductCard.js';
import ProfileCard from './ProfileCard.js';
import ProfileCardTitleSubtitle from './ProfileCardTitleSubtitle.js';
import SuggestedProfile from './SuggestedProfile.js';
import TextCard from './TextCard.js';

storiesOf('Cards')
  .addWithInfo('Albumcentered', AlbumCentered, { inline: true })
  .addWithInfo('Albumleft', AlbumLeft, { inline: true })
  .addWithInfo('Basictextcard', BasicTextCard, { inline: true })
  .addWithInfo('Newscard', NewsCard, { inline: true })
  .addWithInfo('Productcard', ProductCard, { inline: true })
  .addWithInfo('Profilecard', ProfileCard, { inline: true })
  .addWithInfo('Profilecardtitlesubtitle', ProfileCardTitleSubtitle, {
    inline: true
  })
  .addWithInfo('Suggestedprofile', SuggestedProfile, { inline: true })
  .addWithInfo('Textcard', TextCard, { inline: true });
