import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"

export default function TotalPayment(props) {
    return (
        <ListGroup as="ul">
            <ListGroupItem as="li" active>Tổng thanh toán</ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tạm tính</Col>
                    <Col>
                        <p className="text-end">{props.price} x 1</p>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tùy chọn thêm</Col>
                    <Col>7,000đ</Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">Chọn nước 0đ</ListGroupItem>
            <ListGroupItem as="li">Cay 0đ</ListGroupItem>
            <ListGroupItem as="li">
                <p>Tổng 97,000đ</p>
            </ListGroupItem>
        </ListGroup>
    )
}