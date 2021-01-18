import React, { Component } from "react";
import Home from "./Home";
import Dashbourd from "./Dashbourd";
import Scheduler from "./Scheduler";
import TimeLine from "./TimeLine";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class SideBar extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <Home isAuthed={true} />,
      },
      {
        path: "/Dashbourd",
        sidebar: () => <div>Dashbourd!</div>,
        main: () => (
          <Dashbourd
            allTasks={this.props.allTasks}
            complete={this.props.complete}
            start={this.props.start}
            not_start={this.props.not_start}
            onStartToggle={this.props.onStartToggle}
          />
        ),
      },
      {
        path: "/shoelaces",
        sidebar: () => <div>Scheduler!</div>,
        main: () => (
          <Scheduler
            allTasks={this.props.allTasks}
            add={this.props.add}
            update={this.props.update}
            delete={this.props.delete}
          />
        ),
      },
      {
        path: "/TimeLine",
        sidebar: () => <div>TimeLine!</div>,
        main: () => (
          <TimeLine allTasks={this.props.allTasks} TM={this.props.TM} />
        ),
      },
    ];

    //map for project
    // const projects = this.props.projects.map((project) => {
    //   return (
    //     <li> {project.summary}
    //       <li><a>Dashbourd</a></li>
    //       <li><a>add task</a></li>
    //       <li><a>Scheduler</a></li>
    //     </li>
    //   );
    // });
    return (
      <Router>
        <div className="sidebar" style={{ display: "flex" }}>
          <div className="nav">
            <header>planner</header>
            <ul>
              <li className="fas fa-home">
                <Link to="/"> Home</Link>
              </li>
              <li className="fas fa-qrcode">
                <Link to="/Dashbourd"> Dashbourd</Link>
              </li>
              <li className="fas fa-calendar-week">
                <Link to="/shoelaces"> Shoelaces</Link>
              </li>
              <li>
                <Link className="fas fa-stream" to="/TimeLine">
                  {" "}
                  TimeLine
                </Link>
              </li>
            </ul>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>
          <div className="main">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
