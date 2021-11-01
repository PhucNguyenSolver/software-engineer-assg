import TotalPayment from "./TotalPayment"
import NumericUpDown from "./NumericUpDown"
import CheckBoxList from "./CheckBoxList"
import { Container, Col, Row, CloseButton, Figure } from 'react-bootstrap'

export default function CartInfo({cartId, cartHeading, imgUrl}) {
    const options = [
        'Tương cà',
        'Tương ớt',
        'Salad',
        'Phô mai',
        'Khoai tây chiên',
    ]
    const drinks = [
        'Pepsi',
        'Fanta',
        'Sprite',
        'Trà đào',
    ]
    const isSpices = [
        'Cay',
        'Không cay',
    ]
    return (
        <Container>
            <Row>
                <Col sm="1"></Col>
                <Col sm="1">
                    <CloseButton></CloseButton>
                </Col>
                <Col sm>
                    <p className="fs-5 fw-bold">Thông tin đơn hàng {cartId}</p>
                </Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="4">
                    <Row>
                        <Figure.Image
                            alt="FoodImg"
                            src={imgUrl}
                        />
                    </Row>
                    <Row>
                        <TotalPayment price="90,000đ"/>
                    </Row>
                </Col>
                <Col sm="1"></Col>
                <Col sm="6">
                    <Row>
                        <p className="fs-4 fw-bold">{cartHeading}</p>
                    </Row>
                    <Row>
                        <Col sm="2">Số lượng:</Col>
                        <Col sm="10"><NumericUpDown/></Col>
                    </Row>
                    <Row><CheckBoxList heading="Tùy chọn thêm (chọn nhiều):" labels={options}/></Row>
                    <Row><CheckBoxList heading="Chọn nước (chọn 1):" labels={drinks}/></Row>
                    <Row><CheckBoxList heading="Cay (chọn 1):" labels={isSpices}/></Row>
                    <Row>
                        <Col><button type="button" className="btn btn-secondary">Quay lại</button></Col>
                        <Col><button type="button" className="btn btn-primary">Lưu</button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}