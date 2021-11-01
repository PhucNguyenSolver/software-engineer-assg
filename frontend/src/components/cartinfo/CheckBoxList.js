import { Row } from "react-bootstrap"
import CheckBox from "./CheckBox"

export default function CheckBoxList({heading, items}) {
    return (
        <div>
            <Row><h5>{heading}</h5></Row>
            
            {Object.keys(items).map((label, index) => (
                <CheckBox label={label} index={index} price={items[label]}/>
            ))}
        </div>
    )
}