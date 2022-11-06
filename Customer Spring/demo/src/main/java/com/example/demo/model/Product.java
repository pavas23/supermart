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
    private double available_qyt;
    private String name;
    public Product(){
        price = 0;
        available_qyt = 1;
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
    public double getAvailable_qyt(){
        return available_qyt;
    }
    public void setAvailable_qyt(double available_qyt){
        this.available_qyt = available_qyt;
    }
    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }
}
