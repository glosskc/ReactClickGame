import React, { Component } from "react";
import images from '../../images.json';
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class CarouselPage extends Component {
    state = {
        images,
        message: "Click one of the pictures to begin!",
        score: 0,
        topScore: 0
    };

    handleClick = (id, clicked) => {
        const imageOrder = this.state.images;

        if(clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You have guessed incorrectly",
                score: 0
            })
        } 
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You have guessed correctly!",
                score: newScore,
                topScore: newTopScore
            })
        }
    };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default CarouselPage;