import { ImagesSlide } from "./ImagesSlide";

export function FoodInfo() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <ImagesSlide/>
                </div>
                <div class="col-4">
                    <div class="row text-start">
                        <h1>Cánh gà xóc tỏi</h1>
                    </div>
                    <div class="row text-primary text-start">
                        <h2>95,000 VNĐ</h2>
                    </div>
                    <div class="row text-start">
                        <p>Mỗi phần gồm 6 cái cánh giữa, là phần nhiều thịt và mềm nhất. Cháy tỏi giòn tan như snack, vị mặn ngọt vừa vặn phủ đều lên cánh gà chiên giòn là món khai vị vô cùng kích thích</p>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-6">
                            <div class="row align-items-center border border-primary justify-content-center">
                                <div class="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </div>
                                <div class="col-1 p-0">
                                    <h3>1</h3>
                                </div>
                                <div class="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <button class="btn btn-primary">ĐẶT HÀNG NGAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}