const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#harga');
const totalElem = document.querySelector('#total');
const subtotalElem = document.querySelectorAll('#subtotal');

for (let i = 0; i < incrementBtn.length; i++) {

   incrementBtn[i].addEventListener('click', function () {
 
     let increment = Number(this.previousElementSibling.textContent);
 
     increment++;
 
     this.previousElementSibling.textContent = increment;
 
     totalCalc();
 
   });

   decrementBtn[i].addEventListener('click', function () {

      let decrement = Number(this.nextElementSibling.textContent);
  
      decrement <= 1 ? 1 : decrement--;
  
      this.nextElementSibling.textContent = decrement;
  
      totalCalc();
  
    });
  
  }

  const totalCalc = function () {

   let subtotal = 0;
   let total = 0;
   const shipping= 15000 ;
 
  for (let i = 0; i < quantityElem.length; i++) {

   subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

   }

   subtotalElem.textContent = subtotal;

   total = subtotal + shipping;

   totalElem.textContent = total.toFixed(2);
   payAmountBtn.textContent = total.toFixed(2);

   }