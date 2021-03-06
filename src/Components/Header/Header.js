import React from 'react';
import Particles from 'react-particles-js'
import { Jumbotron, Container, Col, Row, Figure } from 'react-bootstrap'
import './Header.css';
import photoMe from '../assets/photoMe.png'



const Header = () => {
  return (
    <Jumbotron className='jumbo' fluid>
      <Container>
        <Row>
          <Col>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 300,
                    density: {
                      enable: true,
                      value_area: 3400,
                    }
                  },
                  color: {
                    value: "#FFFFFF",
                    animation: {
                      enable: true,
                      speed: 15,
                      sync: true
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 0,
                    color: '#FFFFFF',
                    opacity: 0.4,
                    width: 3.5
                  },
                },
              }}
            />
            <Figure.Image
              width={500}
              height={400}
              src={photoMe}
              alt="imageofme"
            />

          </Col>
          <Col>
            <Particles

              params={{
                particles: {
                  number: {
                    value: 300,
                    density: {
                      enable: true,
                      value_area: 3400,
                    }
                  },
                  color: {
                    value: "#FFFFFF",
                    animation: {
                      enable: true,
                      speed: 15,
                      sync: true
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 0,
                    color: '#FFFFFF',
                    opacity: 0.4,
                    width: 3.5
                  },
                },
              }}
            />
            <h1>Joseph J Lyons</h1>
            <br />
            <a className='socialE' href="mailto:josephjlyons90@gmail.com"><p Classname='socialE'>josephjlyons90@gmail.com</p></a>
         
            <a className='social' href="https://github.com/Josephjlyons"><i className=" fontawesome fab fa-github-square"></i></a>

            <a className='social' href="https://www.linkedin.com/in/joseph-lyons-0a2630200/"><i className=" fontawesome fab fa-linkedin"></i></a>

            <a className='social' href="tel:603-707-1045"><i className="fontawesome fas fa-phone-square-alt"></i></a>

            <a className='social' href='https://docs.google.com/document/d/14y2lHTV8S7WNrUancx8AV5NL0C6BFgX0oCL4gwMoIgk/export?format=pdf' ><i className="fontawesome far fa-file"></i></a>



          </Col>
        </Row>
      </Container>
    </Jumbotron>





  )
}

export default Header;
