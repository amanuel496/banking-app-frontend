import React from 'react'
import { Redirect } from 'react-router-dom'
// import {logoutUser} from "../actions/authActions";
import Login from './components/login';
import Menu from './components/menu';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem("token");
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;