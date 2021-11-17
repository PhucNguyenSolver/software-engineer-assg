import { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import OrderInfo from "./OrderInfo";
import './ProcessBar.css';

function ProcessBar({ data }) {
    const [onDisplayNumber, setOnDisplayNumber] = useState(1)

    const displayOrder = (currStatus, number) => {
        setOnDisplayNumber(number)

        const newData = data.filter((order) => {
            return order.status === currStatus
        })

        ReactDOM.render(<Fragment>{newData.map((order, index) => {
            return <OrderInfo order={order} idx={index + 1} data={data}/>
        })}</Fragment>, document.getElementById('list-order'))
    }

    return (
        <div className="main_container">
            <div class="container padding-bottom-3x mb-1">
                <div class="card mb-3">
                    <div class="p-4 text-center text-white text-lg rounded-top" style={{ backgroundColor: 'black' }}>
                        <span class="text-uppercase">Management Order</span>
                    </div>
                    <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                    </div>
                    <div class="card-body">
                        <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                            <div class={onDisplayNumber >= 1 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang chờ xử lý', 1)} style={{ cursor: 'pointer' }}><i class="pe-7s-cart"></i></div>
                                </div>
                                <h4 class="step-title">Đang chờ xử lý</h4>
                            </div>
                            <div class={onDisplayNumber >= 2 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang được làm', 2)} style={{ cursor: 'pointer' }}><i class="pe-7s-config"></i></div>
                                </div>
                                <h4 class="step-title">Đang được làm </h4>
                            </div>
                            <div class={onDisplayNumber >= 3 ? 'step completed' : 'step'} >
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đang giao hàng', 3)} style={{ cursor: 'pointer' }}><i class="pe-7s-car"></i></div>
                                </div>
                                <h4 class="step-title">Đang giao hàng</h4>
                            </div>
                            <div class={onDisplayNumber === 4 ? 'step completed' : 'step'}>
                                <div class="step-icon-wrap">
                                    <div class="step-icon" onClick={() => displayOrder('Đã thanh toán', 4)} style={{ cursor: 'pointer' }}><i class="pe-7s-credit"></i></div>
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

export default ProcessBar;