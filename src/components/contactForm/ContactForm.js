import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentName}
          placeholder="Name"
          onChange={(e) => setCurrentName(e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Mobile"
          pattern="^(\+91[\-\s]?)?[6-9]\d{9}$"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
