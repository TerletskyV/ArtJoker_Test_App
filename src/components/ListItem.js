import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ListItem from 'material-ui/List/ListItem'

import ModalSelectField from './ModalSelectField';


class ModalListItem extends Component {

    styles = {
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '55%'
        },
        button: {
            marginLeft: 20,
            marginBottom: 20,
        },
        textField: {
            width: '15%',
            marginLeft: 20
        },
        cross: {
            color: '#F44336'
        }
    }

    constructor(props) {
        super(props);

        this.state = props.item;

        this.saveInputData = this.saveInputData.bind(this);
        this.saveSelectFieldData = this.saveSelectFieldData.bind(this);
    }

    // Save the current value of quantity input in parrent component
    async saveInputData(ev) {
        await this.setState({ quantity: ev.target.value });
        this.props.saveItem(this.state)
    }

    // Save the currrent selection of number structure in parrent component
    async saveSelectFieldData(numberStructure) {
        await this.setState({ numberStructure });
        this.props.saveItem(this.state)
    }

    render() {

        return (
            <ListItem>
                <div style={this.styles.root}>
                    <ModalSelectField numberStructure={this.state.numberStructure} saveSelectFieldData={this.saveSelectFieldData} />
                    <TextField style={this.styles.textField} onChange={this.saveInputData} value={this.state.quantity} name="quantity" type="number" />
                    <FloatingActionButton
                        mini={true}
                        style={this.styles.button}
                        backgroundColor="#FBE6E9"
                        onClick={() => this.props.deleteItem(this.props.item.id)}>
                        <i className="material-icons" style={this.styles.cross}>close</i>
                    </FloatingActionButton>
                </div>
            </ListItem>
        )
    }
}

export default ModalListItem;