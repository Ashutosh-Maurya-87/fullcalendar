import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "@fullcalendar/daygrid/main.css";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const FullCalander = (props: any) => {
  //   const [selectedDate, setSelectedDate] = useState("");
  const handleDateSelect = (selectInfo: any) => {
    //let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    // setSelectedDate(selectInfo.startStr);
    calendarApi.unselect(); // clear date selection
    console.log("selectinfo", selectInfo.startStr);
    // if (title) {
    //   calendarApi.addEvent({
    //     //id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    if (calendarApi) {
      console.log("hi");
    }
    console.log("this", calendarApi);
  };
  return (
    <>
      <Modal isOpen={props.show} toggle={props.setShow} className="m-5">
        <ModalHeader toggle={props.setShow} style={{ marginLeft: "50px" }}>
          Full Calendar
        </ModalHeader>
        <ModalBody>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            //dateClick={handleDateClick}
            editable={true}
            selectable={true}
            select={handleDateSelect}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      {/* <p>{selectedDate}</p> */}
    </>
  );
};

export default FullCalander;
