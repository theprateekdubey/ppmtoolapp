import React from "react";
import ProjectItem from "./ProjectItem";
import CreateProjectButton from "./projects/CreateProjectButton";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton />
                <br />
                <hr />
                <ProjectItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
