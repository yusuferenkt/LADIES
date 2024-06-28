import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card,CardBody,CardTitle,CardText, Button } from 'reactstrap'
import { didCartChange, setCartChange, setFavChange } from '../scripts/didChange';
import { getUser } from '../scripts/user';


export default function ProductCard({product}) {
    const [user, setUser] = useState(getUser());
    const navigate = useNavigate();
    // const imagePath = require(`${}`).default;
    const onClickHandler = () => {
        navigate(`${product.product_route}`);
    }

    const onCartHandler = (event) => {
        event.preventDefault();
        if(user != "None")
        {
            const member_id = user.ID;
            const product_id = product.ID;
    
            let quantity = 0;
            // alert(`http://localhost:3001/api/get/quantity?member_id=${member_id}&product_id=${product_id}`);
            // fetch(`http://localhost:3001/api/get/quantity?member_id=${member_id}&product_id=${product_id}`).then(response => response.json()).then(data => {quantity = (data[0].quantity);}).catch(error => {console.error(error)});
            fetch('http://localhost:3001/api/post/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({member_id,product_id})
            }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
            alert(`${product.product_name} ürününüz başarıyla sepete eklendi!`);
            window.location.reload();
        }
        else
        {
            alert("Ürünü sepete ekleyebilmek için üye olmanız gerekli!");
            navigate('/giris-yap');
        }
    }

    const onFavHandler = (event) => {
        event.preventDefault();
        if(user != "None")
            {
                const member_id = user.ID;
                const product_id = product.ID;
                fetch('http://localhost:3001/api/post/fav', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({member_id,product_id})
                }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
                alert(`${product.product_name} ürünü başarıyla favorilere eklendi!`);
                window.location.reload();
            }
            else
            {
                alert("Ürünü sepete ekleyebilmek için üye olmanız gerekli!");
                navigate('/giris-yap');
            }
        
    }
  return (
    <div>
        <Card className='ladies-card'>
            <img onClick={onClickHandler} width={"400"} height={"400"} src={product.image_source} alt={product.product_name}></img>
            <CardBody>
                <CardTitle onClick={onClickHandler} className='ladies-card-title' tag={'h5'}>
                    {product.product_name}
                </CardTitle>
                <CardText onClick={onClickHandler} className="ladies-card-text">
                    {product.product_description} 
                </CardText>
                <div onClick={onClickHandler}>
                    <span class="black fw-bold fs-4 me-2">{product.product_price}$</span>
                </div>
                <Button onClick={onCartHandler} className='card-btn btn__purple'>SEPETE EKLE</Button>
                <Button onClick={onFavHandler} className='card-btn favorite-btn'>Favorilere Ekle</Button>
            </CardBody>
        </Card>
    </div>
  )
}
