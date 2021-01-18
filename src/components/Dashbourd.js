import React, { Component } from "react";
import All_tasks from "./All_tasks";
export default class Dashbourd extends Component {
  constructor(props) {
    super();
    this.state = {
      filter: "All",
    };
  }
  handleFilterClick = (filter) => {
    this.setState({ filter });
  };
  render() {
    const All = this.state.filter === "All" ? "is-active " : "";
    const isnot_start = this.state.filter === "not_start" ? "is-active " : "";
    const isStart = this.state.filter === "start" ? "is-active " : "";
    const iscomplated = this.state.filter === "complated" ? "is-active " : "";

    const listView =
      this.state.filter === "All"
        ? this.props.allTasks
        : this.state.filter === "not_start"
        ? this.props.not_start
        : this.state.filter === "start"
        ? this.props.start
        : this.state.filter === "complated"
        ? this.props.complete
        : "";

    const All_task = listView.map((task) => {
      return (
        <All_tasks
          task={task.summary}
          description={task.description}
          key={task.id}
          onStartToggle={() => this.props.onStartToggle(task)}
          isStart={this.props.start.includes(task)}
          isComplete={this.props.complete.includes(task)}
        />
      );
    });

    return (
      <div>
        <div className="task-list-header">
          <div
            className={`task-list-filter ${All}`}
            onClick={() => this.handleFilterClick("All")}
          >
            All task
          </div>
          <div
            className={`task-list-filter ${iscomplated}`}
            onClick={() => this.handleFilterClick("complated")}
          >
            complated
          </div>
          <div
            className={`task-list-filter ${isStart}`}
            onClick={() => this.handleFilterClick(`start`)}
          >
            start
          </div>
          <div
            className={`task-list-filter ${isnot_start}`}
            onClick={() => this.handleFilterClick(`not_start`)}
          >
            not start
          </div>
        </div>
        <div className="list">{All_task}</div>
      </div>
    );
  }
}
