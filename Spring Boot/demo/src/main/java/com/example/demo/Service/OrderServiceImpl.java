package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Order;
import com.example.demo.model.OrderList;
import com.example.demo.repository.OrderRepository;
@Service
public class OrderServiceImpl implements OrderService{
@Autowired
OrderRepository orderRepo; 
    @Override
    public List<OrderList> getAllOrders() {
        // TODO Auto-generated method stub
        return orderRepo.findAll();
    }

    @Override
    public OrderList saveOrder(OrderList order) {
        // TODO Auto-generated method stub
        return orderRepo.save(order);
    }

    
}
