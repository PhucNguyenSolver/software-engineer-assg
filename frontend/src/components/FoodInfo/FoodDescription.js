import { QuantitySelector } from "./QuantitySelector";

export function FoodDescription({food, quantity, setQuantity}) {

    return(
        <>
            <div class="row text-start">
                <h1>{food.name}</h1>
            </div>
            <div class="text-primary text-start">
                <h4>
                    <span class="badge rounded-pill bg-primary">- {food.discount}</span>
                </h4>
                <h4 class="text-decoration-line-through text-secondary">{ Intl.NumberFormat().format(food.unitPrice) + " VNĐ" }</h4>
                <h3>{ Intl.NumberFormat().format(food.unitPrice * parseFloat(food.discount) / 100) + " VNĐ" }</h3>
            </div>
            <div class="row text-start">
                <p>{food.description}</p>
            </div>
            <div class="mb-3">
                <div class="col col-md-6 col-lg-4 p-2 border">
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                </div>
            </div>
        </>
    )
}