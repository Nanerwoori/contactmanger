import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    showAddForm: true,
    isLoading: true,
    errors: {}
  };

  async componentDidMount() {
    const res = await axios.get(
      `https:/jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    );
    const { name, email, phone } = res.data;
    this.setState({
      name,
      email,
      phone,
      isLoading: false
    });
  }

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

  onSubmit = async (dispatch, e) => {
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

    const {
      match: {
        params: { id }
      }
    } = this.props;

    const updatedContact = {
      name,
      email,
      phone
    };

    const res = await axios.put(
      `https:/jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

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
    const { showAddForm, name, email, phone, errors, isLoading } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return isLoading ? (
            <div>loading ...</div>
          ) : (
            <div>
              <button className="btn grey darken-4" onClick={this.showAddForm}>
                <i className="material-icons">add </i> Edit Contact
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
                  <input type="submit" value="Update Contact" className="btn" />
                </form>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
