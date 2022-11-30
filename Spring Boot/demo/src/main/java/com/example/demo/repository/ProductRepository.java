package com.example.demo.repository;


import com.example.demo.model.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    @Query(
        value=    "SELECT * FROM Product WHERE price =:price ",
            nativeQuery = true
            )
    
    public List <Product> findByPrice(@Param("price") int price);
}
