import { Col, ListGroup, ListGroupItem, Badge, Row } from "react-bootstrap"

export default function TotalPayment(props) {
    const lst = [
        7,
        0,
        0,
    ]

    let toPrice = (price) => price === 0 ? '0đ': price + ',000đ'

    return (
        <ListGroup as="ul">
            <ListGroupItem as="li" active>Tổng thanh toán</ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tạm tính</Col>
                    <Col>
                        <h6 className="text-end">{toPrice(props.price)} x 1</h6>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tùy chọn thêm</Col>
                    <Col><h6 className="text-end">{toPrice(lst[0])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Chọn nước</Col>
                    <Col><h6 className="text-end">{toPrice(lst[1])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Cay</Col>
                    <Col><h6 className="text-end">{toPrice(lst[2])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col><h5>Tổng</h5></Col>
                    <Col><h5 className="text-end"><Badge variant="primary" pill>97,000đ</Badge></h5></Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    )
}