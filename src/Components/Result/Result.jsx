import React from 'react';
import { Link } from 'react-router-dom';
import InlineEdit from 'react-edit-inline';

class Result extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="borderStyle">
                <div className="header" >
                   {'The amount of bitcoins you enter is the equivalent of '
                   +this.props.value + '  ' + this.props.currency}
                </div>
            </div>
        );
    }
};


export default Result;  