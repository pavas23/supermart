package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.History;
import com.example.demo.model.Order;
import com.example.demo.model.Product;
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
        for(int i=0;i<historyList.size();i++) {
            History h = historyList.get(i);
            int totalCost=0;
            if(h.express) {
                totalCost+=100;
            }
            if(i<historyList.size()-1) {
            while(historyList.get(i).getDate().equals(historyList.get(i+1).getDate())) {
               
                Order o = new Order();
                o.setCustomerID(id);
                o.setProductID(historyList.get(i).getProductID());
                o.setName(productRepo.findById(historyList.get(i).getProductID()).get().getName());
                o.setPrice(historyList.get(i).getPrice());
                o.setquantity(historyList.get(i).getQuantity());
                o.setExpress(historyList.get(i).express);
                o.setAddress(historyList.get(i).getAddress());
                totalCost+=o.getPrice()*o.getquantity();
                h.productList.add(o);
               if(i==(historyList.size())-2) { i++;break;}
               else {i++;}
            }}
            Order o = new Order();
            o.setCustomerID(id);
            o.setProductID(historyList.get(i).getProductID());
            o.setName(productRepo.findById(historyList.get(i).getProductID()).get().getName());
            o.setAddress(historyList.get(i).getAddress());
            o.setquantity(historyList.get(i).getQuantity());
            o.setPrice(historyList.get(i).getPrice());
            o.setExpress(historyList.get(i).express);
            totalCost+=o.getPrice()*o.getquantity();
            h.productList.add(o);
            h.setTotalCost(totalCost);
            h.setAddress(historyList.get(i).getAddress());
            h.setCustomer(customerRepo.findById(historyList.get(i).getCustomerID()).get());
            historyListNew.add(h);
            
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

    @Override
    public List<History> monthlyReportGenerator(int month) {
        
        return historyRepo.getMonthlyHistory(month);
    }
    
    
    

}
