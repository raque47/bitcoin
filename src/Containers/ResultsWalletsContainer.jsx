import React from 'react';
import Result from '../Components/Result/Result';
import axios from 'axios';
import ResultWallet from  '../Components/ResultWallet/ResultWallet';

class ResultsWalletContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vectorValues: [],
            vectorExchange: [],
            vectorCurrencies: [],
            convertionResults: [],
            selected:false,
            walletEvent: true
        };
    }
    getConvertionRatesInSources(currency) {
        axios.get('https://community-bitcointy.p.mashape.com/all/' + currency, {
            headers: { "X-Mashape-Key": "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq" }
        })
            .then((resp) => {
                this.setState({ convertionResults: resp.data, walletEvent: false, });
            }) 
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.walletEvent === true) {
            this.getConvertionRatesInSources(this.props.currencyContent);
            this.state.walletEvent = false;

        }
     const results = this.state.convertionResults;
     const newLink = '';
        return (<div className="containerOfElements">{results.map((item) => {
            switch(item.exchange) {
                case 'blockchain': this.state.newLink= 'https://blockchain.info/es/wallet/#/';
                break;
                case 'bitfinex': this.state.newLink= 'https://www.bitfinex.com/';
                break;
                case 'btccharts': this.state.newLink= 'http://btccharts.com/';
                break;
                case 'coinbase':this.state.newLink= 'https://www.coinbase.com/?locale=es';
                break;
                case 'bitpay': this.state.newLink= 'https://bitpay.com/';
                break;
                default: this.state.newLink= ''
            }
                    
                
                return <ResultWallet
                    currency={item.currency}
                    value={item.value}
                    exchange={item.exchange}
                    link={this.state.newLink}
                />
        })}

        </div>);
    }
}

export default ResultsWalletContainer;