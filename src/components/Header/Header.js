import React from 'react';
import s from './Header.module.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import reactd3logo from './react-d3-logo.png';
import reactd3Header from './react-d3-header.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={reactd3logo}
              srcSet={`${reactd3logo}`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>
              Data visualization in React using React D3
            </span>
          </Link>
          <div className={s.banner}>
            <img src={reactd3Header} srcSet={`${reactd3Header}`} alt="header" />
            <p className={s.bannerDesc}>
              Complex Data Visualizations made easy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
