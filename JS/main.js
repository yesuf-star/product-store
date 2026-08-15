   // main
    import {getProducts} from "./api.js";
    import {displayProducts} from "./display.js";
    const cartCount=document.getElementById("cartCount");
    async function startStore() {
      try{
    cartCount.textContent="Loading product...";
    let products=await getProducts();
   //  cartCount.textContent="";
    displayProducts(products);
     cartCount.innerHTML="No. of products: "+products.length;    
    }
    catch(error){
console.error(error)
cartCount.textContent="Failed to load"    
}
   }
   startStore();