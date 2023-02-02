package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.placedOrder;

import com.example.demo.repository.PlacedOrderRepository;
@Service
public class PlacedOrderServiceImpl implements PlacedOrderService{
@Autowired PlacedOrderRepository POrepo;
    @Override
    public List<placedOrder> getCart(int id) {
        // TODO Auto-generated method stub
        return POrepo.getbyCustomerID(id);
    }

    @Override
    public void deleteCart() {
     POrepo.deleteAll();
        
    }

    @Override
    public void setCart(List<placedOrder> list) {
        POrepo.saveAll(list);
        
    }

    @Override
    public void deleteOneItem(placedOrder cart) {  POrepo.deleteById(cart.getId());
    }

}
