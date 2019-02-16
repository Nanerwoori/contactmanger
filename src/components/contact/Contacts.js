import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  deleteClickHandler = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Nanerwoori's Contact Info</h4>
              </li>
              {contacts && contacts.length > 0 ? (
                contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))
              ) : (
                <h3 className="center">loading ..... </h3>
              )}
            </ul>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
