import styled from "styled-components"
import CartContent from "./CartContent"
import CartTotalPrice from "./CartTotalPrices"
import { useState } from "react"


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

const cartItem = [{
    id: 1,
    imgUrl: './chicken.png',
    name: 'Đùi gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 49000,
    quantity: 1,
    active: false
}, {
    id: 2,
    imgUrl: './chicken.png',
    name: 'Cánh gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 39000,
    quantity: 1,
    active: false
}, {
    id: 3,
    imgUrl: './chicken.png',
    name: 'Góc tư gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 49000,
    quantity: 1,
    active: false
}, {
    id: 4,
    imgUrl: './chicken.png',
    name: 'Ức gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 39000,
    quantity: 1,
    active: false
}, {
    id: 5,
    imgUrl: './chicken.png',
    name: 'Tổng hợp gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 69000,
    quantity: 1,
    active: false
}, {
    id: 6,
    imgUrl: './chicken.png',
    name: 'Đầu gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 51000,
    quantity: 1,
    active: false
}, {
    id: 7,
    imgUrl: './chicken.png',
    name: 'Lông gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 5000,
    quantity: 1,
    active: false
}];

export default function Cart() {
    const [data, setData] = useState(cartItem)
    const [chooseAll, setChooseAll] = useState(false);
    const toggleActive = function (id) {
        const newData = [...data];
        const index = newData.findIndex(function (value, index) {
            return value.id === id;
        })
        newData[index].active = !newData[index].active;
        setData(newData);
        let allIsActive = newData.every(value => value.active === true);
        if (allIsActive) setChooseAll(true);
        else setChooseAll(false);
    }
    const toggleAllActive = function () {
        const newData = [...data];
        let allIsActive = newData.every(value => value.active === true);

        // Select all items, if one or no item select.
        // Otherwise, if all items are selected, unselect them 
        newData.forEach(value => { value.active = !allIsActive });
        setData(newData);
        setChooseAll(!chooseAll);
    }
    const handleQuantity = {
        decQuantity: function (id) {
            const newData = [...data];
            const index = newData.findIndex(value => value.id === id);
            if(newData[index].quantity > 1)newData[index].quantity--;
            setData(newData);
        },
        incQuantity: function (id) {
            const newData = [...data];
            const index = newData.findIndex(value => value.id === id);
            newData[index].quantity++;
            setData(newData);
        },
        updateQuantity: function (id, value) {
            const newData = [...data];
            const index = newData.findIndex(value => value.id === id);
            newData[index].quantity = value;
            setData(newData);
        }
    }
    const deleteItem = function(id) {
        const newData = [...data];
        const index = newData.findIndex(value => value.id === id);
        newData.splice(index, 1);
        setData(newData)
    }
    const deleteActiveItems = function() {
        const newData = data.filter(value => value.active === false);
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
                <CartTotalPrice cartItems={data}/>
            </CartInner>
        </ShoppingCart>
    )
}
