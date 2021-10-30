import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import './Banner.css'

export default function Banner() {
    return (
        <div class="row">
        <div class="col-1"></div>
        <Carousel className="slide-banner col-10">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://kfcvietnam.com.vn/uploads/banner/d1dd1f9c1c83301bc4a61add2ce73cd7.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://kfcvietnam.com.vn/uploads/banner/0697dd81738426d9e9f4874759c080eb.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://kfcvietnam.com.vn/uploads/banner/6590d63cda67e12c4dbb1aa60530498f.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://kfcvietnam.com.vn/uploads/banner/c8c807bf7f8c3ecbbc50e8eef9f4f1b8.png"
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://kfcvietnam.com.vn/uploads/banner/71a29dc5191424d6003e2511da1a9836.jpg"
                alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}