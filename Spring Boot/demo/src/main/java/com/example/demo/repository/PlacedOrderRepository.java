package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;
import com.example.demo.model.History;
import com.example.demo.model.placedOrder;

@Repository
public interface PlacedOrderRepository extends JpaRepository<placedOrder,Integer>{
    @Query(
            value ="SELECT * FROM placedOrder where CustomerID = :CustomerId",
            nativeQuery= true
            )
    public List<placedOrder> getbyCustomerID(@Param("CustomerId") int id);
    @Query(
            value ="DELETE FROM placedOrder WHERE id= :CustomerId",
                    
            nativeQuery= true
            )
    public void deleteByCustomerID(@Param("CustomerId") int id);
}
