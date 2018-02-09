import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ModalSelectField extends Component {
    constructor(props) {
        super(props)

        this.options = this.getOptions();

        this.state = {
            value: this.props.numberStructure
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // Options to choose in select field
    getOptions() {
        return [
            {
                value: "Twin",
                label: "Twin"
            },
            {
                value: "Tripple",
                label: "Tripple"
            },
            {
                value: "Quadro",
                label: "Quadro"
            },
        ]
    }

    // Handler for onChange event
    handleChange(event, index, value) {
        this.setState({ value })
        this.props.saveSelectFieldData(value)
    }

    render() {
        return (
            <SelectField
                value={this.state.value}
                onChange={this.handleChange}>
                <MenuItem value={null} primaryText={'- Select Value -'} />
                {this.options.map((item, id) => (
                    <MenuItem key={id} value={item.value} primaryText={item.label} />
                ))}
            </SelectField>
        )
    }
}

export default ModalSelectField;