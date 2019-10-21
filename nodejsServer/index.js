/**
 Khoá học FullStackNodejs 2019 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Viết api đăng nhập user với mật khẩu được mã hoá
 Cần cài một số thư viện sau:
 npm install -g mongoose
 npm install -i express
 npm install -i body-parser
 
1. Cài đặt mongoDB trong mac:
brew cask install mongodb
brew install mongodb/brew/mongodb-community
2. Khởi động mongod trên terminal
mongod --dbpath ~/Documents/mongoDatabase --port 27018

3.Mở Robo3T, chuột phải vào admin, chọn Open Shell, gõ các lệnh:

use mongoDatabase
db.createUser({user: 'hoangnd',pwd: '123456',roles: [{role:"readWrite",db: 'mongoDatabase'}],
mechanisms:["SCRAM-SHA-1"]})
Khởi động lại Database bằng lệnh: mongod --dbpath ~/Documents/mongoDatabase --port 27018 --auth
4.Mở Robo3T, đăng nhập bằng user và pasword ở trên

5.Khởi động server Nodejs trên máy local(máy laptop đang dùng)
Mở cửa sổ terminal mới, gõ: cd “đường dẫn thư mục exercise09Server”, xoá thư mục node_modules: rm -rf
node_modules

Cài lại package trong Nodejs: npm install
Nếu chưa có thư mục uploads => tạo mới thư mục này
Chạy server: node index.js

thấy hiện thành công là được

 */

const express = require('express') //import express from 'express'
const app = express()
var cors = require('cors')
const { PORT } = require('./helpers/utility')
//Nhúng middleware body-parser vào Express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//Upload files
const fileUpload = require('express-fileupload')
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },  //Maximum = 50 MB  
}))
//Tuỳ biến Router
const productRouter  = require('./routers/productRouter')

app.use('/products', productRouter)
//Start server
app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}!`)
})