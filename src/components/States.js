import React, { Component } from "react";

export default class States extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    this.props.onStartToggle();
  };

  render() {
    //class="fas fa-space-shuttle">

    const states = this.props.isStart ? "start" : this.props.isComplete ? "completed" : "";
    
    return (
      <div className={` state ${states} `} onClick={(e) => this.handleClick(e)}>
        <p className="fas fa-rocket"></p>
      </div>
    );
  }
}
