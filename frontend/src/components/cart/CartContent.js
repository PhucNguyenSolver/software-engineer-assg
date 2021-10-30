import styled from "styled-components"
import { Trash } from 'react-bootstrap-icons';
import chicken from './chicken.png'
import { useState } from "react";

const cartContentStyle = {
  width: '75%',
  paddingRight: '15px',
}
const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  padding: 15px; 
  margin-top: 10px;
`;

const Header = styled(Container)`
  padding: 10px 15px;
  display: grid;
  grid-template-columns: 50% 12.5% 20% 12.5% 5%;
  align-items: center;
`;
const TrashIcon = styled(Trash)`
  justify-self: end;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
const Item = styled.div`
  display: grid;
  grid-template-columns: 50% 12.5% 20% 12.5% 5%;
  align-items: center;
`;
Item.FirstGrid = styled.div`
  display: flex;
  align-items: center;
`;
Item.Description = styled.div`
  padding: 0 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
Item.Name = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: black;
  &:hover {
    color: red;
    cursor: pointer;
  }
`
Item.SideDish = styled.p`
  color: gray;
  font-size: 14px;
  max-width: 250px;
`;
Item.SinglePrice = styled.span`
  color: rgb(36, 36, 36);
  font-size: 14px;
  font-weight: 500;
`;
Item.Amount = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
`;

// For number counting button
const InputGroup = styled.div`
  display: flex;
  border-radius: 5px;
  border: 0.2px solid #dedede;
  width: fit-content;
  input {
    color: black;
    font-size: 14px;
    font-weight: 500;
    width: 40px;
    padding: 5px 7px;
    text-align: center;
    border: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus {
    outline: none;
  }
  button {
    font-size: 16px;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
  }
`;

function ItemQuantity() {
  const [value, setValue] = useState(1);
  const decValue = function () {
    let currValue;
    typeof value == 'string'? 
      currValue = parseInt(value) : currValue = value;
    if (currValue > 1) setValue(currValue - 1);
  }
  const incValue = function () {
    let currValue;
    typeof value == 'string' && value !== ''? 
      currValue = parseInt(value) : currValue = value;
    value === '' ?
      setValue(1) : setValue(currValue + 1);
  }
  return (
    <InputGroup>
      <button onClick={decValue}>{'-'}</button>
      <input type='number' min={1}
        onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={incValue}>{'+'}</button>
    </InputGroup>
  )
}

function CartHeader() {
  return (
    <Header>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type='checkbox' style={{ marginRight: '7px' }}
          className='form-check-input shadow-none outline-none' />
        {'Tất cả (3 sản phẩm)'}
      </label>
      <span>Đơn giá</span>
      <span>Số lượng</span>
      <span>Thành tiền</span>
      <TrashIcon />
    </Header>
  )
}

function CartContent() {
  return (
    <div style={cartContentStyle}>
      <CartHeader />
      <Container>
        <Item>
          <Item.FirstGrid>
            <input type='checkbox' style={{ marginRight: '10px' }}
              className='form-check-input shadow-none outline-none' />
            <img src={chicken} width='100' height='100' alt='chicken' />
            <Item.Description>
              <Item.Name>Gà rán</Item.Name>
              <Item.SideDish>Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^</Item.SideDish>
            </Item.Description>
          </Item.FirstGrid>
          <Item.SinglePrice>51.000đ</Item.SinglePrice>
          <ItemQuantity />
          <Item.Amount>102.000đ</Item.Amount>
          <TrashIcon />
        </Item>
        <Item>
          <Item.FirstGrid>
            <input type='checkbox' style={{ marginRight: '10px' }}
              className='form-check-input shadow-none outline-none' />
            <img src={chicken} width='100' height='100' alt='chicken' />
            <Item.Description>
              <Item.Name>Gà rán</Item.Name>
              <Item.SideDish>Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^</Item.SideDish>
            </Item.Description>
          </Item.FirstGrid>
          <Item.SinglePrice>51.000đ</Item.SinglePrice>
          <ItemQuantity />
          <Item.Amount>102.000đ</Item.Amount>
          <TrashIcon />
        </Item>
        <Item>
          <Item.FirstGrid>
            <input type='checkbox' style={{ marginRight: '10px' }}
              className='form-check-input shadow-none outline-none' />
            <img src={chicken} width='100' height='100' alt='chicken' />
            <Item.Description>
              <Item.Name>Gà rán</Item.Name>
              <Item.SideDish>Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^</Item.SideDish>
            </Item.Description>
          </Item.FirstGrid>
          <Item.SinglePrice>51.000đ</Item.SinglePrice>
          <ItemQuantity />
          <Item.Amount>102.000đ</Item.Amount>
          <TrashIcon />
        </Item>
      </Container>
    </div>
  );
}

export default CartContent;