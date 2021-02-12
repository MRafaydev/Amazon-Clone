import React, { useState, useEffect } from "react";
import { db } from "../Authentication/firebase";
import { useStateValue } from "../Utils/StateProvider";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snap) => {
        setOrders(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;