# The RPG Vendor Inventory

_When a player buys items from a shop in a game, or when a user adds items to a shopping cart on an e-commerce site, there is a Cart object running behind the scenes. This object holds the items, updates quantities, and calculates the total price._

## 🚀 TechStack Used

- **Javascript (ES6+)**

- **Node.js (For testing)**

## 🎯 Goal

**To handel cart properly in class and calculate proper price all item in cart, also properly apply promocode to calculate final price.**

## 😤 The Challenge

**To build a VendorCart class. It will manage an array of items and handle all the math for the checkout process.**

## 🔧 Rules

- **addItem(item, quantity): If the item already exists in the cart, update the quantity. If it does not exist, add it to the cart.**

- **removeItem(itemName): Completely remove an item from the cart based on its name.**

- **getCartTotal(): Calculate and return the total price of everything in the cart (price \* quantity for each item).**

- **applyPromoCode(code): If the user passes the code "WWTCD", apply a 20% discount to the final total. Otherwise, return the normal total.**

## 🧠 What I learned

- **First: I become confused at addItem() because of foreach loop, because it was executing else statement as `"Health Potion" === "Iron Sword" is false` and add another Health Potion in cart even though we add the quantity before.**
- **Second: I use for..in loop to loop cart and used break, worked but takes lot's of space.**
- **`matchedCartItem` is a direct referance to storage location of `itemObj.name`, we can directly update quantity `matchedCartItem.quantity += quantity;`**
- **Then I realise, cart is an array, it have `.find()`, so I used it. There is always an optimal solution.**

## 💻 Code Snippet

```Javascript
class VendorCart {
  constructor() {
    this.cart = [];
    // Example cart item: { name: "Health Potion", price: 50, quantity: 2 }
  }

  addItem(itemObj, quantity) {

    let matchedCartItem = this.cart.find(
      (cartItem) => cartItem.name === itemObj.name,
    );
    if (matchedCartItem) {
      matchedCartItem += quantity
    } else {
      this.cart.push({
        name: itemObj.name,
        price: itemObj.price,
        quantity: quantity,
      });
    }
  }

  removeItem(itemName) {
    // Remove the item from this.cart (hint: .filter())
    this.cart = this.cart.filter((cartItem) => cartItem.name !== itemName);
  }

  getCartTotal() {
    /// Calculate the total cost of all items (hint: .reduce() or a for loop)
    const totalPrice = this.cart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
    return totalPrice;
  }

  applyPromoCode(code) {
    // Check the code. If it's "WWTCD", return the total with a 20% discount.
    // Otherwise, return the normal total.
    if (code === "WWTCD") {
      let discountPrice = this.getCartTotal() * 0.2;
      return this.getCartTotal() - discountPrice;
    }
    return this.getCartTotal();
  }
}
```
