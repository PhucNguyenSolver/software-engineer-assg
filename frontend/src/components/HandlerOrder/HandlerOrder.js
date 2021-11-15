import React, { Fragment, useState } from "react"
import { Badge, Col, Figure, Modal, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import './ProcessBar.css'

const orderData = [
    {
        "orderId": "123abcxyz1",
        "customerName": "Ngô Đức Trí",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "Giga Mall",
            "ward": "Hiệp Bình Chánh",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay, nước mắt của Tiến Minh",
                "quantity": 5,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz2",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang được làm",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz3",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang giao hàng",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz4",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đã thanh toán",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz5",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz6",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đã thanh toán",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz7",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang được làm",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz8",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz9",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang giao hàng",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz10",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đã thanh toán",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz11",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz12",
        "customerName": "Tiến Minh",
        "typeOrder": "Online",
        "status": "Đang được làm",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz13",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz14",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang chờ xử lý",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },
    {
        "orderId": "123abcxyz15",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "status": "Đang từ chối",
        "customerInfo": {
            "phoneNumber": "0123456789",
            "address": "KTX khu B",
            "ward": "Dĩ An",
            "district": "Thủ Đức"
        },
        "orderInfo": [
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 1,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 3,
                "price": 10000,
            },
            {
                "imgUrl": "https://vuacua.vn/storage/media/p269c1CWENCt0RgJKYqFAlsJknm8XiIGdjpYgqks.jpeg",
                "name": "Lòng xào xả ớt sao bằng lòng dạ Tiến Minh",
                "options": "Pepsi, cay",
                "quantity": 7,
                "price": 10000,
            },
        ],
    },

]




function ProcessBar() {

    const [onDisplayNumber, setOnDisplayNumber] = useState(1)

    function displayOrder(currStatus,number) {
        setOnDisplayNumber(number)
        
        const newData = orderData.filter((order) => {
            return order.status == currStatus
        })

        ReactDOM.render(<Fragment>{newData.map((order, index) => {
            return <OrderInfo order={order} idx={index + 1} />
        })}</Fragment>, document.getElementById('list-order'))
    }

    return (
        <div className="main_container">
            <div class="container padding-bottom-3x mb-1">
                <div class="card mb-3">
                    <div class="p-4 text-center text-white text-lg rounded-top" style={{backgroundColor:'black'}}>
                        <span class="text-uppercase">Management Order</span>
                    </div>
                    <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                    </div>
                    <div class="card-body">
                        <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                            <div class={onDisplayNumber >= 1 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang chờ xử lý',1)} style={{ cursor: 'pointer' }}><i class="pe-7s-cart"></i></div>
                                </div>
                                <h4 class="step-title">Đang chờ xử lý</h4>
                            </div>
                            <div class={onDisplayNumber >= 2 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang được làm',2)} style={{ cursor: 'pointer' }}><i class="pe-7s-config"></i></div>
                                </div>
                                <h4 class="step-title">Đang được làm </h4>
                            </div>
                            <div class={onDisplayNumber >= 3 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang giao hàng',3)} style={{ cursor: 'pointer' }}><i class="pe-7s-car"></i></div>
                                </div>
                                <h4 class="step-title">Đang giao hàng</h4>
                            </div>
                            <div class={onDisplayNumber == 4 ? 'step completed' : 'step'}>
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đã thanh toán',4)} style={{ cursor: 'pointer' }}><i class="pe-7s-credit"></i></div>
                                </div>
                                <h4 class="step-title">Đã thanh toán</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
                    <div class="text-left text-sm-right"><a class="btn btn-secondary btn-rounded btn-sm" href="#">Từ chối tất cả</a></div>
                    <div class="text-left text-sm-right"><a class="btn btn-primary btn-rounded btn-sm" href="#">Chấp nhận tất cả</a></div>
                </div>
            </div>

        </div>
    );
}


function OrderInfo(props) {
    const [lgShow, setLgShow] = useState(false);

    function handlerAccept(idCurr) {
        // console.log(idCurr)
        // orderData.find(order => {
        //     if (order.orderId = idCurr) {
        //         if (order.status == 'Đang chờ xử lý') order.status = 'Đang được làm'
        //         else if (order.status == 'Đang được làm') order.status = 'Đang giao hàng'
        //         else if (order.status == 'Đang giao hàng') order.status = 'Đã thanh toán'
        //     }
        // })
        // if (idCurr == "Đang giao hàng") {
        //     document.getElementById('accept' + props.idx).disabled = true
        //     document.getElementById('reject' + props.idx).disabled = true

        // }
    }

    function handlerReject(idCurr) {
        // document.getElementById('accept' + props.idx).disabled = true
        // document.getElementById('reject' + props.idx).disabled = true
        // orderData.find(order => {
        //     if (order.orderId = idCurr) {
        //         order.status = "Đã từ chối"
        //     }
        // })
    }

    return (
        <>
            <tr>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.orderId}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.customerName}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.typeOrder}</td>
                <td onClick={() => setLgShow(true)} style={{ "cursor": "pointer" }}>{props.order.orderInfo.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-primary" onClick={() => handlerAccept()} id={'accept' + props.idx}>Xử lý</button>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => handlerReject()} id={'reject' + props.idx}>Xử lý</button>
                </td>
            </tr>
            <Modal
                size="lg"
                scrollable={true}
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Chi tiết đơn hàng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <h5>Thông tin khách hàng</h5>
                            <Row>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>Họ và tên:</Col>
                                <Col><p>{props.order.customerName}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>Số điện thoại:</Col>
                                <Col><p>{props.order.customerInfo.phoneNumber}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>Địa chỉ:</Col>
                                <Col><p>{props.order.customerInfo.address}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>Phường / Xã:</Col>
                                <Col><p>{props.order.customerInfo.ward}</p></Col>
                            </Row>
                            <Row>
                                <Col xl={5} lg={5} md={5} sm={5} xs={5}>Quận / Huyện:</Col>
                                <Col><p>{props.order.customerInfo.district}</p></Col>
                            </Row>
                            <h5>Giỏ hàng</h5>
                            {props.order.orderInfo.map((item) => (
                                <Row>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2}><Figure.Image alt="FoodImg" src={item.imgUrl}></Figure.Image></Col>
                                    <Col xl={7} lg={7} md={10} sm={10} xs={10}>
                                        <Row><h5>{item.name}</h5></Row>
                                        <Row><p>{item.options}</p></Row>
                                    </Col>
                                    <Col xl={2} lg={2} md={10} sm={10} xs={9}>
                                        <p>Số lượng: {item.quantity}</p>
                                    </Col>
                                    <Col>
                                        <Row><Badge variant="primary" pill>{item.price * item.quantity + ' đ'}</Badge></Row>
                                    </Col>
                                </Row>
                            ))}
                            <Row>
                                <Col xl={7} lg={7} md={7} sm={7} xs={5}><h4>Tổng tiền:</h4></Col>
                                <Col>
                                    <h4><Badge variant="primary" pill>{props.order.orderInfo.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0) + 'đ'}</Badge></h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default function HandlerOrder() {
    return (
        <div class="container">
            <ProcessBar />
            <div class="container mt-5 ">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Tên khách hàng </th>
                                <th scope="col">Loại đặt hàng</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Chấp nhận</th>
                                <th scope="col">Từ chối</th>
                            </tr>
                        </thead>
                        <tbody id='list-order'>
                            {orderData.filter((order) => {
                                return order.status == 'Đang chờ xử lý'
                            }).map((order, index) => {
                                return <OrderInfo order={order} idx={index + 1} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

