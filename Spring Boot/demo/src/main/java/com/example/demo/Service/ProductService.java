package com.example.demo.Service;
import java.util.List;
import com.example.demo.model.Product;


public interface ProductService {

    public Product saveProduct(Product product);

    public List<Product> getAllProducts();

    public Product getProduct(int id);

    public void deleteProduct(Product product);

    public void updateProduct(Product product);

    public void changePrice(Product product);
    
    public List<Product> findByPrice(int price);


}
