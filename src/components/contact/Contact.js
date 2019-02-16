import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
class Contact extends Component {
  state = {
    showContactInfo: false,
    isDeleting: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onClickDelete = async (id, dispatch) => {
    this.setState({
      isDeleting: true
    });
    await axios.delete(`https:/jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo, isDeleting } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <li className="collection-item">
              <h4
                className="card-title"
                onClick={this.onShowClick.bind(contact.id)}
              >
                {contact.name} {""}
                <i className="material-icons">arrow_drop_down</i>
              </h4>

              {showContactInfo && (
                <React.Fragment>
                  {isDeleting && <div className="center">deleting .... </div>}{" "}
                  <p className=" right">
                    <Link to={`/contact/edit/${contact.id}`}>
                      <i className="material-icons orange-text">create</i>
                    </Link>
                    <i
                      className="material-icons red-text"
                      onClick={this.onClickDelete.bind(
                        this,
                        contact.id,
                        dispatch
                      )}
                    >
                      delete_forever
                    </i>
                  </p>
                  <strong>Email : </strong>
                  {contact.email}
                  <br />
                  <strong>Phone : </strong>
                  {contact.phone}
                </React.Fragment>
              )}
            </li>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
