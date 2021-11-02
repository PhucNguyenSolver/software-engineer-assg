
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

function Product(props) {
    return (
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div class='col-2'>
                <img src={props.product.image} style={{marginTop:4,width:'100%'}} />
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
                                <strong>{productData.reduce((acc,product) => {
                                    return acc + product.price * product.quantity
                                },0) - 50000 }</strong>
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
                                        <input type="name" class="form-control" id="floatingInput" placeholder="Hoàng Văn A" />
                                        <label for="floatingInput">Họ và tên</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-2">
                                        <input type="phone" class="form-control" id="floatingInput" placeholder="01234556789" />
                                        <label for="floatingInput">Số điện thoại</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-2">
                                        <input type="address" class="form-control" id="floatingInput" placeholder="40 Vũ Trọng Phụng" />
                                        <label for="floatingInput">Địa chỉ</label>
                                    </div>
                                </div>

                                <div class="col-md">
                                    <label for="country" class="form-label">Quận/Huyện</label>
                                    <select class="form-select" id="country" required>
                                        <option>Quận Thủ Đức</option>
                                        <option>Huyện Nhà Bè</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div class="col-md">
                                    <label for="state" class="form-label">Phường / Xã</label>
                                    <select class="form-select" id="state" required>
                                        <option value="">Phường Linh Xuân</option>
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
                                    <input id="cod" name="paymentMethod" type="radio" class="form-check-input" required />
                                    <label class="form-check-label" for="cod">Thanh toán khi nhận hàng</label>
                                </div>
                                <div class="form-check">
                                    <input id="online" name="paymentMethod" type="radio" class="form-check-input" required />
                                    <label class="form-check-label" for="online">Thanh toán Online</label>
                                </div>
                            </div>                               

                            <hr class="my-4" />

                            <button class="w-25 btn btn-danger btn-lg float-start" type="submit">Quay lại</button>
                            <button class="w-25 btn btn-success btn-lg float-end" type="submit">Thanh Toán</button>
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