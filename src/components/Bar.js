import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../style/landingpage.css'
import IMAGE1 from '../assets/image/Alakatak.jpg'
import IMAGE2 from '../assets/image/sotocarikan.jpg'
import IMAGE3 from '../assets/image/JJJamu.jpg'
import IMAGE4 from '../assets/image/gultik.jpg'
import IMAGE5 from '../assets/image/jenang.jpg'
import IMAGE6 from '../assets/image/gempol.jpg'


const Bar = () => {
return (
<Container>
      <Carousel interval={3000} indicators={false}>
        <Carousel.Item>
          <div className="carousel-separate-item">
            <img
              className="d-block custom-img"
              src={IMAGE1}
              alt="First slide"
            />
            <div className="carousel-caption custom-caption">
              <h3>Alakatak</h3>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-separate-item">
            <img
              className="d-block custom-img"
              src={IMAGE2}
              alt="Second slide"
            />
            <div className="carousel-caption custom-caption">
              <h3>Soto Carikan</h3>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-separate-item">
            <img
              className="d-block custom-img"
              src={IMAGE3}
              alt="Third slide"
            />
            <div className="carousel-caption custom-caption">
              <h3>Jamu</h3>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-separate-item">
            <img
              className="d-block custom-img"
              src={IMAGE4}
              alt="Second slide"
            />
            <div className="carousel-caption custom-caption">
              <h3>Gultik</h3>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-separate-item">
            <img
              className="d-block custom-img"
              src={IMAGE5}
              alt="Second slide"
            />
            <div className="carousel-caption custom-caption">
              <h3>Jenang Krasikan</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
    )
}

export default Bar