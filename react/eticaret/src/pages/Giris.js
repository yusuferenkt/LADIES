import React from 'react'
import { useNavigate } from 'react-router-dom';
import './giris-yap.css';

export default function Giris() {
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = document.getElementById('eposta').value;
        const password = document.getElementById('sifre').value;

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        }).then(response => response.json())
        .then(data => {
            if(data.length == 1){
                localStorage.setItem('member', JSON.stringify(data[0]));
                navigate('/');
            }
        })
    }
  return (
    <div className='container right-panel-active'>
        <div className='container__forum container--signin'>
            <form onSubmit={onSubmitHandler}>
                <h2>Giriş Yap</h2>
                <input type='email' id='eposta' placeholder='E-Posta' required/>
                <input type='password' id='sifre' placeholder='Sifre' required/>
                <button type='submit'>Giriş Yap</button>
                <p>Hesabınız yok mu? <a href='/kayit-ol'>Kayıt Ol</a></p>
            </form>
        </div>
    </div>
  )
}
