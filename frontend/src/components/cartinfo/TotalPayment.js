import { Col, ListGroup, ListGroupItem, Badge, Row } from "react-bootstrap"


export default function TotalPayment({fooUnitPrice, discount, quantity, orderOptionsAnswer=[]}) {

    return (
        <ListGroup as="ul">
            <ListGroupItem as="li" active>Tổng thanh toán</ListGroupItem>
            <ListGroupItem as="li">
                <Row>
                    <Col>Tạm tính</Col>
                    <Col>
                        <h6 className="text-end">{Intl.NumberFormat().format(fooUnitPrice * discount) + "đ x " + quantity}</h6>
                    </Col>
                </Row>
            </ListGroupItem>

            {orderOptionsAnswer.map((item) => {
                return(
                    <>
                    <ListGroupItem as="li">
                        <Row>
                            <Col>{item.title}</Col>
                            <Col>
                                <h6 className="text-end">{Intl.NumberFormat().format(item.price.reduce((r,a,i) => {return r + a * item.answer[i]},0))}đ</h6>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    </>
                )
            })}
            
            <ListGroupItem as="li">
                <Row>
                    <Col><h5>Tổng</h5></Col>
                    <Col><h5 className="text-end"><Badge variant="primary" pill>{
                        Intl.NumberFormat().format(
                        fooUnitPrice * quantity * discount +
                        orderOptionsAnswer.map( item => {
                            return item.price.reduce((r,a,i) => {return r + a * item.answer[i]},0);
                        }).reduce((pre, cur) => pre + cur, 0))
                        
                    }đ</Badge></h5></Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    )
}