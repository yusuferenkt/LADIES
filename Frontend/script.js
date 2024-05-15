document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
   
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
   
    console.log('Ad:', firstName);
    console.log('Soyad:', lastName);
    console.log('Cinsiyet:', gender);
    console.log('Doğum Tarihi:', birthdate);
    console.log('E-posta:', email);
    console.log('Telefon Numarası:', phone);
  
  });