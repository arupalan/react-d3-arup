import React from 'react';
import Page from '../Page';
import s from './ExchangeRates.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatesHeader from './RatesHeader';
import RatesDatePicker from './RatesDatePicker';
import RatesCurrencyPicker from './RatesCurrencyPicker';
import RatesButton from '../RatesButton';
import { getFxSpot } from '../../services/fxrateservice';
import Link from '../Link';
import cx from 'classnames';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Latest Exchange Rates',
      spotFxRates: null,
      spotDate: new Date(),
      baseCurrency: 'GBP',
    };
  }
  handleCurrencyChange = currency => {
    this.setState({
      baseCurrency: currency,
    });
    console.log('handleCurrencyChange', currency);
  };

  handleDateChange = date => {
    this.setState({
      spotDate: date,
    });
    console.log('handleDateChange', date);
  };

  handleRatesChange = event => {
    console.log('handleRatesChange');
    getFxSpot(this.state.baseCurrency)
      .then(data => {
        this.setState({ spotFxRates: data });
        console.log('getFxSpot', this.state.spotFxRates);
      })
      .catch(exception => {
        console.error('error in Exchange Rate Comp', exception);
        // unlikely you will reach here
        // navigate(this.props.to);
      });
  };

  componentDidMount() {
    getFxSpot(this.state.baseCurrency).then(data => {
      this.setState({ spotFxRates: data });
      console.log('spotFxrates', this.state.spotFxRates);
    });
  }

  render() {
    if (this.state.spotFxRates === null) {
      return (
        <Page {...this.state}>
          <div className={s.loader}>Loading...</div>
        </Page>
      );
    } else {
      return (
        <Page {...this.state}>
          <div className={s.selectGrid}>
            <RatesDatePicker
              selectedDay={this.state.spotDate}
              isEmpty={false}
              onSpotDateChange={this.handleDateChange}
            />
            <RatesCurrencyPicker
              onBaseCurrencyChange={this.handleCurrencyChange}
            />
            <RatesButton
              onTriggerGetRates={this.handleRatesChange}
              selectedCurrencyCode={this.state.baseCurrency}
            />
          </div>
          <div className={s.ratesGrid}>
            <RatesHeader />
            {this.state.spotFxRates.quotes.map((q, index) => (
              <>
                <span key={index + 20003}>
                  {' '}
                  {q.base_currency + ' / ' + q.quote_currency}{' '}
                </span>
                <span key={index + 20004}>
                  <Link
                    className={cx(s.link, s.highlight)}
                    to={'/chart/' + q.base_currency + '_' + q.quote_currency}
                  >
                    <FontAwesomeIcon
                      icon="chart-line"
                      color="lightgrey"
                      size="lg"
                    />{' '}
                    <FontAwesomeIcon
                      icon="chart-area"
                      color="lightgrey"
                      size="lg"
                    />
                  </Link>
                </span>
                <span key={index + 20005}>{+q.bid}</span>
                <span key={index + 20006}>{+q.ask}</span>
                <span key={index + 20007}>{+q.midpoint}</span>
              </>
            ))}
          </div>
        </Page>
      );
    }
  }
}

export default ExchangeRates;
