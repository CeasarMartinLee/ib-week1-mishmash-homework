class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price){
        const newItem = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.items.push(newItem)
    }

    clear() {
        this.items = []
    }

    total() {
        const sum = this.items.reduce((acc, item) => {
            acc = acc + (item.quantity * item.pricePerUnit)
            return acc
        },0)
        return sum
    }
}

module.exports = ShoppingCart