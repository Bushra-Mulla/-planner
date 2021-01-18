import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default class TimeLine extends Component {
  render() {
    const data = this.props.allTasks;
    const task = data.map((task) => {
      return {
        title: task.summary,
        start: task.start.dateTime,
        end: task.end.dateTime,
        allDay: true,
        // resourceId: task.attendees,
        color: task.color,
        resourceId: task.creator.email,
      };
    });
    const TM = this.props.TM.map((tm) => {
      console.log(tm.email);
      return {
        id: tm.email,

        title: `${tm.first_Name} ${tm.Last_Name}`,
      };
    });
    return (
      <div className="Scheduler">
        <FullCalendar
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          plugins={[resourceTimelinePlugin, interactionPlugin]}
          initialView="resourceTimelineMonth"
          resourceAreaWidth={"15%"}
          resourceLabelText={"Rooms"}
          resources={TM}
          events={task}
          headerToolbar={{ center: "timelineWeek,timelineMonth" }}
        />
      </div>
    );
  }
}
