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
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div class='col-2'>
                <img src={props.product.image} style={{ marginTop: 4, width: '100%' }} />
            </div>
            <div class='col-6'>
                <h6 class="my-0">{props.product.name}</h6>
                <small class="text-muted">Số lượng : {props.product.quantity}</small>
            </div>
            <div class='col-3'>
                <span class="text-muted">{props.product.price * props.product.quantity}đ</span>
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
        <div class="container">
            <main>
                <div class="py-5 text-center">

                </div>

                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-danger">Đơn Hàng</span>
                            <span class="badge bg-danger rounded-pill">{productData.length}</span>
                        </h4>
                        <ul class="list-group mb-3">
                            {productData.map((product) => {
                                return <Product product={product} />
                            })}
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Mã Khuyến Mãi</h6>
                                    <small>Sinh nhật Tiến Minh</small>
                                </div>
                                <span class="text-success">−50000đ</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Tổng Tiền (VND)</span>
                                <strong>{productData.reduce((acc, product) => {
                                    return acc + product.price * product.quantity
                                }, 0) - 50000}</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Mã khuyến mãi" />
                                <button type="submit" class="btn btn-secondary">Áp dụng</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Thông Tin Thanh Toán</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="form-floating mb-2">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Hoàng Văn A"
                                            onChange={even => { setName(even.target.value) }} />
                                        <label for="floatingInput">Họ và tên</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-2">
                                        <input type="phone" class="form-control" id="floatingInput" placeholder="01234556789"
                                            onChange={even => { setPhone(even.target.value) }} />
                                        <label for="floatingInput">Số điện thoại</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-2">
                                        <input type="address" class="form-control" id="floatingInput" placeholder="40 Vũ Trọng Phụng"
                                            onChange={even => { setAddress(even.target.value) }} />
                                        <label for="floatingInput">Địa chỉ</label>
                                    </div>
                                </div>

                                <div class="col-md">
                                    <label for="country" class="form-label">Quận/Huyện</label>
                                    <select class="form-select" id="country" onChange={even => {setDistrict(even.target.value)}}>
                                        <option selected>Lựa chọn</option>
                                        <option >Huyện Nhà Bè</option>
                                        <option >Quận Thủ Đức</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div class="col-md">
                                    <label for="state" class="form-label">Phường / Xã</label>
                                    <select class="form-select" id="state" onChange={even => {setWard(even.target.value)}} >
                                        <option selected>Lựa chọn</option>
                                        <option >Phường Linh Xuân</option>
                                        <option>Phường Linh Trung</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                            </div>

                            {/* <hr class="my-4" />

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="save-info" />
                                <label class="form-check-label" for="save-info">Save this information for next time</label>
                            </div> */}

                            <hr class="my-4" />

                            <h4 class="mb-3">Phương thức thanh toán</h4>

                            <div class="my-3">
                                <div class="form-check">
                                    <input id="cod" name="paymentMethod" type="radio" class="form-check-input" 
                                    onClick={() =>setpayType('COD')} />
                                    <label class="form-check-label" for="cod">Thanh toán khi nhận hàng</label>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="online">Thanh toán Online</label>
                                    <input id="online" name="paymentMethod" type="radio" class="form-check-input" 
                                    onClick={() => setpayType('Online')} />
                                    </div>
                            </div>

                            <hr class="my-4" />

                            <button class="w-25 btn btn-danger btn-lg float-start" type="submit">Quay lại</button>
                            <button class="w-25 btn btn-success btn-lg float-end" type="submit" onClick={handleCheckOut}>Thanh Toán</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </main>

            <footer class="my-5 pt-5 text-muted text-center text-small">
                <p class="mb-1">&copy; 2017–2021 Company Name</p>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Privacy</a></li>
                    <li class="list-inline-item"><a href="#">Terms</a></li>
                    <li class="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </div>
    )
}