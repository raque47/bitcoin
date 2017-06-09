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
                    <h4> The amount of bitcoins you enter is the equivalent of </h4>
                    <span className="noteAddedTitle">{this.props.currency}+ { ' ' }</span>
                    <span className="noteAddedTitle">{this.props.value}</span>
                </div>
            </div>
        );
    }
};


export default Result;  