import { OrderOptionItem } from "./OrderOptionItem";

export function OrderOptionModal({food, setFood, quantity, setAdditionalPrice, totalPrice, onSubmit}) {
    return(
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderOptionModal">
                Đặt món ngay
            </button>
            <div class="modal fade" id="orderOptionModal" tabindex="-1" aria-labelledby="orderOptionModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="orderOptionModalLabel">Tùy chọn thêm</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-2">
                                    <img src={food.images[0]} class="w-100"></img>
                                </div>
                                <div class="col row">
                                    <span class="fw-bold">{food.name}</span>
                                    <span>Số lượng: {quantity}</span>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li><hr class="border-top border-secondary"/></li>
            
                            {food.orderOptions.map((orderOption, idx) => {
                                return(
                                    <>
                                        <li>
                                            <OrderOptionItem orderOptionItem={orderOption} callbacks={[(newAnswer) => {
                                                let orderOptionPrice = 0;
                                                console.log("Update Additional Price");
                                                food.orderOptions.forEach( orderOption => {
                                                    console.log(orderOption.price);
                                                    console.log(newAnswer);
                                                    orderOptionPrice += orderOption.price.reduce((r,a,i) => {return r + a * newAnswer[i]},0);
                                                })
                                                console.log(orderOptionPrice);
                                                setAdditionalPrice(orderOptionPrice);
                                                let newFood = JSON.parse(JSON.stringify(food));
                                                newFood.orderOptions[idx].answer = newAnswer;
                                                console.log(newFood);
                                                setFood(newFood);
                                            }]}/>
                                        </li>
                                        <li><hr class="border-top border-secondary"/></li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit}>Đặt món +{Intl.NumberFormat().format(totalPrice)} đ</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}