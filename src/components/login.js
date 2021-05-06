import React, { Component } from "react";
import { connect } from "react-redux";
import { submitLogin } from "../actions/authActions";
import userImg from "./user.png";
 import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.updateDetails = this.updateDetails.bind(this);
    // this.login = this.login.bind(this);

    this.state = {
      details: {
        email: "",
        password: "",
      },
    };
  }

  updateDetails(e) {
    e.preventDefault();
    let update = Object.assign({}, this.state.details);

    update[e.target.id] = e.target.value;
    this.setState({
      details: update,
    });
  }

  // login() {
  //   const { dispatch } = this.props;
  //   // window.alert('being logedin')
  //   dispatch(submitLogin(this.state.details));
  // }
  login() {
    this.props.dispatch(submitLogin(this.state.details));
  }
  handleSignup() {}

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
              {/* <LinkContainer to="/menu">
                <button
                  style={{ marginLeft: "15px" }}
                  onClick={this.login}
                  type="button"
                  class="btn btn-primary"
                >
                  Login
                </button>
              </LinkContainer> */}
                <Link to="/menu">
                  <button
                    style={{ marginLeft: "15px" }}
                    onClick={this.login.bind(this)}
                    type="button"
                    class="btn btn-primary"
                  >
                    Login
                  </button>
                </Link>

              <Link to="/signup">
                <button
                  style={{ marginLeft: "15px" }}
                  // onClick={() => (
                  //   <Route exact path="/" render={() => <Signup />} />
                  // )}
                  type="button"
                  class="btn btn-primary"
                >
                  Create Account
                </button>
              </Link>
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

export default connect(mapStateToProps)(Login);
