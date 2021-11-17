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

// const cartItem = [{
//     id: 1,
//     imgUrl: './chicken.png',
//     name: 'Đùi gà rán',
//     sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
//     price: 49000,
//     quantity: 1,
//     active: false
// }];

// [{
//     "_id": "618eb8bfc195fbd6f3d8983d",
//     "name": "Cánh gà rán",
//     "price": 25000,
//     "discount": "0",
//     "imageUrls": [
//         "https://ameovat.com/wp-content/uploads/2016/05/cach-lam-ga-ran.jpg",
//         "https://cdn.tgdd.vn/2020/12/CookProduct/2-1200x676-1.jpg"
//     ],
//     "options": [{
//         "_id": "618eb1edc195fbd6f3cf8195",
//         "name": "Độ cay",
//         "isMultiSelect": false,
//         "items": [{
//             "name": "Cực cay",
//             "price": 0
//         }]
//     }]
// }]

const cartSampleLocalData = [{
    foodId: "618eb8bfc195fbd6f3d8983d",
    quantity: 5,
    optionSum: {
        str: "Không cay/Fanta",
        price: 0
    },
    orderOptions: {
        isMultiSelect: false,
        options: ["Cực cay", "Cay vừa", "Cay nhẹ", "Không cay"],
        price: [0, 0, 0, 0],
        answer: [true, false, false, false],
        title: "Độ cay",
        _id: "618eb1edc195fbd6f3cf8195"
    }
}, {
    foodId: "619229f1792fa260bd3a1003",
    quantity: 2,
    optionSum: {
        str: "Cay/Trà đào",
        price: 10000
    },
    orderOptions: {
        isMultiSelect: false,
        options: ["Cực cay", "Cay vừa", "Cay nhẹ", "Không cay"],
        price: [0, 0, 0, 0],
        answer: [true, false, false, false],
        title: "Độ cay",
        _id: "618eb1edc195fbd6f3cf8195"
    }
}]

// Mock
localStorage.setItem('cart', JSON.stringify(cartSampleLocalData))

export default function Cart() {
    const [data, setData] = useState([])
    const [chooseAll, setChooseAll] = useState(false);

    // Load cart basic info from local storage when load page
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const itemIdList = cartStorage !== null ? cartStorage.map(item => item.id) : null;

    useEffect(() => {
        itemIdList && CartService.getList(JSON.stringify(itemIdList)).then(response => {
            const cartData = response.data.map((item, index) => {
                let sideDish = ''
                item.options.forEach((option, optionIndex) => {
                    option.items.forEach((optItem, optionItemIdx) => {
                        let isPicked = cartStorage[index].pickedOpts[optionIndex].items[optionItemIdx]
                        isPicked && (sideDish += ', ' + optItem.name)
                    })
                })
                sideDish = sideDish.slice(2) // Remove ", "
                return {
                    id: item._id,
                    name: item.name,
                    imgUrl: item.imageUrls[0],
                    price: item.price,
                    // Get quantity from localStorage
                    quantity: cartStorage[index].quantity,
                    active: false,
                    sideDish: sideDish,
                    discount: item.discount
                }
            });
            setData(cartData);
        }).catch(err => console.log(err))
    }, [])
    
    const toggleActive = function (id) {
        const newData = [...data];
        newData.find(value => {
            if(value.id !== id) return false;

            value.active = !value.active
            return true;
        })

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
        decQuantity: function (id) {
            const newData = [...data];
            const index = newData.findIndex(value => value.id === id);
            if (newData[index].quantity > 1) newData[index].quantity--;
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

    const deleteItem = function (id) {
        const newData = [...data];
        const index = newData.findIndex(value => value.id === id);
        newData.splice(index, 1);
        setData(newData)
    }

    const deleteActiveItems = function () {
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
                <CartTotalPrice cartItems={data} />
            </CartInner>
        </ShoppingCart>
    )
}
