// class Product {
//     constuctor(name, price, taxable){
//         this.name = name; //string
//         this.price = price; //number
//         this.taxable = taxable //boolean
//     }
//     getPriceWithTax(){
//         // if (this.taxable){
//         //     return this.price * 1.10;
//         // }else{
//         //     return this.price; 
//         // }
//             // ternary 
//         return this.taxable ? this.price * 1.10 : this.price
//     }
// }
// module.exports = Product;

class Product {
    constructor(name, price, taxable) {
        this.name = name; // string
        this.price = price; // number
        this.taxable = taxable; // boolean
    }
    getPriceWithTax(){
        // return a number
        // if (this.taxable) {
        //     return this.price * 1.10;
        // } else {
        //     return this.price;
        // }
        return this.taxable ? this.price * 1.10 : this.price;
    }
}
module.exports = Product;