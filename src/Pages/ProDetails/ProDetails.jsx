import React, { useState } from 'react'
import "./ProDetails.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import { listProductsChart } from '../../Datas';
import Chart from "../../Components/Chart/Chart";
export default function ProDetails() {
    let [updateProduct, setUpdatePro] = useState([])


    function clickHandler(event) {
        event.preventDefault()
        let updatePro = {
            name: event.target[0].value,
            stock: event.target[1].value,
            active: event.target[2].value,

        }
        setUpdatePro(updatePro)
    }
    console.log(updateProduct);
    return (

        <Container>

            <div className='ProDetails'>
                <div className='ProDetails-wrapper'>
                    <div className='ProDetails-header'>
                        <h3 className='ProDetails-header__title'>Product</h3>
                        <Link to="/newProduct">

                            <button className='ProDetails-header__btn'>create</button>

                        </Link>
                    </div>
                    <div className='ProDetails-contant'>
                        <Row>
                            <Col lg={8}>
                                <div className='ProDetails-contant__left'>
                                    <h4>sales the last months</h4>
                                    <Chart className="ProDetails-contant__chart" data={listProductsChart} dataKey="sales"      ></Chart>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className='ProDetails-contant__right'>
                                    <div className='ProDetails-contant__right-header'>
                                        <img src="/Imgs/profile.png" alt="" className='ProDetails-contant__right-header--img' />
                                        <h3 className='ProDetails-contant__right-header--title'>   {updateProduct.name ? updateProduct.name : "shahrooz"}</h3>
                                    </div>

                                    <div className='ProDetails-contant__right-body'>
                                        <div className='ProDetails-contant__right-body--item'>
                                            <span className="ProDetails-contant__right-body--key">
                                                id :
                                            </span>
                                            <span className="ProDetails-contant__right-body--value">
                                                21
                                            </span>
                                        </div>
                                        <div className='ProDetails-contant__right-body--item'>
                                            <span className="ProDetails-contant__right-body--key">
                                                sales :
                                            </span>
                                            <span className="ProDetails-contant__right-body--value">
                                                $219841
                                            </span>
                                        </div>
                                        <div className='ProDetails-contant__right-body--item'>
                                            <span className="ProDetails-contant__right-body--key">
                                                active :
                                            </span>
                                            <span className="ProDetails-contant__right-body--value">
                                                {updateProduct.active ? updateProduct.active : "yes"   }
                                            </span>
                                        </div>
                                        <div className='ProDetails-contant__right-body--item'>
                                            <span className="ProDetails-contant__right-body--key">
                                                in  stock :
                                            </span>
                                            <span className="ProDetails-contant__right-body--value">
                                                {updateProduct.stock ? updateProduct.stock : "yes"}                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                    </div>
                    <div className='ProDetails-footer'>
                        <form className='ProDetails-footer__form' onSubmit={(event) => { clickHandler(event) }}>
                            <div className='ProDetails-footer__form-left'>
                                <label>Product Name</label>
                                <input type="text" className='ProDetails-footer__form-left--input' placeholder='Apple Airbods' />
                                <label>In  Stock</label>
                                <select id="ProDetails-footer__form-left--select"       >
                                    <option value="yes"  >Yes</option>
                                    <option value="no"    >No</option>
                                </select>
                                <label>Active</label>
                                <select id="ProDetails-footer__form-left--select" >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className='ProDetails-footer__form-right'>

                                <button className='ProDetails-footer__form-right--btn'  >Edit</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>

    )
}
