package com.example.demo.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
@Entity
public class placedOrder {
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
		private int customerID;
		@Transient
		private List<Product> productList;
		private boolean express;
		private int totalCost;
		private String address;
		public int getCustomerID() {
			return customerID;
		}
		public void setCustomerID(int customerID) {
			this.customerID = customerID;
		}
		public List<Product> getProductList() {
			return productList;
		}
		public void setProductList(List<Product> productList) {
			this.productList = productList;
		}
		public boolean isExpress() {
			return express;
		}
		public void setExpress(boolean express) {
			this.express = express;
		}
		public int getTotalCost() {
			return totalCost;
		}
		public void setTotalCost(int totalCost) {
			this.totalCost = totalCost;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
}
