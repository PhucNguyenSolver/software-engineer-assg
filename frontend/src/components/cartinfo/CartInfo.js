import TotalPayment from "./TotalPayment"
import { QuantitySelector } from "../FoodInfo/QuantitySelector"
import { Container, Col, Row, Figure } from 'react-bootstrap'
import { OrderOptionItem } from "../FoodInfo/OrderOptionItem"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

var cartItem =  null;
const DEFAULT = {
    id: 1234,
    foodName: "Cánh gà xóc tỏi",
    unitPrice: 95000,
    quantity: 1,
    image: "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
    orderOptions: [
        {
            title: "Chọn nước",
            options: ["Pepsi", "Fanta", "Sprite", "Trà đào"],
            price: [0, 0, 0, 10000],
            isMultiSelect: false,
            answer:  [true, false, false, false]
        },

        {
            title: "Cay/Không cay",
            options: ["Cay", "Không cay"],
            price: [0, 0],
            isMultiSelect: false,
            answer: [true, false]
        },

        {
            title: "Chọn món thêm",
            options: ["Salad", "Cà chua", "Súp bí đỏ", "Sốt"],
            price: [5000, 10000, 15000, 10000],
            isMultiSelect: true,
            answer: [false, false, false, false],
        }
    ]
}
function calOrderOptionPrice(order) {
    let orderOptionPrice = 0;
    order.orderOptions.forEach( orderOption => {
        orderOptionPrice += orderOption.price.reduce((r,a,i) => {return r + a * orderOption.answer[i]},0);
    })
}

export default function CartInfo() {
    const {id: CART_ITEM_OFFSET} = useParams();
    const CART_STORAGE_NAME = "res-pos-cart";
    var cart = JSON.parse(localStorage.getItem(CART_STORAGE_NAME));

    const [quantity, setQuantity] = useState(0);
    const [orderOptionsAnswer, setOrderOptionsAnswer] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if(cart && cart.length > CART_ITEM_OFFSET) {
            cartItem = cart[CART_ITEM_OFFSET];
            setQuantity(cartItem.quantity);
            setOrderOptionsAnswer(cartItem.orderOptions);
            setIsLoaded(true);
        }
    }, [])
    useEffect(() => {
        // cart.quantity = quantity;
        // cart[CART_ITEM_OFFSET].orderOptions = orderOptionsAnswer;
        // console.log(cart[CART_ITEM_OFFSET]);
        if(cartItem) {
            let newCart = JSON.parse(JSON.stringify(cart));
            newCart[CART_ITEM_OFFSET].quantity = quantity;
            newCart[CART_ITEM_OFFSET].orderOptions = orderOptionsAnswer;
            localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(newCart));
            // localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cart));
        }
    })

    if(!isLoaded) {
        return(
             <Container>
                 Cart Item does not exists.
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <Col xl={{span: 1, offset: 2}} lg={1} md={1} sm={1} xs={1}>
                    <button type="button" className="btn btn-light"><i className="bi bi-arrow-left"></i></button>
                </Col>
                <Col xl={9} lg={11} md={11} sm={11} xs={11}>
                    <h4>Thông tin đơn hàng {cartItem.id}</h4>
                </Col>
            </Row>
            <Row>
                <Col xl={{span: 3, offset: 2}} lg={5} md={5}>
                    <Row>
                        <Figure.Image
                            alt="FoodImg"
                            src={cartItem.image}
                        />
                    </Row>
                    <Row>
                        <TotalPayment
                            fooUnitPrice={cartItem.unitPrice}
                            quantity={quantity}
                            orderOptionsAnswer={orderOptionsAnswer} 
                        />
                    </Row>
                </Col>
                <Col xl={{span: 4, offset: 1}} lg={{span: 6, offset: 1}} md={{span: 6, offset: 1}}>
                    <Row>
                        <h2>{cartItem.foodName}</h2>
                    </Row>
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>Số lượng:</Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}><QuantitySelector quantity={quantity} setQuantity={setQuantity}/></Col>
                    </Row>
                    <Row>
                        <ul>
                            <li><hr class="border-top border-secondary"/></li>
                            {cartItem.orderOptions.map((orderOptionItem) => {
                                return(
                                    <>
                                        <li>
                                            <OrderOptionItem orderOptionItem={orderOptionItem} callbacks={[(newAnswer) => {
                                                orderOptionItem.answer = newAnswer;
                                                setOrderOptionsAnswer(JSON.parse(JSON.stringify(cartItem.orderOptions)));
                                            }]}/>
                                        </li>
                                        <li><hr class="border-top border-secondary"/></li>
                                    </>
                                )
                            })}
                        </ul>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}