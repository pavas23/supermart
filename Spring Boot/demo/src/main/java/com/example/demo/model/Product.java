package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
    @Id
    // will set the variable below this annotation to primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // generated value will give a unique id for every object
    private int id;
    private int price;
    private int quantity;
    private String name;
    public Product(){
        price = 0;
        quantity = 0;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name =  name;
    }
    public int getPrice(){
        return price;
    }
    public void setPrice(int price){
        this.price = price;
    }
    public int getquantity(){
        return quantity;
    }
    public void setquantity(int quantity){
        this.quantity = quantity;
    }
    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }
}
