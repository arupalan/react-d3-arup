import React from 'react';
import s from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="https://github.com/arupalan/react-d3-arup"
          >
            Ask a question
          </a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/arupalan/react-d3-arup/issues/new"
          >
            Report an issue
          </a>
        </div>
      </div>
    );
  }
}

export default Feedback;
