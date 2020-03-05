import React, { Component } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import logo from "../blog.jpg";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    validationError: null
  };
  Login = async e => {
    e.preventDefault();
    let { email, password } = this.state;

    // validation logic

    try {
      let response = await Axios.post("http://localhost:5000/api/login", {
        email,
        password
      });
      const {
        data: { token }
      } = response;
      console.log(token);
      localStorage.setItem("token", token);
      this.props.Login();
      console.log(this.props);
    } catch (error) {
      // validation by status code
      // console.log(error.response);
      console.log("catch");
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast("Check your network connection");
      } else {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    let { email, password } = this.state;
    return (
      <body
        style={{
          backgroundImage: "url(" + logo + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px"
        }}
      >
        <div className="contaier">
          <div className="row">
            <div className="col-4 "></div>

            <div className="col-3 "></div>
            <div className="col-4 my-5 mx-2">
              <form className="my-5 p-3">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={this.onChangeHandler}
                    value={this.state.password}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className=" btn btn-danger px-5"
                    onClick={this.Login}
                  >
                    Login
                  </button>
                </div>
                <h5 className="text-light p-3 text-center">
                  Not Register Yet. Register Now
                </h5>
              </form>
              <div className="text-center mt-n3">
                <button type="submit" className=" btn btn-danger px-5 mt-n5">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
