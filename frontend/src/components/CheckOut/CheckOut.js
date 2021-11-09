import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';



const productData = [
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },
    {
        "name": "Combo Gà Rán A",
        "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
        "quantity": 4,
        "price": 97000
    },

]


const CustomerDataOrdered = []
// let CustomerDataOrdered 

function Product(props) {
    return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div className='col-2'>
                <img src={props.product.image} style={{ marginTop: 4, width: '100%' }} />
            </div>
            <div className='col-6'>
                <h6 className="my-0">{props.product.name}</h6>
                <small className="text-muted">Số lượng : {props.product.quantity}</small>
            </div>
            <div className='col-3'>
                <span className="text-muted">{props.product.price * props.product.quantity}đ</span>
            </div>
        </li>
    )
}


export default function CheckOut() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [payType, setpayType] = useState('')
    const [district, setDistrict] = useState('Lựa chọn')
    const [ward, setWard] = useState('Lựa chọn')



    function handleCheckOut(e) {
        e.preventDefault();
        if(name == '' || phone == '' || address == '' || payType == '' || district == 'Lựa chọn' || ward == 'Lựa chọn')
            toast.error('Thông tin không hợp lệ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        else {
            CustomerDataOrdered.push({
                "customerName" : name,
                "customerPhone" : phone,
                "customerAddress" : address,
                "customerPayType" : payType,
                "customerDistrict" : district,
                "customerWard" : ward,
            })

            // CustomerDataOrdered = 
            // {
            //     "customerName" : name,
            //     "customerPhone" : phone,
            //     "customerAddress" : address,
            //     "customerPayType" : payType,
            //     "customerDistrict" : district,
            //     "customerWard" : ward,
            // }
        }
        // console.log(CustomerDataOrdered)
        }

    return (
        <div className="container" >
            <main className="container">
                <div className="pb-5 text-center">

                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-danger">Đơn Hàng</span>
                            <span className="badge bg-danger rounded-pill">{productData.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {productData.map((product) => {
                                return <Product product={product} />
                            })}
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Mã Khuyến Mãi</h6>
                                    <small>Sinh nhật Tiến Minh</small>
                                </div>
                                <span className="text-success">−50000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng Tiền (VND)</span>
                                <strong>{productData.reduce((acc, product) => {
                                    return acc + product.price * product.quantity
                                }, 0) - 50000}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Mã khuyến mãi" />
                                <button type="submit" className="btn btn-secondary">Áp dụng</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông Tin Thanh Toán</h4>
                        <form className="needs-validation" novalidate>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Hoàng Văn A"
                                            onChange={even => { setName(even.target.value) }} />
                                        <label for="floatingInput">Họ và tên</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="phone" className="form-control" id="floatingInput" placeholder="01234556789"
                                            onChange={even => { setPhone(even.target.value) }} />
                                        <label for="floatingInput">Số điện thoại</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="address" className="form-control" id="floatingInput" placeholder="40 Vũ Trọng Phụng"
                                            onChange={even => { setAddress(even.target.value) }} />
                                        <label for="floatingInput">Địa chỉ</label>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <label for="country" className="form-label">Quận/Huyện</label>
                                    <select className="form-select" id="country" onChange={even => {setDistrict(even.target.value)}}>
                                        <option selected>Lựa chọn</option>
                                        <option >Huyện Nhà Bè</option>
                                        <option >Quận Thủ Đức</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md">
                                    <label for="state" className="form-label">Phường / Xã</label>
                                    <select className="form-select" id="state" onChange={even => {setWard(even.target.value)}} >
                                        <option selected>Lựa chọn</option>
                                        <option >Phường Linh Xuân</option>
                                        <option>Phường Linh Trung</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                            </div>

                            {/* <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" for="save-info">Save this information for next time</label>
                            </div> */}

                            <hr className="my-4" />

                            <h4 className="mb-3">Phương thức thanh toán</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="cod" name="paymentMethod" type="radio" className="form-check-input" 
                                    onClick={() =>setpayType('COD')} />
                                    <label className="form-check-label" for="cod">Thanh toán khi nhận hàng</label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="online">Thanh toán Online</label>
                                    <input id="online" name="paymentMethod" type="radio" className="form-check-input" 
                                    onClick={() => setpayType('Online')} />
                                    </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-25 btn btn-lg float-start text-white" type="submit" style={{backgroundColor:"blue"}}>Quay lại</button>
                            <button className="w-25 btn btn-danger btn-lg float-end text-white" type="submit" onClick={handleCheckOut}>Thanh Toán</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </main>

            
        </div>
    )
}