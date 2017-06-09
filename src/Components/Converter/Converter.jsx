import React from 'react';
import DropDown from '../DropDown/DropDown';
import ResultsContainer from '../../Containers/ResultsContainer';
//import './_converter.scss';
import converterStyle from './_converter.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idCurrency: "", title: "Choose Currency", modalEvent: false }
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }
  handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      // this.props.addTag(this.props.resetTagName);
      // this.props.resetAmountOfBitcoins();
      // this.setState({ todosTags: this.props.addedTags });
      // console.log("props tiene: " + this.props.addedTags[0]);
    }
  }
  handleOnChange(event) {
    const amountOfBitcoins = event.target.value;
    console.log('HANDLE: ' + amountOfBitcoins);
    this.props.onChangeAmountOfBitcoins(amountOfBitcoins);
  }
  onChangeSelect(currency) {
    // this.setState({ value });
    this.props.onChangeSelect(currency);
  }
  getCurrencyId(idSelectedCurrency, nameSelectedCurrency) {
    this.state.idCurrency = idSelectedCurrency;
    this.setState({ title: nameSelectedCurrency });
  }

  render() {
    //const response = this.props.addedTags;
    return (
      console.log('ESTOY EN CONVERTER '),
      <Route path="/" render={() => (

        <div className='row'>
          <div className='inputInformationConverterPanel'>

            <div className='amountOfBitcoinsControl'>
              <h2 className='amountOfBitcoinsSpan'>Digit the amount of bitcoins you want to convert: </h2>
              <input type='text'
                onChange={this.handleOnChange}
                value={this.props.resetAmount}
                placeholder='Amount of bitcoins..'
                className='amountOfBitcoinsInput form-control'
                id='amountOfBitcoin'
                onKeyPress={this.handleOnKeyPress}
              />
            </div>
          </div>

          <div className='row'>

            <div className="dropDownControler">

              <div className='col-md-2'>
                <h4 className="currencyLabel">Choose a currency:</h4>
              </div>


              <div className='col-md-10'>

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

              </div>
            </div>
            <Link to={'/getAmount'}>
              <button onClick={this.props.onClickAcceptConvert} id='getAmountButton' className='acceptConverterButton' >
                <span className="acceptConverterSpanText" data-toggle="tooltip" data-placement="top" title="Add Note">Get amount</span>
              </button>
            </Link>
          </div>
        </div>
      )}
      />

    );
  }
};



export default Converter;

