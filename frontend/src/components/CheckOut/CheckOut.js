import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { calculateShipFee, FROM } from "./Map";
import { useLocation } from "react-router-dom";

const axios = require('axios');

const contactData = {
    name: 'Nguyễn Phúc Vinh',
    phone: '0373 395 726',
    addr: `Ticklab, 92/10, đường Vành Đai ĐH Quốc Gia TP.HCM, khu phố Tân Lập,
	 	Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh`
};

// const productData = [
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },
//     {
//         "name": "Combo Gà Rán A",
//         "image": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
//         "quantity": 4,
//         "price": 97000
//     },

// ]


function Product(props) {
    return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div className='col-2'>
                <img src={props.product.imgUrl} alt="" style={{ marginTop: 4, width: '100%' }} />
            </div>
            <div class='col-6 float-start'>
                <h6 class="my-0">{props.product.name}</h6>
                <small class="text-muted">Số lượng : {props.product.quantity}</small>
            </div>
            <div className='col-2 float-end'>
                <span className="text-muted">{new Intl.NumberFormat().format(props.product.price
                    * props.product.quantity * parseFloat(props.product.discount) / 100
                    + parseInt(props.product.addition))
                }</span>
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

    const DEFAULT_LOCATE = 'Lựa chọn';
    const [district, setDistrict] = useState(DEFAULT_LOCATE)
    const [ward, setWard] = useState(DEFAULT_LOCATE)
    const [wardOption, setWardOption] = useState([])

    const [shipFee, setShipFee] = useState(null);
    const [shipTime, setShipTime] = useState();
    const [shipAddress, setShipAddress] = useState('');

    useEffect(() => {
        async function fetchData() {

            if (district === DEFAULT_LOCATE || ward === DEFAULT_LOCATE) {
                setShipFee(null);
            } else {
                const to = ward + ', ' + district + ' TP HCM';
                const { shipFee, duration } = await calculateShipFee(FROM, to);
                setShipFee(shipFee);
                setShipTime(duration);
            }
        }
        fetchData();
    }, [district, ward]);
    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    }
    const handleWardChange = (event) => {
        let address = document.getElementById('input-address').value
        let district = document.getElementById('district').value
        // setDistrict(district);
        let ward = document.getElementById('ward').value
        setShipAddress(`${address}, ${ward}, ${district} `)
        setWard(event.target.value);
    }

    const location = useLocation().state;

    // let shipFee = 50000


    function handleCheckOut(e) {
        let name = document.getElementById('input-name').value
        let phone = document.getElementById('input-phone').value
        let address = document.getElementById('input-address').value
        let district = document.getElementById('district').value
        let ward = document.getElementById('ward').value
        let paymentMethod = document.querySelector('input[type="radio"]:checked');

        const cartStorage = JSON.parse(localStorage.getItem('cart'));



        e.preventDefault();

        if (name === '' || phone === '' || address === '' || district === 'Lựa chọn' || ward === 'Lựa chọn' || paymentMethod === null) {
            toast.error('Thông tin không hợp lệ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        // axios.post('http://localhost:8080/order', {
        //     "customerInfo": {
        //         "name": name,
        //         "phone": phone,
        //         "address": address,
        //         "district": district,
        //         "ward": ward,
        //         "typeOrder": paymentMethod.value === 'cod' ? 'Trực tiếp' : 'Online'
        //     },
        //     "shipFee": shipFee,
        //     "items": location.map((orderInfo) => {
        //         return {
        //             "options": orderInfo.sideDish,
        //             "foodId": orderInfo.foodId,
        //             "price": orderInfo.price * orderInfo.quantity
        //                 * parseFloat(orderInfo.discount) / 100 + parseInt(orderInfo.addition),
        //             "quantity": orderInfo.quantity
        //         }
        //     })
        // })
        //     .then(response => console.log(response))
        console.log(location)

        console.log(cartStorage)


        const newCart = cartStorage.filter(cart => {
            for (let item of location) {
                if (item.foodId != cart.foodId) return true
            }
        })

        localStorage.setItem('cart', JSON.stringify(newCart))

        console.log(newCart)


        window.location.href = "/"
    }



    return (
        <div class="container">

            <main>
                <div class="pb-5 text-center">

                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-danger">Đơn Hàng</span>
                            <span className="badge bg-danger rounded-pill">{location.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {location.map((product) => {
                                return <Product product={product} />
                            })}
                            {/* <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Mã Khuyến Mãi</h6>
                                    <small>Sinh nhật Tiến Minh</small>
                                </div>
                                <span className="text-success">{discountCode}</span>
                            </li> */}
                            {(typeof (shipFee) === 'number') &&
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-primary">
                                        <div>{`Giao tới : ${shipAddress}`}</div>
                                        <div>{"Thời gian dự kiến : " + Math.round(shipTime) + ' Phút'}</div>
                                    </div>
                                </li>}
                            {(typeof (shipFee) === 'number') &&
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-primary">
                                        <h6 className="my-0">Phí giao hàng</h6>
                                    </div>
                                    <span className="text-primary">{new Intl.NumberFormat().format(shipFee)}</span>
                                </li>}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng Tiền (VND)</span>
                                <strong>{new Intl.NumberFormat().format(location.reduce((acc, product) => {
                                    return acc + product.price * product.quantity * parseFloat(product.discount) / 100
                                        + product.addition
                                }, 0) + shipFee)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông Tin Thanh Toán</h4>
                        <form className="needs-validation" method='POST' validate onSubmit={handleCheckOut}>
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
                                        if (even.target.value === 'Lựa chọn') setWardOption('Lựa chọn')
                                        else setWardOption(wardOptionList[even.target.value])
                                        handleDistrictChange(even);
                                    }}>
                                        <option selected>Lựa chọn</option>
                                        <option >Quận Thủ Đức</option>
                                        <option >Quận 10</option>
                                        <option >Quận Bình Thạnh</option>
                                    </select>
                                </div>

                                <div className="col-md" >
                                    <label for="ward" className="form-label">Phường / Xã</label>
                                    <select className="form-select" name='customerWard' id="ward" onChange={event => handleWardChange(event)} >
                                        <option >Lựa chọn</option>
                                        {/* <WardOption /> */}
                                        {wardOption.map(ward => <option key={ward} value={ward}>{ward}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* <hr class="my-4" />

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="save-info" />
                                <label class="form-check-label" for="save-info">Save this information for next time</label>
                            </div> */}

                            <hr class="my-4" />

                            <h4 class="mb-3">Phương thức thanh toán</h4>

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

                            <hr class="my-4" />

                            <button className="w-25 btn btn-danger btn-lg float-end text-white" type="submit" onClick={handleCheckOut} >Thanh Toán</button>
                            <ToastContainer />
                        </form>
                        <button className="w-25 btn btn-lg float-start text-white" style={{ backgroundColor: "blue" }} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/cart'
                        }
                        }>Quay lại</button>
                    </div>
                </div>
            </main>


        </div>
    )
}