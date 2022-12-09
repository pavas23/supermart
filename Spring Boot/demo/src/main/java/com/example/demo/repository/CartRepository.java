package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;
import com.example.demo.model.History;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{
    @Query(
            value ="SELECT * FROM Cart where CustomerID = :CustomerId",
            nativeQuery= true
            )
    public List<Cart> getbyCustomerID(@Param("CustomerId") int id);
    @Query(
            value ="DELETE FROM cats\r\n WHERE id= :CustomerId",
                    
            nativeQuery= true
            )
    public void deleteByCustomerID(@Param("CustomerId") int id);
}
