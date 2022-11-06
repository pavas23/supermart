package com.example.demo.Service;

import java.util.List;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    public ProductRepository productRepository;
    @Override
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }
    @Override
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    @Override
    public Product getProduct(int id) {
        return productRepository.getReferenceById(id);
    }
    @Override
    public void deleteProduct(Product product){
        int id = -1;
        List<Product> products = this.getAllProducts();
        for(Product obj: products){
            if(product.getId() == obj.getId()){
                id = obj.getId();
                if(id>0){
                    productRepository.deleteById(id);
                }
            }
        }
    }
    @Override
    public void updateProduct(Product product){
        // TODO check the != condition as can't assign null to int returning function
        if(product.getName() != null || product.getPrice() != -1){
            productRepository.save(product);
        }
        else{
            return;
        }
    }
    @Override
    public void changePrice(Product product){
        int id = -1;
        List<Product> products = this.getAllProducts();
        for(Product obj: products){
            if(product.getId() == obj.getId()){
                id = obj.getId();
                if(id>0){
                    Product newProduct = new Product();
                    newProduct.setPrice(product.getPrice());
                    newProduct.setName(obj.getName());
                    newProduct.setId(id);
                    newProduct.setAvailable_qyt(obj.getAvailable_qyt());
                    productRepository.save(newProduct);
                }
            }
        }
    }
}
