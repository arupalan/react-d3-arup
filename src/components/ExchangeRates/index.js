import React from 'react';
import Page from '../Page';
import s from './ExchangeRates.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatesHeader from './RatesHeader';
import RatesCurrencyPicker from './RatesCurrencyPicker';
import { getFxSpot } from '../../services/fxrateservice';
import Link from '../Link';
import cx from 'classnames';
import { withBusinessDatePicker } from '../../HOC/withBusinessDatePicker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Latest Exchange Rates',
      spotFxRates: null,
      spotDate: new Date(),
      baseCurrency: 'GBP',
      isLoading: false,
    };
  }

  handleRatesChange = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        getFxSpot(this.state.baseCurrency)
          .then(data => {
            this.setState({ spotFxRates: data, isLoading: false });
          })
          .catch(exception => {
            console.error('error in Exchange Rate Comp', exception);
          });
      }
    );
  };

  handleCurrencyChange = currency => {
    this.setState(
      {
        baseCurrency: currency,
      },
      () => {
        this.handleRatesChange();
      }
    );
  };

  handleDateChange = date => {
    this.setState(
      {
        spotDate: date,
      },
      () => {
        this.handleRatesChange();
      }
    );
  };

  componentDidMount() {
    getFxSpot(this.state.baseCurrency).then(data => {
      this.setState({ spotFxRates: data });
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
      const BusinessDatePicker = withBusinessDatePicker(DayPickerInput);
      return (
        <Page {...this.state}>
          <div className={s.selectGrid}>
            <BusinessDatePicker
              spotDate={this.state.spotDate}
              onSpotDateChange={this.handleDateChange}
            />
            <RatesCurrencyPicker
              onBaseCurrencyChange={this.handleCurrencyChange}
            />
          </div>
          <div className={s.ratesGrid}>
            <RatesHeader />
            {(this.state.isLoading && <Skeleton count={10} />) ||
              this.state.spotFxRates.quotes.map((q, index) => (
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
