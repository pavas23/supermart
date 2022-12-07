package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Manager extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private int salary;

public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public int getSalary() {
    return salary;
}
public void setSalary(int salary) {
    this.salary = salary;
}


}
