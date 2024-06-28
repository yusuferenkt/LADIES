import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, List, NavLink, Navbar} from 'reactstrap';
import { getUser } from '../scripts/user';

export default function Header() {
    const user = getUser();
    const navigate = useNavigate();
    const toggleModal = () => {
        const basketModalEl = document.querySelector(".basket__modal");
        basketModalEl.classList.toggle("active");
      };
    
    const favtoggleModal = () => {
        const favModalEl = document.querySelector(".fav__modal");
        favModalEl.classList.toggle("active");
      };

    const onSearchHandler = (event) => {
        event.preventDefault();
        const searchText = document.getElementsByClassName('arama')[0].value;
        navigate(`/arama/${searchText}`);
    }

    const logout = () => {
        localStorage.removeItem('member');
        navigate('/giris-yap');
    }
  return (
    <div>
        <Navbar>
            <NavLink href="/"><h2 className='title'>LADIES</h2></NavLink>
            <div className='arama-main'>
                <input type='text' className='arama' placeholder='Ürün, marka, kategori ara...'></input>
                <a className='arama-bttn'>
                    <i onClick={onSearchHandler} className='bi bi-search'></i>
                </a>
            </div>
            {
                localStorage.getItem('member') ? <a><Button onClick={logout} className='profil' type='submit'>{user.firstName} {user.lastName} (Çıkış Yap)</Button></a> : <a href='/giris-yap'><Button className='giris-yap' type='submit'>Giriş Yap / Kayıt Ol</Button></a>
            }
            {
                localStorage.getItem('member') ?
                <ul className='menu__icons'>
                    <a href='/kisisel-bilgiler'>
                        <li><i className='bi bi-person' title='Kişisel Bilgiler'></i></li>
                    </a>
                    <a href='/siparislerim'>
                        <li><i className='bi bi-box2-heart' title='Siparişlerim'></i></li>
                    </a>
                    <a href='/iletisim-sikayet'>
                        <li><i class="bi bi-telephone" title='İletişim ve Şikayet Formu'></i></li>
                    </a>
                    <li className='basket__icon'>
                        <i className="bi bi-bag" onClick={toggleModal} title='Sepetim'></i>
                    </li>
                    <li className='fav__icon'>
                        <i className="bi bi-heart" onClick={favtoggleModal} title='Favorilerim'></i>
                        <span className='fav__count'></span>
                    </li>
                </ul> : null 
            }
        </Navbar>
    </div>
  )
}
