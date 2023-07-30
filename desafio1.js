/*class ProductManager {
    constructor (){
        this.Products = []
    }
    addProduct(){
        const prod = this.Products.find(prod => prod.code === Product.code)
        if(prod){
            console.log("Ya existe el producto que desea añadir")
        }else{
            this.Products.push(Product)
        }
    }

    getProducts(){
        console.log(this.products)
    }
    getProductById(){
        const prod = this.products.find(prod => prod.code === product.code)
        if(prod){
            console.log(prod)
        }else{
            console.log("Producto no encontrado")
        }
    }
}
class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.asignarId()
    }

    static asignarId(){
        if(this.newId){
            this.newId++
        }else{
            this.newId = 1
        }return this.newId
    }
}

const papa = new Product ("Papa", "Es un tuberculo", 200, [], "PAPA200", 137)
const zanahoria = new Product ("Zanahoria", "Es una verdura, creo", 350, [], "ZAZA350", 112)
const tomate = new Product ("Tomate", "Es una fruta", 400, [], "TMTE400", 666)
const pera = new Product ("Pera", "La mejor fruta lejos", 1200, [], "PERA120", 73)

const productManager = new ProductManager()
productManager.addProduct(papa)
productManager.addProduct(zanahoria)
productManager.addProduct(tomate)
productManager.addProduct(pera)

productManager.getProducts()

productManager.getProductById(3)

console.log(papa)
console.log(zanahoria)
console.log(tomate)
console.log(pera)

*/














class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)

        if (prod) {
            console.log("Producto ya encontrado")
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)

        if (prod) {
            console.log(prod)
        } else {
            console.log("Producto no encontrado")
        }
    }
}

class Product {
    constructor(title, description, price, code, stock, thumbnail) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock        
        this.id = Product.incrementarId() //Mi Id es el resultado de lo que devuelva este metodo
    }
    //Defino un metodo de CLASE
    static incrementarId() {
        //Si existe esta propiedad, la aumento en 1 o la creo
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const papa = new Product ("Papa", "Es un tuberculo", 200, [], "PAPA200", 137)
const zanahoria = new Product ("Zanahoria", "Es una verdura, creo", 350, [], "ZAZA350", 112)
const tomate = new Product ("Tomate", "Es una fruta", 400, [], "TMTE400", 666)
const pera = new Product ("Pera", "La mejor fruta lejos", 1200, [], "PERA120", 73)

const productManager = new ProductManager()

productManager.addProduct(papa)
productManager.addProduct(zanahoria)
productManager.addProduct(tomate)
productManager-addProduct(pera)

productManager.getProducts()

productManager.getProductById(4)
