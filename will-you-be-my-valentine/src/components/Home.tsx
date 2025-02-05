import { Container, Row } from "react-bootstrap";
import Cinnamoroll from "../assets/gif/cinnamoroll.gif";
import Textbubble1 from "../assets/img/textbubble1.png";
import Cat from "../assets/gif/cat.gif";
import HelloKitty from "../assets/gif/hellokitty.gif";
import DefaultButton from "./Buttons/DefaultButton.tsx";
import { useState } from "react";
import "../styles/Home.css";

const content = [
  {
    srcGif: Cinnamoroll,
    srcTextBubble: Textbubble1,
    className: "cinamoroll-gifs",
    text: "This is Cinnamoroll, so cute!",
  },
  {
    srcGif: Cat,
    srcTextBubble: Textbubble1,
    className: "cat-gifs",
    text: "Here's another adorable image!",
  },
  {
    srcGif: HelloKitty,
    srcTextBubble: Textbubble1,
    className: "hellokitty-gifs",
    text: "And now, the third cute image!",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleToggle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  return (
    <section className="home" id="home">
      <Container>
        <Row className="w-50">
          <div className="bubble-container">
            <img
              src={content[index].srcTextBubble}
              alt="cute thoughts here!"
              className="text-bubble"
            />
            <h3 className="text-content">
              {content[index].text}
            </h3>
          </div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <img
            src={content[index].srcGif}
            alt="cute gif here!"
            className={`${content[index].className}`} // Apply dynamic class
          />
        </Row>
        <Row className="mt-4">
          <DefaultButton text="Click Me" onClick={handleToggle} />
        </Row>
      </Container>
    </section>
  );
};

export default Home;
