import React, { Component } from 'react';
import { number, string, func, node, arrayOf, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { updateAppTitle } from '@store/app';

import OnOffWrapper from '@components/OnOffWrapper';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import { ucFirst } from '@helpers/string';

class Layout extends Component {
  static propTypes = {
    children: oneOfType([node, string, number, arrayOf]).isRequired,
    title: string.isRequired,
    onUpdateAppTitle: func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { onUpdateAppTitle } = this.props;
    const previousLocation = get(prevProps, 'location.pathname') || '/';
    const currentLocation = get(this.props, 'location.pathname') || '/';

    if (previousLocation !== currentLocation) {
      const clnStr = currentLocation.split('/');
      const title = clnStr[1] || 'Dashboard';

      onUpdateAppTitle(ucFirst(title));
    }
  }

  handleOnline = () => {
    document.body.classList.remove('grayscale');
  };

  handleOffline = () => {
    document.body.classList.add('grayscale');
  };

  render() {
    const { title, children } = this.props;

    return (
      <OnOffWrapper onOnline={this.handleOnline} onOffline={this.handleOffline}>
        <div className="h-100">
          <Sidebar />
          <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <Header />
            <div className="main-content-container container-fluid px-4">
              <div className="page-header row no-gutters py-4">
                <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <span className="text-uppercase page-subtitle">{title}</span>
                </div>
              </div>
              {children}
            </div>
          </main>
        </div>
      </OnOffWrapper>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  title: app.title || '',
});

const mapDispatchToProps = {
  onUpdateAppTitle: updateAppTitle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
