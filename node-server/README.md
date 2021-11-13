# **Mô tả**

App backend Node.js cung cấp RESTful API cho ứng dụng quản lý sự kiện. <br>
Nhiệm vụ của team frontend là sử dụng các API được cung cấp xây dựng ứng dụng phía người dùng.
<br>
<br>

# **Cài đặt**

Để chạy ứng dụng backend, cần cài đặt môi trường [Node.js và npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) và [Mongodb Community](https://www.mongodb.com/try/download/community).
Sau khi cài đặt xong Node.js và npm, cài đặt các package sau:

```console
npm install express mongoose cors
```

Tạo schema có tên là `pos_system`, chỉnh sửa nội dung file *app/config/db.config.js* như sau:
```javascript
module.exports = {
    url: 'mongodb://localhost:27017/event_management'
}
```
Chạy ứng dụng trên [localhost](http://localhost:8080) port 8080 (có thể chỉnh sửa port trong file *server.js*):

```console
npm start
```

<br>

# **Cách sử dụng các API lấy dữ liệu cho frontend**

**Lưu ý**: Với các POST và PUT method, đặt tên dữ liệu đúng định dạng như trong phần _Description_

## ***Đăng nhập và đăng ký:***

### **API**

Method | URL | Description
-----|--------|-------
POST | /auth/login | Gửi tên 'username'/'email', 'password' lên server. Khi đăng nhập thành công, một Json Web Token (JWT) chứa ID của user được tạo vào lưu vào cookie. Nếu user đang có sẵn JWT hợp lệ, bỏ qua phần đăng nhập.
POST | /auth/signup | Gửi tên 'username'/'email', 'password', 'fname' và 'lname' lên server. Nếu tên tài khoản đã tồn tại, trả về thất bại. Nếu tài khoản được tạo thành công, lưu JWT tương tự như phần đăng nhập.

<br>

## ***Lịch:***

### **API**

Method | URL | Description | Return
-----|--------|-------|----------
GET |/calendar?month={`int`}&year={`int`} | Lấy lịch tổng quan trong tháng | Một array gồm các object chứa màu và ngày diễn ra của sự kiện
GET |/calendar?day={`int`}&month={`int`}&year={`int`} | Lấy danh sách các sự kiện trong một ngày | Một array gồm các object chứa id, thời gian, màu, địa điểm, tên sự kiện
GET |/food? | Lấy tất cả các món ăn trong thực đơn | Một array gồm các object chứa id, tên, giá, hình ảnh của món ăn
GET |/food?type={`type`} | Lấy tất cả các món ăn trong thực đơn của một loại | Một array gồm các object chứa id, tên, giá, hình ảnh của món ăn trong một loại


### **Parameters**

Name | | Description |
------|------|----
month | required | Số tháng từ 1 tới 12 |
year | required | Số năm
day | required | Số ngày trong tháng

<br>

# **JSON Response Data**
Ví dụ về một JSON response:
```javascript
{
    id: 12022021,
    name: 'Họp đồ án CNPM'
    startTime: '19:00',
    endTime: '20:00',
    description: 'Họp định kì hàng tuần, cập nhật tiến độ và phân chia công việc',
    date: '2021-10-20'
}
```
Các fields trong một *JSON response*:
- `userID`: ID của một user
- `eventID`: ID của một event
- ...
