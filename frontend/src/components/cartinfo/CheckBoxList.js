import { Row } from "react-bootstrap"
import CheckBox from "./CheckBox"

export default function CheckBoxList(props) {
    return (
        <div>
            <Row><h5>{props.heading}</h5></Row>
            
            {Object.keys(props.items).map((label, index) => (
                <CheckBox label={label} index={index} price={props.items[label]}/>
            ))}
        </div>
    )
}