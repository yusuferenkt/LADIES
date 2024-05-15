const orders = [
    {
      orderNumber: 'ORD123456',
      date: '2024-05-01',
      items: [
        { name: '24-HR Brow Setter - Kaş Sabitleyici', image: './assets/images/ürünler/benefit-kas-sabitleyici.jpg' },
        { name: "J'adore L'Or - Essence de Parfum", image: './assets/images/ürünler/jadore.jpeg' }
      ],
      address: {
        firstName: 'Ekin',
        lastName: 'Kadir',
        phone: '555-123-4567',
        address: 'Yavuzlar Mah. 8810 Cad. No: 123',
        city: 'İstanbul',
        country: 'Türkiye',
        postalCode: '34000'
      }
    },
    {
      orderNumber: 'ORD789012',
      date: '2024-04-15',
      items: [
        { name: 'Rénergie H.C.F Triple Göz Serumu - Anti-Aging Serum', image: './assets/images/ürünler/lancome.jpg' }
      ],
      address: {
        firstName: 'Ekin',
        lastName: 'Kadir',
        phone: '555-123-4567',
        address: 'Köstebek Mah. 89 Cad. No: 456',
        city: 'Ankara',
        country: 'Türkiye',
        postalCode: '06000'
      }
    }
  ];
  
  
  const orderHistory = document.getElementById('orderHistory');
  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.classList.add('order');
  
    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');
  
    
    const itemsList = document.createElement('div');
    order.items.forEach(item => {
      const itemDiv = document.createElement('div');
      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemDiv.appendChild(itemImage);
      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      itemDiv.appendChild(itemName);
      itemsList.appendChild(itemDiv);
    });
  
 
    const orderInfo = document.createElement('div');
    orderInfo.classList.add('order-info');
    orderInfo.innerHTML = `
      <p><strong>Sipariş Numarası:</strong> ${order.orderNumber}</p>
      <p><strong>Sipariş Tarihi:</strong> ${order.date}</p>
    `;
  
   
    const orderAddress = document.createElement('div');
    orderAddress.classList.add('order-address');
    orderAddress.innerHTML = `
      <p><strong>Adı Soyadı:</strong> ${order.address.firstName} ${order.address.lastName}</p>
      <p><strong>Telefon Numarası:</strong> ${order.address.phone}</p>
      <p><strong>Adres:</strong> ${order.address.address}</p>
      <p><strong>Şehir:</strong> ${order.address.city}</p>
      <p><strong>Ülke:</strong> ${order.address.country}</p>
      <p><strong>Posta Kodu:</strong> ${order.address.postalCode}</p>
    `;
  
    orderDetails.appendChild(itemsList);
    orderDetails.appendChild(orderInfo);
    orderDetails.appendChild(orderAddress);
    orderDiv.appendChild(orderDetails);
  
    orderHistory.appendChild(orderDiv);
  });