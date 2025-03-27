const cart = {}; 
  
 function addToCart(product_name, product_price) { 
     if (cart[product_name]) { 
         cart[product_name].quantity += 1; 
         cart[product_name].totalPrice += product_price; 
     } else { 
         cart[product_name] = { 
             quantity: 1, 
             totalPrice: product_price 
         }; 
     } 
     updateCartDisplay(); 
 } 
 function removeFromCart(product_name, product_price) { 
     if (cart[product_name]) { 
         cart[product_name].quantity -= 1; 
         if (cart[product_name].quantity <= 0) { 
             delete cart[product_name]; 
         } else { 
             cart[product_name].totalPrice -= product_price; 
         } 
     } 
     updateCartDisplay(); 
 } 
 function updateCartDisplay() { 
     const cartlist = document.getElementById('products'); 
     cartlist.innerHTML = ''; 
     for (let product in cart) { 
         const listItem = document.createElement('li'); 
         listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: Php${cart[product].totalPrice.toFixed(2)}`; 
         cartlist.appendChild(listItem); 
     } 
 }