import axios from "axios";

const product_API="http://localhost:8080/";

class ProductServices{
    getallProduct(){
        return axios.get(product_API+"details");
    }

    createProduct(Products){
        return axios.post(product_API+"register",Products) ;
    }
    getProductById(productId){
        return axios.get(product_API+"/"+productId);
    }

    updateProduct(productId,Products){
        return axios.put(product_API+productId,Products);
    }
    DeleteProduct(productId){
        return axios.delete(product_API+productId);
    }
}

export default new ProductServices;