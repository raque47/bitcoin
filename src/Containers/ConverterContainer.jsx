import React from 'react';
import Converter from '../Components/Converter/Converter';
import ResultsContainer from './ResultsContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

class ConverterContainer extends React.Component {
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
    this.onChangeAmountOfBitcoins = this.onChangeAmountOfBitcoins.bind(this);
  }
  onChangeSelect(currency) {
    console.log('You have selected: ' + currency);
    this.props.onChangeSelect(currency);
  }
  onChangeAmountOfBitcoins(amount) {
    console.log('AAmount of bitcoinss: ' + amount);
    this.setState({ resetAmount: amount });
    this.props.onChangeAmountOfBitcoins(amount);
  }
  render() {
    return (
      <div>
        <Converter
          resetAmount={this.state.resetAmount}
          resetCurrency={this.state.resetCurrency}
          //onClickAcceptConvert={this.addAcceptAmountEvent}
          onChangeSelect={this.onChangeSelect}
          //getConvertion={this.getConvertion}
          onChangeAmountOfBitcoins={this.onChangeAmountOfBitcoins}
        />
      </div>
    );

  }
}

export default ConverterContainer;