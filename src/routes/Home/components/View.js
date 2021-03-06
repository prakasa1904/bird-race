import React from 'react';
import { string, shape } from 'prop-types';
import { Link } from 'react-router-dom';

import { date, timeAgo } from '@helpers/dateTime';

class HomeView extends React.Component {
  static propTypes = {
    location: shape({
      search: string,
    }).isRequired,
  };

  onClickDetailLomba = () => {
    console.log('Show Detail Lomba !!!');
  };

  onClickJoinLomba = () => {
    console.log('Join Lomba !!!');
  };

  onClickEditLomba = () => {
    console.log('Edit Lomba !!!');
  };

  onClickLombaLainnya = () => {
    console.log('Lihat Lomba Lainnya !!!');
  };

  render() {
    const { location } = this.props;
    const search = location.search || '';

    return (
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
          <div className="card card-small blog-comments">
            <div className="card-header border-bottom">
              <h6 className="m-0">Lomba Terakhir</h6>
            </div>
            <div className="card-body p-0">
              <div className="blog-comments__item d-flex p-3">
                <div className="blog-comments__content">
                  <div className="blog-comments__meta text-muted">
                    <Link className="text-secondary" to="/lomba/detail/lomba-burung-pertama">
                      Lomba Burung Dara Pertama
                    </Link>
                    &nbsp;di&nbsp;
                    <Link className="text-secondary" to={`/lomba/cari?wilayah=${search}`}>
                      Trenggalek
                    </Link>
                    <span className="text-muted">&nbsp;–&nbsp;{timeAgo(date('Selasa, 18 Januari 2019').new)}</span>
                  </div>
                  <p className="m-0 my-1 mb-2 text-muted">Jumlah peserta 10</p>
                  <div className="blog-comments__actions">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-white" onClick={this.onClickDetailLomba}>
                        <span className="text-info">
                          <i className="material-icons">description</i>
                        </span>
                        &nbsp;Lihat Detail
                      </button>
                      <button type="button" className="btn btn-white" onClick={this.onClickJoinLomba}>
                        <span className="text-success">
                          <i className="material-icons">person_add</i>
                        </span>
                        &nbsp;Daftar
                      </button>
                      <button type="button" className="btn btn-white" onClick={this.onClickEditLomba}>
                        <span className="text-light">
                          <i className="material-icons">more_vert</i>
                        </span>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-top">
              <div className="row">
                <div className="col text-center view-report">
                  <button type="submit" className="btn btn-white" onClick={this.onClickLombaLainnya}>
                    Lomba Lainnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
