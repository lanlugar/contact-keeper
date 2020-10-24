import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  const contactContext = useContext(ContactContext);
  const { current, deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(id);
    current && current.id == id && clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge" +
            " " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i>&nbsp; {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i>&nbsp; {phone}
          </li>
        )}
      </ul>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => setCurrent(contact)}
      >
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;