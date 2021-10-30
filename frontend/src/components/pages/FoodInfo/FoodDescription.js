import { QuantitySelector } from "./QuantitySelector";

export function FoodDescription({food, setQuantity}) {
    
    return(
        <>
            <div class="row text-start">
                <h1>{food.name}</h1>
            </div>
            <div class="row text-primary text-start">
                <h2>{ Intl.NumberFormat().format(food.unitPrice) + " VNĐ" }</h2>
            </div>
            <div class="row text-start">
                <p>{food.description}</p>
            </div>
            <div class="mb-3">
                <div class="col col-md-6 col-lg-4 p-2 border">
                    <QuantitySelector callbacks={[setQuantity]}/>
                </div>
            </div>
        </>
    )
}