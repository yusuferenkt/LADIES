import React, { useState, useEffect } from "react";
import { getUser } from "../scripts/user";
import SiparisCard from "../components/SiparisCard";

export default function Siparis() {
  const [user, setUser] = useState(getUser());
  const [orders, setOrders] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [productSpecifications, setProductSpecifications] = useState([]);

  const getOrders = () => {
    fetch(`http://localhost:3001/api/get/orders/${user.ID}`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const getOrderProducts = (order_id) => {
  //     fetch(`http://localhost:3001/api/get/orders/products/${order_id}`).then(response => response.json()).then(data => {setOrderProducts(data);console.log(data);}).catch(error => {console.error(error)});
  //   };

  // const getOrders = () => {
  //     fetch(`http://localhost:3001/api/get/orders/${user.userID}`).then(response => response.json()).then(data => {setOrders(data);console.log(data[0].ID);}).catch(error => {console.error(error)});
  // }

  // const getOrderProducts = (order_id) => {
  //     return fetch(`http://localhost:3001/api/get/orders/products/${order_id}`)
  //       .then((response) => response.json())
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   const getProductSpecifications = (product_id) => {
  //     return fetch(`http://localhost:3001/api/get/product_id=${product_id}`)
  //     .then((response) => response.json())
  //     .catch((error) => {
  //         console.error(error);
  //     });
  // };

  useEffect(() => {
    getOrders();
  }, []);

  // useEffect(() => {
  //     if (orders.length > 0) {
  //       const orderProducts = [];
  //       for (const order of orders) {
  //         getOrderProducts(order.ID)
  //           .then((data) => {
  //             orderProducts.push(data);
  //             if (orderProducts.length === orders.length) {
  //               setOrderProducts(orderProducts);
  //               console.log(orderProducts);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //       }
  //     }
  //   }, [orders]);

  //   useEffect(() => {
  //     if (orderProducts.length > 0) {
  //         const productSpecs = [];
  //         for (const order of orderProducts) {
  //             for(const product of order) {
  //                 console.log(product);
  //                 getProductSpecifications(product.product_id)
  //                 .then((data) => {
  //                     console.log(data);
  //                     productSpecs.push(data[0]);
  //                     if (productSpecs.length === orderProducts.length) {
  //                         setProductSpecifications(productSpecs);
  //                         console.log(productSpecs);
  //                     }
  //                 })
  //                 .catch((error) => {
  //                     console.error(error);
  //                 });
  //             }

  //         }
  //   }}, [orderProducts]);

  return (
    <div>
      <h1>Geçmiş Siparişlerim</h1>
      {orders.map((order, index) => {
        return <SiparisCard key={order.ID} order={order} />;
      })}
    </div>
  );
}
