import React from 'react';
//import unirest from 'unirest';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      currency: '',
      value: '',
      sourceEvent: true
    };
    this.getConvertion = this.getConvertion;
    this.poll = this.poll;
    this.getConvertionRatesInSources = this.getConvertionRatesInSources;
  }
  //will be executed when the component “mounts” (is added to the DOM) for the first time.
  //This method is only executed once during the component’s life.
  componentWillMount() {
    this.getConvertionRatesInSources('CAD');
  }
  // poll(fn, retries = Infinity, timeoutBetweenAttempts = 1000){
  //   return Promise.resolve()
  //       .then( fn )
  //       .catch(function retry(err){
  //           if(retries == 0)
  //               return delay( timeoutBetweenAttempts )
  //                   .then( fn )
  //                   .catch( retry );
  //           throw err;
  //       });
  // }

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
    //console.log(this.state.sources1[0].exchange);
  }

  getConvertion(amount, currency) {
    console.log('ENTREE')
    //  var request= unirest.get("https://community-bitcointy.p.mashape.com/all/USD")
    //   .header("X-Mashape-Key", "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq")
    //   .header("Accept", "text/plain")
    //   .end(function (result) {
    //       console.log(result);
    //   console.log('status ' +result.status, 'headers '+ result.headers, 'body '+ result.body);
    // });
    // console.log('BOYY  ' + request.body);
    axios.get('https://community-bitcointy.p.mashape.com/convert/' + amount + '/' + currency, {
      headers: { "X-Mashape-Key": "rbzS8fXxDImshKZJSrbol9woVjS1p1JD9fmjsnwmxMJolF2NPq" }
    })
      .then((resp) => {
        console.dir(resp);

        console.log(resp.data.currency);
        console.log(resp.data.value);
        // console.log(resp.data[0].exchange);
        // console.log(resp.data[0].currency);
        // console.log(resp.data[0].value);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.sourceEvent === true) {
      this.getConvertionRatesInSources('CAD');
      //console.log(this.state.sources1);
    }
    console.log('LAAA');
    console.log(this.state.sources1);
    // this.getConvertion('3', 'USD');


    return (
      <div>
        <div className='col-md-1'>
          <ConverterContainer
            sources={this.state.sources}
          />
          <WalletContainer />

        </div>
      </div>
    );
  }
}

export default AppContainer;  