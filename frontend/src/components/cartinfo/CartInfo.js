import TotalPayment from "./TotalPayment"
import { QuantitySelector } from "../FoodInfo/QuantitySelector"
import { Container, Col, Row, Figure } from 'react-bootstrap'
import { OrderOptionItem } from "../FoodInfo/OrderOptionItem"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"

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
// function calOrderOptionPrice(order) {
//     let orderOptionPrice = 0;
//     order.orderOptions.forEach( orderOption => {
//         orderOptionPrice += orderOption.price.reduce((r,a,i) => {return r + a * orderOption.answer[i]},0);
//     })
// }

export default function CartInfo() {
    const {id: cartItemId} = useParams();

    const CART_STORAGE_NAME = "cart";
    var cart = JSON.parse(localStorage.getItem(CART_STORAGE_NAME));

    const [quantity, setQuantity] = useState(0);
    const [orderOptionsAnswer, setOrderOptionsAnswer] = useState([]);
    const [food, setFood] = useState(null);
    const [cartItem, setCartItem] = useState(null);

    useEffect(() => {
        const cartItemOffset = cart.findIndex(item => item.offset == cartItemId)
        if(cart && cartItemOffset >= 0) {
            setCartItem(cart[cartItemOffset]);
            setQuantity(cart[cartItemOffset].quantity);
            setOrderOptionsAnswer(cart[cartItemOffset].orderOptions);
      
            axios.get("/food/" + cart[cartItemOffset].foodId)
            .then(res => {
                console.log("Get success")
                console.log(cart[cartItemOffset]);
                setFood(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [])

    useEffect(() => {
        if(cartItem) {
            const cartItemOffset = cart.findIndex(item => item.offset == cartItemId);
            let newCart = JSON.parse(JSON.stringify(cart));
            newCart[cartItemOffset].quantity = quantity;
            newCart[cartItemOffset].orderOptions = orderOptionsAnswer;
            newCart[cartItemOffset].optionSum.str = orderOptionsAnswer.map((item) => {
                return item.title + ": " + item.options.filter((ele, idx) => item.answer[idx]).
                    map((option, idx) => {
                        return option;
                }).join(", ")
            }).join(" / ");

            newCart[cartItemOffset].optionSum.price = orderOptionsAnswer.map( item => {
                return item.price.reduce((r,a,i) => {return r + a * item.answer[i]},0);
            }).reduce((pre, cur) => pre + cur, 0);

            localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(newCart));
        }
    })

    if(!cartItem || !food) {
        return(
             <Container>
                 Cart Item does not exists.
            </Container>
        )
    }


    return (
        <Container class="p-4">
            <Row>

                <div class="col">
                    <h4>Thông tin chi tiết đơn hàng </h4>
                </div>
                <div class="col-auto">
                    <button type="button" className="btn btn-secondary shadow-none"
                    onClick={() => window.location.href = "/my-cart"}>Trở lại giỏ hàng</button>
                </div>
            </Row>
            <Row>
                <Col xl={{span: 3, offset: 2}} lg={5} md={5}>
                    <Row>
                        <Figure.Image
                            alt="FoodImg"
                            src={food.imageUrls[0]}
                        />
                    </Row>
                    <Row>
                        <TotalPayment
                            fooUnitPrice={food.price}
                            discount={parseFloat(food.discount) / 100}
                            quantity={quantity}
                            orderOptionsAnswer={orderOptionsAnswer} 
                        />
                    </Row>
                </Col>
                <Col xl={{span: 4, offset: 1}} lg={{span: 6, offset: 1}} md={{span: 6, offset: 1}}>
                    <Row>
                        <a class="text-secondary fs-2" href={"/food-info/" + food._id}>{food.name}</a>
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