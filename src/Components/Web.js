import React from "react";
import Arrow from "../Images/arrow.png";
import { Container, Row, Col } from "react-bootstrap";

function Web() {
  return (
    <Container class="container">
      <h1>WEB PROJECTS:</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                title="Meals"
                src="https://chattie-production.herokuapp.com"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col md="auto">
            <strong className="strong">Chattie</strong> is a joined React and
            Node Js applications using Firebase Auth, Knex, Storybook, MySQL,
            Swagger, and many other technologies for massaging. Users can use
            this App to contact each other and it is fully functional. I created
            many components in backend and frontend. For example, I worked on
            Migrations, Seeds and Query Strings for backend and also completed
            the rest API; fetch, and patch systems and also some styling the
            frontend.
          </Col>
          <Col xs lg="2">
            <img src={Arrow} alt="arrow icon"></img>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <strong className="strong">Meal Sharing </strong>is a web page build
            with Express Js, Node Js and combined both frontend and backend
            functionalities. It is fully functional with free but limited
            database storage. I built it during my Node Js classes.
          </Col>
          <Col xs lg="10">
            <div class="embed-responsive embed-responsive-16by9 ">
              <iframe
                class="embed-responsive-item"
                title="Chattie"
                src="http://hyf-meals.herokuapp.com/"
                loading={true}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div class="d-inline-flex p-2">
        <a
          href="https://chattie-production.herokuapp.com"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Chattie
        </a>
        <a
          href="http://hyf-meals.herokuapp.com"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Meals
        </a>
      </div>
    </Container>
  );
}

export default Web;
