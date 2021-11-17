import { useState} from "react";

export function OrderOptionItem({orderOptionItem, callbacks}) {
    const [checkedOptions, setCheckedOptions] = useState(orderOptionItem.answer);

    function onCheck(idx) {
        let new_checkOptions;
        if(orderOptionItem.isMultiSelect) {
            new_checkOptions = checkedOptions.map((val) => {return val})
        }
        else {
            new_checkOptions = Array(checkedOptions.length).fill(false);
        }
        new_checkOptions[idx] = !new_checkOptions[idx];
        if(JSON.stringify(checkedOptions) !== JSON.stringify(new_checkOptions)) {
            setCheckedOptions(new_checkOptions);
            raiseEvent(new_checkOptions);
            // orderOptionItem.answer = new_checkOptions;
        }
    }

    function raiseEvent(newAnswer) {
        callbacks.map((callback) => {
            callback(newAnswer)
        });
    }
    return(
        <div class="container">
            <div class="row">
                <h5 class="px-0">{orderOptionItem.title}</h5>
            </div>
            <div class="row">
                {orderOptionItem.options.map((option, idx) => {
                    return(
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  name={orderOptionItem.title} id={option} value={option} checked={checkedOptions[idx]} onChange={() => onCheck(idx)}/>
                            <div class="row">
                                <label class="form-check-label col" for={option}>
                                    {option}
                                </label>
                                <label class="form-check-label col" for={option}>
                                   + {Intl.NumberFormat().format(orderOptionItem.price[idx])} đ
                                </label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}