import { FoodDescription } from "./FoodDescription";
import { ImagesSlide } from "./ImagesSlide";
import { useState, useEffect } from "react";
// import { OrderOptionItem } from "./OrderOptionItem";
import { OrderOptionModal } from "./OrderOptionModal";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import { FoodEditor } from "../staff/FoodEditor";
import { API_ENDPOINT } from "../../config";
axios.defaults.baseURL = API_ENDPOINT;

var DEFAULT_FOOD = {
    name: "Cánh gà xóc tỏi",
    unitPrice: 95000,
    description: "Mỗi phần gồm 6 cái cánh giữa, là phần nhiều thịt và mềm nhất. Cháy tỏi giòn tan như snack, vị mặn ngọt vừa vặn phủ đều lên cánh gà chiên giòn là món khai vị vô cùng kích thích",
    images: [
        "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
        "https://vuacua.vn/storage/media/iPfA30ZgTpzyDuzoMHJBYIC3pbdwIJlcOAsC4DHQ.jpeg",
        "https://vuacua.vn/storage/media/YE93ZWhvd8hKQZ8SoFPKCBn6cyzPPR5UCIUtaEeu.jpeg",
        "https://vuacua.vn/storage/media/7atQojptTrQx1Zqz7LnOroTDBn8RXbVf8rQCeWEZ.jpeg",
        "https://vuacua.vn/storage/media/31tpzKyd0wlgwC0cfrQJ6bsUS72uNabwRqqJSnx0.jpeg",
        "https://vuacua.vn/storage/media/EV0k9gZZjYCcxq1KZlLMaYxKi0GDSJOG45qfyIrR.jpeg",
        "https://vuacua.vn/storage/media/JzAPf1tpgEt6jSEvWqGt4fiWjRQqfesSXT5CUgP3.jpeg",
        "https://vuacua.vn/storage/media/4URBXmwIR2f2foAQjmCK9goo8ZHa4e9o8irdGB10.png",
        "https://vuacua.vn/storage/media/GkuRArvrbDfL5WLjFcSEkA04mXu7XqEPoLT1NAbo.png"
    ],
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


export default function FoodInfo({setNCartItem}) {
    var history = useHistory();
    const {foodId: FOOD_ID} = useParams();

    const [food, setFood] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [additionalPrice, setAdditionalPrice] = useState(0);

    useEffect(() => {
        if(food) {
            let basePrice = food.unitPrice * quantity * (1 - parseFloat(food.discount) / 100);
            let newTotalPrice = basePrice + additionalPrice;
            if(newTotalPrice != totalPrice) {
                setTotalPrice(newTotalPrice);
            }
        }
    });

    

    function onSubmit() {
        const CART_STORAGE_NAME = "cart";
        let curCart = JSON.parse(localStorage.getItem(CART_STORAGE_NAME));
        let cartItem = {};
        cartItem.offset = uuidv4();
        cartItem.orderOptions = food.orderOptions;
        cartItem.foodId = FOOD_ID;
        cartItem.quantity = quantity;

        var optionSum = {}
        optionSum.str = food.orderOptions.map((item) => {
            return item.title + ": " + item.options.filter((ele, idx) => item.answer[idx]).
                map((option, idx) => {
                    return option;
            }).join(", ")
        }).join(" / ");
        optionSum.price = additionalPrice;

        cartItem.optionSum = optionSum;

        if(curCart) {
            curCart.push(cartItem);
            localStorage.setItem(CART_STORAGE_NAME , JSON.stringify(curCart));
        }
        else {
            localStorage.setItem(CART_STORAGE_NAME , JSON.stringify([cartItem]));
        }

        setNCartItem(preVal => preVal + 1);
        toast.success('Thêm vào giỏ hàng thành công', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }



    useEffect(() => {
        axios.get("/food/detail/" + FOOD_ID)
        .then(res => {
            setFood(res.data);
        })
        .catch(err => {
            alert("Some errors occur in server. Cannot get food detail");
        })
    }, [])



    if(!food) {
        return <div class="container">Loading...</div>
    }
    return(
        <div class="container p-4">
            <ToastContainer/>
            <div class="row">
                <div class="col-md-6 col-lg-5">
                    <ImagesSlide imageData={food.images}/>
                </div>
                <div class="col-md-6">
                    <div class="container">
                        { JSON.parse(localStorage.getItem("isAuthenticated")) ?
                            <FoodEditor mode="edit" id={FOOD_ID}/>
                        : ""
                        }
                        <FoodDescription food={food} quantity={quantity} setQuantity={setQuantity}/>
                        <OrderOptionModal
                            food={food}
                            setFood={setFood}
                            quantity={quantity}
                            additionalPrice={additionalPrice}
                            setAdditionalPrice={setAdditionalPrice}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}