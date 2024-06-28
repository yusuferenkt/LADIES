import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import './giris-yap.css';
import { getUser } from '../scripts/user';

export default function Odeme() {
  const [kartNo, setKartNo] = useState('');
  const [user, setUser] = useState(getUser());

  const [cart, setCart] = useState([]);
  const [cardProducts, setCardProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [subTotals, setSubTotals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const handleCartNumber = (event) => {
    const value = event.target.value.replace(/\s/g, '') // Remove any existing spaces
    .replace(/(\d{4}(?!\s))/g, '$1 ') // Add space after every 4 digits if not followed by a space
    .trim();
    setKartNo(value);
  }

  const getCardIds = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/get/cart?member_id=${user.ID}`);
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const getCardProducts = async () => {
    const cardProductList = [];
    const productQuantities = [];
  
    for (let i = 0; i < cart.length; i++) {
      try {
        const response = await fetch(`http://localhost:3001/api/get/product_id=${cart[i].product_id}`);
        const data = await response.json();
        cardProductList.push(data);
        productQuantities.push(cart[i].quantity);
      } catch (error) {
        console.error(error);
      }
    }
  
    setCardProducts(cardProductList);
    setQuantities(productQuantities);
  };
  
  const getSubTotals = async () => {
    try {
      const subTotalList = cardProducts.map((product, i) => product[0].product_price * quantities[i]);
      setSubTotals(subTotalList);
    } catch (error) {
      console.error(error);
    }
  };
  
  const getTotalPrice = async () => {
    try {
      const total = subTotals.reduce((acc, subTotal) => acc + subTotal, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const cardNo = document.getElementById('kartno').value;
    const month = document.getElementById('tarih1').value;
    const year = document.getElementById('tarih2').value;
    const cvc = document.getElementById('cvv').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const postcode = document.getElementById('postcode').value;
    const cardDate = `${year}-${month}`;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month2 = currentDate.getMonth() + 1;
    const year2 = currentDate.getFullYear();
    const date = `${year2}-${month2}-${day}`;
    const userID = user.ID;
    const orderInfo = {userID, date, totalPrice, address, city, country, postcode};
    let orderID = 0;

    fetch(`http://localhost:3001/api/post/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cardNo, cardDate, cvc, orderInfo})
    }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});


    setTimeout(() => {
      fetch(`http://localhost:3001/api/get/lastOrder?member_id=${userID}`).then(response => response.json()).then(data => {console.log(data);orderID = data[0].ID;console.log(`Order ID:${orderID}`)})
      .then(data => {
        for (var item in cardProducts)
          {
            const itemID = cardProducts[item][0].ID;
            const quantity = quantities[item];
            const unit_price = cardProducts[item][0].product_price;
            const subtotal = quantity * unit_price;
            const orderDetail = {orderID,itemID, quantity, unit_price, subtotal};
            console.log(orderDetail);
            fetch(`http://localhost:3001/api/post/orderDetails`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(orderDetail)
            }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
          }
      })
    },1000);

    fetch(`http://localhost:3001/api/post/delete/cart/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userID})
      }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
    alert("Siparişiniz başarıyla alındı!");
    navigate('/siparislerim');
  };

  useEffect(() => {
    getCardIds();
  }, []);
  
  useEffect(() => {
    getCardProducts();
  }, [cart]);
  
  useEffect(() => {
    getSubTotals();
  }, [cardProducts, quantities]);
  
  useEffect(() => {
    getTotalPrice();
  }, [subTotals]);

  return (
    
    <div>
      <h1>Sipariş Ödeme Sayfası</h1>
      <div className='container text-center'>
            <h2>Sipariş Bilgileriniz</h2>
            <div className='container__forum container__cardinfo'>
              <form onSubmit={onSubmitHandler} className='orderForm'>
                <input type='text' id='kartno' placeholder='Kart Numaranız' minLength={19} maxLength={19} value={kartNo} onChange={handleCartNumber} required/>
                <h5>Kredi Kartı Son Kullanma Tarihi</h5>
                <Row className='justify-content-center'>
                  
                  <Col className='text-center'>
                    <input type='number' id='tarih1' placeholder='Ay' min={1} max={12} required/>
                  </Col>
                  <Col className='text-center'>
                    <input type='number' id='tarih2' placeholder='Yıl' min={2024} max={2099} required/>
                  </Col>
                </Row>
                <input type='password' id='cvv' placeholder='CVV' minLength={3} maxLength={3} required/>
                <textarea id='address' placeholder='Adres Bilgilerinizi Giriniz'></textarea>
                <input type='text' id='city' placeholder='Şehir' required/>
                <input type='text' id='country' placeholder='Ülke' required/>
                <input type='number' id='postcode' placeholder='Posta Kodu' required/>
                <button type='submit'>Ödemeyi Yap</button>
              </form>
            </div>
          </div>
    </div>
  )
}
