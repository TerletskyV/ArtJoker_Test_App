import React from 'react';

import { storiesOf, action, linkTo } from '@storybook/react';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Button', module)
    .add('open modal', () => <MuiThemeProvider><FlatButton onClick={linkTo('ModalWindow')} label="Open Modal" /></MuiThemeProvider>)
    .add('add', () => <MuiThemeProvider><FlatButton onClick={action('item added')} label="Add" primary /></MuiThemeProvider>)
    .add('save', () => <MuiThemeProvider><RaisedButton label="Save" primary onClick={action('items saved')} /></MuiThemeProvider>)
    .add('close', () => <MuiThemeProvider><RaisedButton label="Close" onClick={action('modal window closed')} /></MuiThemeProvider>)