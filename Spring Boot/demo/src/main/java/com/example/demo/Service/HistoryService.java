package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.History;

public interface HistoryService {
    public void add(History history);
    public void addList(List<History> list);
    public List<History> getFullHistory(); 
    public List<History> getCustomerHistory(int id);
    public List<History> getProductHistory(int id);
    public List<History> monthlyReportGenerator(int month);
}
