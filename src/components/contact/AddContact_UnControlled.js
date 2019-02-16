import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: "Nanerwoori",
    email: "nanerwoori@gmail.com",
    phone: "010-2791-6691"
  };

  state = {
    showAddForm: false
  };

  showAddForm = e => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
  };
  render() {
    const { name, email, phone } = this.props;
    const { showAddForm } = this.state;
    return (
      <div>
        <button className="btn grey darken-4" onClick={this.showAddForm}>
          <i className="material-icons">add </i> Add Contact
        </button>
        {showAddForm && (
          <form className="card-panel white" onSubmit={this.onSubmit}>
            <div className="input-field ">
              <input
                placeholder="Name"
                id="name"
                type="text"
                defaultValue={name}
                name="name"
                ref={this.nameInput}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field ">
              <input
                placeholder="email"
                id="email"
                name="email"
                type="text"
                defaultValue={email}
                ref={this.emailInput}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field ">
              <input
                placeholder="phone"
                id="phone"
                name="phone"
                type="text"
                defaultValue={phone}
                ref={this.phoneInput}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <input type="submit" value="Add Contact" className="btn" />
          </form>
        )}
      </div>
    );
  }
}
export default AddContact;
