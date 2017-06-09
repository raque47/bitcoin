import React from 'react';
import DropDown from '../DropDown/DropDown';
import ResultsContainer from '../../Containers/ResultsContainer';
//import './_converter.scss';
//import './_converter.scss';
import converterStyle from './_converter.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idCurrency: "", title: "Choose Currency", modalEvent: false }
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }
  onChangeSelect(currency) {
    // this.setState({ value });
    this.props.onChangeSelect(currency);
  }
  getCurrencyId(idSelectedCurrency, nameSelectedCurrency) {
    //this.state.idCurrency = idSelectedCurrency;
    //this.setState({ title: nameSelectedCurrency });
  }

  render() {
    //const response = this.props.addedTags;
    return (
      console.log('ESTOY EN wallet '),
      <Route path="/" render={() => (
        <div className='inputInformationConverterPanel'>
          <div className="">
            <h4 className="currencyLabel">Choose a currency:</h4>
            <div className="containerElectionCurrency">
              <img src={require('../../images/coins.svg')} className="coinsImage" />
              <div className="dropdown currenciesDropdown">
                <button className="btn btn-primary dropdown-toggle btnModal" type="button" data-toggle="dropdown" data-hover="dropdown">{this.state.title}<span className="caret"></span></button>
                <DropDown
                  onChangeSelect={this.onChangeSelect}
                  resetCurrency={this.props.resetCurrency}
                  //onChangeSelect={this.getCurrencyId}
                />
              </div>
            </div>
            <Link to={'/getDigitalWallets'}>
              <button onClick={this.props.onClickAcceptGetWallets} id='getWalletButton' className='acceptConverterButton' >
                <span className="acceptConverterSpanText" data-toggle="tooltip" data-placement="top" title="Search digital">Search digital places</span>
              </button>
            </Link>
          </div>
        </div>
      )}
      />

    );
  }
};



export default Wallet;

