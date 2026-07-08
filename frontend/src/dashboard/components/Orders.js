import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { apiClient } from "../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      console.log("📡 Fetching orders...");
      
      // Use /allOrders endpoint (matches your backend)
      const response = await apiClient.get("/allOrders");
      console.log("✅ Orders fetched:", response.data);
      setOrders(response.data);
      setError(null);
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGetStarted = () => {
    generalContext.openBuyWindow("INFY");
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get mode color
  const getModeColor = (mode) => {
    return mode === 'BUY' ? '#28a745' : '#dc3545';
  };

  if (loading) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p style={{ color: 'red' }}>{error}</p>
          <button type="button" className="btn" onClick={fetchOrders}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <button type="button" className="btn" onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3>Orders ({orders.length})</h3>
      
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Instrument</th>
              <th>Mode</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const total = (order.qty || 0) * (order.price || 0);
              return (
                <tr key={order._id}>
                  <td>{formatDate(order.createdAt)}</td>
                  <td>
                    <strong>{order.name}</strong>
                  </td>
                  <td style={{ color: getModeColor(order.mode), fontWeight: 'bold' }}>
                    {order.mode}
                  </td>
                  <td>{order.qty}</td>
                  <td>${(order.price || 0).toFixed(2)}</td>
                  <td>${total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="row">
        <div className="col">
          <h5>{orders.filter(o => o.mode === 'BUY').length}</h5>
          <p>Buy Orders</p>
        </div>
        <div className="col">
          <h5>{orders.filter(o => o.mode === 'SELL').length}</h5>
          <p>Sell Orders</p>
        </div>
        <div className="col">
          <h5>{orders.length}</h5>
          <p>Total Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;