import React, { Component } from 'react';


export default class ModalAdd extends Component {

	adDate = (e) => {
		let d = new Date();
		let day = d.getDate();
		let month = d.getMonth() + 1;
		let year = d.getFullYear();

		let fullDate = `${day}.${month}.${year}`;
		return fullDate;
	};

	getInputsValue = (e) => {
	}

	render() {
		return (
			<div className="modal fade" id="ModalAdd" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={false}>
				<div className="modal-dialog modal-dialog-centered">
					<form className="modal-content form-group">
						<div className="modal-header">
							<input className="modal-title form-control font-weight-bold" minLength={3} maxLength={30} onChange={this.getInputsValue} style={{ fontSize: '3vh' }} type='text' placeholder='Title announcement' id="exampleModalLabel" />
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div className="modal-body">
							<span className='card-subtitle text-muted right-align' onChange={this.getInputsValue}><i className="fa fa-calendar"></i> <span className='font-weight-bold'>{this.adDate()}</span></span>
							<textarea className="form-control mt-2" minLength={10} maxLength={295} onChange={this.getInputsValue} rows="3" placeholder='Description announcement' />
							<input className='col-12 mt-2 inputContact' minLength={7} maxLength={40} onChange={this.getInputsValue} type='text' placeholder='Contact data' />
						</div>
						<div className="modal-footer d-flex justify-content-center">
							<button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
							<button type="submit" className="btn btn-warning text-uppercase">Post</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
