import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AddTask from "./AddTask";
export default class Scheduler extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  handleDateClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };
  handleEvent = (info) => {
    console.log(info.event.start);
    alert(
      info.event.title +
        " has change " +
        info.event.start.toISOString() +
        "to" +
        info.event.end.toISOString()
    );
    let id = info.event.id;
    let data = {
      start: {
        dateTime: info.event.start.toISOString(),
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: info.event.end.toISOString(),
        timeZone: "America/Los_Angeles",
      },
      summary: info.event.title,
    };
    this.props.update(id, data);
  };
  handleEventDelete = (info) => {
    if (window.confirm(`${info.event.title} Delete this task?`)) {
      this.props.delete(info.event.id);
    }
  };
  render() {
    const data = this.props.allTasks;
    const task = data.map((task) => {
      return {
        title: task.summary,
        start: task.start.dateTime,
        end: task.end.dateTime,
        allDay: true,
        id: task.id,
        color: task.color,
      };
    });

    return (
      <div className="Scheduler">
        {" "}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          timeZone={"Asia/Riyadh"}
          selectable={true}
          selectMirror={true}
          select={this.handleDateClick}
          Draggable={true}
          editable={true} // move the event
          eventResizableFromStart={true}
          eventDurationEditable={true}
          eventStartEditable={true} //change start time
          eventDurationEditable={true} //
          eventDrop={this.handleEvent}
          eventResize={this.handleEvent}
          events={task}
          eventClick={this.handleEventDelete}
          // eventColor="#378006"
        />{" "}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
          <ModalBody>
            {" "}
            <AddTask add={this.props.add} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}
