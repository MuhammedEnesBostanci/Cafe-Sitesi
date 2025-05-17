
AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});



AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});


AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});


AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});


AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});


AOS.init({
  duration: 800,   
  once: true,      
  disable: false,  
  offset: 120      
});


document.addEventListener('DOMContentLoaded', () => {
  // Tüm sepete ekle butonlarını seç
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cardBody = button.closest('.card-body');

      // Ürün ismi ve fiyatını bul
      const productName = cardBody.querySelector('.card-title').innerText.trim();
      const priceText = cardBody.querySelector('.text-muted').innerText.trim();
      
      // Fiyatı sayı olarak al (örn: "₺114,75" -> 114.75)
      const price = parseFloat(priceText.replace('₺', '').replace(',', '.'));

      // Adeti al
      const quantityInput = cardBody.querySelector('.quantity-input');
      let quantity = parseInt(quantityInput.value);

      if (!quantity || quantity < 1) quantity = 1;

      // Sepeti localStorage'dan al
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Ürün zaten sepette varsa adetini artır, yoksa yeni ürün ekle
      const existingProductIndex = cart.findIndex(item => item.name === productName);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
      } else {
        cart.push({ name: productName, price: price, quantity: quantity });
      }

      // Sepeti localStorage'a kaydet
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${productName} sepete eklendi! Adet: ${quantity}`);

      console.log('Güncel Sepet:', cart);
    });
  });
});


