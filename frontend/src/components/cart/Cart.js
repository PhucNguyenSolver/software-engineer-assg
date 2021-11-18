import { useState, useEffect } from "react"
import styled from "styled-components"
import CartContent from "./CartContent"
import CartTotalPrice from "./CartTotalPrices"
import CartService from "../../services/cart.service"

const localStorage = window.localStorage

const ShoppingCart = styled.div`
    margin-top: 5px;
    max-width: 94%;
`
const CartTitle = styled.div`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 650;
    line-height: 28px;
    margin-bottom: 5px;
`
const CartInner = styled.div``

const cartSampleLocalData = [{
    foodId: "618eb8bfc195fbd6f3d8983d",
    quantity: 5,
    optionSum: {
        str: "Không cay/Fanta",
        price: 0
    },
    orderOptions: [{
        isMultiSelect: false,
        options: ["Cực cay", "Cay vừa", "Cay nhẹ", "Không cay"],
        price: [0, 0, 0, 0],
        answer: [true, false, false, false],
        title: "Độ cay",
        _id: "618eb1edc195fbd6f3cf8195"
    }]
}, {
    foodId: "618eb8bfc195fbd6f3d8983d",
    quantity: 3,
    optionSum: {
        str: "Cực cay/Pepsi",
        price: 5000
    },
    orderOptions: [{
        isMultiSelect: false,
        options: ["Cực cay", "Cay vừa", "Cay nhẹ", "Không cay"],
        price: [0, 0, 0, 0],
        answer: [true, false, false, false],
        title: "Độ cay",
        _id: "618eb1edc195fbd6f3cf8195"
    }]
}, {
    foodId: "619229f1792fa260bd3a1003",
    quantity: 2,
    optionSum: {
        str: "Cay/Trà đào",
        price: 10000
    },
    orderOptions: [{
        isMultiSelect: false,
        options: ["Cực cay", "Cay vừa", "Cay nhẹ", "Không cay"],
        price: [0, 0, 0, 0],
        answer: [true, false, false, false],
        title: "Độ cay",
        _id: "618eb1edc195fbd6f3cf8195"
    }]
}]

// Mock
// localStorage.setItem('cart', JSON.stringify(cartSampleLocalData))

export default function Cart() {
    const [data, setData] = useState([])
    const [chooseAll, setChooseAll] = useState(false);

    // Load cart basic info from local storage when load page
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const itemIdList = cartStorage !== null ? cartStorage.map(item => item.foodId) : null;

    useEffect(() => {
        itemIdList && CartService.getList(
            JSON.stringify(itemIdList)
        ).then(response => {
            const foodData = response.data;
            const cartData = cartStorage.map((item, index) => {
                let foodItem = foodData.find(value => {
                    return value._id === item.foodId
                })
                return {
                    index: index,
                    offset: new Date().getTime() + index,
                    foodId: foodItem._id,
                    name: foodItem.name,
                    imgUrl: foodItem.imageUrls[0],
                    price: foodItem.price,
                    quantity: item.quantity,
                    active: false,
                    sideDish: item.optionSum.str,
                    addition: item.optionSum.price,
                    discount: foodItem.discount
                }
            });
            setData(cartData);
        }).catch(err => console.log(err))
    }, [])

    const toggleActive = function (offset) {
        const newData = [...data];
        const item = newData.find(value => value.offset === offset)
        item.active = !item.active

        setData(newData);

        let allIsActive = newData.every(value => value.active === true);
        setChooseAll(allIsActive);
    };

    const toggleAllActive = function () {
        const newData = [...data];
        let allIsActive = newData.every(value => value.active === true);

        // Select all items, if one or no item select.
        // Otherwise, if all items are selected, unselect them 
        newData.forEach(value => { value.active = !allIsActive });
        setData(newData);
        setChooseAll(!chooseAll);
    };

    const handleQuantity = {
        decQuantity: function (offset) {
            const newData = [...data];
            const index = newData.findIndex(value => value.offset === offset)
            if (newData[index].quantity > 1) {
                newData[index].quantity--;
                cartStorage[index].quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(cartStorage))
            setData(newData);
        },
        incQuantity: function (offset) {
            const newData = [...data];
            const index = newData.findIndex(value => value.offset === offset)
            newData[index].quantity++
            cartStorage[index].quantity++
            localStorage.setItem('cart', JSON.stringify(cartStorage))
            setData(newData);
        },
        updateQuantity: function (offset, value) {
            const newData = [...data];
            const index = newData.findIndex(value => value.offset === offset)
            newData[index].quantity = value
            cartStorage[index].quantity = value
            localStorage.setItem('cart', JSON.stringify(cartStorage))
            setData(newData);
        }
    }

    const deleteItem = function (offset) {
        const newData = [...data];
        const index = newData.findIndex(value => value.offset === offset)
        newData.splice(index, 1);
        cartStorage.splice(index, 1)

        localStorage.setItem('cart', JSON.stringify(cartStorage))
        setData(newData)
    }

    const deleteActiveItems = function () {
        const arrIndex = []
        const newData = data.filter((value, index) => {
            arrIndex.unshift(index)
            return value.active === false
        });
        arrIndex.forEach(value => {
            cartStorage.splice(value, 1);
        })
        setData(newData)
    }

    return (
        <ShoppingCart className='container'>
            <CartTitle>Giỏ hàng</CartTitle>
            <CartInner className='row'>
                <CartContent cartItems={data} toggle={toggleActive}
                    toggleAll={toggleAllActive} isActiveAll={chooseAll}
                    handleQuantity={handleQuantity}
                    deleteItem={deleteItem}
                    deleteActiveItems={deleteActiveItems} />
                <CartTotalPrice cartItems={data} />
            </CartInner>
        </ShoppingCart>
    )
}
