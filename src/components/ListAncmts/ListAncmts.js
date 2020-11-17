import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListAncmt extends Component {

  render() {

    return (
      <div className='container mt-4 col-sm-12 col-md-8 col-lg-5 shadow p-3'>
        <ul className="list-group">
          {this.props.ancmtsStore.map((ancmt) =>
            <li className="list-group-item" key={ancmt.id}>{ancmt.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    ancmtsStore: state.ancmts
  }),
  dispatch => ({})
)(ListAncmt)