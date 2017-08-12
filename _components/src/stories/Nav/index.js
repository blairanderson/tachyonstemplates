/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import FixedSemiTransparent from './FixedSemiTransparent.js';
import LargeTitleLinkList from './LargeTitleLinkList.js';
import ListOverflow from './ListOverflow.js';
import LogoLinksInline from './LogoLinksInline.js';
import LogoLinksInlineCollapse from './LogoLinksInlineCollapse.js';
import LogoTitlesLinksCentered from './LogoTitlesLinksCentered.js';
import MinimalSignUp from './MinimalSignUp.js';
import TitleLinkList from './TitleLinkList.js';

storiesOf('Nav')
  .addWithInfo('Fixedsemitransparent', FixedSemiTransparent, { inline: true })
  .addWithInfo('Largetitlelinklist', LargeTitleLinkList, { inline: true })
  .addWithInfo('Listoverflow', ListOverflow, { inline: true })
  .addWithInfo('Logolinksinline', LogoLinksInline, { inline: true })
  .addWithInfo('Logolinksinlinecollapse', LogoLinksInlineCollapse, {
    inline: true
  })
  .addWithInfo('Logotitleslinkscentered', LogoTitlesLinksCentered, {
    inline: true
  })
  .addWithInfo('Minimalsignup', MinimalSignUp, { inline: true })
  .addWithInfo('Titlelinklist', TitleLinkList, { inline: true });
