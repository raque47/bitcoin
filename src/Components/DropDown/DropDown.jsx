import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './_dropDown.scss';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChangeSelect = this.handleOnChangeSelect.bind(this);
    }
    handleOnChangeSelect(event) {
        this.props.onChangeSelect(event.target.id, event.target.value);
    }
    render() {
    return (<ul className="dropdown-menu">
                <li key='USD' >
                    <button id='USD' onClick={this.handleOnChangeSelect} value='USD' className="btnDropDown">USD </button>
                </li>
                <li key='EUR' >
                    <button id='EUR' onClick={this.handleOnChangeSelect} value='EUR' className="btnDropDown">EUR </button>
                </li>
                <li key='JPY' >
                    <button id='JPY' onClick={this.handleOnChangeSelect} value='JPY' className="btnDropDown">JPY </button>
                </li>
                <li key='GBP' >
                    <button id='GBP' onClick={this.handleOnChangeSelect} value='GBP' className="btnDropDown">GBP </button>
                </li>
                <li key='AUD' >
                    <button id='AUD' onClick={this.handleOnChangeSelect} value='AUD' className="btnDropDown">AUD </button>
                </li>
                <li key='CAD' >
                    <button id='CAD' onClick={this.handleOnChangeSelect} value='CAD' className="btnDropDown">CAD </button>
                </li>
                <li key='CHF' >
                    <button id='CHF' onClick={this.handleOnChangeSelect} value='CHF' className="btnDropDown">CHF </button>
                </li>
         </ul>
    );
  }
};

     




export default DropDown;