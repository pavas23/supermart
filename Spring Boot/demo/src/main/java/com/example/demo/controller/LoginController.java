package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LoginAuthService;
import com.example.demo.model.Customer;


@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginAuthService loginAuthService;
    @GetMapping("/auth")
    public Customer auth(@RequestBody Customer customer) {
              return loginAuthService.verify(customer);
    }
}
