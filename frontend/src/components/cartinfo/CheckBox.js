import { Col, Row } from "react-bootstrap"

export default function CheckBox({label, index, price, handleCheckedBox}) {
    let toPrice = (price) => '+ ' + (price === 0 ? '0đ': price + ',000đ')

    return (
        <div className="form-check">
            <Row>
                <Col>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={"flexCheckDefault" + index}
                        onChange={handleCheckedBox}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={"flexCheckDefault" + index}
                    >
                        {label}
                    </label>
                </Col>
                <Col><p className="text-end">{toPrice(price)}</p></Col>
            </Row>
        </div>
    )
}