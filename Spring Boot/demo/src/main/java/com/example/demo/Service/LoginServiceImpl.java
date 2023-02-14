package com.example.demo.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.Customer;
import com.example.demo.model.Manager;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ManagerRepository;

@Service
public class LoginServiceImpl implements LoginAuthService{
    @Autowired
    CustomerRepository customerRepo;
    @Autowired
    ManagerRepository managerRepo;
    @Autowired
    AdminRepository adminRepo;
    @Autowired
    private JwtUtil jwtUtil;

    CustomerServiceImpl c = new CustomerServiceImpl();
    @Override
    public Customer verifyCustomer(Customer customer){
        List <Customer> list = customerRepo.findAll();
        for(Customer obj:list) {
            if(obj.getEmail().equals(customer.getEmail()) && c.bCryptPasswordEncoder.matches(customer.getPassword(), obj.getPassword())) {
                String token = jwtUtil.generateJwt(obj);
                obj.setAuthToken(token);
                customerRepo.save(obj);
                return obj;
            }
        }
        return new Customer();
    }

    public int getCustomerID(Map<String,String> authTokenMap){
        List <Customer> list = customerRepo.findAll();
        String authToken = authTokenMap.get("authToken");
        System.out.println("at "+authToken);
        for(Customer obj : list){
            System.out.println(obj.getAuthToken());
            if(obj.getAuthToken().equals((authToken))){
                return obj.getId();
            }
        }
        return -1;
    }

    @Override
    public Manager verifyManager(Manager manager) {
        // TODO Auto-generated method stub
        List <Manager> list = managerRepo.findAll();
        for(Manager obj:list) {
            if(obj.getEmail().equals(manager.getEmail()) && c.bCryptPasswordEncoder.matches(manager.getPassword(), obj.getPassword())) {
                return obj;
            }
        }
        return new Manager();
    }

    @Override
    public Admin verifyAdmin(Admin admin) {
        List <Admin> list = adminRepo.findAll();
        for(Admin obj:list) {
            if(obj.getEmail().equals(admin.getEmail()) && c.bCryptPasswordEncoder.matches(admin.getPassword(), obj.getPassword())) {
                return obj;
            }
        }
        return new Admin();
    }
    
    
    
}
