import axios from "axios";

const product_API="http://localhost:8080/";
const Client_API="http://localhost:8080/client";
const Invoice_API="http://localhost:8080/invoice"

class ProductServices{

    //Product Connection
    getallProduct(){
        return axios.get(product_API+"details");
    }

    createProduct(Products){
        return axios.post(product_API+"register",Products) ;
    }
    getProductById(productId){
        return axios.get(product_API+productId);
    }

    updateProduct(productId,Products){
        return axios.put(product_API+productId,Products);
    }
    DeleteProduct(productId){
        return axios.delete(product_API+productId);
    }
    //Client Connection
    getallClient(){
        return axios.get(Client_API);
    }

    insertClient(client){
        return axios.post(Client_API+"/insert",client)

    }

    getClientById(clientId){
        return axios.get(Client_API+"/"+clientId);
    }

    updateClient(clientId,client){
        return axios.put(Client_API+"/"+clientId,client);
    }
    DeleteClient(clientId){
        return axios.delete(Client_API+"/"+clientId);
    }

    //Invoice Connection

    getallInvoice(){
        return axios.get(Invoice_API+"details");
    }

    createInvoice(Invoice){
        return axios.post(Invoice_API+"/register",Invoice) ;
    }
    getInvoiceById(InvoiceId){
        return axios.get(Invoice_API+InvoiceId);
    }

    updateInvoice(InvoiceId,Invoice){
        return axios.put(Invoice_API+InvoiceId,Invoice);
    }
    DeleteInvoice(InvoiceId){
        return axios.delete(Invoice_API+InvoiceId);
    }







}

export default new ProductServices;