import React from 'react';
import axios from 'axios';
import style from '../Components/Converter/_converter.scss';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import ConverterContainer from './ConverterContainer';
import WalletContainer from './WalletContainer';
import ResultsContainer from './ResultsContainer';
import ResultsWalletsContainer from './ResultsWalletsContainer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      currencyContent: '',
      value: '',
      amountContent: '',
      sourceEvent: true,
      action: '',
      exchangeContentWallet: '',
      currencyContentWallet: '',
      amountContentWallet: '',
      walletEvent: true
    };
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChangeAmountOfBitcoins = this.onChangeAmountOfBitcoins.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
    this.onChangeAmountOfBitcoins = this.onChangeAmountOfBitcoins.bind(this);
    this.getAnswerWallet = this.getAnswerWallet.bind(this);
  }
  getAnswer(amountContent, currencyContent) {
    this.setState({ amountContent: amountContent, currencyContent: currencyContent });
  }
  onChangeSelect(currency) {
    this.setState({ currencyContent: currency });
  }
  onChangeAmountOfBitcoins(amount) {
    this.setState({ amountContent: amount });
  }
  getAnswerWallet(currencyContent) {
    this.setState({ currencyContentWallet: currencyContent });
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

        <div className="converterPanel">

          <WalletContainer
            onClickAcceptWallet={this.getAnswerWallet}
            currencyContent={this.state.currencyContent}
            onChangeSelect={this.onChangeSelect}
          />
          <Route exact path='/getDigitalWallets' render={() => (
            <ResultsWalletsContainer
              currencyContent={this.state.currencyContent}
            />
          )}
          />
        </div>

      </div>
    );
  }

};


export default AppContainer;  