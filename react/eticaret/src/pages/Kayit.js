import React from 'react';
import { useNavigate } from 'react-router-dom';
import './kayıt-ol.css';

export default function Kayit() {
    const navigate = useNavigate();
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const ad = document.getElementById('ad').value;
        const soyad = document.getElementById('soyad').value;
        const email = document.getElementById('eposta').value;
        const password = document.getElementById('sifre').value;
        const confirm_password = document.getElementById('sifre-2').value;
        if (password === confirm_password) {
            fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ad,soyad,email,password})
            }).then(response => response.json())
            .then(data => {
                if(data.length > 0){
                    alert("Kaydınız başarıyla yapıldı! Ladies'e hoşgeldiniz!");

                    fetch('http://localhost:3001/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email,password})
                    }).then(response => response.json())
                    .then(data => {
                        if(data.length === 1){
                            localStorage.setItem('member', JSON.stringify(data[0]));
                            navigate('/');
                        }
                    })
                }
            })
        }
    }
  return (
    <div className='container right-panel-active'>
        <div className='container__forum container--signin'>
            <form onSubmit={onSubmitHandler}>
                <h2>Kayıt Ol</h2>
                <input type='text' id='ad' placeholder='Adınız' required/>
                <input type='text' id='soyad' placeholder='Soyadınız' required/>
                <input type='email' id='eposta' placeholder='E-Posta' required/>
                <input type='password' id='sifre' placeholder='Şifre' required/>
                <input type='password' id='sifre-2' placeholder='Şifreyi Doğrulayın' required/>
                <button type='submit'>Kayıt Ol</button>
                <p>Hesabınız var mı? <a href='/giris-yap'>Giriş Yap</a></p>
            </form>
        </div>
    </div>
  )
}
