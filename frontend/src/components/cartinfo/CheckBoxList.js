import { Row } from "react-bootstrap"
import CheckBox from "./CheckBox"

export default function CheckBoxList({heading, items, index, handleCheckedBox}) {
    return (
        <div>
            <Row><h5>{heading}</h5></Row>
            
            {Object.keys(items).map((label, i) => (
                <CheckBox label={label} index={index + '_' + i} price={items[label]} handleCheckedBox={handleCheckedBox}/>
            ))}
        </div>
    )
}