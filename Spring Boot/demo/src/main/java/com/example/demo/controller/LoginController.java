package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.LoginAuthService;
import com.example.demo.model.Admin;
import com.example.demo.model.Customer;
import com.example.demo.model.Manager;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginAuthService loginAuthService;
    @PostMapping("/auth/customer")
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

    @PostMapping("/auth/customer/getID")
    public int auth(@RequestBody Map<String,String> authToken){
        return loginAuthService.getCustomerID(authToken);
    }
}
