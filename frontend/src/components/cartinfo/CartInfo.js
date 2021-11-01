import TotalPayment from "./TotalPayment"
import NumericUpDown from "./NumericUpDown"
import CheckBoxList from "./CheckBoxList"
import { Container, Col, Row, CloseButton, Figure } from 'react-bootstrap'

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
                <Col sm="2"></Col>
                <Col sm="1">
                    <CloseButton></CloseButton>
                </Col>
                <Col sm>
                    <h4>Thông tin đơn hàng {cartId}</h4>
                </Col>
            </Row>
            <Row>
                <Col sm="2"></Col>
                <Col sm="3">
                    <Row>
                        <Figure.Image
                            alt="FoodImg"
                            src={imgUrl}
                        />
                    </Row>
                    <Row>
                        <TotalPayment price={90}/>
                    </Row>
                </Col>
                <Col sm="1"></Col>
                <Col sm="4">
                    <Row>
                        <h2>{cartHeading}</h2>
                    </Row>
                    <Row>
                        <Col sm="4">Số lượng:</Col>
                        <Col sm="8"><NumericUpDown/></Col>
                    </Row>
                    <Row><CheckBoxList heading="Tùy chọn thêm (chọn nhiều):" items={options}/></Row>
                    <Row><CheckBoxList heading="Chọn nước (chọn 1):" items={drinks}/></Row>
                    <Row><CheckBoxList heading="Cay (chọn 1):" items={isSpices}/></Row>
                    <Row>
                        <Col sm="8"><button type="button" className="btn btn-secondary">Quay lại</button></Col>
                        <Col sm="4"><button type="button" className="btn btn-primary">Tiếp theo</button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}