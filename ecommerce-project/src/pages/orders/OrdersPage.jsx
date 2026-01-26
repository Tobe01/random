import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { OrdersGrid } from './OrdersGrid';
import "./OrdersPage.css";

export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <OrdersGrid orders={orders} />
    </>
  );
}
