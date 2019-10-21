/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa Product model
 */
const {mongoose} = require('../database')
const {Schema} = mongoose
const ProductSchema = new Schema({
    name: {type: String, default: 'Noname', unique: true},
    description: {type: String, default: ''},
    imageURL: {type: String, default: ''},
})
const Product = mongoose.model('Product', ProductSchema)
const insertProduct = async (name, description, imageURL) => {
    try {
        let newProduct = await Product.create({
            name, description,imageURL
        })
        await newProduct.save()
        return newProduct
    } catch(error) {        
        throw error
    }
}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
const queryProducts = async (text) => {
    try {        

        let products = await Product.find({
            $or: [
                {
                    name: new RegExp(text, "i")
                    //i => ko phân biệt hoa/thường
                },
                {
                    description: new RegExp(text, "i")
                }
            ],                   
        })        
        // await sleep(3000)
        return products    
    } catch(error) {        
        throw error
    }
}
const getDetailProduct = async (productId) => {
    try {        
        let product = await Product.findById(productId)
        if (!product) {
            throw `Không tìm thấy product với Id=${productId}`
        }
        return product
    } catch(error) {        
        throw error
    }
}
//Cập nhật 1 blogpost => yêu cầu token
//Chỉ có tác giả mới cập nhật được Product của mình
const updateProduct = async (productId,updatedProduct) => {
    try {        
        let product = await Product.findById(productId)
        if (!product) {
            throw `Không tìm thấy product với Id=${productId}`
        }
        product.name = !updatedProduct.name ?
                            product.name : updatedProduct.name
        product.description = !updatedProduct.description ? 
                            product.description : updatedProduct.description
        product.imageURL = !updatedProduct.imageURL ? 
                            product.imageURL : updatedProduct.imageURL
        await product.save()        
        return product
    } catch(error) {        
        throw error
    }
}
const deleteProduct = async (productId) => {
    try {    
        debugger    
        let product = await Product.findById(productId)
        if (!product) {
            throw `Không tìm thấy blogpost với Id=${productId}`
        }        
        await Product.deleteOne({_id: productId})
    } catch(error) {        
        throw error
    }
}
module.exports = {
    insertProduct,
    queryProducts,
    getDetailProduct,
    updateProduct,
    deleteProduct,
}