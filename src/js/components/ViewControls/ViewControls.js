import React, {Component} from 'react';
export default class ViewControls extends Component {
    constructor(props) {
        super(props);
        //  this.store = this.props;
        this.state = {
            buttonState:{}
        }
    }
    handleViewChange(e){
//f
    }
    render() {

        var classes = ' mdl-button mdl-js-button lt-sub-btn-md mdl-js-ripple-effect';
        var dayClasses = (this.state.buttonState.dayActive ? 'active' : '') + classes;
        var weekClasses = (this.state.buttonState.weekActive ? 'active' : '') + classes;
        var monthClasses = (this.state.buttonState.monthActive ? 'active' : '') + classes;
        var yearClasses = (this.state.buttonState.yearActive ? 'active': '') + classes;

        return (
            <header className="mdl-layout__header cal-top">
                <div className="mdl-layout__header-row">
                    <button onClick={this.handleViewChange.bind(null, "day")} className={dayClasses}>Day</button>
                    <button onClick={this.handleViewChange.bind(null, "week")} className={weekClasses}>Week</button>
                    <button onClick={this.handleViewChange.bind(null, "month")} className={monthClasses}>Month</button>
                    <button onClick={this.handleViewChange.bind(null, "year")} className={yearClasses}>Year</button>
                    <h6 onClick={this.handleSetToday}>Today</h6>
                    <div className="mdl-layout-spacer"></div>
                    <a id="create-event"><button className="mdl-button mdl-js-button lt-p-btn-md mdl-js-ripple-effect"><i className="fa fa-plus-circle"></i> Create an Event</button></a>
                </div>
            </header>
        );
    }
}
