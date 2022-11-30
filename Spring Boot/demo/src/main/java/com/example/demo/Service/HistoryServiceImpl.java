package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.History;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.HistoryRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class HistoryServiceImpl implements HistoryService{
    @Autowired
    HistoryRepository historyRepo;
    @Autowired
    ProductRepository productRepo;
    @Autowired
    CustomerRepository customerRepo; 
    @Override
    public void add(History history) {
        historyRepo.save(history);
        
    }

    @Override
    public void addList(List<History> list) {
        for(History obj:list) {
            historyRepo.save(obj);
        }
        
    }

    @Override
    public List<History> getFullHistory() {
       List<History> historyList = historyRepo.findAll();
       List<History> historyListNew=new ArrayList<History>(); 
       for(History obj : historyList) {
           obj.setProduct(productRepo.findById(obj.getProductID()).get());
           obj.setCustomer(customerRepo.findById(obj.getCustomerID()).get());
           historyListNew.add(obj);
       }
        return historyListNew;
    }

    @Override
    public List<History> getCustomerHistory(int id) {
        List<History> historyList = historyRepo.getbyCustomerID(id);
        List<History> historyListNew=new ArrayList<History>(); 
        for(History obj : historyList) {
            obj.setProduct(productRepo.findById(obj.getProductID()).get());
            obj.setCustomer(customerRepo.findById(obj.getCustomerID()).get());
            historyListNew.add(obj);
        }
         return historyListNew;
    }

    @Override
    public List<History> getProductHistory(int id) {
        List<History> historyList = historyRepo.getbyProductID(id);
        List<History> historyListNew=new ArrayList<History>(); 
        for(History obj : historyList) {
            obj.setProduct(productRepo.findById(obj.getProductID()).get());
            obj.setCustomer(customerRepo.findById(obj.getCustomerID()).get());
            historyListNew.add(obj);
        }
         return historyListNew;
            }

}
