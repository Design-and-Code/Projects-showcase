import { Component } from "react";
import "../css/SkillsComponent.css";

class Skills extends Component {
  render() {
    const skills = this.props.details.skills.map((skill) => {
      return (
        <div className="col-12 col-md-4 skill-tile text-center">
          <img src={skill.image} alt="Android" width="75%" height="55%" />
          <p>{skill.name}</p>
        </div>
      );
    });
    return (
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <br />
        <br />
        <div className="row">{skills}</div>
      </div>
    );
  }
}

export default Skills;
