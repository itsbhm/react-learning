import React from "react";
import ReactDOM from "react-dom/client";

const inventory = [
  {
    product_id: "P1001",
    name: "Redmi Note 12 Pro",
    category: "Smartphones",
    brand: "Xiaomi",
    price: 15999,
    currency: "INR",
    stock: 150,
    qty: 50,
    ratings: 4.5,
    reviews: 1023,
    description: "6GB RAM, 128GB Storage, 48MP Camera, 5000mAh Battery",
    color: ["Onyx Gray", "Mint Green", "Sunset Purple"],
    discount: 10,
    is_available: true,
    image_url: "https://placehold.co/300x200.webp",
  },
  {
    product_id: "P1002",
    name: "Samsung Galaxy M32",
    category: "Smartphones",
    brand: "Samsung",
    price: 14999,
    currency: "INR",
    stock: 80,
    qty: 30,
    ratings: 4.2,
    reviews: 536,
    description: "4GB RAM, 64GB Storage, 64MP Camera, 6000mAh Battery",
    color: ["Black", "Light Blue", "White"],
    discount: 12,
    is_available: true,
    image_url: "https://placehold.co/300x200.webp",
  },
];

const Product = ({ productList }) => {
  const { image_url, name, description, price, ratings } = productList;
  return (
    <div>
      <div className="bg-background rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
        <img
          src={image_url}
          alt="Eco-friendly Water Bottle"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-primary">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-bold">₹{price}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-gray-600 font-semibold">{ratings}</span>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {inventory.map((products) => {
        return <Product productList={products} key={products.product_id}/>;
      })}
    </div>
  );
};

const pogu = ReactDOM.createRoot(document.getElementById("app"));
pogu.render(
  <div>
    <App />
  </div>
);
