import { Col, ListGroup, ListGroupItem, Badge, Row } from "react-bootstrap"

export default function TotalPayment({price, additionalPrice}) {
    let toPrice = (price) => price === 0 ? '0đ': price + ',000đ'

    return (
        <ListGroup as="ul">
            <ListGroupItem as="li" active>Tổng thanh toán</ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tạm tính</Col>
                    <Col>
                        <h6 className="text-end">{toPrice(price)} x 1</h6>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tùy chọn thêm</Col>
                    <Col><h6 className="text-end">{toPrice(additionalPrice[0])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Chọn nước</Col>
                    <Col><h6 className="text-end">{toPrice(additionalPrice[1])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Cay</Col>
                    <Col><h6 className="text-end">{toPrice(additionalPrice[2])}</h6></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col><h5>Tổng</h5></Col>
                    <Col><h5 className="text-end"><Badge variant="primary" pill>{toPrice(price + additionalPrice.reduce((acc, ele) => acc + ele, 0))}</Badge></h5></Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    )
}