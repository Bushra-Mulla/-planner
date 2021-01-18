import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default class AddTask extends Component {
  constructor(props) {
    super();
    this.state = {
      recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
      reminders: { useDefault: false },
      summary: "",
      start: {
        dateTime: "",
        timeZone: "",
      },
      end: {
        dateTime: "",
        timeZone: "",
      },
      attendees: [{ email: "example@gmail.com" }],
    };
  }


  addNew = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    console.log(this.state);
    this.setState({});
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div className="grey-text">
                <MDBInput
                  type="text"
                  placeholder="new task"
                  onChange={(e) => {
                    this.setState({ summary: e.target.value });
                  }}
                  value={this.state.summary}
                  required
                />
                <MDBRow></MDBRow>
                <label>Start Date </label>{" "}
                <MDBInput
                  icon="calendar-alt"
                  id="date"
                  type="date"
                  onChange={(e) => {
                    this.setState({
                      start: {
                        dateTime: e.target.value + "T17:00:00-07:00",
                        timeZone: "Asia/Riyadh",
                      },
                    });
                  }}
                />
                <label>End Date</label>{" "}
                <MDBInput
                  icon="calendar-alt"
                  id="date"
                  type="date"
                  onChange={(e) => {
                    this.setState({
                      end: {
                        dateTime: e.target.value + "T17:00:00-07:00",
                        timeZone: "Asia/Riyadh",
                      },
                    });
                  }}
                />
                <div className="section">
                  <span>description</span>
                </div>
                <MDBInput
                  type="textarea"
                  cols="50"
                  rows="5"
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
                <div className="eamil">
                  <label>Email</label>{" "}
                  <MDBInput
                    placeholder="example@gmail.com"
                    type="email"
                    onChange={(e) => {
                      this.setState({ attendees: { email: e.target.value } });
                    }}
                    validate
                    error="wrong"
                    success="right"
                    icon="envelope"
                  />{" "}
                </div>
                <div className="text-center">
                  <MDBBtn color="indigo" onClick={this.addNew}>
                    Confirm Information
                  </MDBBtn>
                </div>
              </div>{" "}
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
