import React from 'react';
import Search from '../Components/Converter/Converter';

class ConverterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //indexSelectedNotebook: 0, 
    };
    //this.changeNotebook=this.changeNotebook;
  }
  render() {
    const { allMyNotebooks } = this.props.stateApp;
    return (
      <div className='col-md-11'>
        <Converter
          sources={ this.props.sources }
        />
      </div>
    );
  }
}

export default ConverterContainer;