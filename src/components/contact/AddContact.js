import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    showAddForm: false,
    errors: {}
  };

  showAddForm = e => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  };

  onChage = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for Errors
    if (name === "") {
      this.setState({ errors: { name: "이름 입력해주세요" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "이메일 입력해주세요" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "번호 입력해주세요" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post("https:/jsonplaceholder.typicode.com/users", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    // Redirect
    this.props.history.push("/");
  };
  render() {
    const { showAddForm, name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <button className="btn grey darken-4" onClick={this.showAddForm}>
                <i className="material-icons">add </i> Add Contact
              </button>
              {showAddForm && (
                <form
                  className="card-panel white"
                  onSubmit={this.onSubmit.bind(null, dispatch)}
                >
                  <TextInputGroup
                    placeholder="Enter Your Name ... "
                    id="name"
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.onChage}
                    error={errors.name}
                  />
                  <TextInputGroup
                    placeholder="Enter Your Email ... "
                    id="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={this.onChage}
                    error={errors.email}
                  />
                  <TextInputGroup
                    placeholder="Enter Your Phone ... "
                    id="phone"
                    value={phone}
                    name="phone"
                    onChange={this.onChage}
                    error={errors.phone}
                  />
                  <input type="submit" value="Add Contact" className="btn" />
                </form>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
