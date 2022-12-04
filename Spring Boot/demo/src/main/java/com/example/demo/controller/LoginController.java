package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LoginAuthService;
import com.example.demo.model.Admin;
import com.example.demo.model.Customer;
import com.example.demo.model.Manager;


@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginAuthService loginAuthService;
    @GetMapping("/auth/customer")
    public Customer auth(@RequestBody Customer customer) {
              return loginAuthService.verifyCustomer(customer);
    }
    @GetMapping("/auth/manager")
    public Manager auth(@RequestBody Manager manager) {
              return loginAuthService.verifyManager(manager);
    }
    @GetMapping("/auth/admin")
    public Admin auth(@RequestBody Admin admin) {
              return loginAuthService.verifyAdmin(admin);
    }
    
}
