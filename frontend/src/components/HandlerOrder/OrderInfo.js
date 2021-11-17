import { useState } from "react";
import { Badge, Col, Figure, Modal, Row } from "react-bootstrap";

function OrderInfo({ order, idx, data }) {
    const [lgShow, setLgShow] = useState(false);

    const handlerAccept = () => {
        // axios.post("http://localhost:8080/order/manage-order", {
        //     "orderId": props.order.orderId,
        //     "action": "increase"
        // })
        // .then()

        // data = []

        const newData = data.filter(o => o.orderId !== order.orderId);
        // newData.forEach(item => console.log(item))
        // setData(newData)
    }

    const handlerReject = idCurr => {
        // axios.post("http://localhost:8080/order/manage-order", {
        //     "orderId": props.order.orderId,
        //     "action": "decrease"
        // })
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
                                <Col xl={2} lg={2} md={2} sm={2} xs={2}><Figure.Image alt="FoodImg" src={item.imgUrl}></Figure.Image></Col>
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

export default OrderInfo;