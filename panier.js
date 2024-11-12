//  La classe d'objet pour le produit
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// La classe d'objet pour l'élément du panier d'achat
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  //Method de Calcul du prix total
  totalPrice() {
    return this.product.price * this.quantity;
  }
}

//La classe d'objet pour le panier d'achat
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  //add item method
  addItem(product, quantity) {
    let item = this.items.find((item) => item.product.id === product.id);
    // on teste if item déjà existe on met a jour la quantité sinon on ajoute un nouveau element
    if (item) {  
      item.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }
  //remove item method
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }
  //Total Price
  total() {
    return this.items.reduce((total, item) => total + item.totalPrice(), 0);
  }
  // Afficher les élements du panier
  showItems() {
    this.items.forEach((item) => {
      console.log(
        `Produit: ${item.product.name}, Quantité: ${
          item.quantity
        }, Prix Total: ${item.totalPrice()}€`
      );
    });
  }
}

//Créer des produits
const tshirt = new Product(1, "TShirt", 40);
const pants = new Product(2, "Pants", 60);
const shoes = new Product(3, "Shoes", 180);

// Créer un panier d'achat
const myCart = new ShoppingCart();

// Ajouter des éléments au panier
myCart.addItem(tshirt, 3);  // Ajouter 3 Tshirt
myCart.addItem(pants, 2); // Ajouter 2 pants
myCart.addItem(shoes, 4); // Ajouter 1 shoes

// Afficher les éléments du panier
console.log("Panier après ajout d'éléments :");
myCart.showItems();

// Afficher le total du panier
console.log(`Total du panier: ${myCart.total()}€`);

// Supprimer un produit du panier (par exemple, supprimer les T-Shirts)
myCart.removeItem(1);

// Afficher les éléments après suppression
console.log("\nPanier après suppression des Tshirt :");
myCart.showItems();

// Afficher le nouveau total
console.log(`Total du panier après suppression : ${myCart.total()}€`);
