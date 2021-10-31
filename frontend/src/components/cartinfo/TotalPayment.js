import { ListGroup, ListGroupItem } from "react-bootstrap"

export default function TotalPayment() {
    return (
        <ListGroup as="ul">
            <ListGroupItem as="li" active>Tổng thanh toán</ListGroupItem>
            <ListGroupItem as="li">Tạm tính</ListGroupItem>
            <ListGroupItem as="li">Tùy chọn thêm</ListGroupItem>
            <ListGroupItem as="li">Chọn nước</ListGroupItem>
            <ListGroupItem as="li">Cay</ListGroupItem>
            <ListGroupItem as="li">Tổng</ListGroupItem>
        </ListGroup>
    )
}