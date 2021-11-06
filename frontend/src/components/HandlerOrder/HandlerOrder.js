import { useState } from "react"
import { Badge, Col, Figure, Modal, Row } from "react-bootstrap";

const orderData = [
    {
        "orderId": "123abcxyz",
        "customerName": "Ngô Đức Trí",
        "typeOrder": "Online",
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay, nước mắt của Tiến Minh",
                "quantity": 5,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
]

function OrderInfo(props) {
    const [status, setStatus] = useState("Đang chờ xử lý")
    const [lgShow, setLgShow] = useState(false);

    function handlerAccept() {
        if (status == "Đang chờ xử lý") setStatus("Đang được làm")
        else if (status == "Đang được làm") setStatus("Đang giao hàng")
        else if (status == "Đang giao hàng") {
            setStatus("Đã thanh toán")
            document.getElementById('accept' + props.idx).disabled = true
            document.getElementById('reject' + props.idx).disabled = true

        }
    }

    function handlerReject() {
        document.getElementById('accept' + props.idx).disabled = true
        setStatus("Đã từ chối")
    }

    return (
        <>
            <tr>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.orderId}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.customerName}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.typeOrder}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.orderInfo.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{status}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-success" onClick={handlerAccept} id={'accept' + props.idx}>Xử lý</button>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger" onClick={handlerReject} id={'reject' + props.idx}>Xử lý</button>
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
                                <Col xl={5}>Họ và tên:</Col>
                                <Col><p>{props.order.customerName}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5}>Số điện thoại:</Col>
                                <Col><p>{props.order.customerInfo.phoneNumber}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5}>Địa chỉ:</Col>
                                <Col><p>{props.order.customerInfo.address}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5}>Phường / Xã:</Col>
                                <Col><p>{props.order.customerInfo.ward}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5}>Quận / Huyện:</Col>
                                <Col><p>{props.order.customerInfo.district}</p></Col>
                            </Row>
                            <h5>Giỏ hàng</h5>
                            {props.order.orderInfo.map((item) => (
                                <Row>
                                    <Col xl={2}><Figure.Image alt="FoodImg" src={item.imgUrl}></Figure.Image></Col>
                                    <Col xl={7}>
                                        <Row><h5>{item.name}</h5></Row>
                                        <Row><p>{item.options}</p></Row>
                                    </Col>
                                    <Col xl={2}>
                                        <p>Số lượng: {item.quantity}</p>
                                    </Col>
                                    <Col>
                                        <Row><Badge variant="primary" pill>{item.price * item.quantity + ' đ'}</Badge></Row>
                                    </Col>
                                </Row>
                            ))}
                            <Row>
                                <Col xl={7}><h4>Tổng tiền:</h4></Col>
                                <Col>
                                    <h4><Badge variant="primary" pill>{props.order.orderInfo.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0) + 'đ'}</Badge></h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default function HandlerOrder() {
    return (
        <div class="container">
            <div class="container mt-5 ">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Tên khách hàng </th>
                                <th scope="col">Loại đặt hàng</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Chấp nhận</th>
                                <th scope="col">Từ chối</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order, index) => {
                                return <OrderInfo order={order} idx={index + 1} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

