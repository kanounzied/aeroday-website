import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import './contact.scss'
import './form.scss'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plane_url: `${process.env.PUBLIC_URL}/assets/images/black-plane-icon1.png`,
    };
  }

  componentDidMount() {
    $('#contact').addClass('selected');
  }

  render() {
    return (
      <div className="main">
        <div class="container">
          <div className="right">
            <input
              type="text"
              className="name"
              placeholder="Nom & Prenom"
            />
            <input
              type="text"
              className="email"
              placeholder="Email"
            />
            <button className="send-btn" >
              ENVOYER
            </button>
          </div>
          <div className="left">
            <textarea
              className="msg"
              placeholder="Votre message"
            />
          </div>
          <img src={this.state.plane_url} alt="plane" />

        </div>
      </div>
    );
  }
}

export default Contact
