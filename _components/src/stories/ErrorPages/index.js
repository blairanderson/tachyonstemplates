/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page404 from './404.js';

storiesOf('ErrorPages').addWithInfo('404 Error Page', Page404, {
  inline: true
});
