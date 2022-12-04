package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Admin;

public interface AdminService {
    public Admin saveAdmin(Admin admin);
    public List<Admin> getAllAdmins();
    public Admin getAdmin(int id);
    public void deleteAdmin(Admin admin);
    public void updateAdmin(Admin admin);
   
   
}
