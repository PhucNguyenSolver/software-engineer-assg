export default function Success() {
    return(
        <div class="container mt-5">
            <div class="d-flex justify-content-center h-50">
                <img src="https://png.pngtree.com/png-vector/20190721/ourlarge/pngtree-flat-restaurant-illustration-png-image_1568130.jpg"></img>
            </div>
            <h2 class="text-center block p-4 text-success">THÀNH CÔNG!</h2>
            <h4 class="text-center block pb-4">Đơn đặt hàng của quý khách đã được gửi đi thành công.</h4>
            <h4 class="text-center block pb-4">Chúc quý khách ngon miệng!</h4>
            <div class="row justify-content-center">
                <button class="btn btn-primary col-auto"
                onClick={() => window.location.href = "/"}>Trang chủ</button>
            </div>
        </div>
    )
}