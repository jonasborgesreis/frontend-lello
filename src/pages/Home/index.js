import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactLogo from '../../images/logo-react.svg'
import AngularLogo from '../../images/logo-angular.svg'
import VueLogo from '../../images/logo-vue.svg'
import './style.css'

export default function Home () {
  return (
    <div className="container-home">
      <div>
        <Container>
          <h1 className="tit-frame-home">Frameworks JS</h1>
          <Row>
            <Col xs={12} md={4}>
              <div className="box-logo-home">
                <div className="logo-js">
                  <img src={ReactLogo} />
                </div>
                <Link to="/react">React JS</Link>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="box-logo-home">
                <div className="logo-js">
                  <img src={AngularLogo} />
                </div>
                <Link to="/angular">Angular</Link>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="box-logo-home">
                <div className="logo-js2">
                  <img src={VueLogo} />
                </div>
                <Link to="/vue">Vue JS</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
