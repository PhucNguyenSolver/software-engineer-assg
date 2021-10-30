import { FoodDescription } from "./FoodDescription";
import { ImagesSlide } from "./ImagesSlide";
import { useState, useEffect } from "react";
import { OrderOptionItem } from "./OrderOptionItem";
import { OrderOptionModal } from "./OrderOptionModal";

const food = {
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
            "title": "Chọn nước",
            "options": ["Pepsi", "Fanta", "Sprite", "Trà đào"],
            "price": [0, 0, 0, 10000],
            "isMultiSelect": false,
            "default": [true, false, false, false],
            "answer":  [true, false, false, false],
        },

        {
            "title": "Cay/Không cay",
            "options": ["Cay", "Không cay"],
            "price": [0, 0],
            "isMultiSelect": false,
            "default":[true, false],
            "answer": [true, false],
        },

        {
            "title": "Chọn món thêm",
            "options": ["Salad", "Cà chua", "Súp bí đỏ", "Sốt"],
            "price": [5000, 10000, 15000, 10000],
            "isMultiSelect": true,
            "default":[true, false, false, false],
            "answer": [true, false, false, false],
        }
    ]
}


export function FoodInfo() {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [additionalPrice, setAdditionalPrice] = useState( () => {
        let orderOptionPrice = 0;
        food.orderOptions.forEach( orderOption => {
            orderOptionPrice += orderOption.price.reduce((r,a,i) => {return r + a * orderOption.answer[i]},0);
        })
        return orderOptionPrice;
    });

    useEffect(() => {
        let basePrice = food.unitPrice * quantity;
        let newTotalPrice = basePrice + additionalPrice;
        if(newTotalPrice != totalPrice) {
            setTotalPrice(newTotalPrice);
        }
    });

    return(
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <ImagesSlide imageData={food.images}/>
                </div>
                <div class="col-md-6">
                    <div class="container">
                        <FoodDescription food={food} setQuantity={setQuantity}/>
                        <OrderOptionModal
                            food={food}
                            quantity={quantity}
                            additionalPrice={additionalPrice}
                            setAdditionalPrice={setAdditionalPrice}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}