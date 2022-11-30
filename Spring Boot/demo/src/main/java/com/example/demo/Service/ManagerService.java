package com.example.demo.Service;

import java.util.List;


import com.example.demo.model.Manager;

public interface ManagerService {
    public Manager saveManager(Manager Manager);
    public List<Manager> getAllManagers();
    public Manager getManager(int id);
    public void deleteManager(Manager Manager);
    public void updateManager(Manager Manager);
}
