import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import CloseIcon from 'material-ui-icons/Close';

const styles = {
    cardColor: {
        background: '#ddd',
    }
}

const Header = (props) => (
    <Card>
        <CardHeader
            title="Структура номеров"
            style={styles.cardColor}
            closeIcon={<i onClick={props.handleClose}><CloseIcon /></i>}
            showExpandableButton
        />
    </Card>
);

export default Header;