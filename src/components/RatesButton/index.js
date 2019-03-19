import React from 'react';
import s from './RatesButton.module.scss';

export default class RatesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrencyCode: undefined,
    };
  }

  onGetRates = () => {
    console.log('onSelectedCurrency');
    this.props.onTriggerGetRates(this.props.selectedCurrencyCode);
  };

  render() {
    const selectedCurrencyCode = this.props.selectedCurrencyCode;
    console.log('RatesButton', this.props.selectedCurrencyCode);
    return (
      <div className={s.className}>
        <button onClick={this.onGetRates}>
          <span>✓</span>
          {selectedCurrencyCode &&
            `Get Rates ${selectedCurrencyCode}  PreFetched`}{' '}
        </button>
      </div>
    );
  }
}
