import React from 'react';
import about from './README.md';
import Page from '../Page/Page';
import ReactMarkdown from 'react-markdown';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'readme.md', markdown: '' };
  }
  componentDidMount() {
    fetch(about)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text,
        });
      });
  }

  render() {
    return (
      <Page {...this.state}>
        <ReactMarkdown source={this.state.markdown} />
      </Page>
    );
  }
}
