import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { calculateShipFee, FROM } from "./Map";
import { useLocation } from "react-router-dom";
import { districtOptionList, wardOptionList } from "./data"; 
const axios = require('axios');

const contactData = {
    name: 'Nguyễn Phúc Vinh',
    phone: '0373 395 726',
    addr: `Ticklab, 92/10, đường Vành Đai ĐH Quốc Gia TP.HCM, khu phố Tân Lập,
	 	Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh`
};


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
                    * props.product.quantity * (1 - parseFloat(props.product.discount) / 100)
                    + parseInt(props.product.addition))
                }</span>
            </div>
        </li>
    )
}

export default function CheckOut() {

    const DEFAULT_LOCATE = 'Lựa chọn';
    wardOptionList[DEFAULT_LOCATE] = [];
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
                const to = ward + ', ' + district + ' Ho Chi Minh City';
                console.log({to});
                const { shipFee, duration } = await calculateShipFee(FROM, to);
                setShipFee(shipFee);
                setShipTime(duration);
            }
        }
        fetchData();
    }, [district, ward]);
    const handleDistrictChange = (newDistrict) => {
        setDistrict(newDistrict);
        setWard(DEFAULT_LOCATE);
        setWardOption(wardOptionList[newDistrict] || []);
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
        console.log("Payyyyy")

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
        axios.post('http://localhost:8080/order', {
            "customerInfo": {
                "name": name,
                "phone": phone,
                "address": address,
                "district": district,
                "ward": ward,
                "typeOrder": paymentMethod.value === 'cod' ? 'Trực tiếp' : 'Online'
            },
            "shipFee": shipFee,
            "items": location.map((orderInfo) => {
                return {
                    "options": orderInfo.sideDish,
                    "name" : orderInfo.name,
                    "imageUrl": orderInfo.imgUrl,
                    "price": orderInfo.price * orderInfo.quantity
                        * (1 - parseFloat(orderInfo.discount) / 100) + parseInt(orderInfo.addition),
                    "quantity": orderInfo.quantity
                }
            })
        })
        .then(response => console.log(response))
        console.log(location)

        console.log(cartStorage)


        const newCart = cartStorage.filter(cart => {
            for (let item of location) {
                if (item.foodId == cart.foodId) return false
            }
            return true
        })

        localStorage.setItem('cart', JSON.stringify(newCart))

        console.log(newCart)


        const TOTAL = location.reduce((acc, product) => {
            return acc + product.price * product.quantity *(1 - parseFloat(product.discount) / 100)
                + product.addition}, 0) + shipFee;
        if(paymentMethod.value == "online") {
            axios.post("http://localhost:8080/payment/process", {
                amount: (TOTAL / 23000).toFixed(1),
                description: "Res POS payment"
            })
            .then(res => {
                window.location.href = res.data;
            })
            .catch(err => {{
                alert(err);
            }})
        }
        else {
            window.location.href = "/"
        }

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
                            {[...location].map((product, id) => {
                                return <Product key={id} product={product} />
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
                                    return acc + product.price * product.quantity * (1 - parseFloat(product.discount) / 100)
                                        + product.addition
                                }, 0) + shipFee)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông Tin Thanh Toán</h4>
                        <form className="needs-validation" method='POST' validate='true' onSubmit={handleCheckOut}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="text" name='customerName' className="form-control"
                                            id="input-name" placeholder="Hoàng Văn A" />
                                        <label htmlFor="input-name">Họ và tên</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="phone" name='customerNoPhone' className="form-control" id="input-phone" placeholder="01234556789" />
                                        <label htmlFor="input-phone">Số điện thoại</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mb-2">
                                        <input type="address" name='customerAddress' className="form-control" id="input-address" placeholder="40 Vũ Trọng Phụng" />
                                        <label htmlFor="input-address">Địa chỉ</label>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <label htmlFor="district" className="form-label">Quận/Huyện</label>
                                    <select className="form-select" name='customerDistrict' id="district" 
                                      defaultValue={DEFAULT_LOCATE} onChange={even => {
                                        // if (even.target.value === 'Lựa chọn') {
                                        //   setWard('Lựa chọn');
                                        //   setWardOption([]);
                                        // }
                                        // else setWardOption(wardOptionList[even.target.value])
                                        // handleDistrictChange(even);
                                        handleDistrictChange(even.target.value);
                                    }}>
                                        <option>{DEFAULT_LOCATE}</option>
                                        {districtOptionList.map(district => (
                                          <option key={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md" >
                                    <label htmlFor="ward" className="form-label">Phường / Xã</label>
                                    <select className="form-select" name='customerWard' id="ward" defaultValue={DEFAULT_LOCATE}
                                    onChange={event => handleWardChange(event)} >
                                        <option >Lựa chọn</option>
                                        {/* <WardOption /> */}
                                        {wardOption.map(ward => <option key={ward} value={ward}>{ward}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* <hr class="my-4" />

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="save-info" />
                                <label class="form-check-label" htmlFor="save-info">Save this information for next time</label>
                            </div> */}

                            <hr class="my-4" />

                            <h4 class="mb-3">Phương thức thanh toán</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="cod" name="paymentMethod" value='cod' type="radio" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="cod">Thanh toán khi nhận hàng</label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="online">Thanh toán Online</label>
                                    <input id="online" name="paymentMethod" value='online' type="radio" className="form-check-input" />
                                </div>
                            </div>

                            <hr class="my-4" />

                            <button className="w-25 btn btn-danger btn-lg float-end text-white" type="submit" onClick={handleCheckOut} >Thanh Toán</button>
                            <ToastContainer />
                        </form>
                        <button className="w-25 btn btn-lg float-start text-white" style={{ backgroundColor: "blue" }} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/cart';
                        }
                        }>Quay lại</button>
                    </div>
                </div>
            </main>


        </div>
    )
}