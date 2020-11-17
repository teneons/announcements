import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalAdd extends Component {

	adDate = (e) => {
		let d = new Date();
		let day = d.getDate();
		let month = d.getMonth() + 1;
		let year = d.getFullYear();

		let fullDate = `${day}.${month}.${year}`;
		return fullDate;
	};

  getsAllInputData() {
		this.props.newAncmt(Math.random().toString(36).substr(2, 9), this.txtTitle.value, this.txtDate.value, this.txtDescription.value, this.txtContact.value);
		this.txtTitle.value = ''
		this.txtDate.value = ''
		this.txtDescription.value = ''
		this.txtContact.value = ''
  }

	render() {
		return (
			<div className="modal fade" id="ModalAdd" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={false}>
				<div className="modal-dialog modal-dialog-centered">
					<form className="modal-content form-group">
						<div className="modal-header">
							<input className="modal-title form-control font-weight-bold" ref={(data)=> this.txtTitle = data} minLength={2} maxLength={30} style={{ fontSize: '3vh' }} type='text' placeholder='Title announcement' id="exampleModalLabel" />
						</div>
						<div className="modal-body">
							<span className='card-subtitle text-muted right-align'>
								<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar2-event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  								<path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  								<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
								</svg>
							<span className='fw-bold' ref={(data)=> this.txtDate = data}>{this.adDate()}</span></span>
							<textarea className="form-control mt-2" ref={(data)=> this.txtDescription = data} minLength={2} maxLength={295} rows="3" placeholder='Description announcement' />
							<input className='form-control col-12 mt-2 inputContact' ref={(data)=> this.txtContact = data} minLength={2} maxLength={40} type='text' placeholder='Contact data' />
						</div>
						<div className="modal-footer d-flex justify-content-center">
							<button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
							<button type="button" onClick={this.getsAllInputData.bind(this)}  className="btn btn-warning text-uppercase">Post</button>
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
		newAncmt: (id, title, date, discription, contact) => {
			dispatch({type: 'ADD_NEW_ANCMT', payload: {id: id, title: title, date: date, discription: discription, contact: contact}})
		}
	})
)(ModalAdd);
