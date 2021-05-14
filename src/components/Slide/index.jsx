import React, { Component } from "react";
import "./slide.scss";
import $ from "jquery";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import slide_1 from "./images/slide_1.jpg";
import slide_2 from "./images/slide_2.jpg";
import slide_3 from "./images/slide_3.jpg";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          src: slide_1,
          name: "Tunisian Aeroday",
          location: "October 11, 2019",
          description: "#Aeroday20 is recruiting ! ",
          state: "current",
        },
        {
          src: slide_2,
          name: "DEVchallenge",
          location: "April 27, 2019",
          description: "Le DEVchallenge a commencé cet après midi !",
          state: "next",
        },
        {
          src: slide_3,
          name: "Stand",
          location: "October 11, 2019",
          description: "Stand #Aeroday20 le 10 et 11 Septembre 2019",
          state: "previous",
        },
      ],
    };
  }

  componentDidMount() {
    const buttons = {
      prev: $(".btn--left"),
      next: $(".btn--right"),
    };

    const cardsContainerEl = $(".cards__wrapper");

    const cardInfosContainerEl = $(".info__wrapper");

    buttons.prev.on("click", () => swapCards("right"));
    buttons.next.on("click", () => swapCards("left"));

    function swapCards(direction) {
      const currentCardEl = $(".current--card");
      const previousCardEl = $(".previous--card");
      const nextCardEl = $(".next--card");

      const currentBgImageEl = $(".current--image");
      const previousBgImageEl = $(".previous--image");
      const nextBgImageEl = $(".next--image");

      changeInfo(direction);
      swapCardsClass();

      removeCardEvents(currentCardEl);

      function swapCardsClass() {
        currentCardEl.removeClass("current--card");
        previousCardEl.removeClass("previous--card");
        nextCardEl.removeClass("next--card");

        currentBgImageEl.removeClass("current--image");
        previousBgImageEl.removeClass("previous--image");
        nextBgImageEl.removeClass("next--image");

        currentCardEl.css("zIndex", "50");
        currentBgImageEl.css("zIndex", "-2");

        if (direction === "right") {
          previousCardEl.css("zIndex", "20");
          nextCardEl.css("zIndex", "30");

          nextBgImageEl.css("zIndex", "-1");

          currentCardEl.addClass("previous--card");
          previousCardEl.addClass("next--card");
          nextCardEl.addClass("current--card");

          currentBgImageEl.addClass("previous--image");
          previousBgImageEl.addClass("next--image");
          nextBgImageEl.addClass("current--image");
        } else if (direction === "left") {
          previousCardEl.css("zIndex", "30");
          nextCardEl.css("zIndex", "20");

          previousBgImageEl.css("zIndex", "-1");

          currentCardEl.addClass("next--card");
          previousCardEl.addClass("current--card");
          nextCardEl.addClass("previous--card");

          currentBgImageEl.addClass("next--image");
          previousBgImageEl.addClass("current--image");
          nextBgImageEl.addClass("previous--image");
        }
      }
    }

    function changeInfo(direction) {
      let currentInfoEl = $(".current--info");
      let previousInfoEl = $(".previous--info");
      let nextInfoEl = $(".next--info");

      gsap
        .timeline()
        .to([buttons.prev, buttons.next], {
          duration: 0.2,
          opacity: 0.5,
          pointerEvents: "none",
        })
        .to(
          $(".text"),
          {
            duration: 0.4,
            stagger: 0.1,
            translateY: "-120px",
            opacity: 0,
          },
          "-="
        )
        .call(() => {
          swapInfosClass(direction);
        })
        .call(() => initCardEvents())
        .fromTo(
          direction === "right"
            ? nextInfoEl.children(".text")
            : previousInfoEl.children(".text"),
          {
            opacity: 0,
            translateY: "40px",
          },
          {
            duration: 0.4,
            stagger: 0.1,
            translateY: "0px",
            opacity: 1,
          }
        )
        .to([buttons.prev, buttons.next], {
          duration: 0.2,
          opacity: 1,
          pointerEvents: "all",
        });

      function swapInfosClass() {
        currentInfoEl.removeClass("current--info");
        previousInfoEl.removeClass("previous--info");
        nextInfoEl.removeClass("next--info");

        if (direction === "right") {
          currentInfoEl.addClass("previous--info");
          nextInfoEl.addClass("current--info");
          previousInfoEl.addClass("next--info");
        } else if (direction === "left") {
          currentInfoEl.addClass("next--info");
          nextInfoEl.addClass("previous--info");
          previousInfoEl.addClass("current--info");
        }
      }
    }

    function updateCard(e) {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const centerPosition = {
        x: box.left + box.width / 2,
        y: box.top + box.height / 2,
      };
      let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
      gsap.set(card, {
        "--current-card-rotation-offset": `${angle}deg`,
      });
      const currentInfoEl = cardInfosContainerEl.children(".current--info");
      gsap.set(currentInfoEl, {
        rotateY: `${angle}deg`,
      });
    }

    function resetCardTransforms(e) {
      const card = e.currentTarget;
      const currentInfoEl = $(".current--info");
      gsap.set(card, {
        "--current-card-rotation-offset": 0,
      });
      gsap.set(currentInfoEl, {
        rotateY: 0,
      });
    }

    function initCardEvents() {
      const currentCardEl = cardsContainerEl.children(".current--card");
      currentCardEl.on("pointermove", updateCard);
      currentCardEl.on("pointerout", (e) => {
        resetCardTransforms(e);
      });
    }

    initCardEvents();

    function removeCardEvents(card) {
      card.on("hover", updateCard);
    }

    function init() {
      let tl = gsap.timeline();

      tl.to(cardsContainerEl.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
          ease: "power4.inOut",
          from: "right",
          amount: 0.1,
        },
        "--card-translateY-offset": "0%",
      })
        .to(cardInfosContainerEl.children(".current--info").children(".text"), {
          delay: 0.5,
          duration: 0.4,
          stagger: 0.1,
          opacity: 1,
          translateY: 0,
        })
        .to(
          [buttons.prev, buttons.next],
          {
            duration: 0.4,
            opacity: 1,
            pointerEvents: "all",
          },
          "-=0.4"
        );
    }

    const waitForImages = () => {
      const images = [...$("img")];
      const totalImages = images.length;
      let loadedImages = 0;
      const loaderEl = $(".loader span");

      gsap.set(cardsContainerEl.children, {
        "--card-translateY-offset": "100vh",
      });
      gsap.set(
        cardInfosContainerEl.children(".current--info").children(".text"),
        {
          translateY: "40px",
          opacity: 0,
        }
      );
      gsap.set([buttons.prev, buttons.next], {
        pointerEvents: "none",
        opacity: "0",
      });

      images.forEach((image) => {
        imagesLoaded(image, (instance) => {
          if (instance.isComplete) {
            loadedImages++;
            let loadProgress = loadedImages / totalImages;

            gsap.to(loaderEl, {
              duration: 1,
              scaleX: loadProgress,
              backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
            });

            if (totalImages === loadedImages) {
              gsap
                .timeline()
                .to(".loading__wrapper", {
                  duration: 0.8,
                  opacity: 0,
                  pointerEvents: "none",
                })
                .call(() => init());
            }
          }
        });
      });
    };

    waitForImages();
  }

  render() {
    return (
      <div className="slide_wrapper">
        <div className="app">
          <div className="cardList">
            <button id="1" className="cardList__btn btn btn--left">
              <div className="icon">
                <svg>
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </div>
            </button>

            <div className="cards__wrapper">
              {this.state.cards.map((e, i) => (
                <div className={`card ${e.state}--card`}>
                  <div className="card__image">
                    <img src={e.src} alt={i} />
                  </div>
                </div>
              ))}
            </div>

            <button className="cardList__btn btn btn--right">
              <div className="icon">
                <svg>
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </div>
            </button>
          </div>

          <div className="infoList">
            <div className="info__wrapper">
              {this.state.cards.map((e, i) => (
                <div key={i} className={`info ${e.state}--info`}>
                  <h1 className="text name">{e.name}</h1>
                  <h4 className="text location">{e.location}</h4>
                  <p className="text description">{e.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="app__bg">
            {this.state.cards.map((e, i) => (
              <div className={`app__bg__image ${e.state}--image`}>
                <img src={e.src} alt={i} />
              </div>
            ))}
          </div>
        </div>
        <div className="loading__wrapper">
          <div className="loader--text">Loading...</div>
          <div className="loader">
            <span></span>
          </div>
        </div>
        <svg className="icons" style={{ display: "none" }}>
          <symbol
            id="arrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polyline
              points="328 112 184 256 328 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </symbol>
          <symbol
            id="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polyline
              points="184 112 328 256 184 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </symbol>
        </svg>
      </div>
    );
  }
}
