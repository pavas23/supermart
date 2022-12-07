package com.example.demo.model;


   


    import javax.persistence.Entity;
    import javax.persistence.GeneratedValue;
    import javax.persistence.GenerationType;
    import javax.persistence.Id;
import javax.persistence.Transient;

   
    public class Order{
        
        private int id;
        private int productID;
        private int customerID;
       
        private int price;
        private int total_cost;
        private String name;
        private boolean express;
        private String address;
        private String date;
        
        private int quantity;
        private String expected_date;
        public Order(){
            price = 0;
           
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
        
       
        public int getProductID() {
            return productID;
        }
        public void setProductID(int productID) {
            this.productID = productID;
        }
        public int getCustomerID() {
            return customerID;
        }
        public void setCustomerID(int customerID) {
            this.customerID = customerID;
        }
        public boolean isExpress() {
            return express;
        }
        public void setExpress(boolean express) {
            this.express = express;
        }
        public String getAddress() {
            return address;
        }
        public void setAddress(String address) {
            this.address = address;
        }
        public int getTotal_cost() {
            return total_cost;
        }
        public void setTotal_cost(int total_cost) {
            this.total_cost = total_cost;
        }
        public String getExpected_date() {
            return expected_date;
        }
        public void setExpected_date(String expected_date) {
            this.expected_date = expected_date;
        }
        public int getquantity() {
            return quantity;
        }
        public void setquantity(int quantity) {
            this.quantity = quantity;
        }
        public String getDate() {
            return date;
        }
        public void setDate(String date) {
            this.date = date;
        }
    }


