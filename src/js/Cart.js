class Cart {
    constructor() {
        this.items = [];
    }
    add(product){
       this.items.push(product);
    }
    getItemCount(){
        return this.items.length;
    }
    getTotalBeforeTax(){
        let total = 0;
        this.items.forEach(function(item){
            total += item.price;
        })
        return total;
    }  
    getTotalWithTax(){
        let total = 0;
        this.items.forEach(function(item){
            total += (item.price * 1.10);
        })
        return total;
    }
    getTax(){
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    }
}

module.exports = Cart;