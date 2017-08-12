/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import LargeParagraph from './LargeParagraph.js';
import NarrowParagraph from './NarrowParagraph.js';
import Paragraph from './Paragraph.js';
import SmallNarrowParagraph from './SmallNarrowParagraph.js';
import SmallParagraph from './SmallParagraph.js';
import TitleSubtitleCentered from './TitleSubtitleCentered.js';
import WideParagraph from './WideParagraph.js';

storiesOf('Text')
  .addWithInfo('Largeparagraph', LargeParagraph, { inline: true })
  .addWithInfo('Narrowparagraph', NarrowParagraph, { inline: true })
  .addWithInfo('Paragraph', Paragraph, { inline: true })
  .addWithInfo('Smallnarrowparagraph', SmallNarrowParagraph, { inline: true })
  .addWithInfo('Smallparagraph', SmallParagraph, { inline: true })
  .addWithInfo('Titlesubtitlecentered', TitleSubtitleCentered, { inline: true })
  .addWithInfo('Wideparagraph', WideParagraph, { inline: true });
