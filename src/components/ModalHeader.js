import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

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
            closeIcon={<i onClick={props.handleClose} className="material-icons">close</i>}
            showExpandableButton
        />
    </Card>
);

export default Header;