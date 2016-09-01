import React, {Component} from 'react';

export  default  class DisplayHeader extends Component{
	constructor(props) {
		super(props);
		// this.store = this.props.store;
	}

	handleUpdatePeriod(update) {
		this.props.updateAction(update);
	}

	render(){
	//	{this.props.caption}
		return (

				<div className="display-header mdl-layout__header-row mdl-shadow--1dp">

						<button className="left mdl-button mdl-js-button mdl-button--icon" onClick={this.handleUpdatePeriod.bind(this, -1)}>
							<i className="fa fa-arrow-circle-left"></i>
						</button>
						<h2>{this.props.caption}</h2>
						<button className="left mdl-button mdl-js-button mdl-button--icon" onClick={this.handleUpdatePeriod.bind(this, 1)}>
							<i className="fa fa-arrow-circle-right"></i>
						</button>
									
				</div>
		)
	} 
};
