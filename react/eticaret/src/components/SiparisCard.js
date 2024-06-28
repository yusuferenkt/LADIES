import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

export default function SiparisCard(props) {
  const [order, setOrder] = useState(props.order);
  const [orderProducts, setOrderProducts] = useState([]);
  const [productSpecifications, setProductSpecifications] = useState([]);

  const getOrderProducts = async () => {
    const response = await fetch(
      `http://localhost:3001/api/get/orders/products/${order.ID}`
    );
    const data = await response.json();
    setOrderProducts(data);
  };

  const deleteOrder = (order_id) => {
    fetch(`http://localhost:3001/api/delete/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`http://localhost:3001/api/delete/orderDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    alert("Siparişiniz iptal edildi.");
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/api/get/orders/products/${order.ID}`
      );
      const data = await response.json();
      setOrderProducts(data);
      console.log(data);
    };
    fetchData();
  }, [order.ID]);

  useEffect(() => {
    const fetchData = async () => {
      const specifications = [];
      for (const product of orderProducts) {
        const response = await fetch(
          `http://localhost:3001/api/get/product_id=${product.product_id}`
        );
        const data = await response.json();
        specifications.push(data);
      }
      setProductSpecifications(specifications);
      console.log(specifications);
    };
    if (orderProducts.length > 0) {
      fetchData();
    }
  }, [orderProducts]);

  return (
    <Card className="ladies-card">
      <CardBody>
        <CardTitle className="ladies-card-title" tag={"h4"}>
          Sipariş Detayları
        </CardTitle>
        <h5>
          <b>Ürünler</b>
        </h5>
        {productSpecifications.map((product, index) => (
          <div key={index}>
            <p>
              <b>Ürün {index + 1}:</b> {product[0].product_name}
            </p>
          </div>
        ))}
        {/* {
                    productSpecifications[0].map((product, index) => (
                        <div key={index}>
                            <p>{product.product_name}</p>
                        </div>
                    ))
                } */}
        <p className="ladies-card-order-text">
          <b>Sipariş Kodu:</b> {order.ID}
        </p>
        <p className="ladies-card-order-text">
          <b>Teslim Edileceği Adres:</b> {order.order_address} (
          {order.order_city}, {order.order_country}, Posta kodu:{" "}
          {order.post_code})
        </p>
        <p className="ladies-card-order-text">
          <b>Sipariş Tarihi:</b>{" "}
          {new Date(order.order_date).toISOString().split("T")[0]}
        </p>
        <p className="ladies-card-order-text">
          <b>Toplam Tutar:</b> {order.total_amount} $
        </p>
        <button onClick={() => deleteOrder(order.ID)} type="submit">
          İade Et
        </button>
      </CardBody>
    </Card>
  );
}
