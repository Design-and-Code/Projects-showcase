import { Component } from "react";
import '../css/Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer text-center">
        <p className="text-color">Made with ❤️ by <a className="text-color" href={this.props.details.profile_links.github.link}>Vaidhyanathan S M</a></p>       
      </div>
    );
  }
}

export default Footer;