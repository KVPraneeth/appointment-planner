import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContacts(currentName, phone, email);
      setCurrentName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicate = contacts.some((contact) => contact.name === currentName);
    setIsDuplicate(duplicate);
  }, [currentName, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          currentName={currentName}
          phone={phone}
          email={email}
          setCurrentName={setCurrentName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        ></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts}></TileList>
      </section>
    </div>
  );
};
