import React from 'react';
import PropTypes from 'prop-types';
import s from './Page.module.scss';
import cx from 'classnames';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.boxHeader}>
            <h3 className={cx(s.boxTitle, s.pr3)}>{title}</h3>
          </div>
          <div className={cx(s.boxBody, s.pr6)}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Page;
