import { Component } from "react";
import '../css/AboutComponent.css';

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.details);
  }

  render() {
    return (
      <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6" style={{ textAlign: "center", padding: "20px" }}>
            <img src={this.props.details.profile_image} alt="Profile" width="80%" height="90%"/>
          </div>
          <div className="col-12 col-sm-6" style={{ padding: "30px" }}>
            <h2>About</h2>
            <br />
            <h5>{this.props.details.about_me.para1}</h5>
            <p>{this.props.details.about_me.para2}</p>
            <p>{this.props.details.about_me.para3}</p>
            <p>{this.props.details.about_me.para4}</p>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default About;
