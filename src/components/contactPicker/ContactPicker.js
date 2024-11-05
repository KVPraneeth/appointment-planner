import React from "react";

export const ContactPicker = ({ contacts = [], onChange, name, value }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="">No Contact selected</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
