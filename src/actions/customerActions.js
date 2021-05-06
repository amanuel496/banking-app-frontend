import actionTypes from "../constants/actionTypes";
import runtimeEnv from "@mars/heroku-js-runtime-env";

function customersFetched(customers) {
  // customers = customers
  console.log(customers);
  return {
    type: actionTypes.FETCH_CUSTOMERS,
    customers: customers,
  };
}

function customerFetched(customer) {
  return {
    type: actionTypes.FETCH_CUSTOMER,
    selectedCustomer: customer,
  };
}

function customerSet(customer) {
  return {
    type: actionTypes.SET_CUSTOMER,
    selectedCustomer: customer,
  };
}

export function setCustomer(customer) {
  return (dispatch) => {
    dispatch(customerSet(customer));
  };
}

export function fetchCustomer(customerId) {
  const env = runtimeEnv();
  return (dispatch) => {
    return fetch(
      `{https://my-banking-app-project.herokuapp.com/customers/${customerId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
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
        dispatch(customerFetched(res.body));
      })
      .catch((e) => console.log(e));
  };
}

export function fetchCustomers() {
  const env = runtimeEnv();
  return (dispatch) => {
    return fetch(`https://my-banking-app-project.herokuapp.com/customers`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        // console.log(localStorage.getItem("token"));
        // window.alert(res);
        dispatch(customersFetched(res));
      })
      .catch((e) => console.log(e));
  };
}

export const createCustomer = (postData) => (dispatch) => {
  const env = runtimeEnv();
  const token = window.localStorage.getItem("token");
//   postData.customer = customerId;
  console.log(postData);
  //   window.alert("way to go")
  fetch(`https://my-banking-app-project.herokuapp.com/customers`, {
    method: "POST",
    headers: {
      //   Accept: "application/json",
      "content-type": "application/json",
      Authorization: `JWT ${localStorage.getItem("token")}`,
      //   Authorization: window.localStorage.getItem("token"),
    },
    mode: "cors",
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((post) =>
      dispatch({
        type: actionTypes.NEW_POST,
        // payload: post,
        // customerId,
      })
    );
};