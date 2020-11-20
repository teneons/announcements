import React, { Component } from 'react';
import { connect } from 'react-redux';


class ModalControlAncmt extends Component {

  inputTitle = (e) => e.target.value;
  inputDate = (e) => e.target.value;
  txtAreaDescription = (e) => e.target.value;
  inputContact = (e) => e.target.value;

  getsNewDateAncmt() {
    this.props.ancmtEdit(this.props.id, this.inputTitle(), this.inputDate(), this.txtAreaDescription(), this.inputContact())
  }

  render() {

    return(
      <div className="modal fade" id="modalControl" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={false}>
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content form-group">
          <div className="modal-header">
            <input className="modal-title form-control fw-bold text-secondary" value={this.props.title} onChange={this.inputTitle} minLength={2} maxLength={30} type='text' placeholder='Title announcement' id="exampleModalLabel" required />
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input className='form-control fw-bold' value={this.props.date} onChange={this.inputDate} minLength={2} maxLength={40} type='text' required/>
            <textarea className="form-control mt-2" value={this.props.description} onChange={this.txtAreaDescription} minLength={2} maxLength={295} rows="3" placeholder='Description announcement' required />
            <input className='form-control col-12 mt-2 inputContact' value={this.props.contact} onChange={this.inputContact} minLength={2} maxLength={40} type='text' placeholder='Contact data' required />
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-dark" onClick={this.getsNewDateAncmt.bind(this)}>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    ancmtEdit: (id, title, date, description, contact) => {
      dispatch({type: 'EDIT_ANCMT', payload: {id: id, title: title, date: date, description: description, contact: contact}})
    }
  })
)(ModalControlAncmt)