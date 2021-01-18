import React, { Component } from "react";
import State from "./States";
export default class All_tasks extends Component {
  render() {
    const task = this.props.task;
    const states = this.props.isStart
      ? "start"
      : this.props.isComplete
      ? "completed"
      : "";

    return (
      <div className="summary " id={`${states}`}>
        <h2>{this.props.task}</h2>
        <p>{this.props.description}</p>
        <State
          onStartToggle={this.props.onStartToggle}
          isStart={this.props.isStart}
          isComplete={this.props.isComplete}
        />
      </div>
    );
  }
}
