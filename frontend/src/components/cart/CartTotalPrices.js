import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  padding: 15px; 
  margin-top: 10px;
`;
const Contact = styled(Container)`
	p {
		color: gray;
		font-size: 14px;
		max-width: 90%;
		line-height: 18px;
	}
	padding-bottom: 5px;
`;
Contact.Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
Contact.SecondLine = styled.div`
	margin: 10px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 500;
	div:first-child {
		width: 55%;
		border-right: 1px solid #dedede;
		box-sizing: border-box;
	}
`
const ChangeContact = styled.span`
	color: #007bff;
	&:hover {
		cursor: pointer;
	}
`;

const Total = styled(Container)`
	border: 0.5px #999999 solid;
`
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
`
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
`

const contactData = {
	name: 'Nguyễn Phúc Vinh',
	phone: '0373 395 726',
	addr: `Ticklab, 92/10, đường Vành Đai ĐH Quốc Gia TP.HCM, khu phố Tân Lập,
	 	Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh`
};

function ContactInfo(props) {
	return <Contact>
		<Contact.Header>
			<span style={{ fontWeight: '600', fontSize: '16px' }}>Giao tới</span>
			<ChangeContact>Thay đổi</ChangeContact>
		</Contact.Header>
		<Contact.SecondLine>
			<div>{props.name}</div>
			<div>{props.phone}</div>
		</Contact.SecondLine>
		<p>{props.addr}</p>
	</Contact>
}
function TotalPrice(props) {
	return <Total>
		<Total.Calculation>
			<div className='cal'>
				<span>Tạm tính</span>
				<span>{props.amount()}đ</span>
			</div>
			<div className='cal'>
				<span>Giảm giá</span>
				<span>- {props.discount}đ</span>
			</div>
		</Total.Calculation>
		<Total.TotalPrice>
			<div>Tổng cộng</div>
			<div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end' }}>
				<div className='total-pay'>{props.amount() - props.discount}đ</div>
				<div className='description'>(Đã bao gồm VAT nếu có)</div>
			</div>
		</Total.TotalPrice>
	</Total>
}

export default function CartTotalPrice(props) {
	const total = {
		amount: function() {
			let totalAmount = 0;
			props.cartItems.forEach(function(item) {
				if(item.active) totalAmount += item.price * item.quantity;
			})
			return totalAmount;
		},
		discount: 3000
	}
	
	return (
		<div className='col-lg-3 col-md-12'>
			<ContactInfo {...contactData} />
			<TotalPrice {...total}/>
			<PayButton>Đặt hàng ({
				props.cartItems.filter(value => value.active === true).length
				})</PayButton>
		</div>
	)
}
