import React from 'react';
import Result from '../Components/Result/Result';
import axios from 'axios';

class ResultsWalletContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //indexSelectedNotebook: 0, 
            //amountOfBitcoins: '',
            //value of currencies selected
            //vectorOfCurrencies: [],
            convertionResults: [],
            walletEvent: true
        };
        //this.getConvertion = this.getConvertion.bind(this);
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
                this.setState({ convertionResults: resp, walletEvent: false });

                console.log(resp.data[0].value)
                console.log(resp.data[0].exchange)
                console.log(resp.data[0].currency)
                //bitfinex
                console.log(resp.data[1])
                console.log(resp.data[1])

                console.log(resp.data[2])
                console.log(resp.data[2])
                //btccharts
                //coinbase
                //bitpay
            }) //  ,  15, 1000),
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.sourceEvent === true) {
            console.log('ENTRE');
            this.getConvertionRatesInSources(this.props.currencyDropDrown);
            console.log(this.props.amountInput + ' currency ' + this.props.currencyDropDrown);
            console.log(' ss' + convertionResults)
            this.state.sourceEvent = false;
        }
        const results = this.state.convertionResults;

        // console.log(this.state.sources1);
        return <div className="containerOfElements">{results.map((item) => {
            console.log('LAAA curr ' + item.currency + ' valuee ' + item.value + 'exchange ' + item.exchange);
            return <ResultWallet
                currency={item.currency}
                value={item.value}
                exchange={item.exchange}
            />
        })}

        </div>;
    }
}

export default ResultsWalletContainer;