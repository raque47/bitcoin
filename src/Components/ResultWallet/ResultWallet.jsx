import React from 'react';
import { Link } from 'react-router-dom';
import InlineEdit from 'react-edit-inline';
import walletStyle from './_resultWallet.scss';

class ResultWallet extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <div className="borderStyle">
                
                         <a target='_blank' href={this.props.link}>
                <div className="header" >
                    {console.log(this.props.Link)}
        
                        <button className="exchange">
                            {this.props.exchange}
                        </button>
                 
                </div>
                <div className="">
                    <div className="">
                        {this.props.value + '  ' + this.props.currency}
                    </div>

                </div>
</a>
            </div>
        );
    }
};


export default ResultWallet;  