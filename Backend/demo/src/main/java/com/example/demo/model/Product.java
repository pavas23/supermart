package com.example.demo.model;
import java.util.Date;
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
    private String src;
    private int units_sold;
   // private Date date_added;
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
    public String getSrc() {
        return src;
    }
    public void setSrc(String src) {
        this.src = src;
    }
    public int getUnits_sold() {
        return units_sold;
    }
    public void setUnits_sold(int units_sold) {
        this.units_sold = units_sold;
    }
}
