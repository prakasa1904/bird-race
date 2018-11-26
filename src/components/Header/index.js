import React, { Component, Fragment } from 'react';
import { bool, string, number, object, node, func, shape } from 'prop-types';
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
                <a
                  className="nav-link dropdown-toggle text-nowrap px-3"
                  data-toggle="dropdown"
                  href="#"
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
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-small ${showProfileMenu ? 'show' : ''}`}
                  style={{ display: showProfileMenu ? 'block' : 'none' }}
                >
                  <a className="dropdown-item" href="/profile">
                    <i className="material-icons">&#xE7FD;</i> Profile
                  </a>
                  <a className="dropdown-item" href="components-blog-posts.html">
                    <i className="material-icons">vertical_split</i> Blog Posts
                  </a>
                  <a className="dropdown-item" href="add-new-post.html">
                    <i className="material-icons">note_add</i> Add New Post
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item text-danger" href="#">
                    <i className="material-icons text-danger">&#xE879;</i> Logout{' '}
                  </a>
                </div>
              </li>
            </ul>
            <nav className="nav">
              <Link
                to="#"
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
)(Header);
