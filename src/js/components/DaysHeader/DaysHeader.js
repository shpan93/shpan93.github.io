import React, {Component} from 'react';
import moment from 'moment';
export default class DaysHeader extends Component {
    constructor(props) {
        super(props);
        //  this.store = this.props;
    }


    //
    // logout(e) {
    //   e.preventDefault();
    //   this.props.actions.logoutUser();
    // }

    render() {

        const weekDays = Array.apply(null, Array(7)).map(
            function (_, i) {
                return {
                    long:moment(i, 'e').isoWeekday(i + 1).format('dddd'),
                    short: moment(i, 'e').isoWeekday(i + 1).format('dd'),
                }
            });
        return (
            <div className="week days-header">
                <ul>

                    {
                        weekDays.map((day, id) => (
                            <li key={id} data-shortname={day.short}><span>{day.long}</span></li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}
