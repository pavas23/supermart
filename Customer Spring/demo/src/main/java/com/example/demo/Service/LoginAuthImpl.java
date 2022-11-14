package com.example.demo.Service;

import java.util.List;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginAuthImpl implements LoginAuthService{
    @Autowired
    public CustomerRepository customerRepository;
    @Override
    public Customer verifyCustomer(Customer customer){
        List<Customer> customerList = customerRepository.findAll();
        for(Customer obj: customerList){
            if(customer.getEmail().equals(obj.getEmail())){
                if(customer.getPassword().equals(obj.getPassword())){
                    return customer;
                }
            }
        }
        Customer c = new Customer();
        return c;
    }
}




