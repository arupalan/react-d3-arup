import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { Router } from '@reach/router';
import About from './components/About/About';
import Chart from './components/Chart';
import ExchangeRates from './components/ExchangeRates';
import { library } from '@fortawesome/fontawesome-svg-core';
import ErrorReport from './components/ErrorReport';
import {
  faEnvelope,
  faKey,
  faChartLine,
  faChartPie,
  faChartArea,
  faSpinner,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faKey,
  faChartLine,
  faChartPie,
  faChartArea,
  faSpinner,
  faHome
);

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Chart path="/" />
        <About path="/about" />
        <ExchangeRates path="/exchangerates" />
        <Chart path="/chart/:ccypair" />
        <ErrorReport path="/errorReport/:errordetails" />
        <NotFound title="Page Not Found" default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
