import styled from "styled-components"
import { Trash } from 'react-bootstrap-icons';
import chicken from './chicken.png'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import breakPoint from './breakPoint';

const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px 0 .5px 0;
`;

const Header = styled(Container)`
  padding: 10px 0;
  margin: 0 0 10px 0;
  input {
    margin-right: 7px;
  }
  span {
    display:inline;
  }
  @media only screen and (max-width: ${breakPoint.md}) {
    span {
      display: none;
    }
  }
`;
const TrashIcon = styled(Trash)`
  font-size: 20px;
  width: fit-content!important;
  &:hover {
    cursor: pointer;
  }
`;
const Item = styled.div`
  margin: 10px 0;
`;
Item.FirstGrid = styled.div`
  input {
    margin-right: 7px;
  }
`;
Item.Description = styled.div`
  margin: 0 0 0 7px;
`;
Item.Name = styled.span`
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
Item.SideDish = styled.p`
  font-size: 13px;
  color: gray;
`;
Item.SinglePrice = styled.span`
  font-weight: 600;
`;
Item.Amount = styled.span`
  font-weight: 600;
  color: red;
`;
// For number counting button
const InputGroup = styled.div`
  input {
    color: black;
    font-size: 14px;
    font-weight: 500;
    width: 40px!important;
    padding: 2px 7px;
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
    border-radius: 0;
    width: 30px;
    border: none;
    font-weight: 600;
    padding: 2px;
  }
  .input-group {
    margin: 0;
    border: .5px solid #dedede;
    width: fit-content;
    height: fit-content;
    border-radius: 7px;
    overflow: hidden;
    flex-wrap: nowrap;
  }
`;


function prettyNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Component tăng giảm số lượng */
function ItemQuantity(props) {
  const handleValue = function (data) {
    let nextValue;
    if (data === '') nextValue = 1;
    else nextValue = parseInt(data);
    props.updateQuantity(props.id, nextValue);
  }

  return (
    <InputGroup className='col-md-4 col-8'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <button onClick={() => props.decQuantity(props.id)}
            className='btn btn-danger shadow-none'>
            {'-'}
          </button>
        </div>
        <input type='number' min={1}
          onChange={e => handleValue(e.target.value)} value={props.quantity} />
        <div className='input-group-append'>
          <button onClick={() => props.incQuantity(props.id)}
            className='btn btn-danger shadow-none'>
            {'+'}
          </button>
        </div>
      </div>
    </InputGroup>
  )
}

function CartHeader(props) {
  return (
    <Header className='row d-flex justify-content-between align-items-center'>
      <label className='col-md-5 col-10'>
        <input type='checkbox' checked={props.isActiveAll}
          onChange={props.toggleAll} />
        {`Tất cả (${props.checkedNumber} sản phẩm)`}
      </label>
      <span className='col-md-2'>Đơn giá</span>
      <span className='col-md-4'>Số lượng</span>
      <span className='col-md-3'>Thành tiền</span>
      <TrashIcon onClick={props.deleteActiveItems} className='col-md-05 col-2' />
    </Header>
  )
}

function OrderItem(props) {
  return <Item className='row align-items-center justify-content-between'>
    <Item.FirstGrid className='col-md-5 col-12 d-flex align-items-center'>
      <input type='checkbox'
        checked={props.active} onChange={() => props.toggle(props.id)} />

      <img src={chicken} width='90' height='90' alt='chicken' />

      <Item.Description>
        <Item.Name>{props.name}</Item.Name>
        <Item.SideDish>{props.sideDish}</Item.SideDish>
      </Item.Description>
    </Item.FirstGrid>

    <Item.SinglePrice className='col-md-2 col-1'>
      {prettyNumber(props.price)}
    </Item.SinglePrice>

    <ItemQuantity id={props.id} {...props.handleQuantity}
      quantity={props.quantity} />

    <Item.Amount className='col-md-3 col-1'>
      {prettyNumber(props.price * props.quantity)}đ
    </Item.Amount >
    <TrashIcon onClick={() => props.deleteItem(props.id)} className='col-md-05 col-1'/>
  </Item>
}

/** 
 * Pagination
 * @param numItemsPerPage: Số lượng item tối đa trong 1 page
 * @param items: List item data truyền vào
 * @param {*} : Các parameters khác là function t truyền từ các component cha nên ko cần quan tâm
 * @returns <ReactPaginate /> (https://www.npmjs.com/package/react-paginate)
 * Lưu ý: Trong giỏ hàng có thể gửi 1 lần hết dữ liệu, tuy nhiên paginate trong phần khám phá món ăn (thực đơn), 
 * việc gửi hết data về client là lãng phí không cần thiết. Nguyên do là khách hàng có thể chỉ coi một vài trang.
 * Cách giải quyết: Thay đổi logic @function handlePageClick(), @function useEffect() ...
 */
function PaginatedItems({ numItemsPerPage, items, toggle, handleQuantity, deleteItem }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + numItemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / numItemsPerPage));
  }, [itemOffset, numItemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * numItemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <div>
        {
          currentItems.map(value =>
            <OrderItem {...value} toggle={toggle} handleQuantity={handleQuantity}
              key={value.id} deleteItem={deleteItem} />
          )
        }
      </div>
      <div style={{marginRight: '12px'}}>
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
      </div>
      
    </Container>
  );
}

const Content = styled.div`
  .col-md-4 {
    width: 17.5%;
    flex: 0 0 auto;
    max-width: 45%;
  }
  .col-md-3 {
    width: 15%;
    flex: 0 0 auto;
    max-width: 45%;
  }
`

function CartContent(props) {
  return (
    <Content className='col-lg-9 col-md-12'>
      <CartHeader toggleAll={props.toggleAll} isActiveAll={props.isActiveAll}
        checkedNumber={props.cartItems.length}
        deleteActiveItems={props.deleteActiveItems} />
      <PaginatedItems numItemsPerPage={4} items={props.cartItems}
        toggle={props.toggle} handleQuantity={props.handleQuantity}
        deleteItem={props.deleteItem} />
    </Content>
  );
}

export default CartContent;