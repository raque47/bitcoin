import React from 'react';
import { Link } from 'react-router-dom';
import InlineEdit from 'react-edit-inline';

class ResultWallet extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="borderStyle">
                <div className="header" >
                    <span className="noteAddedTitle">{this.props.currency}</span>
                    <span className="noteAddedTitle">{this.props.value}</span>
                    <span className="noteAddedTitle">{this.props.exchange}</span>
                </div>
            </div>
        );
    }
};


export default ResultWallet;  