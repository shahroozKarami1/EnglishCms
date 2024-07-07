import React from 'react';
import './App.css';
import { Container, Col, Row    } from "react-bootstrap"
import { useRoutes } from 'react-router-dom';
import Routers from "./Routes"
import TopBar from "./Components/TobBar/TobBar"
import SideBar from './Components/SideBar/SideBar';
function App() {
  let Router = useRoutes(Routers)
  return (

    <>
      <Container fluid>

        <Row>
          <TopBar></TopBar>

        </Row>

        <Row    className='mt-3'>
          <Col md="3">
            <SideBar></SideBar>
          </Col>
          <Col md="9">
            {Router}
          </Col>
        </Row>

      </Container>


    </>



  )
}

export default App;
