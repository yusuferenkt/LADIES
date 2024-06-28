import React, {useState, useEffect} from 'react'
import { getUser } from '../scripts/user';

export default function Favorite() {
    const [user, setUser] = useState(getUser());
    const [favs, setFavs] = useState([]);
    const [favList, setFavList] = useState([]);
    const favtoggleModal = () => {
        const favModalEl = document.querySelector(".fav__modal");
        favModalEl.classList.toggle("active");
      };
    
      const deleteFromFav = (index) => {
        fetch('http://localhost:3001/api/post/delete/fav', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({member_id: user.ID, product_id: favs[index].product_id})
        }).then(response => response.json()).then(data => {console.log(data);}).catch(error => {console.error(error)});
        alert(`Ürün başarıyla favori listenizden çıkarıldı!`);
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(`http://localhost:3001/api/get/favs?member_id=${user.ID}`);
                const data = await response.json();
                setFavs(data);
            } catch(error) {
                console.error(error);
            }
        };
        fetchData();
    }, [user.userID]);

    useEffect(() => {
        const fetchFavList = async() => {
            const favListe = [];
            for (let i = 0; i < favs.length; i++) {
                try{
                    const response = await fetch(`http://localhost:3001/api/get/product_id=${favs[i].product_id}`);
                    const data = await response.json();
                    favListe.push(data);
                } catch (error) {
                    console.error(error);
                }
                
            }
            setFavList(favListe);
        };
        fetchFavList();
    }, [favs]);

    useEffect(() => {

    },[favList]);

  return (
    <div className='fav__modal'>
        <div className='fav__items'>
            <i className='bi bi-x' onClick={favtoggleModal}></i>
            <h2 className='fav__title'>Favoriler</h2>
            <ul className='fav__list'>
                {
                    (favList.length > 0)
                    ?
                    favList.map((item,index) => (
                        <li className='fav__item'>{item[0].product_name} <i className='del-x' onClick={() => deleteFromFav(index)}>X</i></li> 
                    ))
                    :
                    <li className='fav__item'>Favori ürününuz yok.</li>
                }
            </ul>
        </div>
    </div>
  )
}
