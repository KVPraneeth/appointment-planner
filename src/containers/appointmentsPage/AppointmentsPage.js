import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointments,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointmentClash, setAppointmentClash] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (!appointmentClash) {
      addAppointments(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
    } else {
      alert("Appointment clash");
    }
  };

  useEffect(() => {
    const clash = appointments.some(
      (appointment) => appointment.date === date && appointment.time === time
    );
    setAppointmentClash(clash);
  }, [date, time, appointments]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        ></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objects={appointments}></TileList>
      </section>
    </div>
  );
};
