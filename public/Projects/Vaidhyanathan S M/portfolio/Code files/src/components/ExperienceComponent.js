import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../css/ExperienceComponent.css";

class Experience extends Component {
  render() {
    const experiences = this.props.details.experiences.map((experience) => {
      return (
        <div key={experience.id} className="row" style={{ padding: "10px" }}>
          <Card className="root" variant="outlined">
            <CardContent>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                {experience.company}
              </Typography>
              {experience.positions.map((position) => {
                return (
                  <div key={position.id}>
                    <Typography variant="h5">{position.position}</Typography>
                    <Typography className="pos" color="textSecondary">
                      {position.timeline}
                    </Typography>
                    <Typography variant="body2">
                      {position.description}
                    </Typography>
                    <br />
                  </div>
                );
                
              })}
            </CardContent>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <h2 className="text-center">Experience</h2>
        <br />
        <br />
        {experiences}
      </div>
    );
  }
}

export default Experience;
