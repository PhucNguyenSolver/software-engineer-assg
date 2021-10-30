import { OrderOptionItem } from "./OrderOptionItem";

export function OrderOptionModal({food, quantity, additionalPrice, setAdditionalPrice, totalPrice, setTotalPrice}) {
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
            
                            {food.orderOptions.map((orderOption) => {
                                return(
                                    <>
                                        <li>
                                            <OrderOptionItem order={orderOption} callbacks={[(newAnswer) => {
                                                orderOption.answer = newAnswer;
                                                let orderOptionPrice = 0;
                                                food.orderOptions.forEach( orderOption => {
                                                    orderOptionPrice += orderOption.price.reduce((r,a,i) => {return r + a * orderOption.answer[i]},0);
                                                })
                                                setAdditionalPrice(orderOptionPrice);
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
                        <button type="button" class="btn btn-primary">Đặt món +{Intl.NumberFormat().format(totalPrice)} đ</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}