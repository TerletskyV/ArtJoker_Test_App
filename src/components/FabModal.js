import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';

import Header from './ModalHeader';
import ListItem from './ListItem';

class FabModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: this.props.items.slice(0)
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    // Add a new item to the list
    addItem() {
        const item = {
            id: this.generateItemKey(),
            numberStructure: null,
            quantity: 0
        }
        const items = this.state.items.slice(0);
        items.push(item);
        this.setState({ items })
    }

    // Delete particular item from the list
    deleteItem(index) {
        this.setState({
            items: this.state.items.filter(el => el.id !== index)
        });
    }

    // Save items from list to the state
    saveItem(item) {
        this.setState({
            items: this.state.items.map(el => {
                if (item.id === el.id) {
                    return Object.assign(el, item);
                }

                return el;
            })
        });
    }

    // Generate random as a key for the list item
    generateItemKey() {
        return Math.random().toString().slice(4, 10);
    }

    render() {
        const actions = [
            <RaisedButton
                label="Save"
                primary
                onClick={() => this.props.handleSave(this.state.items)}
            />,
            <RaisedButton
                label="Close"
                onClick={this.props.handleClose}
            />,
        ];

        return (
            <Dialog
                open={this.props.open}
                actions={actions}
                contentStyle={{
                    width: 808,
                }}
            >
                <Header handleClose={this.props.handleClose} />
                <List children={this.state.items.map(item => (
                    <ListItem key={item.id}
                        item={item}
                        deleteItem={this.deleteItem}
                        saveItem={this.saveItem} />
                )
                )} />
                <FlatButton onClick={this.addItem} label="Add" primary />
            </Dialog>
        );
    }
}

export default FabModal;