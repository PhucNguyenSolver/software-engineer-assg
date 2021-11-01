import CheckBox from "./CheckBox"

export default function CheckBoxList(props) {
    return (
        <div>
            <span>{props.heading}</span>
            
            {props.labels.map((label, index) => (
                <CheckBox label={label} index={index}/>
            ))}
        </div>
    )
}