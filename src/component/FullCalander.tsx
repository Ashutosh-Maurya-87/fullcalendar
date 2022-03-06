import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "@fullcalendar/daygrid/main.css";
import interactionPlugin from "@fullcalendar/interaction";

const FullCalander = () => {
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
      <h1>Showing full Calendar using fullcalendar package.</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        //dateClick={handleDateClick}
        editable={true}
        selectable={true}
        select={handleDateSelect}
      />
      {/* <p>{selectedDate}</p> */}
    </>
  );
};

export default FullCalander;
