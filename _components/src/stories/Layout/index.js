/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import AspectRatio16x9 from './AspectRatio16x9.js';
import AspectRatio1x1 from './AspectRatio1x1.js';
import AspectRatio3x4 from './AspectRatio3x4.js';
import AspectRatio4x3 from './AspectRatio4x3.js';
import AspectRatio4x6 from './AspectRatio4x6.js';
import AspectRatio5x7 from './AspectRatio5x7.js';
import AspectRatio5x8 from './AspectRatio5x8.js';
import AspectRatio6x4 from './AspectRatio6x4.js';
import AspectRatio7x5 from './AspectRatio7x5.js';
import AspectRatio8x5 from './AspectRatio8x5.js';
import AspectRatio9x16 from './AspectRatio9x16.js';
import CenteredContainer from './CenteredContainer.js';
import FiveColumn from './FiveColumn.js';
import FiveColumnCollapseAlternate from './FiveColumnCollapseAlternate.js';
import FiveColumnCollapseAsymmetrical from './FiveColumnCollapseAsymmetrical.js';
import FiveColumnCollapseMixed from './FiveColumnCollapseMixed.js';
import FiveColumnCollapseOne from './FiveColumnCollapseOne.js';
import FixedTableLayoutGrid from './FixedTableLayoutGrid.js';
import FixedTableLayoutGridMixedRows from './FixedTableLayoutGridMixedRows.js';
import FlagObject from './FlagObject.js';
import FlagObjectBottom from './FlagObjectBottom.js';
import FlagObjectCollapse from './FlagObjectCollapse.js';
import FlagObjectTop from './FlagObjectTop.js';
import FourColumn from './FourColumn.js';
import FourColumnCollapseTwo from './FourColumnCollapseTwo.js';
import FourColumnCollapseTwoCollapseOne from './FourColumnCollapseTwoCollapseOne.js';
import FullBleed16x9 from './FullBleed16x9.js';
import FullBleed4x6 from './FullBleed4x6.js';
import FullBleed5x7 from './FullBleed5x7.js';
import FullBleed5x8 from './FullBleed5x8.js';
import FullBleed6x4 from './FullBleed6x4.js';
import FullBleed7x5 from './FullBleed7x5.js';
import FullBleed8x5 from './FullBleed8x5.js';
import FullBleed9x16 from './FullBleed9x16.js';
import FullBleedSquare from './FullBleedSquare.js';
import FullScreenCenteredTitle from './FullScreenCenteredTitle.js';
import HorizontalAspectRatios from './HorizontalAspectRatios.js';
import ThreeColumn from './ThreeColumn.js';
import ThreeColumnCollapseOne from './ThreeColumnCollapseOne.js';
import TwoColumn from './TwoColumn.js';
import TwoColumnCollapseOne from './TwoColumnCollapseOne.js';

storiesOf('Layout')
  .addWithInfo('Aspectratio16x9', AspectRatio16x9, { inline: true })
  .addWithInfo('Aspectratio1x1', AspectRatio1x1, { inline: true })
  .addWithInfo('Aspectratio3x4', AspectRatio3x4, { inline: true })
  .addWithInfo('Aspectratio4x3', AspectRatio4x3, { inline: true })
  .addWithInfo('Aspectratio4x6', AspectRatio4x6, { inline: true })
  .addWithInfo('Aspectratio5x7', AspectRatio5x7, { inline: true })
  .addWithInfo('Aspectratio5x8', AspectRatio5x8, { inline: true })
  .addWithInfo('Aspectratio6x4', AspectRatio6x4, { inline: true })
  .addWithInfo('Aspectratio7x5', AspectRatio7x5, { inline: true })
  .addWithInfo('Aspectratio8x5', AspectRatio8x5, { inline: true })
  .addWithInfo('Aspectratio9x16', AspectRatio9x16, { inline: true })
  .addWithInfo('Centeredcontainer', CenteredContainer, { inline: true })
  .addWithInfo('Fivecolumn', FiveColumn, { inline: true })
  .addWithInfo('Fivecolumncollapsealternate', FiveColumnCollapseAlternate, {
    inline: true
  })
  .addWithInfo(
    'Fivecolumncollapseasymmetrical',
    FiveColumnCollapseAsymmetrical,
    { inline: true }
  )
  .addWithInfo('Fivecolumncollapsemixed', FiveColumnCollapseMixed, {
    inline: true
  })
  .addWithInfo('Fivecolumncollapseone', FiveColumnCollapseOne, { inline: true })
  .addWithInfo('Fixedtablelayoutgrid', FixedTableLayoutGrid, { inline: true })
  .addWithInfo('Fixedtablelayoutgridmixedrows', FixedTableLayoutGridMixedRows, {
    inline: true
  })
  .addWithInfo('Flagobject', FlagObject, { inline: true })
  .addWithInfo('Flagobjectbottom', FlagObjectBottom, { inline: true })
  .addWithInfo('Flagobjectcollapse', FlagObjectCollapse, { inline: true })
  .addWithInfo('Flagobjecttop', FlagObjectTop, { inline: true })
  .addWithInfo('Fourcolumn', FourColumn, { inline: true })
  .addWithInfo('Fourcolumncollapsetwo', FourColumnCollapseTwo, { inline: true })
  .addWithInfo(
    'Fourcolumncollapsetwocollapseone',
    FourColumnCollapseTwoCollapseOne,
    { inline: true }
  )
  .addWithInfo('Fullbleed 16x9', FullBleed16x9, { inline: true })
  .addWithInfo('Fullbleed 4x6', FullBleed4x6, { inline: true })
  .addWithInfo('Fullbleed 5x7', FullBleed5x7, { inline: true })
  .addWithInfo('Fullbleed 5x8', FullBleed5x8, { inline: true })
  .addWithInfo('Fullbleed 6x4', FullBleed6x4, { inline: true })
  .addWithInfo('Fullbleed 7x5', FullBleed7x5, { inline: true })
  .addWithInfo('Fullbleed 8x5', FullBleed8x5, { inline: true })
  .addWithInfo('Fullbleed 9x16', FullBleed9x16, { inline: true })
  .addWithInfo('Fullbleed square 1x1', FullBleedSquare, { inline: true })
  .addWithInfo(
    'Vertically Centered: Full Screen Centered Title',
    FullScreenCenteredTitle,
    {
      inline: true
    }
  )
  .addWithInfo('Horizontal Aspect Ratios', HorizontalAspectRatios, {
    inline: true
  })
  .addWithInfo('Three Column', ThreeColumn, { inline: true })
  .addWithInfo('Three Column Collapse One', ThreeColumnCollapseOne, {
    inline: true
  })
  .addWithInfo('Twocolumn', TwoColumn, { inline: true })
  .addWithInfo('Twocolumncollapseone', TwoColumnCollapseOne, { inline: true });
