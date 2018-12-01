import React, { Component, Fragment } from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateMobileMenuStatus } from '@store/app';

class Sidebar extends Component {
  onToggleMobileSidebar = () => {
    const { onUpdateMobileMenuStatus } = this.props;

    onUpdateMobileMenuStatus(false);
  };

  render() {
    const { showMobileMenu } = this.props;

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <aside className={`main-sidebar col-12 col-md-3 col-lg-2 px-0 ${showMobileMenu ? 'open' : ''}`}>
              <div className="main-navbar sticky-top bg-white">
                <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                  <Link className="navbar-brand w-100 mr-0" to="/">
                    <div className="d-table m-auto">
                      <img
                        id="main-logo"
                        className="d-inline-block align-top mr-1"
                        src="https://designrevision.com/demo/shards-dashboard-lite/images/shards-dashboards-logo.svg"
                        alt="Dashboard Burung"
                        style={{ maxWidth: '25px' }}
                      />
                      <span className="d-none d-md-inline ml-1">Dashboard Burung</span>
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={this.onToggleMobileSidebar}
                    className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                  >
                    <i className="material-icons">&#xE5C4;</i>
                  </button>
                </nav>
              </div>
              <form action="/lomba" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                <div className="input-group input-group-seamless ml-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search" />
                    </div>
                  </div>
                  <input
                    className="navbar-search form-control"
                    type="text"
                    placeholder="Cari lomba burung..."
                    aria-label="Search"
                  />{' '}
                </div>
              </form>
              <div className="nav-wrapper">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link " to="/">
                      <i className="material-icons">dashboard</i>
                      <span>Halaman Depan</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/lomba/tambah">
                      <i className="material-icons">note_add</i>
                      <span>Buat Lomba</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Fragment>
    );
  }
}

Sidebar.propTypes = {
  showMobileMenu: bool.isRequired,
  onUpdateMobileMenuStatus: func.isRequired,
};

const mapStateToProps = ({ app }) => ({
  showMobileMenu: app.showMobileMenu || false,
});

const mapDispatchToProps = {
  onUpdateMobileMenuStatus: updateMobileMenuStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
