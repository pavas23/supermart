package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.CustomerService;
import com.example.demo.Service.HistoryService;
import com.example.demo.Service.ManagerService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.ProductService;
import com.example.demo.model.Customer;
import com.example.demo.model.History;
import com.example.demo.model.Manager;
import com.example.demo.model.Order;
import com.example.demo.model.OrderList;
import com.example.demo.model.Product;
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    ProductService productService;
    @Autowired
    ManagerService managerService;
    @Autowired
    CustomerService customerService;
    @Autowired
    HistoryService historyService;
    @Autowired
    OrderService orderService;
    
    @GetMapping("/allCustomers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();   
        
    }
    
    @DeleteMapping("/deleteCustomer")
    public String deleteCustomer(@RequestBody Customer customer) {
        
        customerService.deleteById(customer);
        return "Customer has been deleted";
    }
    
    @GetMapping("/getCustomer")
    public Customer getCustomer(@RequestBody Customer customer) {
        return customerService.getCustomer(customer.getId());
    }
    
    @GetMapping("/CustomerHistory")
    public List<History> getCustomerHistory(@RequestBody Customer customer){
        return historyService.getCustomerHistory(customer.getId());
    }
    
    @PostMapping("/addManager")
    public String addManager(@RequestBody Manager manager) {
        
        Manager m = managerService.saveManager(manager);
        if(m.getName()==null) {
            return "Invalid Email";
        }
        else {
            return "New manager added";
        }
    }
    @GetMapping("/allManagers")
    public List<Manager> getAllManagers(){
        return managerService.getAllManagers(); }
    @GetMapping("/getManager")
    public Manager getCustomerManager(@RequestBody Manager manager) {
        return managerService.getManager(manager.getId());
    }
    @PostMapping("/updateManager")
    public void updateManager(@RequestBody Manager manager) {
        managerService.updateManager(manager);
    }
    @GetMapping("/allProducts")
    public List<Product> getAllCProducts(){
        return productService.getAllProducts();   
        
    }
    @DeleteMapping("/deleteManager")
    public void deleteManager(@RequestBody Manager manager) {
        managerService.deleteManager(manager);
    }
    
    @DeleteMapping("/deleteProduct")
    public String deleteProduct(@RequestBody Product product) {
        
        productService.deleteProduct(product);
        return "Product has been deleted";
    }
    
    @GetMapping("/getProduct")
    public Product getProduct(@RequestBody Product product) {
        return productService.getProduct(product.getId());}
    
    @PostMapping("/updateProduct")
    public void updateProduct(@RequestBody Product product) {
        productService.updateProduct(product);
    }
    @GetMapping("/monthlyReport")
    public List<History> getMonthlyReport(@RequestBody Integer month){
        return historyService.monthlyReportGenerator(month);
    }
    @GetMapping("/totalRevenue")
    public int totalRevenue() {
        int revenue=0;
        List<History> history = historyService.getFullHistory();
        for(History obj : history) {
            revenue += obj.getTotalCost();
        }
        return revenue;
    }
    @GetMapping("/monthlyRevenue")
    public int monthlyRevenue(@RequestBody Integer month) {
        int revenue=0;
        List<History> history = historyService.monthlyReportGenerator(month);
        for(History obj : history) {
            revenue += obj.getTotalCost();
        }
        return revenue;
    }
    @GetMapping("/orders")
    public List<OrderList> getOrders(){
        return orderService.getAllOrders();
    }
}
