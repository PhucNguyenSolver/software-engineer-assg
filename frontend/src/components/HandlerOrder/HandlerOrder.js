import React, { useEffect, useState } from "react";
import './ProcessBar.css'
import { Badge, Col, Figure, Modal, Row } from "react-bootstrap";
import axios from 'axios';

// ReactDOM.render(logOutIcon,document.getElementById('logout'))


export default function HandlerOrder() {

    // const [dataReceived, setDataReceived] = useState([])

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/order/manage-order/Đang chờ xử lý`)
            .then(res => {
                res.data.forEach(order => {
                    order.items.forEach(item => {
                        axios.get(`http://localhost:8080/food/${item.foodId}`)
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
                            axios.get(`http://localhost:8080/food/${item.foodId}`)
                                .then(res => {
                                    item.foodId = res.data;
                                });
                        })
                    })
                    setData(res.data)
                })
        }

        function handlerAcceptAll() {
            let statusCurr = 'Đang chờ xử lý'
            let statusUpdate = 'Đang được làm'

            if (onDisplayNumber === 2) {
                statusCurr = 'Đang được làm'
                statusUpdate = 'Đang giao hàng'
            }
            else if (onDisplayNumber === 3) {
                statusCurr = 'Đang giao hàng'
                statusUpdate = 'Đã thanh toán'
            }
            else if (onDisplayNumber === 4) {
                statusCurr = 'Đã thanh toán'
                statusUpdate = 'Done'
            }
            axios.post("http://localhost:8080/order/manage-order/accept", {
                "statusCurr": statusCurr,
                "statusUpdate": statusUpdate
            })
                .then(setData([]))

        }


        function handlerRejectAll() {
            let status = 'Đang chờ xử lý'

            if (onDisplayNumber === 2) status = 'Đang được làm'
            else if (onDisplayNumber === 3) status = 'Đang giao hàng'
            else if (onDisplayNumber === 4) status = 'Đã thanh toán'

            axios.post("http://localhost:8080/order/manage-order/reject", {
                "status": status
            })
                .then(setData([]))
        }

        return (
            <div className="main_container">
                <div className="container padding-bottom-3x mb-1">
                    <div className="card mb-3">
                        <div className="p-4 text-center text-white text-lg rounded-top" style={{ backgroundColor: 'black' }}>
                            <span className="text-uppercase">Management Order</span>
                        </div>
                        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                        </div>
                        <div className="card-body">
                            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                                <div className={onDisplayNumber >= 1 ? 'step completed' : 'step'} >
                                    <div className="step-icon-wrap">
                                        <div className="step-icon" onClick={() => displayOrder('Đang chờ xử lý', 1)} style={{ cursor: 'pointer' }}><i className="pe-7s-cart"></i></div>
                                    </div>
                                    <h4 className="step-title">Đang chờ xử lý</h4>
                                </div>
                                <div className={onDisplayNumber >= 2 ? 'step completed' : 'step'} >
                                    <div className="step-icon-wrap">
                                        <div className="step-icon" onClick={() => displayOrder('Đang được làm', 2)} style={{ cursor: 'pointer' }}><i className="pe-7s-config"></i></div>
                                    </div>
                                    <h4 className="step-title">Đang được làm </h4>
                                </div>
                                <div className={onDisplayNumber >= 3 ? 'step completed' : 'step'} >
                                    <div className="step-icon-wrap">
                                        <div className="step-icon" onClick={() => displayOrder('Đang giao hàng', 3)} style={{ cursor: 'pointer' }}><i className="pe-7s-car"></i></div>
                                    </div>
                                    <h4 className="step-title">Đang giao hàng</h4>
                                </div>
                                <div className={onDisplayNumber === 4 ? 'step completed' : 'step'}>
                                    <div className="step-icon-wrap">
                                        <div className="step-icon" onClick={() => displayOrder('Đã thanh toán', 4)} style={{ cursor: 'pointer' }}><i className="pe-7s-credit"></i></div>
                                    </div>
                                    <h4 className="step-title">Đã thanh toán</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
                        <div className="text-left text-sm-right"><button className="btn btn-secondary btn-rounded btn-sm" onClick={() => handlerRejectAll()}>Từ chối tất cả</button></div>
                        <div className="text-left text-sm-right"><button className="btn btn-primary btn-rounded btn-sm" onClick={() => handlerAcceptAll()}>Chấp nhận tất cả</button></div>
                    </div>
                </div>

            </div>
        );
    }


    function OrderInfo({ order, idx }) {
        const [lgShow, setLgShow] = useState(false);

        function handlerAccept() {
            let sttOrder = 'Đang chờ xử lý'

            if (order.status === 'Đang chờ xử lý') sttOrder = 'Đang được làm'
            else if (order.status === 'Đang được làm') sttOrder = 'Đang giao hàng'
            else if (order.status === 'Đang giao hàng') sttOrder = 'Đã thanh toán'
            else if (order.status === 'Đã thanh toán') sttOrder = 'Done'


            axios.post("http://localhost:8080/order/manage-order", {
                "orderId": order._id,
                "sttOrder": sttOrder
            })
                .then(() => {
                    axios.get(`http://localhost:8080/order/manage-order/${order.status}`)
                        .then(res => {
                            res.data.forEach(order => {
                                order.items.forEach(item => {
                                    axios.get(`http://localhost:8080/food/${item.foodId}`)
                                        .then(res => {
                                            item.foodId = res.data;
                                        });
                                })
                            })
                            setData(res.data)
                        })
                })

        }

        function handlerReject() {
            axios.post("http://localhost:8080/order/manage-order", {
                "orderId": order._id,
                "sttOrder": 'Đã từ chối'
            })
                .then(() => {
                    axios.get(`http://localhost:8080/order/manage-order/${order.status}`)
                        .then(res => {
                            res.data.forEach(order => {
                                order.items.forEach(item => {
                                    axios.get(`http://localhost:8080/food/${item.foodId}`)
                                        .then(res => {
                                            item.foodId = res.data;
                                        });
                                })
                                console.log(order.items)
                            })
                            setData(res.data)
                        })
                })
        }


        return (
            <>
                <tr>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order._id}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{(new Date(order.createdAt)).toLocaleDateString()}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order.customerInfo.name}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{order.customerInfo.typeOrder}</td>
                    <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{Intl.NumberFormat().format(order.items.map((item) => item.price).reduce((acc, cur) => acc + cur, 0) + order.shipFee) + ' VND'}</td>
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
                                    <Col><p>{order.customerInfo.name}</p></Col>
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
                                <Row className='mb-3'>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5}>Phí giao hàng :</Col>
                                    <Col><p>{order.shipFee}</p></Col>
                                </Row>
                                <h5>Giỏ hàng</h5>
                                {order.items.map(item => (
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={2} xs={2}><Figure.Image alt="FoodImg" src={item.foodId.imageUrls ? item.foodId.imageUrls[0] : ''}></Figure.Image></Col>
                                        <Col xl={6} lg={6} md={10} sm={10} xs={10}>
                                            <Row><h5>{item.foodId.name}</h5></Row>
                                            <Row><p>{item.options}</p></Row>
                                        </Col>
                                        <Col xl={2} lg={2} md={10} sm={10} xs={9}>
                                            <p>Số lượng: {item.quantity}</p>
                                        </Col>
                                        <Col>
                                            <Row><Badge variant="primary" pill>{Intl.NumberFormat().format(item.price) + ' VND'}</Badge></Row>
                                        </Col>
                                    </Row>
                                ))}
                                <Row>
                                    <Col xl={7} lg={7} md={7} sm={7} xs={5}><h4>Tổng tiền:</h4></Col>
                                    <Col>
                                        <h4><Badge variant="primary" pill>{Intl.NumberFormat().format(order.items.map(item => item.price).reduce((acc, cur) => acc + cur, 0) + order.shipFee) + ' VND'}</Badge></h4>
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
                    <table class="table table-striped table-sm table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Ngày đặt hàng</th>
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

