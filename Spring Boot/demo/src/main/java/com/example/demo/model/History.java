package com.example.demo.model;


import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.repository.ProductRepository;

@Entity
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int CustomerID;
    @Transient
    private Customer customer;
   
    private int ProductID;
    @Transient
    private Product product;
    @Transient
    public List<Order> productList = new ArrayList<Order>();
    private int quantity;
    private int price;
    private String address; //address it was ordered to.   
    private String date;
    public boolean express;
    private String expected_date;
    private Date dateTime;
   private int totalCost;
    public History(){
        LocalDate ld = LocalDate.now();
        setDate(ld.toString());
      dateTime = Date.valueOf(ld);
       this.setTotalCost(this.getQuantity()*this.getPrice());
       
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getCustomerID() {
        return CustomerID;
    }
    public void setCustomerID(int customerID) {
        CustomerID = customerID;
    }
    public int getProductID() {
        return ProductID;
    }
    public void setProductID(int productID) {
        ProductID = productID;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public Customer getCustomer() {
        return customer;
    }
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getExpected_date() {
        return expected_date;
    }
    public void setExpected_date(String expected_date) {
        this.expected_date = expected_date;
    }
    public int getTotalCost() {
        return totalCost;
    }
    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
}
