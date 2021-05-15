import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


window.$MIN_WIDTH= 900;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


if(document.getElementById('preloader')){
  function whichAnimationEvent(){
    var t,
      el = document.createElement("fakeelement");
    
    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }
    
    for (t in animations){
      console.log(t);
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }
    
  var animationEvent = whichAnimationEvent();
  var c = 0;
  var preloader = document.getElementById('preloader');

    
  preloader.addEventListener(animationEvent, function (){
    c++;
    if(c==2){
      preloader.parentNode.removeChild(preloader);
      document.getElementsByTagName('body')[0].style.overflowY = "auto";
      document.getElementsByTagName('body')[0].style.overflowX = "auto";
    }
  });
} else {
  document.getElementsByTagName('body')[0].style.overflowY = "auto";
  document.getElementsByTagName('body')[0].style.overflowX = "auto";
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
