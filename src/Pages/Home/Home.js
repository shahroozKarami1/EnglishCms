import React from 'react'
import "./Home.css"
import Feature from '../../Components/features/Feature'
import Chart from "../../Components/Chart/Chart.jsx"
import  Datas from "../../Datas"
import BoxNewNumbers from '../../Components/BoxNewNumbers/BoxNewNumbers'
import { Container, Row, Col } from "react-bootstrap"
import  Transaction  from  "../../Components/listOfTransactins/Transactions.jsx"
export default function Home() {
    return (


        <>
            <Feature></Feature>
            <Chart title="Month  Sale" grid dataKey="Sale" data={Datas}   type={"monotone"}  />
            <div className='Boxes  mt-5'     >
                <Container>

                    <Row>
            <Col  md={12}  lg =  {5}>
                <BoxNewNumbers></BoxNewNumbers>
            </Col>
            <Col  md=  {12}  lg  = {7}>

                <Transaction></Transaction>
            </Col>

                    </Row>

                </Container>
      
            </div>
        </>
    )
}
