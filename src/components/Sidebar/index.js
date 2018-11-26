import React, { Component, Fragment } from 'react';
import { bool, func, node, number, object, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateMobileMenuStatus } from '@store/app';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  onToggleMobileSidebar = () => {
    const { onUpdateMobileMenuStatus } = this.props;

    onUpdateMobileMenuStatus(false);
  };

  render() {
    const { showMobileMenu } = this.props;

    return (
      <Fragment>
        <div className="color-switcher-toggle animated pulse infinite">
          <i className="material-icons">settings</i>
        </div>
        <div className="container-fluid">
          <div className="row">
            <aside className={`main-sidebar col-12 col-md-3 col-lg-2 px-0 ${showMobileMenu ? 'open' : ''}`}>
              <div className="main-navbar sticky-top bg-white">
                <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                  <Link className="navbar-brand w-100 mr-0" to="#">
                    <div className="d-table m-auto">
                      <img
                        id="main-logo"
                        className="d-inline-block align-top mr-1"
                        src="https://designrevision.com/demo/shards-dashboard-lite/images/shards-dashboards-logo.svg"
                        alt="Shards Dashboard"
                        style={{ maxWidth: '25px' }}
                      />
                      <span className="d-none d-md-inline ml-1">Shards Dashboard</span>
                    </div>
                  </Link>
                  <button
                    onClick={this.onToggleMobileSidebar}
                    className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                  >
                    <i className="material-icons">&#xE5C4;</i>
                  </button>
                </nav>
              </div>
              <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                <div className="input-group input-group-seamless ml-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search" />
                    </div>
                  </div>
                  <input
                    className="navbar-search form-control"
                    type="text"
                    placeholder="Search for something..."
                    aria-label="Search"
                  />{' '}
                </div>
              </form>
              <div className="nav-wrapper">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      <i className="material-icons">edit</i>
                      <span>Blog Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/lomba">
                      <i className="material-icons">vertical_split</i>
                      <span>Blog Posts</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/lomba/buat">
                      <i className="material-icons">note_add</i>
                      <span>Buat Lomba</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/saya">
                      <i className="material-icons">view_module</i>
                      <span>Saya</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="tables.html">
                      <i className="material-icons">table_chart</i>
                      <span>Tables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="user-profile-lite.html">
                      <i className="material-icons">person</i>
                      <span>User Profile</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="errors.html">
                      <i className="material-icons">error</i>
                      <span>Errors</span>
                    </a>
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
