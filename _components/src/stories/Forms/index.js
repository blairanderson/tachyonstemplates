/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxList from './CheckboxList.js';
import InputTextLabel from './InputTextLabel.js';
import NewsletterSubscription from './NewsletterSubscription.js';
import Password from './Password.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import TextareaLabel from './TextareaLabel.js';

storiesOf('Forms')
  .addWithInfo('Checkboxlist', CheckboxList, { inline: true })
  .addWithInfo('Inputtextlabel', InputTextLabel, { inline: true })
  .addWithInfo('Newslettersubscription', NewsletterSubscription, {
    inline: true
  })
  .addWithInfo('Password', Password, { inline: true })
  .addWithInfo('Signin', SignIn, { inline: true })
  .addWithInfo('Signup', SignUp, { inline: true })
  .addWithInfo('Textarealabel', TextareaLabel, { inline: true });
