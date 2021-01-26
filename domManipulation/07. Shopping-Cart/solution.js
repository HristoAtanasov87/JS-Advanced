function solve() {
   const addButtonsArray = Array.from(document.getElementsByClassName('add-product'));
   const checkoutButtonRef = document.querySelector('.checkout');
   const textAreaRef = document.querySelector('textarea');

   addButtonsArray.forEach(el => {
      el.addEventListener('click', addProduct);
   })

   checkoutButtonRef.addEventListener('click', checkout);

   let cart = {};

   function addProduct(ev) {
      productName = ev.target.parentNode.parentNode.querySelector('.product-title').textContent;
      productPrice = Number(ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent);

      if (!cart.hasOwnProperty(productName)) {
         cart[productName] = 0;
      }
      cart[productName] += productPrice;
      textAreaRef.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkout(ev) {
      let totalPrice = 0;
      let productsArray = [];

      for (let product in cart) {
         productsArray.push(product);
         totalPrice += cart[product];
      }

      textAreaRef.value += `You bought ${productsArray.join(', ')} for ${totalPrice.toFixed(2)}.`;


      addButtonsArray.forEach(el => {
         el.removeEventListener('click', addProduct);
      });

      checkoutButtonRef.removeEventListener('click', checkout);
   }
}