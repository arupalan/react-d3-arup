import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

export const withSkeletonScreen = Component => {
  return class SkeletonScreen extends React.Component {
    render() {
      return (
        <div style={{ fontSize: 20, lineHeight: 2 }}>
          <h1>{this.props.title || <Skeleton />}</h1>
          {this.props.render() || <Skeleton count={10} />}
        </div>
      );
    }
  };
};
