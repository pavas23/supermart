package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;
@Service
public class CartServiceImpl implements CartService{
@Autowired CartRepository cartRepo;
    @Override
    public List<Cart> getCart(int id) {
        // TODO Auto-generated method stub
        return cartRepo.getbyCustomerID(id);
    }

    @Override
    public void deleteCart() {
     cartRepo.deleteAll();
        
    }

    @Override
    public void setCart(List<Cart> list) {
        cartRepo.saveAll(list);
        
    }

    @Override
    public void deleteOneItem(Cart cart) {  cartRepo.deleteById(cart.getId());
    }

}
