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


let dataSending = {
    idOrder : '',
} 
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

const wardOptionList =
{
    'Quận Thủ Đức': ['Bình Chiểu', 'Bình Thọ', 'Linh Chiểu', 'Linh Trung'],

    'Quận Bình Thạnh': ['Phường 6', 'Phường 7', 'Phường 11', 'Phường 22'],

    'Quận 10': ['Phường 12', 'Phường 13', 'Phường 14', 'Phường 15']
}



export default function CheckOut() {

    // const [name, setName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [address, setAddress] = useState('')
    // const [payType, setpayType] = useState('')
    // const [district, setDistrict] = useState('Lựa chọn')
    const [wardOption, setWardOption] = useState('Lựa chọn')


    function handleCheckOut(e) {
        let name = document.getElementById('input-name').value
        let phone = document.getElementById('input-phone').value
        let address = document.getElementById('input-address').value
        let district = document.getElementById('district').value
        let ward = document.getElementById('ward').value
        let paymentMethod = document.querySelector('input[type="radio"]:checked');

        console.log(paymentMethod.value)
        e.preventDefault()
        if (name == '' || phone == '' || address == '' || district == 'Lựa chọn' || ward == 'Lựa chọn' || paymentMethod == null) {
            e.preventDefault()
            toast.error('Thông tin không hợp lệ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            dataSending.name = name
            dataSending.phone = phone
            dataSending.address = address
            dataSending.district = district
            dataSending.ward = ward
            dataSending.payMethod = paymentMethod.value
        }
        console.log(dataSending)
    }


    function WardOption() {
        if (wardOption == 'Lựa chọn') return null
        else return wardOption.map((ward) => {
            return <option>{ward}</option>
        })
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
                                        <input type="text" name='customerName' className="form-control"
                                            id="input-name" placeholder="Hoàng Văn A" />
                                        <label for="input-name">Họ và tên</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="phone" name='customerNoPhone' className="form-control" id="input-phone" placeholder="01234556789" />
                                        <label for="input-phone">Số điện thoại</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="address" name='customerAddress' className="form-control" id="input-address" placeholder="40 Vũ Trọng Phụng" />
                                        <label for="input-address">Địa chỉ</label>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <label for="district" className="form-label">Quận/Huyện</label>
                                    <select className="form-select" name='customerDistrict' id="district" onChange={even => {
                                        if (even.target.value == 'Lựa chọn') setWardOption('Lựa chọn')
                                        else setWardOption(wardOptionList[even.target.value])
                                    }}>
                                        <option selected>Lựa chọn</option>
                                        <option >Quận Thủ Đức</option>
                                        <option >Quận 10</option>
                                        <option >Quận Bình Thạnh</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md">
                                    <label for="ward" className="form-label">Phường / Xã</label>
                                    <select className="form-select" name='customerWard' id="ward" >
                                        <option selected>Lựa chọn</option>
                                        <WardOption />
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
                                    <input id="cod" name="paymentMethod" value='cod' type="radio" className="form-check-input" />
                                    <label className="form-check-label" for="cod">Thanh toán khi nhận hàng</label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="online">Thanh toán Online</label>
                                    <input id="online" name="paymentMethod" value='online' type="radio" className="form-check-input" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-25 btn btn-lg float-start text-white" type="submit" style={{ backgroundColor: "blue" }}>Quay lại</button>
                            <button className="w-25 btn btn-danger btn-lg float-end text-white" type="submit" onClick={handleCheckOut} >Thanh Toán</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </main>


        </div>
    )
}