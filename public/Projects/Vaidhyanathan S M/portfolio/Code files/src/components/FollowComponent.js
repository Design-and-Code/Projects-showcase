import { Component } from "react";
import "../css/FollowComponent.css";

class Follow extends Component {
  render() {
    return (
      <section id="follow">
        <div className="container text-center">
          <h4>Follow me on:</h4>
        </div>
        <br />
        <div className="container horizontal-links">
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.github.image}
            alt="GitHub"
            onClick={() =>
              this.openLink(this.props.details.profile_links.github)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.linkedin.image}
            alt="LinkedIn"
            onClick={() =>
              this.openLink(this.props.details.profile_links.linkedin)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.medium.image}
            alt="Medium"
            onClick={() =>
              this.openLink(this.props.details.profile_links.medium)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.hackerrank.image}
            alt="HackerRank"
            onClick={() =>
              this.openLink(this.props.details.profile_links.hackerrank)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.geeksforgeeks.image}
            alt="Geeks for Geeks"
            onClick={() =>
              this.openLink(this.props.details.profile_links.geeksforgeeks)
            }
          />
        </div>
      </section>
    );
  }
}

export default Follow;