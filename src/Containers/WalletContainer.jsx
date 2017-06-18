
import React from 'react';
import Wallet from '../Components/Wallet/Wallet';
import ResultsWalletsContainer from './ResultsWalletsContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

class WalletContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfBitcoins: '',
            resetAmount: '',
            currency: '',
            resetCurrency:'',
            resetControl: false,
            response: [] //value of currencies selected
        };
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }
  onChangeSelect(currency) {
    this.props.onChangeSelect(currency);
  }

    render() {
    return (
      <div>
        <Wallet
          resetCurrency={this.state.resetCurrency}
          onChangeSelect={this.onChangeSelect}
        />
      </div>
    );

  }
}
export default WalletContainer;

