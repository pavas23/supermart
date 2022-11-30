package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class LoginServiceImpl implements LoginAuthService{
    @Autowired
    CustomerRepository customerRepo;
    
    @Override
    public Customer verify(Customer customer) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        List <Customer> list = customerRepo.findAll();
        for(Customer obj:list) {
            if(obj.getEmail().equals(customer.getEmail()) && bCryptPasswordEncoder.matches(customer.getPassword(), obj.getPassword())) {
                return obj;
            }
        }
        return new Customer();
        
    }
    
}
