import React, { Component } from 'react';

export default class ListAncmt extends Component {

  render() {

    return (
      <div className='container mt-4 col-sm-12 col-md-8 col-lg-6'>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}