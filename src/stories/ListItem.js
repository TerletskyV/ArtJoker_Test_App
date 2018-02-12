import React from 'react';

import { storiesOf, action } from '@storybook/react';

import ListItem from '../components/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const item = {
    id: 1,
    numberStructure: null,
    quantity: 0
  }

storiesOf('ListItem', module)
.add('initial', ()=> <MuiThemeProvider><ListItem item={item} deleteItem={action('item deleted')} /></ MuiThemeProvider>);