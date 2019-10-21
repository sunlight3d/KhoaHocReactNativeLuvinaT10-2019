/**
 Khoá học FullStackNodejs 2019 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "Product" collection
 */
const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')//fs = file system

const { 	
    insertProduct,
    queryProducts,
    getDetailProduct,
    updateProduct,
    deleteProduct,
} = require('../database/models/Product')
const {firebaseManager} = require("../Firebase/Firebase")

router.use((req, res, next) => {    
    console.log('Time: ', Date.now()) //Time log
    next()
})
// http://127.0.0.1:3000/products/insertProduct
router.post('/insertProduct', async (req, res) =>{
    let {name, description, imageURL} = req.body
    //Client phải gửi tokenKey
    try {
        let newProduct = await insertProduct(name, description, imageURL)
        //Goi firebase
        firebaseManager.insertSomething(`${Math.floor(Date.now())}`)
        res.json({
            result: 'ok',
            message: 'Thêm mới Product thành công',
            data: newProduct
        })
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể thêm mới Product.Lỗi : ${error}`
        })
	}
})

router.get('/queryProducts', async (req, res) =>{	
    debugger;
	let {text} = req.query
    try {    	
        let products = await queryProducts(text)
        res.json({
            result: 'ok',
            message: 'Query thành công danh sách Product',
            data: products
        })
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể lấy được danh sách products.Lỗi : ${error}`
        })
	}
})
//VD1: http://127.0.0.1:3000/blogposts/queryProductsByDateRange?
//from=01-11-2018&to=05-11-2018
router.get('/queryProductsByDateRange', async (req, res) =>{	
	let {from, to} = req.query	
    try {    	
        let products = await queryProductsByDateRange(from, to)
	  	res.json({
	  		result: 'ok',
	  		message: 'Query thành công danh sách Product',
	  		data: products
	  	})	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể lấy được danh sách products.Lỗi : ${error}`
        })
	}
})
router.get('/getDetailProduct', async (req, res) =>{		
	let {id} = req.query	
    try {    	    
        let product = await getDetailProduct(id)
	  	res.json({
	  		result: 'ok',
	  		message: 'Query thành công chi tiết Product',
	  		data: product
	  	})		
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Ko lấy được thông tin chi tiết Product. Error: ${error}`
        })
	}
})
//PUT method => để update data
//http://127.0.0.1:3000/products/updateProduct
router.put('/updateProduct', async (req, res) =>{			
    let {id} = req.body
    let updatedProduct = req.body
    try {    	
    	let product = await updateProduct(id, updatedProduct)
        //Goi firebase
        firebaseManager.insertSomething(`${Math.floor(Date.now())}`)
        res.json({
            result: 'ok',
            message: 'Update thành công 1 Product',
            data: product
        })	
    } catch(error) {
		res.json({
            result: 'failed',
            message: `Ko update được Product. Error: ${error}`
        })
	}
})
http://127.0.0.1:3000/products/deleteProduct
router.delete('/deleteProduct', async (req, res) =>{		
	let {id} = req.body	
	// let tokenKey = req.headers['x-access-token']	
    try {    	
        await deleteProduct(id)
        //Goi firebase
        firebaseManager.insertSomething(`${Math.floor(Date.now())}`)
        res.json({
            result: 'ok',
            message: 'Xoá thành công 1 Product',	  		
        })	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Ko xoá được Product. Error: ${error}`
        })
	}
})
//Upload multiple files
// http://127.0.0.1:3000/products/uploads
router.post('/uploads', async (req, res) => {
    //Dữ liệu files đc lưu tại : req.files    
    try {
        if(!req.files) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }        
        const keys = Object.keys(req.files)
        if (keys.length === 0) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }
        let imageNames = []
        keys.forEach( async (key) => {            
            const fileName = `${Math.random().toString(36)}`
            const fileObject = await req.files[key]            
            const fileExtension = fileObject.name.split('.').pop()
            const destination = `${path.join(__dirname, '..')}/uploads/${fileName}.${fileExtension}`
            let error = await fileObject.mv(destination) //mv = move 
            if (error) {
                res.json({
                    result: "failed",
                    message: `Cannot upload files. Error: ${error}`
                })
                return
            }
            imageNames.push(`${fileName}.${fileExtension}`)
            //Kiểm tra file cuối cùng trong list ?
            debugger
            if (key === keys[keys.length - 1]) {
                res.json({
                    result: "ok",
                    message: `Upload files successfully`,
                    imageNames
                })
            }
        })
        //Goi firebase
        firebaseManager.insertSomething(`${Math.floor(Date.now())}`)
        
    } catch(error) {
        res.json({
            result: "failed",
            message: `Cannot upload files. Error: ${error}`
        })
    }
})
router.get('/getImage', async (req, res) =>{        
    let {fileName} = req.query   
    const destination = `${path.join(__dirname, '..')}/uploads/${fileName}`
    debugger;
    try {           
        fs.readFile(destination, function(err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    message: `Ko lấy được thông tin chi tiết Product. Error: ${err}`
                })
                return
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data); // Send the file data to the browser.
        });
    } catch(error) {
        res.json({
            result: 'failed',
            message: `Ko lấy được thông tin chi tiết Product. Error: ${error}`
        })
    }
})
module.exports = router