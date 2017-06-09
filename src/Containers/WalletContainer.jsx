
import React from 'react';
import DropDown from '../Components/DropDown/DropDown';
import axios from 'axios';

class WalletContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //value of currencies selected
            vectorOfCurrencies: [],
        };
        this.getConvertionRatesInSources = this.getConvertionRatesInSources.bind(this);
    }
    getConvertionRatesInSources(currency) {
        //return this.poll(() => 
        axios.get('https://community-bitcointy.p.mashape.com/all/' + currency, {
            headers: { "X-Mashape-Key": "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq" }
        })
            .then((resp) => {
                console.dir(resp)
                //blockchain
                //this.setState({sources1:resp});
                this.setState({ sources: resp, sourceEvent: false });
                console.log('LOOOO');
                console.log(this.state.sources);
                console.log(resp.data[0])
                console.log(resp.data[0].exchange)
                console.log(resp.data[0].currency)
                console.log(resp.data[0].value)
                //bitfinex
                console.log(resp.data[1])
                console.log(resp.data[1].exchange)
                console.log(resp.data[1].currency)
                console.log(resp.data[1].value)
                //btccharts
                //coinbase
                //bitpay
            }) //  ,  15, 1000),
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        //const { allMyNotebooks } = this.props.stateApp;
        return (
            <div className='col-md-11'>
                <DropDown
                    vectorOfCurrencies={this.state.vectorOfCurrencies}
                />
            </div>
        );
    }
}

export default WalletContainer;

//   if (this.state.sourceEvent === true) {
//       this.getConvertionRatesInSources('CAD');
//       //console.log(this.state.sources1);
//     }