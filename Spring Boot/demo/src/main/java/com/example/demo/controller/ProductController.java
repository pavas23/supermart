package com.example.demo.controller;


import com.example.demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Product;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @PostMapping("/add")
    public String add(@RequestBody Product product){
        productService.saveProduct(product);
        return "New Product Added";
    }
    @GetMapping("/getAll")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }
    @GetMapping("/getName")
    public String getNameByID(@RequestBody Product product){
        return productService.getProduct(product.getId()).getName();
    }
    @DeleteMapping("/deleteOne")
    public String deleteProduct(@RequestBody Product product){
        productService.deleteProduct(product);
        return "product has been deleted";
    }
    @GetMapping("/getProduct")
    public List<String> getProductDetails(@RequestBody Product product){
        List<String> details = new ArrayList<>();
        details.add(productService.getProduct(product.getId()).getName());
        details.add(Integer.toString(productService.getProduct(product.getId()).getPrice()));
        return details;
    }
    @PostMapping("/update")
    public String updateProductDetails(@RequestBody Product product){
        productService.updateProduct(product);
        return "Product with id " + product.getId() + "is updated";
    }
    @PostMapping("/changePrice")
    public String updatePrice(@RequestBody Product product){
        if(product.getPrice()<0)return "negative price not allowed";
        productService.changePrice(product);
        return "New price is " + product.getPrice();
    }
    @GetMapping("/getbyPrice")
    public List <Product>getbyPrice(@RequestBody Product product) {
        return productService.findByPrice(product.getPrice());
    }
}
