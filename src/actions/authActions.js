import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'

function userLoggedIn(username) {
    return {
        type: actionTypes.USER_LOGGEDIN,
        username: username
    }
}

function logout() {
    return {
        type: actionTypes.USER_LOGOUT
    }
}

export function submitLogin(data) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(
          `https://my-banking-app-project.herokuapp.com/employee/signin`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: "cors",
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((res) => {
            localStorage.setItem("name", res.name);
            localStorage.setItem("token", res.token);

            dispatch(userLoggedIn(data.userId));
          })
          .catch((e) => {
            console.log(e);
            // window.alert(e+"hi hi")
          });
    }
}

export function submitSignup(data) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(
          `https://my-banking-app-project.herokuapp.com/employee/signup`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: "cors",
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((res) => {
            dispatch(submitLogin(data));
          })
          .catch((e) => console.log(e));
    }
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        dispatch(logout())
    }
}