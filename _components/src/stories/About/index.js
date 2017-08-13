/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutTachyonsPlayground from './About.js';

storiesOf('AboutPages').addWithInfo('AboutUs', AboutTachyonsPlayground, {
  inline: false
});
