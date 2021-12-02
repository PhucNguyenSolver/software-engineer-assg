# **LINK DEPLOY**
http://nhihouse.herokuapp.com/

# **Cài đặt**

Trước khi chạy ứng dụng, cần cài đặt môi trường [Node.js và npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) và [MongoDB Community](https://www.mongodb.com/try/download/community).

Sau khi cài đặt xong DBMS và environment, ta sẽ chạy hai ứng dụng ở hai thư mục khác nhau: frontend và node-server. Ứng dụng nằm trong thư mục frontend là React App hiển thị giao diện UI, ứng dụng trong thư mục node-server là CRUD App dùng để lấy dữ liệu từ Mongo Cloud, xử lí logic và trả về dữ liệu cho React App thông qua các REST API.

# **Chạy ứng dụng Node server**
Chuyển working directory sang thư mục node-server:
```console
cd node-server
```

Cài đặt các package cần thiết:
```console
npm install
```

File *app/config/db.config.js* chứa cài đặt về truy cập Mongo cloud database. Nội dung file *app/config/db.config.js* như sau:
```javascript
// User là tài khoản Database Access trên Mongodb Cloud,
const user = 'admin';
const password = 'CRlQNnlWX3cByBkG';

module.exports = {
    uri: `mongodb+srv://${user}:${password}@restaurantpos.mjkgg.mongodb.net/RestaurantPOS?retryWrites=true&w=majority`
}
```
Nhóm chạy ứng dụng trong mode testing, vì vậy có thể bỏ qua phần bảo mật database. Username và password truy cập database được khai báo trực tiếp trong file *db.config.js*.

Chạy ứng dụng: 
```console
npm start
```

Ứng dụng Node server được chạy mặc định trên [localhost](http://localhost:8080) port 8080.

# **Chạy ứng dụng React**
Chuyển working directory sang thư mục frontend:

```console
cd frontend
```

Cài đặt các package cần thiết:
```console
npm install
```

Chạy ứng dụng: 
```console
npm start
```

Ứng dụng React được chạy mặc định trên [localhost](http://localhost:3000) port 3000. 
<br>
Lưu ý, ứng dụng Node server phải được chạy trước ứng dụng React.
