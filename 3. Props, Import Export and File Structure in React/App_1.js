import React from "react";
import ReactDOM from "react-dom/client";

const Product = (props) => {
  const {title, price} = props;
  return (
    <div>
      <div className="bg-background rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
        <img
          src="https://placehold.co/300x200/png"
          alt="Eco-friendly Water Bottle"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Reusable, BPA-free water bottle made from recycled materials.
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-bold">₹{price}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-gray-600 font-semibold">4.5</span>
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
      <Product title="3L. Water Bottle" price="199" />
      <Product title="4L. Water Bottle" price="299" />
      <Product title="2L. Water Bottle" price="99" />
      <Product title="1L. Water Bottle" price="49" />
      <Product title="5L. Water Bottle" price="499" />
    </div>
  );
};

const pogu = ReactDOM.createRoot(document.getElementById("app"));
pogu.render(
  <div>
    <App />
  </div>
);
