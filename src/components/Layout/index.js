import React, { Component } from 'react';
import { bool, string, func, node, number, object, shape } from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import OnOffWrapper from '@components/OnOffWrapper';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';

class Layout extends Component {
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
            <div>
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

Layout.propTypes = {
  title: string.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  match: object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  title: app.title || '',
});

export default connect(mapStateToProps)(Layout);
