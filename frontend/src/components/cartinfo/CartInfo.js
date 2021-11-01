import TotalPayment from "./TotalPayment"
import NumericUpDown from "./NumericUpDown"
import CheckBoxList from "./CheckBoxList"
import { QuantitySelector } from "../pages/FoodInfo/QuantitySelector"
import { Container, Col, Row, Figure } from 'react-bootstrap'

export default function CartInfo({cartId, cartHeading, imgUrl}) {
    const options = {
        'Tương cà': 2,
        'Tương ớt': 2,
        'Salad': 3,
        'Phô mai': 5,
        'Khoai tây chiên': 15,
    }
    const drinks = {
        'Pepsi': 10,
        'Fanta': 8,
        'Sprite': 8,
        'Trà đào': 15,
    }
    const isSpices = {
        'Cay': 0,
        'Không cay': 0,
    }
    return (
        <Container>
            <Row>
                <Col xl={{span: 1, offset: 2}} lg={1} md={1} sm={1} xs={1}>
                    <button type="button" class="btn btn-light"><i class="bi bi-arrow-left"></i></button>
                </Col>
                <Col xl={9} lg={11} md={11} sm={11} xs={11}>
                    <h4>Thông tin đơn hàng {cartId}</h4>
                </Col>
            </Row>
            <Row>
                <Col xl={{span: 3, offset: 2}} lg={5} md={5}>
                    <Row>
                        <Figure.Image
                            alt="FoodImg"
                            src={imgUrl}
                        />
                    </Row>
                    <Row>
                        <TotalPayment price={90} />
                    </Row>
                </Col>
                <Col xl={{span: 4, offset: 1}} lg={{span: 6, offset: 1}} md={{span: 6, offset: 1}}>
                    <Row>
                        <h2>{cartHeading}</h2>
                    </Row>
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>Số lượng:</Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}><NumericUpDown /></Col>
                    </Row>
                    <Row><CheckBoxList heading="Tùy chọn thêm (chọn nhiều):" items={options} /></Row>
                    <Row><CheckBoxList heading="Chọn nước (chọn 1):" items={drinks} /></Row>
                    <Row><CheckBoxList heading="Cay (chọn 1):" items={isSpices} /></Row>
                    <Row>
                        <Col xl={8} lg={9} md={8} sm={9} xs={8}><button type="button" className="btn btn-secondary">Quay lại</button></Col>
                        <Col xl={4} lg={3} md={4} sm={3} xs={4}><button type="button" className="btn btn-primary">Tiếp theo</button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}