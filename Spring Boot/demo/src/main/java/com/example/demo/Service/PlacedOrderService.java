package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Cart;
import com.example.demo.model.placedOrder;

public interface PlacedOrderService {
    public List<placedOrder> getCart(int id);
    public void deleteCart();
    public void setCart(List<placedOrder> list);
    public void deleteOneItem(placedOrder cart);
}
