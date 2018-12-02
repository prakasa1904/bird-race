import React from 'react';

class ProfileView extends React.Component {
  onClickFollow = () => {
    console.log('Following !!!');
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="card card-small mb-4 pt-3">
            <div className="card-header border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img
                  className="rounded-circle"
                  src="http://localhost/lite-admin/HTML/images/avatars/0.jpg"
                  alt="User Avatar"
                  width="110"
                />
              </div>
              <h4 className="mb-0">Sierra Brooks</h4>
              <span className="text-muted d-block mb-2">Project Manager</span>
              <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                <i className="material-icons mr-1">person_add</i>Follow
              </button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item p-4">
                <strong className="text-muted d-block mb-2">Description</strong>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae
                  minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileView;
