import { Container, Row } from "react-bootstrap";
import Cinnamoroll from "../assets/gif/cinnamoroll.gif";
import Textbubble1 from "../assets/img/textbubble1.png";
import DefaultButton from "./Buttons/DefaultButton.tsx";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <Row className="w-50">
          <div className="bubble-container">
            <img
              src={Textbubble1}
              alt="thought bubble"
              className="text-bubble-1"
            />
            <h3 className="text-content">
              Hello there, my lovely, a bit angery, cute, most favorite human in
              a smol package!
            </h3>
          </div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <img
            src={Cinnamoroll}
            alt="cute gif here!"
            className="cinamorol-gif"
          />
        </Row>
        <Row className="mt-4">
            <DefaultButton text="Click Me"/>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
