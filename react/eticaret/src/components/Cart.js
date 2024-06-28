import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../scripts/user';
import { cartChanged, didCartChange } from '../scripts/didChange';

export default function Cart() {
    const [card, setCard] = useState([]);
    const [cardProducts, setCardProducts] = useState([]);
    const [user, setUser] = useState(getUser());
    const [quantities, setQuantities] = useState([]);

    const navigate = useNavigate();

    const toggleModal = () => {
        const basketModalEl = document.querySelector(".basket__modal");
        basketModalEl.classList.toggle("active");
      };
    
    const getCardIds = async() => {
        try {
            const response = await fetch(`http://localhost:3001/api/get/cart?member_id=${user.ID}`);
            const data = await response.json();
            console.log("helo");
            setCard(data);
            
        } catch (error) {
            console.error(error);
        }
    }

    const getCardProducts = async() => {
        const cardProductList = [];
        const productQuantities = [];

        for (let i = 0; i < card.length; i++) {
            try {
                const response = await fetch(`http://localhost:3001/api/get/product_id=${card[i].product_id}`);
                const data = await response.json();
                cardProductList.push(data);
                productQuantities.push(card[i].quantity);
            } catch (error) {
                console.error(error);
            }
        }
        setCardProducts(cardProductList);
        setQuantities(productQuantities);
    }

    const deleteFromCart = (index) => {
        fetch('http://localhost:3001/api/post/delete/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({member_id: user.ID, product_id: card[index].product_id})
        }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
        alert(`Ürün başarıyla sepetinizden çıkarıldı!`);
        window.location.reload();
    }

    const onOrderHandler = (event) => {
        event.preventDefault();
        const confirmation = window.confirm("Siparişi vermek istediğinizden emin misiniz?");
        if(confirmation) {
            navigate('/odeme');
            toggleModal();
        }
    }

      useEffect(() => {

        getCardIds();
    }, [user.userID]);
    
    useEffect(() => {
    
        if (card.length > 0) {
            getCardProducts();
        }
    }, [card]);


  return (
    <div className='basket__modal'>
        <div class="basket__items">
            <i class="bi bi-x" onClick={toggleModal}></i>
            <h2 class="basket__title">Sepetteki Ürünler</h2>
            <ul class="basket__list">
                {
                    (cardProducts.length > 0)
                    ?
                    cardProducts.map((item, index) => (
                        <li className='basket__item'>
                            {item[0].product_name} ({quantities[index]} adet) - { (item[0].product_price) * quantities[index] }$ <i className='del-x' onClick={() => deleteFromCart(index)}>X</i>
                        </li>
                    ))
                    :
                    <li className="basket__item">Sepetinizde ürün yok!</li>   
                }
            </ul>
            {
                (cardProducts.length > 0)
                ?
                <div className="basket__total">
                    <button onClick={onOrderHandler} className="basket__checkout">Sipariş Ver</button>
                    <br/>
                    <p className="basket__total-title">Toplam</p>
                    <p className="basket__total-price">{cardProducts.reduce((total, item, index) => total + item[0].product_price * quantities[index], 0)} $</p>
                </div>
                :
                <></>
            }            
        </div>
    </div>
  )
}
