import TotalPayment from "./TotalPayment"
import NumericUpDown from "./NumericUpDown"
import CheckBoxList from "./CheckBoxList"
import { Container, Col, Row, Button, CloseButton, Figure } from 'react-bootstrap'

export default function CartInfo({cartId, cartHeading, imgUrl}) {
    return (
        <Container>
            <Row>
                <Col sm="1"></Col>
                <Col sm="1">
                    <CloseButton></CloseButton>
                </Col>
                <Col sm>
                    Thông tin đơn hàng {cartId}
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
                        <TotalPayment></TotalPayment>
                    </Row>
                </Col>
                <Col sm="1"></Col>
                <Col sm="6">
                    <Row>{cartHeading}</Row>
                    <Row>
                        <Col sm="2">Số lượng:</Col>
                        <Col sm="10"><NumericUpDown></NumericUpDown></Col>
                    </Row>
                    <Row><CheckBoxList heading="Tùy chọn thêm (chọn nhiều):"></CheckBoxList></Row>
                    <Row><CheckBoxList heading="Chọn nước (chọn 1):"></CheckBoxList></Row>
                    <Row><CheckBoxList heading="Cay (chọn 1):"></CheckBoxList></Row>
                    <Row>
                        <Col><Button>Quay lại</Button></Col>
                        <Col><Button>Lưu</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}