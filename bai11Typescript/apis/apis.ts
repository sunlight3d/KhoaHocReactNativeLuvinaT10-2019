const SERVER:string = '192.168.1.20'
const PORT:number = 3000
export const urlGetProducts: string = `http://${SERVER}:${PORT}/products/queryProducts`
export const urlGetImage = (fileName: string) => {
    return `http://${SERVER}:${PORT}/products/getImage?fileName=${fileName}`
}