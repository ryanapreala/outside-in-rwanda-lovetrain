import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, submitOrder } from "../actions";
import ProductList from "./ProductList";
import "../styles/main.css";

const OrderForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [senderLocation, setSenderLocation] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [receiverContact, setReceiverContact] = useState("");
  const [receiverLocation, setReceiverLocation] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      senderName,
      senderEmail,
      senderContact,
      senderLocation,
      receiverName,
      receiverEmail,
      receiverContact,
      receiverLocation,
      products: selectedProducts,
    };
    dispatch(submitOrder(order));
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2 className="order-form-title">Sender Details</h2>
      <div className="order-form-input-group">
        <label htmlFor="senderName">Name</label>
        <input
          type="text"
          id="senderName"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />
      </div>
      <div className="order-form-input-group">
        <label htmlFor="senderEmail">Email</label>
        <input
          type="email"
          id="senderEmail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
      </div>
      <div className="order-form-input-group">
        <label htmlFor="senderContact">Contact</label>
        <input
          type="text"
          id="senderContact"
          value={senderContact}
          onChange={(e) => setSenderContact(e.target.value)}
        />
      </div>
      <div className="order-form-input-group">
        <label htmlFor="senderLocation">Location</label>
        <input
          type="text"
          id="senderLocation"
          value={senderLocation}
          onChange={(e) => setSenderLocation(e.target.value)}
        />
      </div>

      <h2 className="order-form-title">Receiver Details</h2>
      <div className="order-form-input-group">
        <label htmlFor="receiverName">Name</label>
        <input
          type="text"
          id="receiverName"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
      </div>
      <div className="order-form-input-group">
        <label htmlFor="receiverEmail">Email</label>
        <input
          type="email"
          id="receiverEmail"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
        />
      </div>
      <div className="order-form-input-group">
        <label htmlFor="receiverContact">Contact</label>
        <input
          type="text"
          id="receiverContact"
          value={receiverContact}
          onChange={(e) => setReceiverContact(e.target.value)}
        />
      </div>
      <h2>Products</h2>
      <ProductList
        products={products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <button type="submit">Order</button>
    </form>
  );
};

export default OrderForm;
