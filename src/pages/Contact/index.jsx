import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import './contact.scss'
import './form.scss'
import plane_img from '../../styles/images/black-plane-icon1.png';

class Contact extends Component {

  componentDidMount() {
    $('#contact').addClass('selected');
  }

  render() {
    return (
      <div className="main">
        <div class="container">
          <div className="right">
            <span className="name input-outside">
              <input
                type="text"
                className="input-inside"
                placeholder="Nom & Prenom"
              />
              <span/>
            </span>
            <span className="email input-outside">
              <input
                type="text"
                className="input-inside"
                placeholder="Email"
              />
              <span/>
            </span>
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
        </div>
        <div className="plane" >
          <img src={plane_img} alt="plane"/>
        </div>
      </div>
    );
  }
}

export default Contact
