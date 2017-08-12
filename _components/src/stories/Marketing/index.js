/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import IphoneApp from './IphoneApp.js';

storiesOf('Marketing').addWithInfo('Iphone App Launcher', IphoneApp, {
  inline: true
});
