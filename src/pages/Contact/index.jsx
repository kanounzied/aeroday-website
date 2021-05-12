import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import './contact.scss'
import './form.scss'
import plane_img from '../../styles/images/black-plane-icon1.png';
import {Animated} from "react-animated-css";


class Contact extends Component {

  componentDidMount() {
    $('#contact').addClass('selected');
  }

  constructor(props) {
    super(props);
    this.state = {
      planeAnimation: true,
    };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    this.setState(state => ({
      planeAnimation: false,
    }))
    setTimeout(() => {
      this.setState(state => ({
        planeAnimation: true,
      }))
    }, 2000)
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
              <button
                onClick={this.handleSend}
                className="btn-inside"
              >
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

        <Animated
          animationIn="fadeInLeft"
          animationOut="zoomOutRight"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={this.state.planeAnimation}
        >
          <div className="plane" >
            <img className="plane-inside" src={plane_img} alt="plane"/>
          </div>
        </Animated>


      </div>
    );
  }
}

export default Contact
