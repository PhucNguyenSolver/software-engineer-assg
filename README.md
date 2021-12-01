# **Cài đặt**

Trước khi chạy ứng dụng, cần cài đặt môi trường [Node.js và npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) và [MongoDB Community](https://www.mongodb.com/try/download/community).

Sau khi cài đặt xong DBMS và environment, ta sẽ chạy hai ứng dụng ở hai thư mục khác nhau: frontend và node-server. Ứng dụng nằm trong thư mục frontend là React App hiển thị giao diện UI, ứng dụng trong thư mục node-server là CRUD App dùng để lấy dữ liệu từ Mongo Cloud, xử lí logic và trả về dữ liệu cho React App thông qua các API method (chi tiết mô tả trong file node-server/README.md).

Chạy ứng dụng React:

```console
cd frontend
```

```console
npm install
```

Tạo schema có tên là `pos_system`, chỉnh sửa nội dung file *app/config/db.config.js* như sau:
```javascript
// User là tài khoản Database Access trên Mongodb Cloud,
module.exports = {
    uri: `mongodb+srv://${user}:${password}@restaurantpos.mjkgg.mongodb.net/RestaurantPOS?retryWrites=true&w=majority`
}
```
Chạy ứng dụng trên [localhost](http://localhost:8080) port 8080 (có thể chỉnh sửa port trong file *server.js*):

```console
npm start
```
Lưu ý: Trước khi chạy phải thêm IP address của máy trong phần Network Access trên Mongodb Cloud
<br>