import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./components/SideBar";
import TM from "./TEAM_MEMBER";
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      allTasks: [],
      complete: [],
      start: [],
      not_start: [],
    };
    this.PUBLIC_KEY = "AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k";
    this.CALENDAR_ID = "mpic6lfv96n6kfir1d5lvvknrg@group.calendar.google.com";
    this.access_token = "";
    this.handleStartToggle = this.handleStartToggle.bind(this);
  }
  componentDidMount() {
    this.refresh_token();
    this.getData();
  }
  refresh_token = () => {
    axios
      .post(`https://accounts.google.com/o/oauth2/token`, {
        client_id:
          "763600388168-faasredsv6urbv3ephcbfbmsjed60je7.apps.googleusercontent.com",
        client_secret: "19WMF7KdUp_yvBF5T8hSuteE",
        refresh_token:
          "1//04uxkvmMLICo5CgYIARAAGAQSNwF-L9IrI6qL5o5cina3k1VJ-AHsMy829UeXB2Zvt0dnQ-M3IPLxFq4EoIctWgbZLZkZgQ1HtRw",
        grant_type: "refresh_token",
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.access_token = response.data.access_token;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  allTasks = (tasks) => {
    const allTasks = tasks.map((task) => {
      const events = this.state.allTasks;
      task.color = "";
      events.push(task);
      this.setState({ allTasks: events });
      this.setState({ not_start: events });
    });
    console.log(this.state.allTasks);
  };

  getData = () => {
    const dataUrl = `https://www.googleapis.com/calendar/v3/calendars/${this.CALENDAR_ID}/events?key=${this.PUBLIC_KEY}`;
    axios
      .get(dataUrl)
      .then((response) => {
        this.allTasks(response.data.items);
        console.log(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    //new calendar for new project => get new calendar id for every project and save it in state allproject:[]
    // the query should be changeble if i want to change the calendar too
    // var config = {
    //   method: "get",
    //   url: `https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=${this.access_token}`,
    //   headers: { Authorization: `Bearer ${this.access_token}` },
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  insert = (new_tasks) => {
    var config = {
      method: "post",
      url: `https://www.googleapis.com/calendar/v3/calendars/${this.CALENDAR_ID}/events?access_token=${this.access_token}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.access_token}`,
      },
      data: new_tasks,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  update = (eventId, data) => {
    var axios = require("axios");
    var config = {
      method: "put",
      url: `https://www.googleapis.com/calendar/v3/calendars/${this.CALENDAR_ID}/events/${eventId}?access_token=${this.access_token}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${this.access_token}`,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  delete = (eventId) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://www.googleapis.com/calendar/v3/calendars/${this.CALENDAR_ID}/events/${eventId}?access_token=${this.access_token}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleStartToggle = (task, e) => {
    const not_start = this.state.not_start.slice();
    const start = this.state.start.slice();
    const complete = this.state.complete.slice();
    const allTasks = this.state.allTasks.slice();
    const taskIndex_All = allTasks.indexOf(task);

    const taskIndex = not_start.indexOf(task);
    if (taskIndex !== -1) {
      not_start.splice(taskIndex, 1);
      start.push(task);
      this.setState({ not_start });
      this.setState({ start });
      allTasks[taskIndex_All].color = "bisque";
      this.setState({ allTasks });
    } else if (taskIndex === -1) {
      const Index = start.indexOf(task);
      if (Index !== -1) {
        start.splice(taskIndex, 1);
        complete.push(task);
        this.setState({ complete });
        this.setState({ start });
        allTasks[taskIndex_All].color = "cadetblue";
        this.setState({ allTasks });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <SideBar
          TM={TM.members}
          allTasks={this.state.allTasks}
          complete={this.state.complete}
          start={this.state.start}
          not_start={this.state.not_start}
          get={this.getData}
          add={this.insert}
          update={this.update}
          delete={this.delete}
          onStartToggle={this.handleStartToggle}
        />
      </div>
    );
  }
}
