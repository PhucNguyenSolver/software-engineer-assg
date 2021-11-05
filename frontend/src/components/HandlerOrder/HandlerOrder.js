import { useState } from "react"
import { Col, Modal, Row } from "react-bootstrap";

const orderData = [
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": {},
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
                <td>{props.order.customerName}</td>
                <td>{props.order.typeOrder}</td>
                <td>{props.order.totalPrice}</td>
                <td>{status}</td>
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
                        </Col>
                        <Col>
                            <h5>Món</h5>
                            <Row>
                                <Col>Phương thức thanh toán:</Col>
                                <Col><p>{props.order.typeOrder}</p></Col>
                            </Row>
                            <Row>
                                <Col>Tổng tiền:</Col>
                                <Col><p>{props.order.totalPrice}</p></Col>
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

