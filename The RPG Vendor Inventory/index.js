class VendorCart {
  constructor() {
    this.cart = [];
    // Example cart item: { name: "Health Potion", price: 50, quantity: 2 }
  }

  addItem(itemObj, quantity) {
    // 1. Check if the item is already in this.cart (hint: .find() or .findIndex())
    // 2. If yes, add the new quantity to the existing quantity.
    // 3. If no, push the new item object into the cart with its quantity.

    // this was executing from very start but then I realize I don't need this if..else
    // if (this.cart.length === 0) {
    //   this.cart.push({
    //     name: itemObj.name,
    //     price: itemObj.price,
    //     quantity: quantity,
    //   });
    //   return
    // } else {

    let matchedCartItem = this.cart.find(
      (cartItem) => cartItem.name === itemObj.name,
    );
    if (matchedCartItem) {
      // matchedCartItem is a direct referance to storage location of itemObj.name, we can directly update quantity
      matchedCartItem.quantity += quantity;
    } else {
      this.cart.push({
        name: itemObj.name,
        price: itemObj.price,
        quantity: quantity,
      });
    }
    // this is what I had in my mind, it worked but I realize that array have .find()
    // for (let cartItem in this.cart){
    //   if (this.cart[cartItem].name === itemObj.name) {
    //     let item = this.cart[cartItem]
    //     item = {
    //       ...item,
    //       quantity: item.quantity += quantity,
    //     };
    //     break;
    //   } else {
    //     this.cart.push({
    //       name: itemObj.name,
    //       price: itemObj.price,
    //       quantity: quantity,
    //     });
    //     break
    //   }
    // }
    // return
    // }
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

// ==========================================
// 🛠️ TEST CASES - DO NOT CHANGE 🛠️
// ==========================================

const myCart = new VendorCart();

const potion = { name: "Health Potion", price: 50 };
const sword = { name: "Iron Sword", price: 300 };

// 1. Adding Items
myCart.addItem(potion, 2);
myCart.addItem(sword, 1);
myCart.addItem(potion, 3); // Player found 3 more potions!

console.log("Cart after adding:", myCart.cart);
/* Expected: 
[
  { name: 'Health Potion', price: 50, quantity: 5 },
  { name: 'Iron Sword', price: 300, quantity: 1 }
]
*/

// 2. Calculating Total
console.log("Total Price:", myCart.getCartTotal());
// Expected: 550  (5 potions * 50) + (1 sword * 300)

// 3. Applying Promo Code
console.log("Discount Total:", myCart.applyPromoCode("WWTCD"));
// Expected: 440  (550 - 20%)

// 4. Removing Items
myCart.removeItem("Iron Sword");
console.log("Cart after removal:", myCart.cart);
// Expected: [ { name: 'Health Potion', price: 50, quantity: 5 } ]
