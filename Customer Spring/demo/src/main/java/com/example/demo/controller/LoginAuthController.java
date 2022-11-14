package com.example.demo.controller;

import com.example.demo.Service.CustomerService;
import com.example.demo.Service.LoginAuthService;
import com.example.demo.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/Login")
public class LoginAuthController {
    @Autowired
    private LoginAuthService loginAuthService;
    @PostMapping("/verify")
    public Customer verify(@RequestBody Customer customer) {
        return loginAuthService.verifyCustomer(customer);
    }
}





