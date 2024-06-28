import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap'
import './giris-yap.css';
import './kisisel.css';
import { getUser } from '../scripts/user';

export default function İletisim() {
    const [user, setUser] = useState({});
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const customer = {firstName, lastName, email, phone, message};
        fetch('http://localhost:3001/api/post/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then(response => response.json())
        .then(data => {
                console.log(data);
            })
        alert("Mesajınız alındı. Geri dönüşünüz için teşekkür ederiz.");
    }
    useEffect(() => {
        setUser(getUser());
    },[]);
  return (
    <div>
        <div className='container text-center'>
            <h1>İletişim ve Şikayet Formu</h1>
            <form onSubmit={onSubmitHandler} id="contactForm">
                <div className='form-group'>
                    <label htmlFor='firstName'>Ad:</label>
                    <div className="input-group xx-3">
                        <input type='text' id="firstName" value={user.firstName ? user.firstName : ''} required></input>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Soyad:</label>
                    <div className='input-group xx-3'>
                        <input type='text' id='lastName' value={user.lastName ? user.lastName : ''} required></input>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-posta:</label>
                    <div className='input-group xx-3'>
                        <input type='email' id='email' value={user.email ? user.email : ''} required></input>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Telefon:</label>
                    <div className='input-group xx-3'>
                        <input type='tel' id='phone' value={user.phone ? user.phone : ''} required></input>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Mesajınız/Şikayetiniz:</label>
                    <div className='input-group xx-3'>
                        <textarea id='message' required></textarea>
                    </div>
                </div>
                <div className='form-group'>
                    <button type='submit'>Gönder</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}
