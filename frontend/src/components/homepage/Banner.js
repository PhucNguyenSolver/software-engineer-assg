import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
const axios = require('axios');


export default function Banner() {
    const [imageBanner, setImageBanner] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/banner")
            .then(res => {
                setImageBanner(res.data.imageUrls);
            })
            .catch(err => {
                alert("Occur when loading image banner");
            });
    }, [])

    const style = "card text-center shadow col-11 col-sm-3 col-xl-2 m-3";
    // card text-center shadow col-sm-3 col-md-2 col-xs-2 m-3
    
    return (
        <>
        <div className="row justify-content-center">
        <Carousel className="slide-banner col-md-10 col-xs-10 col-sm-10">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {imageBanner[0]}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {imageBanner[1]}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {imageBanner[2]}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageBanner[3]}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageBanner[4]}
                alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        
        <div className="row mt-3 mb-3 justify-content-center card-deck">
            <div className={style}>
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E30220" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                </div>
                <div className="card-body">
                    <p>Thứ 2 - Chủ nhật</p>
                    <p>9:00 am - 8:00 pm</p>
                </div>
            </div>

            <div className={style}>
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E30220" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </div>
                <div className="card-body">
                    <p>100 Lê Lợi, phường Bến Thành,</p>
                    <p>quận 1, TP. Hồ Chí Minh</p>
                </div>
            </div>


            <div className={style}>
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E30220" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                </div>
                <div className="card-body">
                    <p>(+84) 123 456 7890</p>
                    <p>(+84) 943 585 3494</p>
                </div>
            </div>
        </div>
        </>
    )
}