package com.example.demo.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.Customer;
import com.example.demo.model.Manager;

import java.util.Map;

public interface LoginAuthService {
    public Customer verifyCustomer(Customer customer);
    public Manager verifyManager(Manager manager);
    public Admin verifyAdmin(Admin admin);
    public int getCustomerID(Map<String,String> authToken);
}
