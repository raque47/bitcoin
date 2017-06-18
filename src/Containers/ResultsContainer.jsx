import React from 'react';
import Result from '../Components/Result/Result';
import axios from 'axios';

class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            convertionResults: [],
            sourceEvent: true
        };
    }
    getConvertion(amount, currency) {
        axios.get('https://community-bitcointy.p.mashape.com/convert/' + amount + '/' + currency, {
            headers: { "X-Mashape-Key": "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq" }
        })
            .then((resp) => {
                this.setState({ convertionResults: resp.data, sourceEvent: false });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        if (this.state.sourceEvent === true) {
            this.getConvertion(this.props.amountInput, this.props.currencyDropDrown);
            this.state.sourceEvent = false;
        }
        const results = this.state.convertionResults;
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