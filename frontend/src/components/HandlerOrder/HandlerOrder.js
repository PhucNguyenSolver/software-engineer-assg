import React, { useEffect, useState } from "react";
import ProcessBar from "./ProcessBar";
import { Badge, Col, Figure, Modal, Row } from "react-bootstrap";

// ReactDOM.render(logOutIcon,document.getElementById('logout'))


const axios = require('axios')




export default function HandlerOrder() {

    // const [dataReceived, setDataReceived] = useState([])

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/order/manage-order/Đang chờ xử lý`)
            .then(res => {
                res.data.forEach(order => {
                    order.items.forEach(item => {
                        axios.get(`http://localhost:8080/order/get-img/${item.foodId}`)
                            .then(res => {
                                item.foodId = res.data;
                            });
                    })
                })
                setData(res.data);
            })
    }, [])

    const [onDisplayNumber, setOnDisplayNumber] = useState(1)
    function ProcessBar() {


        function displayOrder(currStatus, number) {
            setOnDisplayNumber(number)

            axios.get(`http://localhost:8080/order/manage-order/${currStatus}`)
                .then(res => {
                    res.data.forEach(order => {
                        order.items.forEach(item => {
                            axios.get(`http://localhost:8080/order/get-img/${item.foodId}`)
                                .then(res => {
                                    item.foodId = res.data;
                                });
                        })
                    })
                    console.log(res.data)
                    setData(res.data)
                })
        }

        return (
            <div className="main_container">
                <div class="container padding-bottom-3x mb-1">
                    <div class="card mb-3">
                        <div class="p-4 text-center text-white text-lg rounded-top" style={{ backgroundColor: 'black' }}>
                            <span class="text-uppercase">Management Order</span>
                        </div>
                        <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                        </div>
                        <div class="card-body">
                            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                                <div class={onDisplayNumber >= 1 ? 'step completed' : 'step'} >
                                    <div class="step-icon-wrap">
                                        <div class="step-icon" onClick={() => displayOrder('Đang chờ xử lý', 1)} style={{ cursor: 'pointer' }}><i class="pe-7s-cart"></i></div>
                                    </div>
                                    <h4 class="step-title">Đang chờ xử lý</h4>
                                </div>
                                <div class={onDisplayNumber >= 2 ? 'step completed' : 'step'} >
                                    <div class="step-icon-wrap">
                                        <div class="step-icon" onClick={() => displayOrder('Đang được làm', 2)} style={{ cursor: 'pointer' }}><i class="pe-7s-config"></i></div>
                                    </div>
                                    <h4 class="step-title">Đang được làm </h4>
                                </div>
                                <div class={onDisplayNumber >= 3 ? 'step completed' : 'step'} >
                                    <div class="step-icon-wrap">
                                        <div class="step-icon" onClick={() => displayOrder('Đang giao hàng', 3)} style={{ cursor: 'pointer' }}><i class="pe-7s-car"></i></div>
                                    </div>
                                    <h4 class="step-title">Đang giao hàng</h4>
                                </div>
                                <div class={onDisplayNumber == 4 ? 'step completed' : 'step'}>
                                    <div class="step-icon-wrap">
                                        <div class="step-icon" onClick={() => displayOrder('Đã thanh toán', 4)} style={{ cursor: 'pointer' }}><i class="pe-7s-credit"></i></div>
                                    </div>
                                    <h4 class="step-title">Đã thanh toán</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
                        <div class="text-left text-sm-right"><a class="btn btn-secondary btn-rounded btn-sm" href="#">Từ chối tất cả</a></div>
                        <div class="text-left text-sm-right"><a class="btn btn-primary btn-rounded btn-sm" href="#">Chấp nhận tất cả</a></div>
                    </div>
                </div>

            </div>
        );
    }


    function OrderInfo({order , idx}) {
        const [lgShow, setLgShow] = useState(false);

        function handlerAccept() {
            let sttOrder = 'Đang chờ xử lý'

            if (order.status == 'Đang chờ xử lý') sttOrder = 'Đang được làm'
            else if (order.status == 'Đang được làm') sttOrder = 'Đang giao hàng'
            else if (order.status == 'Đang giao hàng') sttOrder = 'Đã thanh toán'
            else if (order.status == 'Đã thanh toán') sttOrder = 'Done'


            axios.post("http://localhost:8080/order/manage-order", {
                "orderId": order._id,
                "sttOrder": sttOrder
            })
                .then(() => {
                    axios.get(`http://localhost:8080/order/manage-order/${order.status}`)
                        .then(res => {
                            res.data.forEach(order => {
                                order.items.forEach(item => {
                                    axios.get(`http://localhost:8080/order/get-img/${item.foodId}`)
                                        .then(res => {
                                            item.foodId = res.data;
                                        });
                                })
                            })
                            console.log(res.data)
                            setData(res.data)
                        })
                })

        }

        function handlerReject() {
            axios.post("http://localhost:8080/order/manage-order", {
                "orderId": order.orderId,
                "sttOrder": 'Đã từ chối'
            })
                .then(() => {
                    axios.get(`http://localhost:8080/order/manage-order/${order.status}`)
                        .then(res => {
                            res.data.forEach(order => {
                                order.items.forEach(item => {
                                    axios.get(`http://localhost:8080/order/get-img/${item.foodId}`)
                                        .then(res => {
                                            item.foodId = res.data;
                                        });
                                })
                            })
                            console.log(res.data)
                            setData(res.data)
                        })
                })
        }


        return (
            <>
                <tr>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order._id}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order.customerInfo.name}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order.customerInfo.typeOrder}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{Intl.NumberFormat().format(order.items.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)) + ' đ'}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-outline-primary" onClick={() => handlerAccept()} id={'accept' + idx}>Xử lý</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => handlerReject()} id={'reject' + idx}>Xử lý</button>
                    </td>
                </tr>
                <Modal
                    size="lg"
                    scrollable={true}
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Chi tiết đơn hàng
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <h5>Thông tin khách hàng</h5>
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Họ và tên:</Col>
                                    <Col><p>{order.name}</p></Col>
                                </Row>
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Số điện thoại:</Col>
                                    <Col><p>{order.customerInfo.phone}</p></Col>
                                </Row>
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Địa chỉ:</Col>
                                    <Col><p>{order.customerInfo.address}</p></Col>
                                </Row>
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Phường / Xã:</Col>
                                    <Col><p>{order.customerInfo.ward}</p></Col>
                                </Row>
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Quận / Huyện:</Col>
                                    <Col><p>{order.customerInfo.district}</p></Col>
                                </Row>
                                <h5>Giỏ hàng</h5>
                                {order.items.map(item => (
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={2} xs={2}><Figure.Image alt="FoodImg" src={item.foodId[0]}></Figure.Image></Col>
                                        <Col xl={7} lg={7} md={10} sm={10} xs={10}>
                                            <Row><h5>{item.name}</h5></Row>
                                            <Row><p>{item.options}</p></Row>
                                        </Col>
                                        <Col xl={2} lg={2} md={10} sm={10} xs={9}>
                                            <p>Số lượng: {item.quantity}</p>
                                        </Col>
                                        <Col>
                                            <Row><Badge variant="primary" pill>{Intl.NumberFormat().format(item.price * item.quantity) + ' đ'}</Badge></Row>
                                        </Col>
                                    </Row>
                                ))}
                                <Row>
                                    <Col xl={7} lg={7} md={7} sm={7} xs={5}><h4>Tổng tiền:</h4></Col>
                                    <Col>
                                        <h4><Badge variant="primary" pill>{Intl.NumberFormat().format(order.items.map(item => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)) + ' đ'}</Badge></h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </>
        )
    }


    return (
        <div class="container">
            <ProcessBar data={data} />
            <div class="container mt-5 ">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Tên khách hàng </th>
                                <th scope="col">Loại đặt hàng</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Chấp nhận</th>
                                <th scope="col">Từ chối</th>
                            </tr>
                        </thead>
                        <tbody id='list-order'>
                            {data.map((order, index) => {
                                return <OrderInfo order={order} idx={index + 1} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

