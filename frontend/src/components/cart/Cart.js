import styled from "styled-components"
import CartContent from "./CartContent"
import CartTotalPrices from "./CartTotalPrices"

const ShoppingCart = styled.div`
    width: 90%;
    margin-top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 90%;
    position: relative;
`
const CartTitle = styled.div`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 650;
    line-height: 28px;
`
const CartInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 13px;
`


export default function Cart() {
    return (
        <ShoppingCart>
            <CartTitle>Giỏ hàng</CartTitle>
            <CartInner>
                <CartContent />
                <CartTotalPrices />
            </CartInner>
        </ShoppingCart>
    )
}
