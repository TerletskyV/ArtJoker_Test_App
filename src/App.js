import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

import FabModal from './components/FabModal';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fabModalOpen: false,
      items: this.props.items || []
    }

    this.fabModalItems = [];

    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  // Handler for onClick event that opens the modal dialog
  handleOpen() {
    this.setState({ fabModalOpen: true });
  }

  // Handler for onClick event that closes the modal dialog
  handleClose() {
    this.setState({ fabModalOpen: false });
  }

  // Handler for onClick event that saves items from list to the state
  handleSave(items) {
    this.fabModalItems = items
    this.setState({ fabModalOpen: false });
  }

  render() {

    return (
      <div className="container">
        <RaisedButton label="Open Modal" onClick={this.handleOpen} />
        <FabModal
          items={this.fabModalItems}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
          open={this.state.fabModalOpen} />

        <h3>
          Result:
        </h3>
        <List children={this.fabModalItems.map(item => (
          <ListItem key={item.id}>
            {(() => {
              let result = [];
              for (let name in item) {
                result.push(name + ': ' + item[name] + '; ')
              }
              return result;
            })()}
          </ListItem>
        )
        )} />
      </div>
    );
  }
}

export default App;
