import { useState } from "react"

const orderData = [
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
        "status": "Đang xử lý",
    },
    {
        "orderId": "123abcxyz",
        "customerName": "Hoàng Minh Tiến",
        "typeOrder": "Online",
        "totalPrice": 150000,
    },

]


function OrderInfo(props) {
    const [status, setStatus] = useState("Đang chờ xử lý")

    function popUpOrder() {
        alert("Here")
    }

    function handlerAccept() {
        if (status == "Đang chờ xử lý") setStatus("Đang được làm")
        else if (status == "Đang được làm") setStatus("Đang giao hàng")
        else if (status == "Đang giao hàng") {
            setStatus("Đã thanh toán")
            document.getElementById('accept' + props.idx).disabled = true
            document.getElementById('reject' + props.idx).disabled = true

        }
    }

    function handlerReject() {
        document.getElementById('accept' + props.idx).disabled = true
        setStatus("Đã từ chối")
    }

    return (
        <tr>
            <td onClick={popUpOrder} style={{ "cursor": "pointer" }}>{props.order.orderId}</td>
            <td>{props.order.customerName}</td>
            <td>{props.order.typeOrder}</td>
            <td>{props.order.totalPrice}</td>
            <td>{status}</td>
            <td>
                <button type="button" class="btn btn-sm btn-outline-success" onClick={handlerAccept} id={'accept' + props.idx}>Xử lý</button>
            </td>
            <td>
                <button type="button" class="btn btn-sm btn-outline-danger" onClick={handlerReject} id={'reject' + props.idx}>Xử lý</button>
            </td>
        </tr>
    )
}

export default function HandlerOrder() {
    return (
        <div class="container">
            <div class="container mt-5 ">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Tên khách hàng </th>
                                <th scope="col">Loại đặt hàng</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Chấp nhận</th>
                                <th scope="col">Từ chối</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order, index) => {
                                return <OrderInfo order={order} idx={index + 1} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

