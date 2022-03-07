import React, { useState } from "react";
import { Button } from "reactstrap";
import FullCalander from "./FullCalander";

const CalendarShow = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Please click on this button to show fullcalendar</h1>
      <div>
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          Click This
        </Button>
      </div>

      <FullCalander
        show={show}
        setShow={() => {
          setShow(!show);
        }}
      />
    </>
  );
};

export default CalendarShow;
