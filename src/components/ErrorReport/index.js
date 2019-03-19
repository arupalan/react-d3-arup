import React from 'react';
import s from './ErrorReport.module.scss';
import Link from '../Link';
import { navigate } from '@reach/router';
import Page from '../Page';

class ErrorReport extends React.Component {
  handleClick = e => {
    e.preventDefault();
    navigate('/');
  };
  render() {
    return (
      <Page title="Operation Error">
        <div className={s.errorReport}>
          <div className={s.bubble} />
          <div className={s.bubble} />
          <div className={s.bubble} />
          <div className={s.bubble} />
          <div className={s.bubble} />
          <div className={s.main}>
            <h1>404</h1>
            <p>
              It looks like you're lost... That's a trouble?
              <br />
              <strong>{this.props.errordetails}</strong>
            </p>
            <button onClick={this.handleClick}>Go back</button>
          </div>
          <div className={s.root}>
            <div className={s.container}>
              <a
                className={s.link}
                href="https://github.com/arupalan/nowtv-sas-react-arup"
              >
                Ask a question{' '}
              </a>{' '}
              <span className={s.spacer}> | </span>{' '}
              <a
                className={s.link}
                href="https://github.com/arupalan/nowtv-sas-react-arup/issues/new"
              >
                Report an issue{' '}
              </a>{' '}
            </div>{' '}
            <div className={s.root}>
              <div className={s.container}>
                <span className={s.text}> © React D3 Arup </span>{' '}
                <span className={s.spacer}> · </span>{' '}
                <Link className={s.link} to="/">
                  Home{' '}
                </Link>{' '}
                <span className={s.spacer}> · </span>{' '}
                <Link className={s.link} to="/exchangerates">
                  Exchange Rates{' '}
                </Link>{' '}
                <span className={s.spacer}> · </span>{' '}
                <Link className={s.link} to="/privacy">
                  Privacy{' '}
                </Link>{' '}
                <span className={s.spacer}> · </span>{' '}
                <Link className={s.link} to="/not-found">
                  Not Found{' '}
                </Link>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
      </Page>
    );
  }
}

export default ErrorReport;
