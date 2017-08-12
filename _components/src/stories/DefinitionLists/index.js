/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Inline from './Inline.js';
import Simple from './Simple.js';

storiesOf('DefinitionLists')
  .addWithInfo('Inline', Inline, { inline: true })
  .addWithInfo('Simple', Simple, { inline: true });
