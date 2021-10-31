
export default function CheckBoxList({heading}) {
    return (
        <div>
            <span>{heading}</span>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Tương cà
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    Tương ớt
                </label>
            </div>
        </div>
    )
}