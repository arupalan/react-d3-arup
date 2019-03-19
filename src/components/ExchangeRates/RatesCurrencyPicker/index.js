import React from 'react';
import SelectCurrency from 'react-select-currency';
import s from './RatesCurrencyPicker.module.scss';

export default class RatesCurrencyPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrencyCode: undefined,
      isEmpty: true,
    };
  }

  onSelectedCurrency = currencyAbbrev => {
    console.log('onSelectedCurrency', currencyAbbrev);
    this.setState({
      selectedCurrencyCode: currencyAbbrev.target.value,
      isEmpty: !currencyAbbrev.target.value.trim(),
    });
    this.props.onBaseCurrencyChange(currencyAbbrev.target.value);
  };

  render() {
    const { selectedCurrencyCode, isEmpty } = this.state;
    return (
      <div className={s.CurrencyPickerContainer}>
        <p>
          {' '}
          {isEmpty && 'Base Currency'}{' '}
          {!isEmpty && !selectedCurrencyCode && 'This currency is invalid'}{' '}
          {selectedCurrencyCode && `Base Currency ${selectedCurrencyCode}`}{' '}
        </p>{' '}
        <SelectCurrency
          name={'ccy'}
          value={'GBP'}
          onChange={this.onSelectedCurrency}
        />{' '}
      </div>
    );
  }
}
