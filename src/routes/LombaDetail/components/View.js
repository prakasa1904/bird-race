import React from 'react';

class LombaDetailView extends React.Component {
  onClickJoinLomba = () => {
    console.log('Join Lomba !!!');
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
          <div className="card card-small user-details mb-4">
            <div className="card-body p-0" style={{ marginTop: '-0.125rem' }}>
              <h4 className="text-center m-0 mt-2">Judul Lomba</h4>
              <p className="text-center text-light m-0 mb-2">Deskripsi Singkat Tengtang Lomba Maksimal 255 Karakter.</p>
              <ul className="user-details__social user-details__social--primary d-table mx-auto mb-4">
                <li className="mx-1">
                  <a href="https://www.facebook.com/prakasa1904">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="https://www.twitter.com/prakasa1904">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="https://www.github.com/prakasa1904">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="mx-1">
                  <a href="https://www.slack.com/prakasa1904">
                    <i className="fab fa-slack" />
                  </a>
                </li>
              </ul>
              <div className="user-details__user-data border-top border-bottom p-4">
                <div className="row mb-3">
                  <div className="col w-100">
                    <span>Waktu:</span>
                    <span>Selasa, 18 Januari 2019</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col w-100">
                    <span>Lokasi:</span>
                    <span>Trenggalek, Trenggalek Timur</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col w-100">
                    <span>Telp:</span>
                    <span>+40 1234 567 890</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col w-100">
                    <span>Email:</span>
                    <span>prakasa@devetek.com</span>
                  </div>
                </div>
              </div>
              <div className="user-details__tags p-4" style={{ textAlign: 'justify' }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae
                  minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae
                  minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae
                  minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LombaDetailView;
