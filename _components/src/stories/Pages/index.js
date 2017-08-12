/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Mixed4x4Grid from './4x4MixedGrid.js';
import Double from './Double.js';
import PortfolioProject from './PortfolioProject.js';
import SwissCoverFiveColumns from './SwissCoverFiveColumns.js';

storiesOf('Pages')
  .addWithInfo('4x4 Mixed Grid', Mixed4x4Grid, { inline: true })
  .addWithInfo('Double', Double, { inline: true })
  .addWithInfo('Project Portfolio', PortfolioProject, { inline: true })
  .addWithInfo('Swisscoverfivecolumns', SwissCoverFiveColumns, {
    inline: true
  });
