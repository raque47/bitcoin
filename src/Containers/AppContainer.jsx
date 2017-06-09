import React from 'react';
//import unirest from 'unirest';
import axios from 'axios';
import style from '../Components/Converter/_converter.scss';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import ConverterContainer from './ConverterContainer';
import WalletContainer from './WalletContainer';
import ResultsContainer from './ResultsContainer';


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      currencyContent: '',
      value: '',
      amountContent: '',
      sourceEvent: true,
      action: ''
    };
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChangeAmountOfBitcoins = this.onChangeAmountOfBitcoins.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
  }
  getAnswer(amountContent, currencyContent) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    // console.log("ESTOY EN CHOOSE FOLDER!!!!!" + "el action type aqui vale: " + this.state.actionType + "action es: " + action);
    this.setState({ amountContent: amountContent, currencyContent: currencyContent });
  }
  onChangeSelect(currency) {
    this.setState({ currencyContent: currency });
  }
  onChangeAmountOfBitcoins(amount) {
    this.setState({ amountContent: amount });
  }
  render() {
    return (
      <div>
        <div className="converterPanel">
          <ConverterContainer
            onClickAcceptConvert={this.getAnswer}
            currencyContent={this.state.currencyContent}
            amountContent={this.state.amountContent}
            onChangeSelect={this.onChangeSelect}
            onChangeAmountOfBitcoins={this.onChangeAmountOfBitcoins}
          />
          <Route exact path='/getAmount' render={() => (
            <ResultsContainer
              amountInput={this.state.amountContent}
              currencyDropDrown={this.state.currencyContent}
            />
          )}
          />
        </div>

      </div>
    );
  }

};


export default AppContainer;  