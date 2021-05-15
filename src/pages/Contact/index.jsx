import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import './contact.scss'
import './form.scss'
import plane_img from '../../styles/images/black-plane-icon1.png';
import {Animated} from "react-animated-css";
import AeroButton from '../../components/AeroButton'
import Formulaire from '../../components/Formulaire'



class Contact extends Component {

  componentDidMount() {
    $('#contact').addClass('selected');
  }

  constructor(props) {
    super(props);
    this.state = {
      planeAnimation: true,
      name: '',
      email: '',
      msg: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    //animation plane go right
    this.setState(state => ({
      planeAnimation: false,
    }))

    //Do something with the data here
    console.log(
      `name: ${this.state.name}\n`,
      `email: ${this.state.email}\n`,
      `msg: ${this.state.msg}`,
    );

    //animation plane return from left
    setTimeout(() => {
      this.setState(state => ({
        planeAnimation: true,
      }))
      //reset the form
      this.setState({
        'name': '',
        'email': '',
        'msg': '',
      });
    }, 2000)
  }

  //handleInputChange(event) {
  //this.setState({value: event.target.value});
  //}
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div className="main-contact">
        <div className="name-email">
          <span className="name input-outside">
            <input
              type="text"
              className="input-inside"
              placeholder="Nom & Prenom"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <span/>
          </span>
          <span className="email input-outside">
            <input
              type="text"
              className="input-inside"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <span/>
          </span>
          <div className="send-btn">
            <AeroButton
              text="ENVOYER"
              onClick={this.handleSend}
            />
          </div>
        </div>
        <Animated
          className="plane-animated"
          animationIn="fadeInLeft"
          animationOut="zoomOutRight"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={this.state.planeAnimation}
        >
          <div className="msg-plane">
            <div className="input-outside msg">
              <textarea
                className="msg-inside input-inside"
                placeholder="Votre message"
                name="msg"
                value={this.state.msg}
                onChange={this.handleInputChange}
              />
              <span/>
            </div>
            <div className="plane" >
              <img className="plane-inside" src={plane_img} alt="plane"/>
            </div>
          </div>
        </Animated>


      </div>
    );
  }
}

export default Contact
