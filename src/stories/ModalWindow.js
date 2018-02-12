import React from 'react';

import { storiesOf, linkTo } from '@storybook/react';

import ModalWindow from '../components/FabModal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const items = [];

storiesOf('ModalWindow', module)
    .add('initial', () => <MuiThemeProvider><ModalWindow
        open={true}
        items={items}
        handleClose={linkTo('Button', 'open modal')} />
    </MuiThemeProvider>)