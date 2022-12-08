package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.ProductService;
import com.example.demo.model.Product;

@RestController
@RequestMapping("/manager")
@CrossOrigin
public class ManagerController {
    @Autowired
    ProductService productService;
    @PostMapping("/addProduct")
    public String addProduct(@RequestBody Product product) {
        if(product.getquantity()<=0 || product.getPrice()<=0) return "Cant enter negative value";
        productService.saveProduct(product);
        return "Product added";
         }
    @PostMapping("/updateProduct")
    public String updateProduct(@RequestBody Product product) {
        if(product.getquantity()<0 || product.getPrice()<0) return "Cant enter negative value";
            productService.updateProduct(product);
        return "Product with id : " + product.getId()+ " has been updated" ;
    }
    @DeleteMapping("/deleteProduct")
    public String deleteProduct(@RequestBody Product product) {
        try {
            productService.deleteProduct(product);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        
        return "Product with id : " + product.getId()+ " has been updated" ;
    }
    @GetMapping("/getAllProducts")
    public List <Product>getAllProducts() {
        return productService.getAllProducts();
    }
    @GetMapping("/getProduct")
    public Product getProduct(@RequestBody Product product) {
        return productService.getProduct(product.getId());
    }
    
    //using custom SQL query
    @GetMapping("/getbyPrice")
    public List <Product>getbyPrice(@RequestBody Product product) {
        return productService.findByPrice(product.getPrice());
    }
    
}
