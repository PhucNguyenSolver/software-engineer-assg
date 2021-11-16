import { useState, useEffect } from "react";

export function QuantitySelector({initQuantity = 1, callbacks = []}) {
    const LOWER_BOUND = 0;
    const UPPER_BOUND = 99;

    const [quantity, setQuantity] = useState(initQuantity);

    function decrement() {
        if(quantity > LOWER_BOUND + 1) {
            updateQuantity(quantity - 1);
        }
    }

    function increment() {
        updateQuantity(quantity + 1)
    }
    //
    function quantityFieldOnChange(event) {
        let value = Number(event.target.value);
        if (!isNaN(value)) {
            updateQuantity(value);
        }
        else {
            updateQuantity(1);
        }
    }

    function quantityFieldOutFoucus() {
        if(quantity === 0) {
            updateQuantity(1);
        }
    }
    function updateQuantity(newQuantity) {
        setQuantity(newQuantity);
        raiseEvent(newQuantity);
    }

    function raiseEvent(newQuantity) {
        callbacks.map((callback) => {
            callback(newQuantity);
        })
    }

    useEffect(() => {
        if(quantity < LOWER_BOUND) {
            setQuantity(LOWER_BOUND);
        }
        else if(quantity > UPPER_BOUND) {
            setQuantity(UPPER_BOUND);
        }
    }, [quantity]);

    return(
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col d-flex justify-content-center" onClick={decrement}>
                <button class="btn bnt-light p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
            <div class="col p-0">
                <input type="text" class="form-control shadow-none input-focus p-1 text-center" value={quantity === 0 ? "" : quantity} 
                    onBlur={quantityFieldOutFoucus}
                    onChange={quantityFieldOnChange}/>
            </div>
            <div class="col d-flex justify-content-center" onClick={increment}>
                <button class="btn button-light p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}