import React, { Component } from "react";
import { connect } from "react-redux";
import userImg from "./user.png";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";

class Menu extends Component {
  logout() {
    this.props.dispatch(logoutUser());
  }
  render() {
    return (
      <div className="container-fluid" id="menu-wrapper">
        <div className="row">
          <button className="logout btn btn-primary"></button>
          {/* <LinkContainer to="/signin">
            <button
              // style={{ marginLeft: "15px" }}
              onClick={() => <Route exact path="/" render={() => <Signup />} />}
              type="button"
              class="logout btn btn-primary"
            >
              Logout
            </button>
          </LinkContainer> */}
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
        </div>
        <div className="row">
          <div className="user-menu">
            <img className="user-img-menu" src={userImg} alt="user avator" />
            <div
              style={{
                marginLeft: "33%",
                marginBottom: "8%",
                textTransform: "uppercase",
              }}
            >
              {localStorage.name}
            </div>
            <div>
              {" "}
              <Link to="/createAccount">
                <button
                  // style={{ marginLeft: "15px" }}
                  // onClick={this.logout.bind(this)}
                  type="button"
                  class="menu-btn"
                >
                  creat customer account
                </button>
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/viewaccounts">
                <button type="button" class="menu-btn">
                  view existing accounts
                </button>
              </Link>
            </div>
            {/* <div>
              {" "}
              <button type="submit" class="menu-btn">
                view all existing account
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {};
// };

// export default Menu;

const mapStateToProps = (state) => {
  return {
    // loggedIn: state.auth.loggedIn,
    // username: state.auth.username,
    // selectedMovie: state.movie.selectedMovie,
  };
};

export default connect(mapStateToProps)(Menu);