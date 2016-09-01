import React, {Component} from 'react';
import NavBar from '../components/NavBar/NavBar'
import ViewControls from '../components/ViewControls/ViewControls'
import Sidebar from '../components/Sidebar/Sidebar'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

class Root extends Component {
    constructor(props) {
        super(props);
        // this.store = this.props.store;
    }

    render() {


        return (
            <div className="root">


                <div className="view  ">
                    {/*
                     <ViewControls />
                     */}
                    
                    {this.props.children}
                </div>

                    {/*  */}
                    <Sidebar></Sidebar>
            
            </div>
        );
    }
}


function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(state => state.data, mapDispatch)(Root);

// <NavBar />
