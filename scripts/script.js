
const popularProducts = document.querySelector('.cards')
const products = [
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price : 2389.99,
        moneyOfMonth : 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price : 2389.99,
        moneyOfMonth : 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price : 2389.99,
        moneyOfMonth : 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price : 2389.99,
        moneyOfMonth : 450,
    }
]
products.map(item=>{
    const card = document.createElement('div')
    card.className = 'card'
   card.innerHTML = `<div class="top">
   <img src="${item.image}" alt="product-image">
</div>
<div class="product-name">
   <span>${item.name}</span>
</div>
<div class="price-product">
   <div class="price">
       <span>${item.price}₼</span>
   </div>
   <div class="credit">
       <span class="percent">0%</span>
       <span class="money-of-month">18 ay, ${item.moneyOfMonth}₼</span>
   </div>
</div>
<div class="card-button"> <span> pulsuz çatddırılma </span></div>`
popularProducts.appendChild(card)
})

var swiper = new Swiper(".mySwiper", {
        slidesPerView:4,
        spaceBetween: 2,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      const displayContacts = document.querySelector('#showContact')
      const contactIcon = document.querySelector('#contactIcon')
      const locationContact = document.querySelector('.reLocation')
      const mailContact = document.querySelector('.reMail')
      
      displayContacts.addEventListener('click', showContacts)
      function showContacts() {
          if (contactIcon.classList == 'ri-arrow-right-s-line') {
              contactIcon.classList.remove("ri-arrow-right-s-line")
              contactIcon.classList.add("ri-arrow-down-s-line")
              locationContact.style.display = 'flex'
              mailContact.style.display = 'flex'
      
          }
          else {
              contactIcon.classList.remove("ri-arrow-down-s-line")
              contactIcon.classList.add("ri-arrow-right-s-line")
              locationContact.style.display = 'none'
              mailContact.style.display = 'none'
      
          }
      }
      const displayBusiness = document.querySelector('#showBusiness')
      const businessIcon = document.querySelector('#businessIcon')
      const contentBusiness = document.querySelector('.reBusiness')
      
      displayBusiness.addEventListener('click', showBusiness)
      function showBusiness() {
          if (businessIcon.classList == 'ri-arrow-right-s-line') {
              businessIcon.classList.remove("ri-arrow-right-s-line")
              businessIcon.classList.add("ri-arrow-down-s-line")
              contentBusiness.style.display = 'block'
          }
          else {
              businessIcon.classList.remove("ri-arrow-down-s-line")
              businessIcon.classList.add("ri-arrow-right-s-line")
              contentBusiness.style.display = 'none'
          }
      }
      const displayCustomers = document.querySelector('#showCustomers')
      const customerIcon = document.querySelector('#customerIcon')
      const contentCustomer = document.querySelector('.reCustomers')
      
      displayCustomers.addEventListener('click', showCustomers)
      function showCustomers() {
          if (customerIcon.classList == 'ri-arrow-right-s-line') {
              customerIcon.classList.remove("ri-arrow-right-s-line")
              customerIcon.classList.add("ri-arrow-down-s-line")
              contentCustomer.style.display = 'block'
          }
          else {
              customerIcon.classList.remove("ri-arrow-down-s-line")
              customerIcon.classList.add("ri-arrow-right-s-line")
              contentCustomer.style.display = 'none'
          }
      }
      