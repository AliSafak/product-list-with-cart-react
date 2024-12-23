import { useState } from 'react'
import { isElementOfType } from 'react-dom/test-utils';

const products = [
  {
    name: 'Waffle',
    description: "Waffle with Berries",
    id: 1,
    quantity: 0,
    price: "6.50",
    photo: "./assets/img/img/waffle.png"
  },

  {
    name: 'Brule',
    description: "Vanilla Bean Crème Brûlée",
    id: 2,
    quantity: 0,
    price: "7.00",
    photo: "./assets/img/img/creme-brule.png"
  },

  {
    name: 'Macaron',
    description: "Macaron Mix of Five",
    id: 3,
    quantity: 0,
    price: "8.00",
    photo: "./assets/img/img/Macaroon.png"
  },

  {
    name: 'Tiramisu',
    id: 4,
    quantity: 0,
    price: "5.50",
    photo: "./assets/img/img/tramisu.png",
    description: "Classic Tiramisu",
  },

  {
    name: 'Baklava',
    id: 5,
    quantity: 0,
    price: "4.00",
    photo: "./assets/img/img/baklava.png",
    description: "Pistachio Baklava",
  },

  {
    name: 'Pie',
    id: 6,
    quantity: 0,
    price: "5.00",
    photo: "./assets/img/img/pie.png",
    description: "Lemon Meringue Pie",
  },

  {
    name: 'Cake',
    id: 7,
    quantity: 0,
    price: "4.50",
    photo: "./assets/img/img/redVelvet.png",
    description: "Red Velvet Cake",
  },

  {
    name: 'brownie',
    id: 8,
    quantity: 0,
    price: "5.50",
    photo: "./assets/img/img/brownie.png",
    description: "Salted Caramel Brownie",
  },

  {
    name: 'Cota',
    id: 9,
    quantity: 0,
    price: " 6.50",
    photo: "./assets/img/img/panaCota.png",
    description: "Vanilla Panna Cotta",
  },
];

function App() {
  return (
    <>
      <ListItems />
      <BasketArea />
    </>
  )
}

function ListItems() {
  return (
    <div className='container'>
      <div className='products'>
        <h1>Deserts</h1>
        <div className="product-area">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <>
      <div className='product'>
        <div className='product-header'>
          <img src={product.photo} alt="" />
          <button className='add-to-cart-button'>
            <img src="./assets/img/shopping-icon.png" /> Add to Cart
          </button>
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
    </>
  )
}

function BasketArea() {
  return (
    <div className="payment-section">
      <h2>Your Cart(0)</h2>
      <img src="./assets/img/img/basket-empty.svg" alt="" />
      <p>Your added items will appear here</p>
    </div>
  )
}



export default App


