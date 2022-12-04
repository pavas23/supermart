package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepo;
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    
    @Override
    public Admin saveAdmin(Admin admin) {
        
        admin.setPassword(bCryptPasswordEncoder.encode(admin.getPassword()));
        return adminRepo.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        // TODO Auto-generated method stub
        return adminRepo.findAll();
    }

    @Override
    public Admin getAdmin(int id) {
        // TODO Auto-generated method stub
        return adminRepo.findById(id).get();
    }

    @Override
    public void deleteAdmin(Admin admin) {
        // TODO delete using ID
        adminRepo.deleteById(admin.getId());
        
    }

    @Override
    public void updateAdmin(Admin admin) {
        // TODO update any field
       Admin updatedAdmin = adminRepo.findById(admin.getId()).get();
       if(admin.getName()!=null) {
           updatedAdmin.setName(admin.getName());
       }
       if(admin.getEmail()!=null) {
           updatedAdmin.setEmail(admin.getEmail());
       }
       if(admin.getPassword()!=null) {
           updatedAdmin.setPassword(admin.getPassword());
       }
       if(admin.getAddress()!=null) {
           updatedAdmin.setAddress(admin.getAddress());
           
       }
       if(admin.getMobileNumber()!=null) {
           updatedAdmin.setMobileNumber(admin.getMobileNumber());
       }
       adminRepo.save(updatedAdmin);
        
    }

   

}
