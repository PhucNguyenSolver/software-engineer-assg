export default function CheckBox(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={"flexCheckDefault" + props.index}></input>
            <label className="form-check-label" for={"flexCheckDefault" + props.index}>
                {props.label}
            </label>
        </div>
    )
}