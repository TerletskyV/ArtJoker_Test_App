import React from 'react';

import { storiesOf } from '@storybook/react';

import ModalHeader from '../components/ModalHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

  storiesOf('Header', module)
  .add('initial', () => <MuiThemeProvider><ModalHeader /></ MuiThemeProvider>)