package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Order;
import com.example.demo.model.OrderList;

public interface OrderService {
    public List<OrderList> getAllOrders();
    public OrderList saveOrder(OrderList order);
}
