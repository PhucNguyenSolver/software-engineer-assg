import styled from "styled-components"
import { Trash } from 'react-bootstrap-icons';
import chicken from './chicken.png'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import breakPoint from './breakPoint';
import { Link } from "react-router-dom";

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
  margin-bottom: 5px;
`;
Item.SinglePrice = styled.div`
  display: flex;
  flex-flow: column;
  span {
    font-weight: 600;
  }
  .old {
    text-decoration: line-through;
  }
  .new {
    color: red;
  }
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
  const handleValue = function (offset, data) {
    let nextValue;
    if (data === '') nextValue = 1;
    else nextValue = parseInt(data);
    props.updateQuantity(offset, nextValue);
  }
  return (
    <InputGroup className='col-md-4 col-4'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <button onClick={() => props.decQuantity(props.offset)}
            className='btn btn-primary shadow-none'>
            {'-'}
          </button>
        </div>
        <input type='number' min={1}
          onChange={e => handleValue(props.offset, e.target.value)} value={props.quantity} />
        <div className='input-group-append'>
          <button onClick={() => props.incQuantity(props.offset)}
            className='btn btn-primary shadow-none'>
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
      <span className='col-md-2'>Số lượng</span>
      <span className='col-md-2'>Thành tiền</span>
      <TrashIcon onClick={props.deleteActiveItems} className='col-md-1 col-2' />
    </Header>
  )
}

function OrderItem(props) {
  const discount = function () {
    let value = props.discount;
    if (value[value.length - 1] === '%') {
      value = parseFloat(value.substr(0, value.length - 1)) / 100
        * props.price;
    } else {
      value = parseInt(value)
    }
    return props.price - value;
  }

  return <Item className='row align-items-center justify-content-between'>
    <Item.FirstGrid className='col-md-5 col-12 d-flex align-items-center'>
      <input type='checkbox'
        checked={props.active} onChange={() => props.toggle(props.offset)} />

      <img src={props.imgUrl} width='90' height='90' alt='chicken' />

      <Item.Description>
        <Item.Name>
          <Link class="text-black" to={"/cart-item-info/" + props.offset}>{props.name}</Link>
        </Item.Name>
        <Item.SideDish>{props.sideDish}</Item.SideDish>

        {props.discount !== '0' &&
          <span className='badge rounded-pill bg-danger'>
            -{props.discount}
          </span>}

      </Item.Description>
    </Item.FirstGrid>

    <Item.SinglePrice className='col-md-2 col-1'>
      <span className={`${props.discount !== '0' ? 'old' : ''}`}>{prettyNumber(props.price)}</span>
      {props.discount !== '0' && <span className='new'>{prettyNumber(discount())}</span>}
    </Item.SinglePrice>

    <ItemQuantity offset={props.offset} {...props.handleQuantity}
      quantity={props.quantity} />

    <Item.Amount className='col-md-2 col-1'>
      {prettyNumber(discount() * props.quantity + props.addition)}đ
    </Item.Amount >
    <TrashIcon onClick={() => props.deleteItem(props.offset)} className='col-md-05 col-1' />
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
              deleteItem={deleteItem} />)
        }
      </div>
      <div style={{ marginRight: '12px' }}>
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