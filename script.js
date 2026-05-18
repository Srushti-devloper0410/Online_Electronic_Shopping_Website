let cart=JSON.parse(localStorage.getItem("cart"))||[];
function addToCart(name,price){
    let product={
        name:name,
        price:price,
        quantity:1
    };
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product Added to Cart")
}
function displayCart(){
    let table=
    document.getElementById("cartTable");
    table.innerHTML="";
    let subtotal=0;
    cart.forEach((item,index)=>{
        let total=item.price*item.quantity;
        subtotal+=total;
        table.innerHTML+=`
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
            <button onclick="decreaseQty(${index})">-</button>
            ${item.quantity}
             <button onclick="increaseQty(${index})">+</button>
            </td>
            <td>${total}</td>
            <td>
            <button onclick="removeItem(${index})">Remove</button>
            </td>
        </tr>
        `;
    });
    let gst=subtotal*0.05;
    let final=subtotal+gst;
    document.getElementById("subtotal").innerText=subtotal;
    document.getElementById("gst").innerText=gst;
    document.getElementById("final").innerText=final;
}

function increaseQty(index){
    cart[index].quantity++;
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}

function decreaseQty(index){
    if(cart[index].quantity>1){
        cart[index].quantity--;
    }
    else{
        cart.splice(index,1)
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}

function printReceipt(){
    window.print();
}

function logout(){
    localStorage.removeItem("username");
    window.location.href="login.html";
}

displayCart();