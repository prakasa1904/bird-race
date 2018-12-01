import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateMobileMenuStatus } from '@store/app';

class Header extends Component {
  state = { showProfileMenu: false };

  onToggleMobileSidebar = () => {
    const { onUpdateMobileMenuStatus } = this.props;

    onUpdateMobileMenuStatus(true);
  };

  onToggleShowProfileMenu = () => {
    this.setState(prevState => ({
      showProfileMenu: !prevState.showProfileMenu,
    }));
  };

  render() {
    const { showProfileMenu } = this.state;

    return (
      <Fragment>
        <div className="main-navbar sticky-top bg-white">
          <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
            <form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
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
            <ul className="navbar-nav border-left flex-row ">
              <li
                className={`nav-item dropdown ${showProfileMenu ? 'show' : ''}`}
                onClick={this.onToggleShowProfileMenu}
              >
                <Link
                  className="nav-link dropdown-toggle text-nowrap px-3"
                  to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="user-avatar rounded-circle mr-2"
                    src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg"
                    alt="User Avatar"
                  />
                  <span className="d-none d-md-inline-block">Sierra Brooks</span>
                </Link>
                <div
                  className={`dropdown-menu dropdown-menu-small ${showProfileMenu ? 'show' : ''}`}
                  style={{ display: showProfileMenu ? 'block' : 'none' }}
                >
                  <Link className="dropdown-item" to="/saya">
                    <i className="material-icons">&#xE7FD;</i> Saya
                  </Link>
                  <Link className="dropdown-item" to="/lomba/tambah">
                    <i className="material-icons">note_add</i> Buat Lomba
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item text-danger" to="/keluar">
                    <i className="material-icons text-danger">&#xE879;</i> Keluar{' '}
                  </Link>
                </div>
              </li>
            </ul>
            <nav className="nav">
              <Link
                to="/"
                onClick={this.onToggleMobileSidebar}
                className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
              >
                <i className="material-icons">&#xE5D2;</i>
              </Link>
            </nav>
          </nav>
        </div>
      </Fragment>
    );
  }
}

Header.state = {};

Header.propTypes = {
  onUpdateMobileMenuStatus: func.isRequired,
};

const mapDispatchToProps = {
  onUpdateMobileMenuStatus: updateMobileMenuStatus,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Header);
