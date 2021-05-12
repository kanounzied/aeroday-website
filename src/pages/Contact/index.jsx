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
          <div className="left">
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
            <div className="input-outside send-btn">
              <button className="btn-inside" >
                ENVOYER
              </button>
              <span/>
            </div>
          </div>
          <div className="right">
            <div className="input-outside msg">
              <textarea
                className="msg-inside input-inside"
                placeholder="Votre message"
              />
              <span/>
            </div>
          </div>
        </div>
        <div className="plane" >
          <img className="plane-inside" src={plane_img} alt="plane"/>
        </div>
      </div>
    );
  }
}

export default Contact
