import React, { useEffect, useState } from "react";
import axios from "axios";
import ProcessBar from "./ProcessBar";

// ReactDOM.render(logOutIcon,document.getElementById('logout'))

export default function HandlerOrder() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/order/manage-order')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    },[])

    return (
        <div class="container">
            <ProcessBar data={data}/>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

