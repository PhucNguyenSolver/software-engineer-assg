import { useState } from "react"
import { Col, Modal, Row } from "react-bootstrap";

const orderData = [
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
]

function OrderInfo(props) {
    const [status, setStatus] = useState("Đang chờ xử lý")
    const [lgShow, setLgShow] = useState(false);

    function handlerAccept() {
        if (status == "Đang chờ xử lý") setStatus("Đang được làm")
        else if (status == "Đang được làm") setStatus("Đang giao hàng")
        else if (status == "Đang giao hàng") setStatus("Đã thanh toán")
    }

    function handlerReject() {
        document.getElementById('accept').disabled = true
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
                    <button type="button" class="btn btn-sm btn-outline-success" onClick={handlerAccept} id='accept'>Xử lý</button>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger" onClick={handlerReject}>Xử lý</button>
                </td>
            </tr>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xl={7}>Thông tin thanh toán</Col>
                        <Col xl={5}>Đơn hàng</Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default function HandlerOrder() {
    return (
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
                        {orderData.map(order => {
                            return <OrderInfo order={order} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

