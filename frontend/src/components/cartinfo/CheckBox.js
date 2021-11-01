import { Col, Row } from "react-bootstrap"

export default function CheckBox(props) {
    let toPrice = (price) => '+ ' + (price === 0 ? '0đ': price + ',000đ')

    return (
        <div className="form-check">
            <Row>
                <Col>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={"flexCheckDefault" + props.index}
                    />
                    <label
                        className="form-check-label"
                        for={"flexCheckDefault" + props.index}
                    >
                        {props.label}
                    </label>
                </Col>
                <Col><p className="text-end">{toPrice(props.price)}</p></Col>
            </Row>
        </div>
    )
}