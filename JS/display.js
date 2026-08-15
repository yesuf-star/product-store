 // display
        export function displayProducts(products){
            let container=document.getElementById("products");
            container.innerHTML="";
            container.innerHTML=products.map((product)=>{
              return  `<div class="product">
                    <img src="${product.image}">
                    <h3>${product.title}</h3>
                    <p>${product.price}</p>
                    <button>Add to cart</button>
                    </div>
                    `
            }).join(" ");
        }