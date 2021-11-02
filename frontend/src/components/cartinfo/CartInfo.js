import TotalPayment from "./TotalPayment"
import NumericUpDown from "./NumericUpDown"
import CheckBoxList from "./CheckBoxList"
import { Container, Col, Row, Figure } from 'react-bootstrap'
import { useState } from "react"

export default function CartInfo({cartId, cartHeading, imgUrl}) {
    const additionalFood = [
        {
            'Tương cà': 2,
            'Tương ớt': 2,
            'Salad': 3,
            'Phô mai': 5,
            'Khoai tây chiên': 15,
        },
        {
            'Pepsi': 10,
            'Fanta': 8,
            'Sprite': 8,
            'Trà đào': 15,
        },
        {
            'Cay': 0,
            'Không cay': 0,
        }
    ]

    const additionalPrice = [7, 0, 0]

    const [price, setPrice] = useState(additionalPrice)

    function handleCheckedBox(e) {
        if (e.target.value) {
            additionalPrice[0] += 1
            setPrice(additionalPrice)
            console.log(additionalPrice)
        }
    }

    return (
        <Container>
            <Row>
                <Col xl={{span: 1, offset: 2}} lg={1} md={1} sm={1} xs={1}>
                    <button type="button" className="btn btn-light"><i className="bi bi-arrow-left"></i></button>
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
                        <TotalPayment price={90} additionalPrice={price}/>
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
                    <Row><CheckBoxList heading="Tùy chọn thêm (chọn nhiều):" items={additionalFood[0]} index={0} handleCheckedBox={handleCheckedBox}/></Row>
                    <Row><CheckBoxList heading="Chọn nước (chọn 1):" items={additionalFood[1]} index={1} handleCheckedBox={handleCheckedBox}/></Row>
                    <Row><CheckBoxList heading="Cay (chọn 1):" items={additionalFood[2]} index={2} handleCheckedBox={handleCheckedBox}/></Row>
                    <Row>
                        <Col xl={8} lg={9} md={8} sm={9} xs={8}><button type="button" className="btn btn-secondary">Quay lại</button></Col>
                        <Col xl={4} lg={3} md={4} sm={3} xs={4}><button type="button" className="btn btn-primary">Tiếp theo</button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}