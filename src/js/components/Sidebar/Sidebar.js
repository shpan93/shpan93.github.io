import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTask from '../AddTask/AddTask';
import CurrentSelection from '../CurrentSelection/CurrentSelection';
import SearchWidget from '../SearchWidget/SearchWidget';
class Sidebar extends Component {
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


        return (
            <aside className="sidebar ">
                <CurrentSelection></CurrentSelection>

                {
                    (this.props.isNewTaskWidgetOpened && (this.props.today.date.isBefore(this.props.selectedDay.date) || this.props.today.YMD === this.props.selectedDay.YMD) ) && (

                        <AddTask></AddTask>
                    )
                }
                <SearchWidget></SearchWidget>


            </aside>
        );
    }
}

export default connect(state => state.data)(Sidebar);
