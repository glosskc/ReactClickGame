import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./Jumbotron.css";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid className="jumbotron">
      <MDBContainer>
        <h2 className="display-4">Memory Click Game</h2>
        <h3 className="display-5">Click the image below, only click each image once and try to keep track!</h3>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default JumbotronPage;