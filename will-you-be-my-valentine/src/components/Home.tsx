import { Col, Container, Row } from "react-bootstrap";
import Cinnamoroll from "../assets/gif/cinnamoroll.gif";
import Textbubble1 from "../assets/img/textbubble1.png";
import Textbubble2 from "../assets/img/textbubble2.png";
import Textbubble3 from "../assets/img/textbubble3.png";
import Cat from "../assets/gif/cat.gif";
import HelloKitty from "../assets/gif/hellokitty.gif";
import HeartCinamoroll from "../assets/gif/heartcinamoroll.gif";
import DefaultButton from "./Buttons/DefaultButton.tsx";
import { useState } from "react";
import "../styles/Home.css";

const content = [
  {
    srcGif: Cinnamoroll,
    srcTextBubble: Textbubble1,
    classNameBubble: "text-bubble1",
    classNameGif: "cinamoroll-gifs",
    text: "Hello there, my lovely, a bit angery, cute, most favorite human in a smol package!",
    textBtnYes: "Click Me!",
    textBtnNo: "No",
    classNameBtnYes: "btn-yes",
    classNameBtnNo: "btn-no",
  },
  {
    srcGif: Cat,
    srcTextBubble: Textbubble2,
    classNameBubble: "text-bubble2",
    className: "cat-gifs",
    text: "Valentine is coming up soon!",
    textBtnYes: "Click Me!",
    textBtnNo: "No",
    classNameBtnYes: "btn-yes",
    classNameBtnNo: "btn-no",
  },
  {
    srcGif: HelloKitty,
    srcTextBubble: Textbubble3,
    classNameBubble: "text-bubble3",
    className: "hellokitty-gifs",
    text: "Will you be my valentine?",
    textBtnYes: "Yes",
    textBtnNo: "No",
    classNameBtnYes: "btn-yes",
    classNameBtnNo: "btn-no",
  },
  {
    srcGif: HeartCinamoroll,
    srcTextBubble: Textbubble3,
    classNameBubble: "text-bubble3",
    className: "hellokitty-gifs",
    text: "LET'S GOOOOOOOO!",
    textBtnYes: "Yes",
    textBtnNo: "No",
    classNameBtnYes: "btn-yes",
    classNameBtnNo: "btn-no",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isNoDisabled, setIsNoDisabled] = useState(false);

  const handleToggle = () => {
    const wrapper = document.querySelector(".content-wrapper");
    if (!wrapper) return; // Avoid errors if element isn't found
  
    wrapper.classList.add("fade-out");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
      setIsNoDisabled(false);
      wrapper.classList.remove("fade-out");
    }, 300);
  };
  
  
  

  const handleNoClick = () => {
    setIsNoDisabled(true);
  };

  return (
    <section className="home" id="home">
      <Container>
        {index < 3 ? (
          <>
            <div key={index} className="content-wrapper">
              <Row className="w-50">
                <div className="bubble-container">
                  <img
                    key={index}
                    src={content[index].srcTextBubble}
                    alt="cute thoughts here!"
                    className={`${content[index].classNameBubble} fade-in`}
                  />
                  <h3 key={index} className="text-content slide-up">
                    {content[index].text}
                  </h3>
                </div>
              </Row>
              <Row className="d-flex align-items-center justify-content-center mt-3">
                <img
                  key={index}
                  src={content[index].srcGif}
                  alt="cute gif here!"
                  className={`${content[index].className} fade-in`}
                />
              </Row>
              <Row className="mt-4 d-flex">
                <Col>
                  <DefaultButton
                    text={content[index].textBtnYes}
                    onClick={handleToggle}
                  />
                </Col>
                <Col>
                  {index > 1 && (
                    <DefaultButton
                      text={content[index].textBtnNo}
                      onClick={handleNoClick}
                      disabled={isNoDisabled}
                    />
                  )}
                </Col>
              </Row>
            </div>
            <Row>
              {isNoDisabled && (
                <p className="maintenance-text mt-5">
                  The "No" button is under maintenance hehe
                </p>
              )}
            </Row>
          </>
        ) : (
          /* Final state: Only show GIF and Text */
          <Row className="d-flex align-items-center justify-content-center text-center">
            <img src={content[index].srcGif} alt="LET’S GOOOOOOOO!" />
            <h2 className="mt-4">{content[index].text}</h2>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Home;
