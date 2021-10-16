import { Component } from "react";
import "../css/ProjectComponent.css";
class Projects extends Component {
  onProjectClicked(id) {
    var projObj = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj.link, "_blank");
  }
  
  render() {
    const projects = this.props.details.projects.map((project) => {
      return (
        <div key={project.id} className="row">
          <div className="col-12 col-sm-6" style={{textAlign: "center"}}>
            <img
              src={project.image}
              alt={project.title}
              width="25%"
              height="70%"
              style={{margin:"auto"}}
            />
          </div>
          <div className="col-12 col-sm-6" style={{padding: "20px"}}>
            <h4>{project.title}</h4>
            <p>{project.description.para1}</p>
            <p>{project.description.para2}</p>
            <button className="button" onClick={() => this.onProjectClicked(project.id)} >View Project</button>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <br />
        <br />
        {projects}
      </div>
    );
  }
}

export default Projects;
