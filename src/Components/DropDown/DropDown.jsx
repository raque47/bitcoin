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
                    <button id='USD' onClick={this.handleOnChangeSelect} value='USD' className="btnDropDown">Dollars </button>
                </li>
                <li key='EUR' >
                    <button id='EUR' onClick={this.handleOnChangeSelect} value='EUR' className="btnDropDown">Euros </button>
                </li>
                <li key='JPY' >
                    <button id='JPY' onClick={this.handleOnChangeSelect} value='JPY' className="btnDropDown">Japanese yen</button>
                </li>
                <li key='GBP' >
                    <button id='GBP' onClick={this.handleOnChangeSelect} value='GBP' className="btnDropDown">Pound sterling</button>
                </li>
                <li key='AUD' >
                    <button id='AUD' onClick={this.handleOnChangeSelect} value='AUD' className="btnDropDown">Australian dollar</button>
                </li>
                <li key='CAD' >
                    <button id='CAD' onClick={this.handleOnChangeSelect} value='CAD' className="btnDropDown">Canadian dollar</button>
                </li>
                <li key='CHF' >
                    <button id='CHF' onClick={this.handleOnChangeSelect} value='CHF' className="btnDropDown">Swiss franc</button>
                </li>
                <li key='CNY' >
                    <button id='CNY' onClick={this.handleOnChangeSelect} value='CNY' className="btnDropDown">Renminbi</button>
                </li>
         </ul>
    );
  }
};

     




export default DropDown;