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
        return (Product) productRepository.findById(id).get();
    }
    @Override
    public void deleteProduct(Product product){
        productRepository.deleteById(product.getId());
    }
    @Override
    public void updateProduct(Product product){
        // TODO check the != condition as can't assign null to integer returning function
        List<Product> list = this.getAllProducts();
        for(Product obj: list) {
            if(obj.getId()==product.getId()) {
                if(product.getName()!=null) {
                    obj.setName(product.getName());
                }
                if(product.getPrice()!=0) {
                    obj.setPrice(product.getPrice());
                }
                if(product.getquantity()!=0) {
                    obj.setquantity(product.getquantity());
                }
                productRepository.save(obj);
            }
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
                    newProduct.setquantity(obj.getquantity());
                    productRepository.save(newProduct);
                }
            }
        }
    }
    public List<Product> findByPrice(int price) {
        return productRepository.findByPrice(price);
        // TODO Auto-generated method stub
        
    }
}
