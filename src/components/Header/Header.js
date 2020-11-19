import React, {Component} from 'react';
import logo from './logo.svg';
import BtnAdd from '../BtnAdd/BtnAdd';
import { connect } from 'react-redux';

class Header extends Component {

  getSearchTxt() {
    return this.props.searchAncmt(this.srchTxt.value)
  }

  render() {
  return(
    <nav className="navbar d-flex justify-content-evenly flex-column flex-md-column flex-md-row flex-lg-row bg-transparent shadow-sm">
    <div className="d-flex">
        <img src={logo} className="img-fluid" alt="Logo" width='50em' height='50em'></img>
        <span className="navbar-brand fw-bold text-uppercase text-warning fs-4">Announcements</span>
    </div>
    <BtnAdd />
    <form className="row container d-flex justify-content-start justify-content-md-evenly col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4">
        <div className='row'>
          <div className='col-10 mt-2'>
            <input className="form-control" ref={(data) =>this.srchTxt = data} type="search" placeholder="Search to announcements" aria-label="Search" />
          </div>
        <div className='col-1'>
          <button type="button" onClick={this.getSearchTxt.bind(this)}  className="btn btn-outline-warning my-2 font-weight-bold text-uppercase" >
            <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </form>
    </nav>
  )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    searchAncmt: (searchTxt) => {
      dispatch({type: 'SEARCH_ANCMT', payload: searchTxt})
    }
  })
)(Header)