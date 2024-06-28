import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'
import './giris-yap.css';
import './kisisel.css';
import { getUser, loadUser } from '../scripts/user';

export default function Kisisel() {
  const [user, setUser] = useState({});
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const userID = user.ID;
    const member = {userID, firstName, lastName, gender, birthdate, email, phone};
    fetch(`http://localhost:3001/update/id=${user.ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName, lastName, gender, birthdate, email, phone, userID})
    }).then(response => response.json())
    .then(data => {
      console.log(data);
    })
    if(user != "None")
    {
      loadUser(member);
      alert("Kişisel bilgileriniz kaydedildi!");
    }
  }
  useEffect(() => {
    setUser(getUser());
  },[]);
  return (
    <div className='text-center'>
      <Container>
        <h1>Kişisel Bilgiler</h1>
        <form onSubmit={onSubmitHandler} id='personalInfoForm'>
          <div className='form-group'>
            <label for="firstName">Ad:</label>
            <div className="input-group xx-3">
              <input type="text" id="firstName" value={user.firstName ? user.firstName : undefined} required/>
            </div>
          </div>
          <div className='form-group'>
            <label for="lastName">Soyad:</label>
            <div className='input-group xx-3'>
              <input type='text' id="lastName" value={user.lastName ? user.lastName : undefined} required/>
            </div>
          </div>
          <div class="form-group">
            <label for="gender">Cinsiyet:</label>
            <select id="gender" defaultValue={user.gender ? user.gender : undefined}>
              <option value="0">Erkek</option>
              <option value="1">Kadın</option>
              <option value="NULL">Diğer</option>
            </select>
          </div>
          <div class="form-group">
            <label for="birthdate">Doğum Tarihi:</label>
            <div className='input-group xx-3'>
              <input type="date" id="birthdate" value={user.birthdate ? user.birthdate : undefined} required/>
            </div>
          </div>
          <div class="form-group">
            <label for="email">E-posta:</label>
            <div className='input-group xx-3'>
              <input type="email" id="email" value={user.email ? user.email : undefined} required/>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Telefon Numarası:</label>
            <div className='input-group xx-3'>
              <input type="tel" id="phone" value={user.phone ? user.phone : undefined} required/>
            </div>
          </div>
          <button type="submit">Kaydet</button>
        </form>
      </Container>
    </div>
  )
}
