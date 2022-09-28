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
<div class="card-button"> <span> pulsuz çatdırılma </span></div>`
popularProducts.appendChild(card)
})
