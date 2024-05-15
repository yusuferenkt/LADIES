
  
  // Form submit eventi
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  
    // Formdaki verileri al
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const randomContact = document.getElementById('randomContact').value;
    const complaint = document.getElementById('complaint').value;
  
    // Verileri konsola yazdır (gerçek uygulamada burada bir işlem yapılabilir)
    console.log('Ad:', firstName);
    console.log('Soyad:', lastName);
    console.log('E-posta:', email);
    console.log('Telefon Numarası:', phone);
    console.log('Rastgele İletişim Numarası:', randomContact);
    console.log('Şikayetiniz:', complaint);
  
    // Burada verileri bir sunucuya gönderebilir veya başka bir işlem yapabilirsiniz
  });