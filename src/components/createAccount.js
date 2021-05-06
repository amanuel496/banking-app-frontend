import React, { Component } from "react";
import { connect } from "react-redux";
// import userImg from "./user.png";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import { createCustomer } from "../actions/customerActions";

class CreatAccount extends Component {
  constructor(props) {
    super(props);
    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      details: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        gender: undefined,
        accountType: undefined,
        accountNumber: parseInt(
          Math.random() * (1000000000 - 1100000000) + 1100000000
        ),
        amount: undefined,
      },
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.accountNumber === nextProps.accountNumber) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }


  refreshPage () {
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

  submit() {
    //   window.alert("hey hey");
    const { dispatch } = this.props;
    // window.alert(this.state.details.name);
    dispatch(createCustomer(this.state.details));
  }
  logout() {
    this.props.dispatch(logoutUser());
  }
  render() {
    return (
      <div className="container-fluid" id="create-account-wrapper">
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
          <div className="col">
            <h1 style={{ marginBottom: "10%" }}>
              Bank Account Registration Form
            </h1>
            <form>
              <div className="form-row">
                <div className="col form-group">
                  <label>First name </label>
                  <input
                    value={this.state.details.firstName}
                    name="firstName"
                    onChange={this.updateDetails}
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
                <div className="col form-group">
                  <label>Last name</label>
                  <input
                    value={this.state.details.lastName}
                    name="lastName"
                    onChange={this.updateDetails}
                    type="text"
                    class="form-control"
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  value={this.state.details.email}
                  name="email"
                  onChange={this.updateDetails}
                  type="email"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label className="form-check form-check-inline">
                  <input
                    onChange={this.updateDetails}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                  />
                  <span className="form-check-label"> Male </span>
                </label>
                <label className="form-check form-check-inline">
                  <input
                    onChange={this.updateDetails}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  <span className="form-check-label"> Female</span>
                </label>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Amount</label>
                  <input
                    name="amount"
                    value={this.state.details.amount}
                    onChange={this.updateDetails}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>
                    Account Type
                    <select
                      value={this.state.details.accountType}
                      onChange={this.updateDetails}
                      name="accountType"
                      id="inputState"
                      className="form-control"
                    >
                      <option value=""> Choose...</option>
                      <option value="Checking Account" selected="">
                        Checking Account
                      </option>
                      <optionc value="Savings Account">Savings Account</optionc>
                      <option value="A Money Markey Account">
                        A Money Markey Account
                      </option>
                      <option value="Certificates of Deposit (CD)">
                        Certificates of Deposit (CD)
                      </option>
                      <option value="IRA Account">IRA Account</option>
                    </select>
                  </label>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
              </div>
              <div className="form-group">
                <label>
                  Account Number &nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.refreshPage}
                  >
                    Regenerate
                  </button>
                </label>
                <input
                  id="accountNumber"
                  className="form-control"
                  // type="text"
                  value={this.state.details.accountNumber}
                  readOnly
                />
              </div>
              <div className="form-group">
                <Link to="/menu">
                  <button
                    //   className="submit-btn"
                    type="button"
                    onClick={this.submit}
                    className="btn btn-primary btn-block"
                  >
                    {" "}
                    Register{" "}
                  </button>
                </Link>
                {/* <Link to="/menu">
                  <button
                    // style={{ marginLeft: "15px" }}
                    //   onClick={this.logout.bind(this)}
                    type="button"
                    class="back btn btn-primary"
                  >
                    Back
                  </button>
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {};
// };

// export default CreatAccount;

const mapStateToProps = (state) => {
  return {
    selectedCustomer: state.customers.selectedCustomer,
  };
};

export default connect(mapStateToProps)(CreatAccount);
