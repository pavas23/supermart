package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;

@Entity 
@Inheritance
public class User {
    @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
    private String name ;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    } 
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
}
