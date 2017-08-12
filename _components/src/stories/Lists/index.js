/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';

import BlockItemDottedBorder from './BlockItemDottedBorder.js';
import BorderSpaced from './BorderSpaced.js';
import BorderTight from './BorderTight.js';
import ContactPhone from './ContactPhone.js';
import FollowerNotifications from './FollowerNotifications.js';
import FollowerNotificationsRoundedSquareAvatar from './FollowerNotificationsRoundedSquareAvatar.js';
import Hashtags from './Hashtags.js';
import ItemsImageTitlePrice from './ItemsImageTitlePrice.js';
import LargeLinksInline from './LargeLinksInline.js';
import LinksAnimateColor from './LinksAnimateColor.js';
import LinksInline from './LinksInline.js';
import LinksWithBordersInline from './LinksWithBordersInline.js';
import SlabStat from './SlabStat.js';
import SlabStatLarge from './SlabStatLarge.js';
import SlabStatSmall from './SlabStatSmall.js';
import TitleText from './TitleText.js';

storiesOf('Lists')
  .addWithInfo('Blockitemdottedborder', BlockItemDottedBorder, { inline: true })
  .addWithInfo('Borderspaced', BorderSpaced, { inline: true })
  .addWithInfo('Bordertight', BorderTight, { inline: true })
  .addWithInfo('Contactphone', ContactPhone, { inline: true })
  .addWithInfo('Followernotifications', FollowerNotifications, { inline: true })
  .addWithInfo(
    'Followernotificationsroundedsquareavatar',
    FollowerNotificationsRoundedSquareAvatar,
    { inline: true }
  )
  .addWithInfo('Hashtags', Hashtags, { inline: true })
  .addWithInfo('Itemsimagetitleprice', ItemsImageTitlePrice, { inline: true })
  .addWithInfo('Largelinksinline', LargeLinksInline, { inline: true })
  .addWithInfo('Linksanimatecolor', LinksAnimateColor, { inline: true })
  .addWithInfo('Linksinline', LinksInline, { inline: true })
  .addWithInfo('Linkswithbordersinline', LinksWithBordersInline, {
    inline: true
  })
  .addWithInfo('Slabstat', SlabStat, { inline: true })
  .addWithInfo('Slabstatlarge', SlabStatLarge, { inline: true })
  .addWithInfo('Slabstatsmall', SlabStatSmall, { inline: true })
  .addWithInfo('Titletext', TitleText, { inline: true });
