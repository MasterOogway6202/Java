const items = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Cherry", price: 2.0 }
  ];
  
  let cart = [];
  
  const itemsContainer = document.getElementById("items-container");
  const cartContainer = document.getElementById("cart-container");
  const totalDisplay = document.getElementById("total");
  
  function renderItems() {
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}')">Add to Cart</button>
      `;
      itemsContainer.appendChild(div);
    });
  }
  
  function addToCart(name) {
    const item = items.find(i => i.name === name);
    cart.push(item);
    updateCart();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <h4>${item.name}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartContainer.appendChild(div);
      total += item.price;
    });
  
    totalDisplay.textContent = total.toFixed(2);
    updateCartMessage();
  }
  
  function updateCartMessage() {
    const message = document.getElementById("empty-message");
    message.textContent = cart.length === 0 ? "Cart is empty" : "";
  }
  
  renderItems();
  updateCart();
  