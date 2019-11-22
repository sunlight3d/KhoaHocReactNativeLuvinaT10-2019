const SERVER_PORT = 3000
// const SERVER_NAME = "127.0.0.1"
const SERVER_NAME = "192.168.1.35"
const urlUploadPhoto = `http://${SERVER_NAME}:${SERVER_PORT}/products/uploads`
const urlGetPhoto = (imageName) => 
    `http://${SERVER_NAME}:${SERVER_PORT}/getImage?fileName=${imageName}`
const urlGetProducts = (limit, offset) => {
    return `http://${SERVER_NAME}:${SERVER_PORT}/products/queryProducts?limit=${limit}&offset=${offset}`
}

export {
    urlUploadPhoto,
    urlGetPhoto,
    urlGetProducts
}