import React from "react";
import ProjectItem from "./ProjectItem";
import CreateProjectButton from "./projects/CreateProjectButton";

import { connect } from "react-redux";
import { getProjects } from "../actions/ProjectActions";
import { PropTypes } from "prop-types";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    //const projects = this.props.projects.projects;//same code can be return as below
    const { projects } = this.props.projects;
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
                {projects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
