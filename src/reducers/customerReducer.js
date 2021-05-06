import constants from "../constants/actionTypes";

let initialState = {
  customers: [],
  selectedCustomer: null,
};


const customerReducer = (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.FETCH_CUSTOMERS:
      // return {
      //   ...state,
      //   customers: action.customers
      // };
      
      // break;
      updated["customers"] = action.customers;
      updated["selectedCustomer"] = action.customers[0];
      console.log(updated.customers)
      return updated;
    case constants.SET_CUSTOMER:
      updated["selectedCustomer"] = action.selectedCustomer;
      return updated;
    case constants.FETCH_CUSTOMER:
      updated["selectedCustomer"] = action.selectedCustomer;
      return updated;
    case constants.NEW_POST:
      return state;
    default:
      return state;
  }
};

export default customerReducer;
