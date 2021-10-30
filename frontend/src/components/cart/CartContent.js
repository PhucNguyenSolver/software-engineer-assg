import styled from "styled-components"
import { Trash } from 'react-bootstrap-icons';
import chicken from './chicken.png'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

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
  font-size: 22px;
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

function prettyNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ItemQuantity(props) {
  const handleValue = function(data) {
    let nextValue;
    if(data === '') nextValue = 1;
    else nextValue = parseInt(data);
    props.updateQuantity(props.id, nextValue);
  }

  return (
    <InputGroup>
      <button onClick={() => props.decQuantity(props.id)}>{'-'}</button>
      <input type='number' min={1}
        onChange={e => handleValue(e.target.value)} value={props.quantity} />
      <button onClick={() => props.incQuantity(props.id)}>{'+'}</button>
    </InputGroup>
  )
}

function CartHeader(props) {
  return (
    <Header>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type='checkbox' style={{ marginRight: '7px' }}
          className='form-check-input shadow-none outline-none' checked={props.isActiveAll}
          onChange={props.toggleAll} />
        {`Tất cả (${props.checkedNumber} sản phẩm)`}
      </label>
      <span>Đơn giá</span>
      <span>Số lượng</span>
      <span>Thành tiền</span>
      <TrashIcon onClick={props.deleteActiveItems}/>
    </Header>
  )
}

function OrderItem(props) {
  return <Item>
    <Item.FirstGrid>
      <input type='checkbox' style={{ marginRight: '10px' }}
        className='form-check-input shadow-none outline-none'
        checked={props.active} onChange={() => props.toggle(props.id)} />

      <img src={chicken} width='100' height='100' alt='chicken' />

      <Item.Description>
        <Item.Name>{props.name}</Item.Name>
        <Item.SideDish>{props.sideDish}</Item.SideDish>
      </Item.Description>
    </Item.FirstGrid>

    <Item.SinglePrice>{prettyNumber(props.price)}</Item.SinglePrice>
    {/* Must update */}
    <ItemQuantity id={props.id} {...props.handleQuantity} quantity={props.quantity}/>

    <Item.Amount>{prettyNumber(props.price * props.quantity)}đ</Item.Amount>
    <TrashIcon onClick={() => props.deleteItem(props.id)}/>
  </Item>
}

function PaginatedItems({ itemsPerPage, items, toggle, handleQuantity, deleteItem}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Container>
      {
        currentItems.map(value =>
          <OrderItem {...value} toggle={toggle} handleQuantity={handleQuantity}
            key={value.id} deleteItem={deleteItem}/>
        )
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Container>
  );
}


function CartContent(props) {
  return (
    <div style={cartContentStyle}>
      <CartHeader toggleAll={props.toggleAll} isActiveAll={props.isActiveAll}
        checkedNumber={props.cartItems.length} 
        deleteActiveItems={props.deleteActiveItems}/>
      <PaginatedItems itemsPerPage={3} items={props.cartItems}
        toggle={props.toggle} handleQuantity={props.handleQuantity}
        deleteItem={props.deleteItem}/>
    </div>
  );
}

export default CartContent;