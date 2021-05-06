import React, { Component } from "react";
import { fetchCustomers } from "../actions/customerActions"
import { setCustomer } from "../actions/customerActions";
import { connect } from "react-redux";
// import userImg from "./user.png";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import userImg from "./user.png";

class ViewAccounts extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      displayContent: false
    }
  }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCustomers());
    }



    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setCustomer(this.props.customers[selectedIndex]));
    }

    // handleClick = (movie) => {
    //     const {dispatch} = this.props;
    //     dispatch(setMovie(movie));
    // }

  
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.accountNumber === nextProps.accountNumber) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  refreshPage() {
    window.location.reload(false);
  }
  updateDetails(event) {
    // event.preventDefault();
    let updateDetails = Object.assign({}, this.state.details);

    updateDetails[event.target.name] = event.target.value;
    this.setState({
      details: updateDetails,
    });
  }

  //   handleSelect(eventKey) {
  //     let updateDetails = Object.assign({}, this.state.details);
  //     updateDetails["rating"] = parseInt(eventKey);
  //     this.setState({
  //       details: updateDetails,
  //     });
  //     console.log(this.state.details);
  //   }

//   submit() {
//     //   window.alert("hey hey");
//     const { dispatch } = this.props;
//     // window.alert(this.state.details.name);
//     dispatch(createCustomer(this.state.details));
//   }
  logout() {
    this.props.dispatch(logoutUser());
  }

//   handleOnClick(){
// document.getElementById("customer-detail").style.display = "block"
// }
  

//     handleOnClick(){

//     if(this.state.displayContent === false){
//       // window.alert("hi")
//           var x = document.getElementById("customer-detail");
//           var i;
// for (i = 0; i < x.length; i++) {
//   let elem = x[i]
//   elem.style.display = 'block !important'
//   // x[i].style.display = 'block';
//   // document.getElementsByClassName("customer-detail")[i].style.display = 'inline important'
//   // window.alert(i);
// }}
// else {
//       var x = document.getElementById("customer-detail");
//       var i;
// for (i = 0; i < x.length; i++) {
//     let elem = document.getElementById("customer-detail")[i];
//     elem.style.display = "none";
//   // x[i].style.display = "none";
//   // document.getElementsByClassName("customer-detail")[i].style.display =
//   //   "inline important";
// }
//   }
//   this.setState({ displayContent: !this.state.displayContent });
// }
  render() {
      // if (this.props.customers){
      //  const data = ;
        // window.alert(this.props.customers);
        // const data = Array.from(this.props.customers);
//         if (this.props.customers){
// const customers = this.props.customers.map((customer) => (
//   <div key={customer._id}>
//     <h3>{customer.firstName}</h3>
//     <h3>{customer.lastName}</h3>
//   </div>
//   ));
//       }
     const CustomersList = ({customers}) => {
            if (!customers) {
                return <div>Loading....</div>
            }
      // console.log(this.props);
        
    return (
      <div className="container-fluid" id="view-account-wrapper">
        <div className="row">
          <button className="logout btn btn-primary"></button>
          <Link to="/signin">
            <button
              // style={{ marginLeft: "15px" }}
              onClick={this.logout.bind(this)}
              type="button"
              class="logout btn btn-primary"
            >
              Logout
            </button>
          </Link>
          <Link to="/menu">
            <button
              // style={{ marginLeft: "15px" }}
              //   onClick={this.logout.bind(this)}
              type="button"
              class="back btn btn-primary"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12" style={{ marginLeft: "40%" }}>
            <h1 style={{ marginBottom: "10%" }}>Customers List</h1>
            {this.props.customers.customers.map((customer) => (
              <div key={customer._id} id="customers-list">
                <h3 style={{ display: "inline" }}>
                  {customer.firstName}&nbsp;{customer.lastName}
                </h3>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <h5
                  // style={{
                  //   display: "inline",
                  //   alignItems: "left",
                  //   float: "right",
                  //   marginRight: "3%",
                  // }}
                >
                  &nbsp;Account Number: {customer.accountNumber}
                </h5>
                <div
                  className="customer-detail"
                  // id={JSON.stringify(customer._id)}
                >
                  <h5>&nbsp;Account Type:&nbsp;{customer.accountType}</h5>
                  <h5>&nbsp;Amount:&nbsp;{customer.amount}</h5>
                  <h5>&nbsp;Gender:&nbsp;{customer.gender}</h5>
                  <h5>&nbsp;Email:&nbsp;{customer.email}</h5>
                </div>
                {/* <button
                  type="button"
                  className="customer-view-detail"
                  style={{ width: "100%", height: "100%", margin: "auto" }}
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  key={customer._id}
                  id={customer._id}
                  // onClick={this.handleOnClick}
                >
                  View Details
                </button> */}
              </div>
            ))}
            {/* <h1>{this.props.customers.customers[0]}</h1> */}
            {/* {console.log(customers)} */}
            {console.log(this.props.customers.customers[0])}
          </div>
        </div>
      </div>
    );
  }
  return (<CustomersList customers={this.props.customers}/>)
}}
// const mapStateToProps = (state) => {
//   return {};
// };

// export default CreatAccount;

// ViewAccounts.propTypes = {
//   fetchCustomers: PropTypes.func.isRequired,
//   customers: PropTypes.array.isRequired,
// //   newPost: PropTypes.object,
// };
const mapStateToProps = (state) => {
  return {
    customers: state.customers
  };
};

export default connect(mapStateToProps)(ViewAccounts);
