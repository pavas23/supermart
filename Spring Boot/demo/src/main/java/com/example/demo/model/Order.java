package com.example.demo.model;


   


    import javax.persistence.Entity;
    import javax.persistence.GeneratedValue;
    import javax.persistence.GenerationType;
    import javax.persistence.Id;

    
    public class Order {
        private int productID;
        private int customerID;
        private int price;
        private int quantity;
        private String name;
        private boolean express;
        private String address;
        public Order(){
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
    }


