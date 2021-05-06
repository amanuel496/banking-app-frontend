import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSignup } from "../actions/authActions";
import userImg from "./user.png";
 import { LinkContainer } from "react-router-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.updateDetails = this.updateDetails.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      details: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  updateDetails(e) {
    let update = Object.assign({}, this.state.details);

    update[e.target.id] = e.target.value;
    this.setState({
      details: update,
    });
  }

  signup() {
    const { dispatch } = this.props;
    dispatch(submitSignup(this.state.details));
  }

  render() {
    return (
      <div className="container-fluid" id="login-wrapper">
        <div className="row">
          <h1>My-Bank</h1>
        </div>
        <div className="row">
          <div className="user-login">
            <img className="user-img" src={userImg} alt="user avator" />
            <form>
              <div className="form-group">
                <label for="name" className="col-sm-4 col-form-label">
                  Full-Name
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={this.updateDetails}
                    type="text"
                    className="form-control"
                    id="name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={this.updateDetails}
                    type="text"
                    readonly
                    className="form-control"
                    id="email"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="password" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={this.updateDetails}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
              </div>
              <LinkContainer to="/menu">
                <button
                  style={{ marginLeft: "15px" }}
                  onClick={this.signup}
                  type="button"
                  class="btn btn-primary"
                >
                  Signup
                </button>
              </LinkContainer>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Signup);
