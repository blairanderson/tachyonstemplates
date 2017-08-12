/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic.js';
import Info from './Info.js';
import SingleCta from './SingleCta.js';

storiesOf('Banners')
  .addWithInfo('Basic', Basic, { inline: true })
  .addWithInfo('Info', Info, { inline: true })
  .addWithInfo('Singlecta', SingleCta, { inline: true });
