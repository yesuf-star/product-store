 // api
        export async function getProducts() {
            const url="https://fakestoreapi.com/products";
            const response=await fetch(url);
            if (!response.ok){
                throw new Error (`server network error:${response.status}`);
            }
            let products=await response.json();
            return products;
        }