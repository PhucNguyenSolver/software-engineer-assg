import { useState
 } from "react";
export function OrderOptionItem({order, callbacks}) {
    const [checkedOptions, setCheckedOptions] = useState(order.default);

    function onCheck(idx) {
        let new_checkOptions;
        if(order.isMultiSelect) {
            new_checkOptions = checkedOptions.map((val) => {return val})
        }
        else {
            new_checkOptions = Array(checkedOptions.length).fill(false);
        }
        new_checkOptions[idx] = !new_checkOptions[idx];
        if(JSON.stringify(checkedOptions) != JSON.stringify(new_checkOptions)) {
            setCheckedOptions(new_checkOptions);
            raiseEvent(new_checkOptions);
            order.answer = new_checkOptions;
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
                <h5 class="px-0">{order.title}</h5>
            </div>
            <div class="row">
                {order.options.map((option, idx) => {
                    return(
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  name={order.title} id={option} value={option} checked={checkedOptions[idx]} onChange={() => onCheck(idx)}/>
                            <div class="row">
                                <label class="form-check-label col" for={option}>
                                    {option}
                                </label>
                                <label class="form-check-label col" for={option}>
                                   + {Intl.NumberFormat().format(order.price[idx])} đ
                                </label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}