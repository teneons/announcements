import React, {Component} from 'react';
import './Header.css';
import BtnAdd from '../BtnAdd/BtnAdd';

export default class Header extends Component {

  render() {
  return(
    <nav className="navbar d-flex justify-content-between flex-column flex-md-column flex-lg-row bg-transparent shadow-sm">
    <div className="d-flex flex-row">
        <div className='Logo'></div>
        <span className="navbar-brand font-weight-bold text-uppercase text-warning TextNameApp">Announcements</span>
    </div>
    <BtnAdd />
    <form className="form-inline mt-2 d-flex justify-content-center flex-column flex-lg-row col-12 col-lg-4">
        <input className="form-control mr-1 col-12 col-lg-9" type="search" placeholder="Search to announcements" aria-label="Search" />
        <button className="btn btn-outline-warning my-2 font-weight-bold text-uppercase" type="submit">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </button>
    </form>
    </nav>
  )
  }
}