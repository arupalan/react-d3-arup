import React from 'react';
import { navigate } from '@reach/router';
import Chart from './Chart';
import { getFxCandles } from '../../services/fxrateservice';
import Page from '../Page';
import s from './chart.module.scss';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      ccypair: 'EUR_USD',
    };
  }

  async componentDidMount() {
    const ccypair = this.props.ccypair == null ? 'EUR_USD' : this.props.ccypair;
    try {
      const fxCandleData = await getFxCandles(ccypair);
      this.setState({
        data: fxCandleData,
        ccypair: ccypair,
      });
    } catch (error) {
      console.log('Chart Component Error', error);
      navigate('/errorReport/error.message');
    }
  }

  render() {
    console.log('this.state.data', this.state.data);
    if (this.state.data == null) {
      return (
        <Page {...this.state}>
          <div className={s.loader}>Loading...</div>
        </Page>
      );
    } else {
      const activePage = {
        title: 'MACD D3 Data Visualization of ' + this.state.ccypair,
      };
      return (
        <Page {...activePage}>
          <Chart data={this.state.data} />
        </Page>
      );
    }
  }
}

export default ChartComponent;
