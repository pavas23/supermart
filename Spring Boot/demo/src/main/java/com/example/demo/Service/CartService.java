package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Cart;

public interface CartService {
    public List<Cart> getCart(int id);
    public void deleteCart();
    public void setCart(List<Cart> list);
    public void deleteOneItem(Cart cart);
}
