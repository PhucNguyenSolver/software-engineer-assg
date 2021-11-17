import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  padding: 15px; 
  margin-top: 10px;
`;

const Total = styled(Container)`
	border: 0.5px #999999 solid;
`;
Total.Calculation = styled.div`
	font-size: 15px;
	.cal {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5px;
		line-height: 25px;
	}
	padding-bottom: 20px;
	border-bottom: 0.5px #d9d9d9 solid;
`;
Total.TotalPrice = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	.total-pay {
		color:red
	}
	.description {
		font-size: 13px;
	}
`;
const PayButton = styled.button`
	background: rgb(255, 66, 78);
	color: rgb(255, 255, 255);
	padding: 13px 10px;
	text-align: center;
	border-radius: 4px;
	border: none;
	width: 100%;
	display: block;
	margin: 15px 0px;
  cursor: pointer;
	font-weight: 700;
`;

function TotalPrice(props) {
	return <Total>
		<Total.Calculation>
			<div className='cal'>
				<span>Giá gốc</span>
				<span>+ {props.amount()}đ</span>
			</div>
			<div className='cal'>
				<span>Món phụ</span>
				<span>+ {props.additionalFee()}đ</span>
			</div>
			<div className='cal'>
				<span>Giảm giá</span>
				<span>- {props.discount()}đ</span>
			</div>
		</Total.Calculation>
		<Total.TotalPrice>
			<div>Tổng cộng</div>
			<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end' }}>
				<div className='total-pay'>{props.amount() - props.discount() + props.additionalFee()}đ</div>
				<div className='description'>(Đã bao gồm VAT nếu có)</div>
			</div>
		</Total.TotalPrice>
	</Total>
}

export default function CartTotalPrice(props) {
	const total = {
		amount: function() {
			let money = 0;
			props.cartItems.forEach(function(item) {
				if(item.active) money += item.price * item.quantity;
			})
			return money;
		},
		discount: function() {
			let money = 0;
			props.cartItems.forEach(item => {
				if(item.active) {
					let value = item.discount;
					if(value[value.length - 1] === '%') {
						console.log(value)
						value = parseFloat(value.substr(0, value.length - 1)) / 100 
							* item.price * item.quantity;
					} else {
						value = parseInt(value) * item.quantity
					}
					money += value
				}
			})
			return money
		},
		additionalFee: function() {
			let money = 0
			props.cartItems.forEach(item => {
				if(item.active) money += item.addition
			})
			return money
		}
	}
	const numberOfItems = () => {
		return props.cartItems.filter(value => value.active === true).length
	}
	const payBill = () => {
		window.localStorage.setItem('bill', JSON.stringify({
			amount: total.amount(),
			discount: total.discount(),
			addition: total.additionalFee()
		}))
		window.location.href="/checkout"
	}
	
	return (
		<div className='col-lg-3 col-md-12'>
			<TotalPrice {...total}/>
			<PayButton onClick={payBill} 
				disabled={numberOfItems() === 0}>
				Đặt hàng ({numberOfItems()})
			</PayButton>
		</div>
	)
}
