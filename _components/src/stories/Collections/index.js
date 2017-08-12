/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Albums from './Albums.js';
import CoverArtWithHover from './CoverArtWithHover.js';
import Movies from './Movies.js';
import Posters from './Posters.js';
import PostersDim from './PostersDim.js';
import SquareTitleSubtitle from './SquareTitleSubtitle.js';
import Vinyl from './Vinyl.js';

storiesOf('Collections')
  .addWithInfo('Responsive Square Grid Album Covers', Albums, { inline: true })
  .addWithInfo('Albums With Hover Text', CoverArtWithHover, { inline: true })
  .addWithInfo('Responsive Vertical Rectangle Movie Posts', Movies, {
    inline: true
  })
  .addWithInfo('Posters', Posters, { inline: true })
  .addWithInfo('Postersdim', PostersDim, { inline: true })
  .addWithInfo('Square Grid with Title and Subtitle', SquareTitleSubtitle, {
    inline: true
  })
  .addWithInfo('Vinyl', Vinyl, { inline: true });
