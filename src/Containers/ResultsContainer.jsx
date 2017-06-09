import React from 'react';
import Result from '../Components/Result/Result';
import axios from 'axios';

class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //indexSelectedNotebook: 0, 
            //amountOfBitcoins: '',
            //value of currencies selected
            //vectorOfCurrencies: [],
            convertionResults: [],
            sourceEvent: true
        };
        //this.getConvertion = this.getConvertion.bind(this);
    }
    // componentDidMount() {
    //     this.getConvertion('', '');
    // }
    getConvertion(amount, currency) {
        console.log('ENTREE')
        axios.get('https://community-bitcointy.p.mashape.com/convert/' + amount + '/' + currency, {
            headers: { "X-Mashape-Key": "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq" }
        })
            .then((resp) => {
                console.log('RESP ' + resp);
                console.log(resp.data.currency);
                console.log(resp.data.value);
                this.setState({ convertionResults: resp.data, sourceEvent: false });
                //console.log('Vector de resultados ' + vectorOfConvertionResults);
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        if (this.state.sourceEvent === true) {
            console.log('ENTRE');
            this.getConvertion(this.props.amountInput, this.props.currencyDropDrown);
            console.log(this.props.amountInput + ' currency ' +  this.props.currencyDropDrown);
            this.state.sourceEvent = false;
        }
        const results = this.state.convertionResults;
        console.log('LAAA curr ' + results.currency + ' valuee ' +results.value);
        // console.log(this.state.sources1);
        return (
            <div>
                <Result
                    currency={results.currency}
                    value={results.value}
                />
            </div>
        );
    }
}

export default ResultContainer;