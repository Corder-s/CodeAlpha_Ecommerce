const products = [
{
 id:1,
 name:'Nike Shoes',
 category:'Shoes',
 price:120,
 image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
},
{
 id:2,
 name:'Smart Watch',
 category:'Electronics',
 price:200,
 image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
},
{
 id:3,
 name:'Headphones',
 category:'Electronics',
 price:80,
 image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
},
{
 id:4,
 name:'Leather Jacket',
 category:'Fashion',
 price:150,
 image:'https://images.unsplash.com/photo-1520975954732-35dd22299614'
},
{
 id:5,
 name:'Sneakers',
 category:'Shoes',
 price:99,
 image:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519'
},
{
 id:6,
 name:'Gaming Mouse',
 category:'Electronics',
 price:70,
 image:'https://images.unsplash.com/photo-1527814050087-3793815479db'
}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const productContainer = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const total = document.getElementById('total');
const cartCount = document.getElementById('cart-count');
const search = document.getElementById('search');

function displayProducts(items){

productContainer.innerHTML = '';

items.forEach(product => {

productContainer.innerHTML += `
<div class="card">
<img src="${product.image}">

<div class="card-content">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>Price: $${product.price}</p>
<button onclick="addToCart(${product.id})">Add To Cart</button>
</div>
</div>
`;

});
}

function addToCart(id){

const product = products.find(item => item.id === id);

cart.push(product);

localStorage.setItem('cart', JSON.stringify(cart));

updateCart();

alert('Product Added Successfully');
}

function updateCart(){

cartItems.innerHTML = '';

let grandTotal = 0;
cart.forEach((item,index)=>{

grandTotal += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<div>
<h4>${item.name}</h4>
<p>$${item.price}</p>
</div>

<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

total.innerText = grandTotal;
cartCount.innerText = cart.length;
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem('cart', JSON.stringify(cart));

updateCart();
}

function filterProducts(category){

if(category === 'All'){
 displayProducts(products);
}
else{
 const filtered = products.filter(item => item.category === category);
 displayProducts(filtered);
}
}
search.addEventListener('keyup',()=>{

const value = search.value.toLowerCase();

const filtered = products.filter(item =>
 item.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

window.onload = () => {
 displayProducts(products);
 updateCart();
}