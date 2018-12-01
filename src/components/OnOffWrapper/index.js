import { Component } from 'react';
import { node, func } from 'prop-types';

class OnOffWrapper extends Component {
  constructor(props) {
    super(props);

    this.handleOffline = this.handleOffline.bind(this);
    this.handleOnline = this.handleOnline.bind(this);
  }

  componentDidMount() {
    const { onOffline, onOnline } = this.props;

    if (onOffline) {
      window.addEventListener('offline', this.handleOffline);
    }

    if (onOnline) {
      window.addEventListener('online', this.handleOnline);
    }
  }

  componentWillUnmount() {
    const { onOffline, onOnline } = this.props;

    if (onOffline && window.removeEventListener) {
      window.removeEventListener('offline', this.handleOffline);
    }

    if (onOnline && window.removeEventListener) {
      window.removeEventListener('online', this.handleOnline);
    }
  }

  handleOffline(event) {
    const { onOffline } = this.props;

    if (onOffline) {
      onOffline(event);
    }
  }

  handleOnline(event) {
    const { onOnline } = this.props;

    if (onOnline) {
      onOnline(event);
    }
  }

  render() {
    const { children } = this.props;

    if (!children) {
      return null;
    }

    return children;
  }
}

OnOffWrapper.propTypes = {
  children: node,
  onOffline: func,
  onOnline: func,
};

OnOffWrapper.defaultProps = {
  children: null,
  onOffline: () => {},
  onOnline: () => {},
};

export default OnOffWrapper;
